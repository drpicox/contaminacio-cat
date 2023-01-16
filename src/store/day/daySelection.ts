import { createSlice } from "@reduxjs/toolkit";

function textDate(date: Date) {
  // ex returns "2023-01-15T00:00:00.000"
  return date.toISOString().slice(0, 10);
}

export function selectCurrentDay(state: any) {
  return state.daySelection;
}

const YESTERDAY: Date = new Date();
YESTERDAY.setDate(YESTERDAY.getDate() - 1);

const daySelectionSlice = createSlice({
  name: "daySelection",
  initialState: textDate(YESTERDAY),
  reducers: {
    goDayBefore: (state) => {
      const date = new Date(state);
      date.setDate(date.getDate() - 1);
      return textDate(date);
    },
    goDayAfter: (state) => {
      const date = new Date(state);
      date.setDate(date.getDate() + 1);
      return textDate(date);
    },
    goYesterday: () => textDate(YESTERDAY),
  },
});

export const { goDayBefore, goDayAfter, goYesterday } =
  daySelectionSlice.actions;

export default daySelectionSlice.reducer;
