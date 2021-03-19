import './App.css';
import React, { Component } from 'react'

class App extends Component {
  state = {
    text: ''
  };

  textChangedHandler = (event) => {
    const newText = event.target.value;
    this.setState({text: newText});
  };


  render() {
    return (
      <div className="App">
        <input onChange = {(event) => this.textChangedHandler(event)} text = {this.state.text} ></input>
        <p>{this.state.text.length}</p>
      </div>
    );
  }
}

export default App;