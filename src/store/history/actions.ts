import { StationHistory } from "../../types";
import {
  HistoryChangedAction,
  HISTORY_CHANGED,
  LoadHistoryAction,
  LOAD_HISTORY,
} from "./types";

export function historyChanged(value: StationHistory): HistoryChangedAction {
  return {
    type: HISTORY_CHANGED,
    value,
  };
}

export function loadHistory(): LoadHistoryAction {
  return {
    type: LOAD_HISTORY,
  };
}
