import { HISTORY_CHANGED, HistoryActionTypes, HistoryState } from "./types";

const initialState: HistoryState = [];

export function historyReducer(
  state = initialState,
  action: HistoryActionTypes
) {
  switch (action.type) {
    case HISTORY_CHANGED:
      return action.value;
    default:
      return state;
  }
}
