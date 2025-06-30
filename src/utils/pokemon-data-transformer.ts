import type {
  flavorText,
  PokemonDetails,
  PokemonListApiResponse,
  Stat,
  TranslatedName,
  TypeSlot,
} from '../types/pokemon'

async function getStatValue(stats: Stat[], name: string) {
  return stats.find((stat) => stat.stat.name === name)?.base_stat || 0
}

async function getKoreanName(names: TranslatedName[]) {
  return names.find((item) => item.language.name === 'ko')?.name
}
async function getKoreanFlavorText(flavorTexts: flavorText[]): Promise<string> {
  return (
    flavorTexts.find((item) => item.language.name === 'ko')?.flavor_text ||
    'No flavor text available in Korean.'
  )
}
async function getKoreanTypes(types: TypeSlot[]) {
  return Promise.all(
    types.map(async (type) => {
      const res = await fetch(type.type.url)
      const json = await res.json()
      return getKoreanName(json.names)
    }),
  )
}

export async function transformPokemonDetails(
  fetchBasicData: PokemonListApiResponse,
): Promise<PokemonDetails[]> {
  return Promise.all(
    fetchBasicData.results.map(async (pokemon) => {
      const details = await fetch(pokemon.url).then((res) => res.json())
      const species = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${details.id}`).then(
        (res) => res.json(),
      )
      return {
        koreaName: (await getKoreanName(species.names)) || pokemon.name,
        pokemonID: species.id,
        koreaTypeName: await getKoreanTypes(details.types),
        pokemonImg: details.sprites.other['official-artwork'].front_default,
        HP: await getStatValue(details.stats, 'hp'),
        attack: await getStatValue(details.stats, 'attack'),
        defense: await getStatValue(details.stats, 'defense'),
        specialAttack: await getStatValue(details.stats, 'special-attack'),
        specialDefense: await getStatValue(details.stats, 'special-defense'),
        speed: await getStatValue(details.stats, 'speed'),
        flavorText: await getKoreanFlavorText(species.flavor_text_entries),
      }
    }),
  )
}
