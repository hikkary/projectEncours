import React, { Component } from 'react'

class LoginForm extends Component {
  render() {
    return (
      <form className="form" onSubmit={this.props.submit}>
        <input
          className="inputForm"
          type="text"
          name="email"
          onChange={this.props.inputHandler}
          placeholder="Votre Email"
        />
        <input
          className="inputForm"
          type="password"
          name="password"
          onChange={this.props.inputHandler}
          placeholder="Votre Mot De Passe"
        />
        <input type="submit" value="Envoyer" />
      </form>
    )
  }
}

export default LoginForm
