const initialState = {
  technology: [],
};

export default function technologyReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_TECHNOLOGY":
      return { ...state, technology: [...action.payload] };
    default:
      return state;
  }
}
