import React, { Component } from 'react'
import classes from './Person.css';
import Aux from '../../../hoc/Aux';

class Person extends Component {
    render() {
        console.log('[Person.js] rendering...');
        return (
            <Aux>
                <p onClick = {this.props.click}>{this.props.name} - {this.props.age} years old! </p>
                <p>{this.props.children}</p>
                <input type = "text" onChange = {this.props.changed} defaultValue = {this.props.name}/>
            </Aux>    
        )
    }
}

export default Person;