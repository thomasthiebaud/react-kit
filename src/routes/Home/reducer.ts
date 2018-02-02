const initialState = {
  greetings: 'World',
  isFetching: false,
};

export default function reducer (state: any = initialState, action: any) {
  switch (action.type) {
    case 'GET_GREETINGS_REQUESTED':
      return Object.assign({}, state, { isFetching: true, greetings: undefined })
    case 'GET_GREETINGS_SUCCEEDED':
      return Object.assign({}, state, { greetings: action.greetings, isFetching: false })
    default:
      return state;
  }
}
