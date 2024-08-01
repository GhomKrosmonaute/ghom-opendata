import { Table } from "@ghom/orm"

export enum EvolutionType {
  LEVEL = "LEVEL",
  ITEM = "ITEM",
  MOVE = "MOVE",
  TRADE = "TRADE",
  FRIENDSHIP = "FRIENDSHIP",
  LOCATION = "LOCATION",
}

export interface Evolution {
  fromPokemonId: number
  toPokemonId: number
  type: EvolutionType
  generationId: number
}

export default new Table<Evolution>({
  name: "pokemon",
  description: "Represent a pokemon",
  setup: (table) => {},
})
