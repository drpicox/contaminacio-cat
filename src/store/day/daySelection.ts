import { createSlice } from "@reduxjs/toolkit";

function textDate(date: Date) {
  // ex returns "2023-01-15T00:00:00.000"
  return date.toISOString().slice(0, 10);
}

export function selectCurrentDay(state: any) {
  return state.daySelection;
}

const daySelectionSlice = createSlice({
  name: "daySelection",
  initialState: textDate(new Date()),
  reducers: {
    selectDayBefore: (state) => {
      const date = new Date(state);
      date.setDate(date.getDate() - 1);
      return textDate(date);
    },
    selectDayAfter: (state) => {
      const date = new Date(state);
      date.setDate(date.getDate() + 1);
      return textDate(date);
    },
    selectToday: () => textDate(new Date()),
  },
});

export const { selectDayBefore, selectDayAfter, selectToday } =
  daySelectionSlice.actions;

export default daySelectionSlice.reducer;
