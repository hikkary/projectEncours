import React, { Component } from 'react'

import Header from '../components/header'
import posed from 'react-pose'
import styled from 'styled-components'

const MenuBurger = posed.div({
  closed: { x: -200 },
  open: { x: 0 }
})

const MenuBurgerStyled = styled(MenuBurger)`
  height: 600px;
  width: 200px;
  position: absolute;
  background-color: brown;
`

class Layout extends Component {
  state = {
    menu: 'closed'
  }

  componentDidMount() {
    console.log('Cycle de vie')
  }

  handleMenu = () => {
    const { menu } = this.state
    this.setState({ menu: menu === 'closed' ? 'open' : 'closed' })
  }

  render() {
    return (
      <div>
        <Header />
        <MenuBurgerStyled pose={this.state.menu} />
        <button onClick={this.handleMenu}>Menu</button>
        {this.props.children}
      </div>
    )
  }
}

export default Layout
