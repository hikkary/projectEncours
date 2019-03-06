import React from 'react'
import ExerciceTest from '..'

import { shallow, mount } from 'enzyme'

it('should match the snapshot', () => {
  const component = shallow(
    <ExerciceTest counterTitle="test" counterNumber={0} u />
  )

  expect(component).toMatchSnapshot()
})

// it('should match the snapshot', () => {
//   const component = shallow(
//     <ExerciceTest counterTitle="test" counterNumber={0} />
//   )
//   expect(component).toMatchSnapshot()
// })

1
it('should have two buttons by classname', () => {
  const component = shallow(
    <ExerciceTest counterTitle="test" counterNumber={0} />
  )
  const buttonElement = component.find('[className="styledButton"]')

  console.log(buttonElement.debug())
  expect(buttonElement.length).toEqual(2)
})

it('should return null', () => {
  const component = shallow(
    <ExerciceTest counterTitle="test" counterNumber={0} disabled={true} />
  )

  expect(component.type()).toBe(null)
})
