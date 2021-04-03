import './App.css';
import React, { Component } from 'react'
import Validation from './Components/Validation';
import Char from './Components/Char';

class App extends Component {
  state = {
    text: ''
  };

  textChangedHandler = (event) => {
    const newText = event.target.value;
    this.setState({text: newText});
  };

  deleteLetterHandler = (letterIndex) => {
    const letters = [...this.state.text];
    letters.splice(letterIndex,1);
    this.setState({text: letters});
  }

  render() {
    let letter = null
    
    if (this.state.text.length > 0) {
      letter = (
        <div>
          {this.state.text.split( (letter, index) => {
            return <Char click = {() => this.deleteLetterHandler(index)} letter = {this.state.text.split('')} changed = {(event) => this.textChangedHandler(event)}/>
          })}
        </div>
      )
    }

    return (
      <div className="App">
        <input onChange = {(event) => this.textChangedHandler(event)} text = {this.state.text} ></input>
        <p>{this.state.text.length}</p>
        <Validation size = {this.state.text.length}/>
        {letter}
      </div>
    );
  }
}

export default App;