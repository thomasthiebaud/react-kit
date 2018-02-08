const initialState = {
  isFetching: false,
  greetings: null,
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_GREETINGS_REQUESTED':
      return {
        ...state,
        isFetching: true,
        greetings: null,
      }
    case 'GET_GREETINGS_SUCCEEDED':
      return {
        ...state,
        greetings: action.greetings,
        isFetching: false,
      }
    default:
      return state
  }
}
