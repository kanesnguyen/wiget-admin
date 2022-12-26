
import { combineReducers } from "redux";
import PositionsReducer from "./reducer_position";
import AppearanceReducer from "./reducer_appearance";
import TextReducer from "./reducer_text";
  
const rootReducer = combineReducers({
  position: PositionsReducer,
  appearance: AppearanceReducer,
  text: TextReducer,
});
export default rootReducer;