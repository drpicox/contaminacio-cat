import { StationHistory } from "../../types";

export type HistoryState = StationHistory;

export const HISTORY_CHANGED = "history/HISTORY_CHANGED";
export interface HistoryChangedAction {
  type: typeof HISTORY_CHANGED;
  value: StationHistory;
}
export const LOAD_HISTORY = "history/LOAD_HISTORY";
export interface LoadHistoryAction {
  type: typeof LOAD_HISTORY;
}

export type HistoryActionTypes = HistoryChangedAction | LoadHistoryAction;
