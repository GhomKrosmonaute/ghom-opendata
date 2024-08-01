import { Table } from "@ghom/orm"

export interface Pokemon {
  id: number
  firstTypeId: number
  secondTypeId: number | null
  catchRate: number
  baseFriendship: number
  baseExperience: number
  growthRate: string
  eggCycle: number
  baseHp: number
  baseAttack: number
  baseDefense: number
  baseSpecialAttack: number
  baseSpecialDefense: number
  baseSpeed: number
}

export default new Table<Pokemon>({
  name: "pokemon",
  description: "Represent a pokemon",
  priority: 1,
  setup: (table) => {},
})
