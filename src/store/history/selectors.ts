import { RootState } from "..";
import { HistoryState } from "./types";

export function getHistory(state: RootState): HistoryState {
  return state.history;
}
