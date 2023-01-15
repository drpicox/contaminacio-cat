import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import { filtersReducer } from "./filters/reducers";
import { historyMiddleware } from "./history/middleware";
import { historyReducer } from "./history/reducers";
import { sourcesReducer } from "./sources/reducers";
import daySelectionReducer from "./day/daySelection";
import closeStationsReducer from "./day/closeStations";

export const rootReducer = combineReducers({
  filters: filtersReducer,
  history: historyReducer,
  sources: sourcesReducer,
  daySelection: daySelectionReducer,
  closeStations: closeStationsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(historyMiddleware),
});

export type RootState = ReturnType<typeof rootReducer>;
