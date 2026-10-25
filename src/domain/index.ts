export type DiceType = "d2" | "d4" | "d6" | "d8" | "d10" | "d12" | "d20" | "1-100" | "0-99";

export type DiceDescription = {
  id: DiceType;
  min: number;
  max: number;
  sort: "asc" | "desc";
}
