import { apiUrl } from "../../config/constants";
import axios from "axios";

export const fetchDestinationsById = (destination) => ({
  type: "FETCH_DESTINATION",
  payload: destination,
});

export const destinationById = () => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(`${apiUrl}/destination`);
      dispatch(fetchDestinationsById(response.data));
      console.log("resp", response);
    } catch (err) {
      console.log(err.message);
    }
  };
};
