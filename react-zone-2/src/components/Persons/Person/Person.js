import React, { Component } from 'react'
import classes from './Person.css';
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';
import PropTypes from 'prop-types'

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

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    change: PropTypes.func
};

export default withClass(Person, classes.Person);