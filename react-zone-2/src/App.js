import { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import styled from 'styled-components';

const StyledButton = styled.button`
background-color: ${ props => props.alt ? 'red' : 'green'};
color: white;
font: inherit;
border: 1px solid blue;
padding: 8px;
cursor: pointer;

&:hover {
  background-color: ${ props => props.alt ? 'lightpink' : 'lighsalmon'};
  color: black;
}
`;
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

    if (this.state.showPersons){
      person = (
        <div>
            {this.state.persons.map( (person, index) => {
              return <Person click = {() => this.deletePersonHandler(index)} name = {person.name} age = {person.age} key = {person.id} changed = {(event) => this.nameChangedHandler(event, person.id)}/>
            })}
        </div>
      );
    }

    const classes = [];
    if (this.state.persons.length <= 2){
      classes.push('red');
    }
    if (this.state.persons.length <= 1){
      classes.push('bold');
    }

    return(
      <div className="App">
          <h1>Hello!</h1>
          <p className = {classes.join(' ')}>Who this?</p>
          <StyledButton alt = {this.state.showPersons} onClick = {this.toggleNameHandler}>Toggle Name</StyledButton>
          {person}
        </div>
    );
  }
}

export default App;
