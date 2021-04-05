import React, { useEffect } from 'react';
import classes from '../Cockpit/Cockpit.css'

const Cockpit = (props) => {
    useEffect(() => {
      console.log('[Cockpit.js] useEffect');
      // Http requests
      setTimeout(() => {
        alert('Saved data to cloud!')
      }, 1000);
      return () => {
        console.log('[Cockpit.js] Cleanup work in useEffect');
      }
    }, [props.persons]);

    useEffect(() => {
      console.log('[Cockpit.js] 2nd useEffect');
      return () => {
        console.log('[Cockpit.js] Cleanup work in 2nd useEffect');
      }
    })

    const assignedClasses = [];
    let btnClass = '';
    if (props.showPersons) {
        btnClass = classes.red;
    }

    if (props.persons.length <= 2){
      assignedClasses.push(classes.red);
    }
    if (props.persons.length <= 1){
      assignedClasses.push(classes.bold);
    }

    return (
        <div className = {classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className = {assignedClasses.join(' ')}>Ahmet Zurnaci</p>
            <button 
                className = {btnClass} 
                onClick = {props.clicked}>Toggle Name</button>
        </div>
    )
}

export default Cockpit;
