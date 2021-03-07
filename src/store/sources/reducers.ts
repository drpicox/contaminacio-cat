import {
  CONTAMINANT_CHANGED,
  ESTACIO_CHANGED,
  SourcesActionTypes,
  SourcesState,
} from "./types";

const initialState: SourcesState = {
  contaminant: "NO2",
  // contaminant: "PM10",
  estacio: "Barcelona (Poblenou)",
};

export function sourcesReducer(
  state = initialState,
  action: SourcesActionTypes
) {
  switch (action.type) {
    case CONTAMINANT_CHANGED:
      return { ...state, contaminant: action.value };
    case ESTACIO_CHANGED:
      return { ...state, estacio: action.value };
    default:
      return state;
  }
}
