import { TOGGLE_SHOW, TOGGLE_REQUIRE } from "../constants/actionTypes/position";

export function toggleShow(value) {
    return {
      type: TOGGLE_SHOW,
      payload: value,
    };
  }
export function toggleRequire(value) {
  return{
    type: TOGGLE_REQUIRE,
    payload: value,
  };
}