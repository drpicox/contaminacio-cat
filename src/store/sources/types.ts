export interface SourcesState {
  estacio: string;
  contaminant: string;
}

export const ESTACIO_CHANGED = "sources/ESTACIO_CHANGED";
export interface EstacioChangedAction {
  type: typeof ESTACIO_CHANGED;
  value: string;
}

export const CONTAMINANT_CHANGED = "sources/CONTAMINANT_CHANGED";
export interface ContaminantChangedAction {
  type: typeof CONTAMINANT_CHANGED;
  value: string;
}

export type SourcesActionTypes =
  | EstacioChangedAction
  | ContaminantChangedAction;
