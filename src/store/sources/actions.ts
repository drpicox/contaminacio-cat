import {
  ContaminantChangedAction,
  CONTAMINANT_CHANGED,
  EstacioChangedAction,
  ESTACIO_CHANGED,
} from "./types";

export function estacioChanged(value: string): EstacioChangedAction {
  return {
    type: ESTACIO_CHANGED,
    value,
  };
}

export function contaminantChanged(value: string): ContaminantChangedAction {
  return {
    type: CONTAMINANT_CHANGED,
    value,
  };
}
