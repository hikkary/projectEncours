import React from 'react'
import ExerciceTestTwo from '..'

import { shallow } from 'enzyme'

it('should call decrement function when we click ', () => {
  const decrement = jest.fn()

  const component = shallow(
    <ExerciceTestTwo
      counterTitle="test"
      counterNumber={0}
      decrement={decrement}
    />
  )
  component.find('button.decrementButton').simulate('click')

  expect(decrement).toHaveBeenCalled()
})

it('should call increment function when we click', () => {
  const increment = jest.fn()
  const component = shallow(
    <ExerciceTestTwo
      counterTitle="test"
      counterNumber={0}
      increment={increment}
    />
  )
  component.find('button.incrementButton').simulate('click')

  expect(increment).toHaveBeenCalled()
  component.unmount()
})
