import { Table } from "@ghom/orm"

export interface PokemonName {
  name: string
  languageId: number
  pokemonId: number
}

export default new Table<PokemonName>({
  name: "pokemon",
  description: "Represent the name of a pokemon",
  setup: (table) => {
    table.string("name").notNullable()
    table.integer("languageId").notNullable()
    table.integer("pokemonId").notNullable()
  },
})
