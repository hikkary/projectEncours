import React, { Component } from 'react'

import LoginForm from '../components/loginForm'

import { isEmail, isPassword } from '../utils/regexs'

import './login.css'

const spread = ['ok', 'okok']

class App extends Component {
  state = {
    counter: 0,
    email: '',
    password: ''
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

    //simulation d'appel Api Login

    localStorage.setItem('token', 'ceciesttoken')
    this.props.history.push('/home')
  }

  render() {
    console.log(...spread)
    return (
      <div className="App">
        <LoginForm submit={this.submit} inputHandler={this.inputHandler} />
        <button onClick={this.changePage} />
      </div>
    )
  }
}

export default App
