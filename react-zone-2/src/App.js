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
    otherState : 'Ahmet',
    showPersons: false
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

  toggleNameHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    })
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons: persons});
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let person = null;

    if (this.state.showPersons){
      person = (
        <div>
            {this.state.persons.map( (person, index) => {
              return <Person click = {() => this.deletePersonHandler(index)} name = {person.name} age = {person.age} />
            })}
        </div>
      );
    }

    return(
      <div className="App">
        <h1>Hello!</h1>
        <button style = {style} onClick = {this.toggleNameHandler}>Toggle Name</button>
        {person}
      </div>
    );
  }
}

export default App;
