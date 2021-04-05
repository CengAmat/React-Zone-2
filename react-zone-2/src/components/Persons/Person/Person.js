import React, { Component } from 'react'
import classes from './Person.css';
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context';

class Person extends Component {
    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    componentDidMount() {
        // this.inputElement.focus();
        this.inputElementRef.current.focus();
    }
    
    render() {
        console.log('[Person.js] rendering...');
        return (
            <Aux>
                <AuthContext.Consumer>
                    {context => 
                        context.authenticated ? <p>Authenticated</p> : <p>Please log in</p>
                    }
                </AuthContext.Consumer>           
                <p onClick = {this.props.click}>
                    {this.props.name} - {this.props.age} years old! 
                </p>
                <p>{this.props.children}</p>
                <input 
                    type = "text" 
                    // ref = {(inputEl) => {this.inputEl = inputEl}}  older approach for older version of React
                    ref = {this.inputElementRef}
                    onChange = {this.props.changed} 
                    defaultValue = {this.props.name}
                />
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