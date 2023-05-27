import { createSelector, createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";
import { StationHistory } from "../../types";
import { loadHistory } from "../../service/loadHistory";
import { selectCurrentDay } from "./daySelection";

export const CLOSE_STATIONS = [
  // "Tarragona (Parc de la Ciutat)",
  // "Gavà",
  // "Igualada",
  // "Martorell",
  // "El Prat de Llobregat (Jardins de la Pau)",
  // "Barcelona (Palau Reial)",
  // "Barcelona (Parc Vall Hebron)",
  // "Barcelona (Observatori Fabra)",
  // "Barcelona (Sants)",
  // "Barcelona (Ciutadella)",
  "Barcelona (Poblenou)",
  // "Barcelona (Eixample)",
  // "Barcelona (Gràcia - Sant Gervasi)",
  // "Sant Adrià de Besòs",
  // "Badalona",
  "Santa Coloma de Gramenet",
  // "Mataró",
  // "Barberà del Vallès",
  // "Sabadell",
  // "Terrassa",
  // "Montcada i Reixac",
  // "Rubí",
  // "Mollet del Vallès",
  // "Granollers",
  // "Tona (Zona Esportiva)",
  // "Sant Celoni",
  // "Manlleu",
  // "Fornells de la Selva (escola municipal)",
  // "Girona (Escola de Música)",
];

export function selectCloseStations(state: RootState) {
  const size = selectCloseHistories(state).length;
  return CLOSE_STATIONS.slice(0, size);
}

export function selectCloseHistories(state: RootState) {
  return state.closeStations;
}

export const selectCurrentDayPoints = createSelector(
  selectCloseHistories,
  selectCurrentDay,
  (histories, day) =>
    histories.map((h) => h.find((p) => p.data.startsWith(day)))
);

export const closeStationsSlice = createSlice({
  name: "closeStations",
  initialState: [] as StationHistory[],
  reducers: {
    addCloseStation: (state, action) => {
      state[action.payload.index] = action.payload.history;
    },
  },
});

export const { addCloseStation } = closeStationsSlice.actions;
export function fetchCloseStations() {
  return async (dispatch: any, getState: any) => {
    async function fetchNext() {
      const closeHistories = selectCloseHistories(getState());
      const index = closeHistories.length;
      if (index >= CLOSE_STATIONS.length) return;

      const station = CLOSE_STATIONS[index];
      const history = await loadHistory(station, "NO2");
      dispatch(addCloseStation({ index, history }));

      setTimeout(fetchNext, history.cached ? 100 : 1000 + 2000 * Math.random());
      // fetch(`https://api.bsmsa.eu/ext/api/bsm/gbfs/v2/en/station_status/${station}`)
    }
    setTimeout(fetchNext, 1000);
  };
}

export default closeStationsSlice.reducer;
