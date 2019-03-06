import React from 'react'
import ExerciceTestFour from '../'

import { shallow } from 'enzyme'

let spy

afterEach(() => {
  spy.mockClear()
})
//beforeEach

///

describe('test on method', () => {
  jest.mock('axios')
  // mock le module axios

  it('component did mount must be called once', () => {
    spy = jest.spyOn(ExerciceTestFour.prototype, 'componentDidMount')
    const component = shallow(<ExerciceTestFour />)
    expect(spy).toHaveBeenCalledTimes(1)
  })

  it('componentDidMount must be called once (other method)', () => {
    const component = shallow(<ExerciceTestFour />)
    // console.log(component.instance())
    spy = jest.spyOn(component.instance(), 'componentDidMount')
    // .instance permet d'avoir acces au methode du composant
    expect(spy).toHaveBeenCalledTimes(1)
  })

  it('getHouse must be called once ', () => {
    const component = shallow(<ExerciceTestFour />)
    spy = jest.spyOn(component.instance(), 'getHouse')
    component.instance().getHouse()

    expect(spy).toHaveBeenCalledTimes(1)
  })
})
