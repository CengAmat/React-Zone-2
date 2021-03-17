import { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component{
  state = {
    persons : [
      { name : "Ahmet", age: 30},
      { name : "Levent", age: 25},
      { name : "Ayse", age: 55},
      { name : "Vacip", age: 61}
    ],
    otherState : 'Ahmet'
  }

  switchNameHandler = (newName) => {
    // console.log('Expecto Patronum!');

    this.setState({
      persons : [
        { name : newName, age: 25},
        { name : "Levent", age: 25},
        { name : "Ayse", age: 55},
        { name : "", age: 0}
      ]
    })
  }

  render() {
    return(
      <div className="App">
        <h1>Hello!</h1>
        <button onClick = {this.switchNameHandler.bind(this, 'Ahmet')}>Switch Name</button>
        <Person click = {this.switchNameHandler.bind(this, 'Amat')} name = {this.state.persons[0].name} age = {this.state.persons[0].age}>My Hobbie : Surfing</Person>
        <Person name = {this.state.persons[1].name} age = {this.state.persons[1].age} />
        <Person name = {this.state.persons[2].name} age = {this.state.persons[2].age} />
        <Person name = {this.state.persons[3].name} age = {this.state.persons[3].age} />
      </div>
    );
  }
}

export default App;
