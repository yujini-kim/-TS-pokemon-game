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
