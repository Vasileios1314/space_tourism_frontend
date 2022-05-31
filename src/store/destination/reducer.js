const initialState = {
  destination: [],
};

export default function destinationReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_DESTINATION":
      return { ...state, destination: [...action.payload] };
    default:
      return state;
  }
}
