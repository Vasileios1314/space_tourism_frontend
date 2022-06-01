import { combineReducers } from "redux";
import crewReducer from "./crew/reducer";
import destinationReducer from "./destination/reducer";
import technology from "./technology/reducer";

export default combineReducers({
  crew: crewReducer,
  destination: destinationReducer,
  technology,
});
