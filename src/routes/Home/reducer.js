const initialState = {
  isFetching: false,
  greetings: 'World',
}

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case 'GET_GREETINGS_REQUESTED':
      return Object.assign({}, state, { isFetching: true, greetings: undefined })
    case 'GET_GREETINGS_SUCCEEDED':
      return Object.assign({}, state, { greetings: action.greetings, isFetching: false })
    default:
      return state
  }
}
