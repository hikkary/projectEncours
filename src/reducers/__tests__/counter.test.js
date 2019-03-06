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

it('should increment countG', () => {
  const expected = {
    ...initialState,
    countG: initialState.countG + 1
  }

  const actual = reducer(undefined, incrementCounter('countG'))
  expect(actual).toEqual(expected)
})
