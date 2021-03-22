import React from 'react';
import './Person.css';
import Radium from 'radium';

const person = (props) => {
return (
    <div className = "Person">
        <p onClick = {props.click}>{props.name} - {props.age} years old! </p>
        <p>{props.children}</p>
        <input type = "text" onChange={props.changed} defaultValue = {props.name}/>
    </div>
)
};

export default Radium(person);