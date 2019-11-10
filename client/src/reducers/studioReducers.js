import { FETCH_STUDIO, FETCH_FEAT_STUDIOTYPES } from "../actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_STUDIO:
      return action.payload || false;
    case FETCH_FEAT_STUDIOTYPES:
      return action.payload || false;
    default:
      return state;
  }
}
