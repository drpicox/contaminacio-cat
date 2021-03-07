import { Middleware } from "redux";
import { RootState } from "..";
import { loadHistory } from "../../service/loadHistory";
import { getSources } from "../sources/selectors";
import {
  CONTAMINANT_CHANGED,
  ESTACIO_CHANGED,
  SourcesActionTypes,
} from "../sources/types";
import {
  historyChanged,
  loadHistory as createLoadHistoryAction,
} from "./actions";
import { HistoryActionTypes, LOAD_HISTORY } from "./types";

export const historyMiddleware: Middleware<{}, RootState> = (store) => (
  next
) => async (action: SourcesActionTypes | HistoryActionTypes) => {
  next(action);

  switch (action.type) {
    case ESTACIO_CHANGED:
    case CONTAMINANT_CHANGED: {
      store.dispatch(createLoadHistoryAction());
      break;
    }
    case LOAD_HISTORY: {
      const { estacio, contaminant } = getSources(store.getState());
      const history = await loadHistory(estacio, contaminant);
      store.dispatch(historyChanged(history));
      break;
    }

    default:
    // nothing to do
  }
};
