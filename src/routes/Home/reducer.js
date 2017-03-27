const initialState = {
  greetings: 'World',
}

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_GREETINGS':
      return Object.assign({}, state, { greetings: action.greetings })
    default:
      return state
  }
}
