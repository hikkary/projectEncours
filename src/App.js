import React, { Component } from 'react'

import LoginForm from './components/loginForm'

import { isEmail, isPassword } from '../src/utils/regexs'

import './App.css'

class App extends Component {
  state = {
    counter: 0,
    email: '',
    password: ''
  }

  componentDidMount() {
    console.log('coucou')
  }

  addToCounter = number => {
    this.setState({ counter: this.state.counter + number })
  }

  inputHandler = event => {
    this.setState({ [event.target.name]: event.target.value }, () => {
      console.log(this.state)
    })
    // pour verifier les changement dans le state. utiliser la callBack de this.setState
  }

  submit = event => {
    event.preventDefault()
    // console.log(event.target)

    if (!this.state.email || !isEmail(this.state.email)) {
      alert('inserez mail')
      return
    }
    if (!this.state.password || !isPassword(this.state.password)) {
      alert('inserez password')
      return
    }
  }

  render() {
    return (
      <div className="App">
        <LoginForm submit={this.submit} inputHandler={this.inputHandler} />
      </div>
    )
  }
}

export default App
