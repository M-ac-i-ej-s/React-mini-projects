import React, { useState, useContext } from 'react';
import LoginProvider from '../context/LoginContext';
import '../styleUser.css';

export default function App({ email, password }) {
  const { users } = useContext(LoginProvider);
  const user = users.reduce((prev, curr) => {
    if (curr.email == email && curr.password == password) {
      return curr;
    }
  }, {});

  return (
    <div className="up">
      <div className="container">
        <img className="image" src={user.image} alt="u didnt add it"></img>
        <div className="inCont">
          <span className="content">name:</span>
          <span>{user.name}</span>
        </div>
        <div className="inCont">
          <span className="content">surname:</span>
          <span>{user.surname}</span>
        </div>
        <div className="inCont">
          <span className="content">email:</span>
          <span>{user.email}</span>
        </div>
        <div className="inCont">
          <span className="content">date:</span>
          <span>{user.date}</span>
        </div>
      </div>
    </div>
  );
}
