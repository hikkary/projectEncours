import React from 'react';
import logo from '../../logo.svg';

const phrase = 'zakaria';

class Header extends React.Component {
  componentDidMount() {
    console.log(this.props);
  }

  sentence = () => {
    return `je suis ${phrase}`;
    // return 'je suis ' + phrase;
  };

  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{this.props.sentence}</p>
        <a
          className="App-link"
          href={this.props.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {this.sentence()}
        </a>

        <button
          onClick={() => {
            alert('salut');
          }}
        >
          coucou
        </button>
      </header>
    );
  }
}

export default Header;
