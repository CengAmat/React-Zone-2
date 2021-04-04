import { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component{
  state = {
    persons : [
      { id: '1', name : "Albus Dumbledore", age: 300 },
      { id: '2', name : "Severus Snape", age: 60 },
      { id: '3', name : "Minerva Mcgonaggel", age: 65 },
    ],
    otherState : 'Ahmet',
    showPersons: false
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex( p => {
      return p.id === id;
    } );

    const person = {
      ...this.state.persons[personIndex]
    };


    person.name = event.target.value;
    
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons : persons })
  }

  togglePersonsHandler = () => {
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
    let person = null;
    

    if (this.state.showPersons) {
      person = <Persons 
            persons = {this.state.persons}
            clicked = {this.deletePersonHandler}
            changed = {this.nameChangedHandler} />;
    }

    return (
      <div className = {classes.App}>
        <Cockpit
          showPersons = {this.state.showPersons}
          persons = {this.state.persons} 
          clicked = {this.togglePersonsHandler}/>
          {person}
        </div>
    );
  }
}

export default App;
