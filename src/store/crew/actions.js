import { apiUrl } from "../../config/constants";
import axios from "axios";

export const fetchCrew = (crew) => ({
  type: "FETCH_CREW",
  payload: crew,
});

export const setCrew = () => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(`${apiUrl}/crew`);
      dispatch(fetchCrew(response.data));
      console.log("resp", response.data);
    } catch (err) {
      console.log(err.message);
    }
  };
};
