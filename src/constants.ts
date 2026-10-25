import type { DiceDescription, DiceType } from "./domain";

export const DEFAULT_DICE_COUNT = 5;

export const DEFAULT_DICE_TYPE: DiceType = "d6";

export const diceDescriptions: DiceDescription[] = [
  {
    id: "d2",
    min: 1,
    max: 2,
    sort: "desc"
  },
  {
    id: "d4",
    min: 1,
    max: 4,
    sort: "desc"
  },
  {
    id: "d6",
    min: 1,
    max: 6,
    sort: "desc"
  },
  {
    id: "d8",
    min: 1,
    max: 8,
    sort: "desc"
  },
  {
    id: "d10",
    min: 1,
    max: 10,
    sort: "desc"
  },
  {
    id: "d12",
    min: 1,
    max: 12,
    sort: "desc"
  },
  {
    id: "d20",
    min: 1,
    max: 20,
    sort: "desc"
  },
  {
    id: "1-100",
    min: 1,
    max: 100,
    sort: "asc"
  },
  {
    id: "0-99",
    min: 0,
    max: 99,
    sort: "asc"
  },
]
