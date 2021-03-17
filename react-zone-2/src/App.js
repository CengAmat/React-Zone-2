import { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component{
  state = {
    persons : [
      { name : "Albus Dumbledore", age: 300},
      { name : "Severus Snape", age: 60},
      { name : "Minerva Mcgonaggel", age: 65},
    ],
    otherState : 'Ahmet'
  }

  switchNameHandler = (newName) => {
    // console.log('Expecto Patronum!');

    this.setState({
      persons : [
        { name : newName, age: 300},
        { name : "Severus Snape", age: 60},
        { name : "Minerva Mcgonaggel", age: 65},
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons : [
        { name : "Albus Dumbledore", age: 300},
        { name : "Severus Snape", age: 60},
        { name : event.target.value , age: 65},
      ]
    })
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
    return(
      <div className="App">
        <h1>Hello!</h1>
        <button style = {style} onClick = {this.switchNameHandler.bind(this, 'Albus Percival Wulfric Brian Dumbledore')}>Reveal Name</button>
        <Person name = {this.state.persons[0].name} age = {this.state.persons[0].age} />
        <Person click = {this.switchNameHandler.bind(this, 'Half-Blood Prince')} name = {this.state.persons[1].name} age = {this.state.persons[1].age} />
        <Person changed = {this.nameChangedHandler} name = {this.state.persons[2].name} age = {this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
