import { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../hoc/WithClass';

class App extends Component{
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }

  state = {
    persons : [
      { id: '1', name : "Albus Dumbledore", age: 300 },
      { id: '2', name : "Severus Snape", age: 60 },
      { id: '3', name : "Minerva Mcgonaggel", age: 65 },
    ],
    otherState : 'Ahmet',
    showPersons: false,
    showCockpit: true
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }
  
  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }
  
  componentDidUpdate(prevProps, prevState) {
    console.log('[App.js] componentDidUpdate');
  }
  

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex( p => {
      return p.id === id;
    });

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
    console.log('[App.js] render');
    let person = null;
    
    if (this.state.showPersons) {
      person = <Persons 
            persons = {this.state.persons}
            clicked = {this.deletePersonHandler}
            changed = {this.nameChangedHandler} />;
    }

    return (
      <WithClass classes = {classes.App}>
        <button
          onClick = {() => {
            this.setState({ showCockpit: false });
          }}
        >
          Remove Cockpit
        </button>
        {this.state.showCockpit ? (
          <Cockpit
            title = {this.props.appTitle}
            showPersons = {this.state.showPersons}
            personsLength = {this.state.persons.length} 
            clicked = {this.togglePersonsHandler}
          />
        ) : null }
          {person}
        </WithClass>
    );
  }
}

export default App;
