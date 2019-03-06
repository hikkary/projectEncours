import reducer from '../counter'

import { incrementCounter } from '../../actions/counter'

const initialState = {
  countG: 0,
  countS: 0
}

it('should initiate the state', () => {
  const expected = {
    ...initialState
  }

  const actual = reducer(undefined, {})
  expect(actual).toEqual(expected)
})

w
