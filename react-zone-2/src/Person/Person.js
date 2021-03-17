import React from 'react';

const person = (props) => {
return (
    <div>
        <p onClick = {props.click}>{props.name} - {props.age} years old! </p>
        <p>{props.children}</p>
        <input type = "text" onChange={props.changed} defaultValue = {props.name}/>
    </div>
)
};

export default person;