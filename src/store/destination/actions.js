import { apiUrl } from "../../config/constants";
import axios from "axios";

export const fetchDestinations = (destination) => ({
  type: "FETCH_DESTINATION",
  payload: destination,
});

export const setDestination = () => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(`${apiUrl}/destination`);
      dispatch(fetchDestinations(response.data));
      console.log("resp", response.data);
    } catch (err) {
      console.log(err.message);
    }
  };
};
