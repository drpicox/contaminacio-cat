import { RootState } from "..";
import { SourcesState } from "./types";

export function getSources(state: RootState): SourcesState {
  return state.sources;
}
