import React, { Component } from 'react'
import posed from 'react-pose'
import styled from 'styled-components'

const MovingBox = posed.div({
  left: { x: -50 },
  right: { x: 50 }
})

const MovingBoxStyled = styled(MovingBox)`
  height: 50px;
  width: 50px;
  background-color: red;
`

class Loader extends Component {
  state = {
    position: 'left'
  }

  componentDidMount() {
    this.animationInterval()
  }
  componentWillUnmount() {
    clearInterval(this.animation)
  }

  animationInterval = () => {
    this.animation = setInterval(() => {
      const { position } = this.state
      this.setState({ position: position === 'left' ? 'right' : 'left' })
    }, 500)
  }

  render() {
    return <MovingBoxStyled pose={this.state.position} />
  }
}

export default Loader
