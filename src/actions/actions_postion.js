import { TOGGLE_SHOW, TOGGLE_REQUIRE } from "../constants/actionTypes/position";

export function toggleShow() {
    return {
      type: TOGGLE_SHOW,
    };
  }
export function toggleRequire() {
  return{
    type: TOGGLE_REQUIRE,
  };
}