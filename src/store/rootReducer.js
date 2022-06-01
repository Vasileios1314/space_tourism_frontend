import { combineReducers } from "redux";
import crewReducer from "./crew/reducer";
import destinationReducer from "./destination/reducer";
import technologyReducer from "./technology/reducer";

export default combineReducers({
  crew: crewReducer,
  destination: destinationReducer,
  technology: technologyReducer,
});
