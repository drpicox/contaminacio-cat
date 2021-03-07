import { createStore, combineReducers, applyMiddleware } from "redux";

import { composeWithDevTools } from "redux-devtools-extension";
import { filtersReducer } from "./filters/reducers";
import { historyMiddleware } from "./history/middleware";
import { historyReducer } from "./history/reducers";
import { sourcesReducer } from "./sources/reducers";

export const rootReducer = combineReducers({
  filters: filtersReducer,
  history: historyReducer,
  sources: sourcesReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(historyMiddleware))
);

export type RootState = ReturnType<typeof rootReducer>;
