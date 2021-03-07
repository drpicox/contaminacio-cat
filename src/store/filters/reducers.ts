import {
  FilterActionTypes,
  FiltersState,
  WEEKDAY_TOGGLED,
  YEAR_TOGGLED,
} from "./types";

const initialState: FiltersState = {
  weekdays: new Array<boolean>(8).fill(true),
  years: new Array<boolean>(12).fill(true),
};

export function filtersReducer(
  state = initialState,
  action: FilterActionTypes
) {
  switch (action.type) {
    case WEEKDAY_TOGGLED:
      return {
        ...state,
        weekdays: state.weekdays.map((active, index) =>
          index === action.value ? !active : active
        ),
      };

    case YEAR_TOGGLED:
      return {
        ...state,
        years: state.years.map((active, index) =>
          index === action.value ? !active : active
        ),
      };
    default:
      return state;
  }
}
