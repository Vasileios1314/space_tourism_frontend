import { apiUrl } from "../../config/constants";
import axios from "axios";

export const fetchTechnology = (technology) => ({
  type: "FETCH_TECHNOLOGY",
  payload: technology,
});

export const setTechnology = () => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(`${apiUrl}/technology`);
      dispatch(fetchTechnology(response.data));
      console.log("resp", response.data);
    } catch (err) {
      console.log(err.message);
    }
  };
};
