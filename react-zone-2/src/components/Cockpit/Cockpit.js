import React, { useEffect, useRef, useContext } from 'react';
import classes from '../Cockpit/Cockpit.css'
import AuthContext from '../../context/auth-context';

const Cockpit = props => {
  const toggleBtnRef = useRef(null);
  const authContext = useContext(AuthContext);

  console.log(authContext.authenticated);
  
  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    // Http requests
    // const timer = setTimeout(() => {
    //   alert('Saved data to cloud!')
    // }, 1000);
    toggleBtnRef.current.click();
    return () => {
      console.log('[Cockpit.js] Cleanup work in useEffect');
    }
  }, []);

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

  if (props.personsLength <= 2){
    assignedClasses.push(classes.red);
  }
  if (props.personsLength <= 1){
    assignedClasses.push(classes.bold);
  }

  return (
      <div className = {classes.Cockpit}>
          <h1>{props.title}</h1>
          <p className = {assignedClasses.join(' ')}>Ahmet Zurnaci</p>
          <button 
            ref = {toggleBtnRef}
            className = {btnClass} 
            onClick = {props.clicked}>
              Toggle Name
          </button>
          <button onClick = {authContext.login}>Log in</button>
      </div>
  )
}

export default React.memo(Cockpit);
