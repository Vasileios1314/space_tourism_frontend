const initialState = {
  crew: [],
};

export default function crewReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_CREW":
      return { ...state, crew: [...action.payload] };
    default:
      return state;
  }
}
