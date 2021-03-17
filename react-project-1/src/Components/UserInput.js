import React from 'react';
import './User.css'

const userInput = (props) => {
    return (
        <div className = "User">
            <p>Enter username : </p>
            <input type = "text" onChange = {props.changed} value = {props.username} />
        </div>
    );
}

export default userInput;