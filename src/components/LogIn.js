import React from 'react'
import { useDispatch } from 'react-redux';
import { LOG_IN } from '../store';

const LogIn = () => {
  const dispatchFunc = useDispatch();
  
  const submit = (e) => {
    e.preventDefault();
    dispatchFunc({type: LOG_IN})
  }
  return (
    <form onSubmit={submit} >
      <label htmlFor="email">Email</label>
      <input id="email" name="email"/>
      <button type="submit">Log in</button>
    </form>
  )
}

export default LogIn