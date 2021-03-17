import React, { Component } from 'react';
import UserInput from './Components/UserInput';
import UserOutput from './Components/UserOutput';
import './App.css';

class App extends Component {
  state = {
    username: 'CengAmat'
  };

  inputHandler = (event) => {
    this.setState({
      username: event.target.value
    });
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    return (
        <div style = {style} className = "App">
          <p>WELCOME</p>
          <UserInput changed = {this.inputHandler}>Enter Username : </UserInput>
          <UserOutput username = {this.state.username}>New username : </UserOutput>
        </div>
    );
  }
}

export default App;
