import { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

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
    let person = null;
    let btnClass = '';

    if (this.state.showPersons){
      person = (
        <div>
            {this.state.persons.map( (person, index) => {
              return <ErrorBoundary key = {person.id}>
                <Person click = {() => this.deletePersonHandler(index)} name = {person.name} age = {person.age} changed = {(event) => this.nameChangedHandler(event, person.id)}/>
              </ErrorBoundary>
            })}
        </div>
      );
      btnClass = classes.red;
    }

    const assignedClasses = [];
    if (this.state.persons.length <= 2){
      assignedClasses.push(classes.red);
    }
    if (this.state.persons.length <= 1){
      assignedClasses.push(classes.bold);
    }

    return(
      <div className={classes.App}>
          <h1>Hello!</h1>
          <p className = {assignedClasses.join(' ')}>Who this?</p>
          <button className = {btnClass} onClick = {this.toggleNameHandler}>Toggle Name</button>
          {person}
        </div>
    );
  }
}

export default App;
