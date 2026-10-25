import { action, computed, makeObservable, observable } from "mobx";

import { DEFAULT_DICE_COUNT, DEFAULT_DICE_TYPE, diceDescriptions } from "../constants";
import type { DiceType } from "../domain";
import { rollDice } from "../utils/rollDice";

export class DiceStore {

  _diceCount: number = DEFAULT_DICE_COUNT;
  _diceType: DiceType = DEFAULT_DICE_TYPE;
  _rollResult: number[] = [];

  constructor(
  ) {
    makeObservable(this, {
      _diceCount: observable,
      _diceType: observable,
      _rollResult: observable,
      diceDescription: computed,
      setDiceCount: action,
      setDiceType: action,
      roll: action,
      clear: action,
    });
  }

  get diceCount() {
    return this._diceCount;
  }

  get diceType() {
    return this._diceType;
  }

  get rollResult() {
    return this._rollResult;
  }

  get diceDescription() {
    return diceDescriptions.find(el => el.id === this._diceType)!;
  }

  setDiceCount(diceCount: number | null) {
    if (diceCount === null) {
      diceCount = DEFAULT_DICE_COUNT;
    }
    if (diceCount < 0) {
      diceCount = 1;
    }
    this._diceCount = diceCount;
  }

  setDiceType(diceType: DiceType) {
    this._diceType = diceType;
  }

  roll() {
    this._rollResult = [];
    for (let i = 0; i < this._diceCount; i++) {
      this._rollResult.push(rollDice(this.diceDescription))
    }
    this._rollResult.sort(this.diceDescription.sort === "asc" ? (a, b) => a - b : (a, b) => b - a)
  }

  clear() {
    this._rollResult = [];
  }
}


export const diceStore = new DiceStore();
