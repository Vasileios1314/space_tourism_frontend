const initialState = {
  destination: [],
};

export default function destinationReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_DESTINATION":
      return { ...state, ...action.payload };
    default:
      return state;
  }
}
