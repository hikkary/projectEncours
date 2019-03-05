import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../actions/counter'

const initialState = {
  fakeCount: 10,
  countG: 0,
  countS: 0
}

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return { ...state, [action.payload]: state[action.payload] + 1 }
    case DECREMENT_COUNTER:
      return { ...state, [action.payload]: state[action.payload] - 1 }
    default:
      return state
  }
}
