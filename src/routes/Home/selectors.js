import { createSelector } from 'reselect'

export const getGreetings = state => state.home.greetings

export const computeGreetings = createSelector(
  getGreetings,
  greetings => `${greetings} !!!`
)

export default getGreetings
