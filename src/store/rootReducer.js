import { combineReducers } from "redux";
import crew from "./crew/reducer";
import destinationReducer from "./destination/reducer";
import technology from "./technology/reducer";

export default combineReducers({
  crew,
  destination: destinationReducer,
  technology,
});
