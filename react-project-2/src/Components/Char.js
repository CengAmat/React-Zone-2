import React from 'react'

const char = props =>  {
    const style = {
        display: 'inline-block',
        padding: '16px',
        textAlign: 'center',
        margin: '16px',
        border: '1px solid black'
    }
    console.log(props);
    return (
        <div style = {style}>
            <p onClick = {props.click} onChange = {props.changed} defaultValue = {props.letter} >{props.letter}</p>
        </div>
    )
}

export default char;