export interface PokemonBasicInfo {
  name: string
  url: string
}

export interface TranslatedName {
  language: {
    name: string
    url: string
  }
  name: string
}

export interface TypeSlot {
  slot: number
  type: {
    name: string
    url: string
  }
}

export interface PokemonDetails {
  koreaName: string
  koreaTypeName: (string | undefined)[]
  pokemonImg: string
  pokemonID: number
  HP: number
  attack: number
  defense: number
  specialAttack: number
  specialDefense: number
  speed: number
  flavorText: string
}

export interface fetchPokemonList {
  data: PokemonDetails[]
  nextOffset: number | undefined
  isLast: boolean
}

export interface PokemonListApiResponse {
  count: number
  next: string | null
  previous: string | null
  results: PokemonBasicInfo[]
}
export interface Stat {
  base_stat: number
  stat: {
    name: string
  }
}

export interface flavorText {
  flavor_text: string
  language: {
    name: string
  }
}
