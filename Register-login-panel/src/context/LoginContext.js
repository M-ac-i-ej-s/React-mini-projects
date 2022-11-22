import React from 'react';
import { createContext, useState, useRef, useEffect } from 'react';
import AllUsers from './users.json';
const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [date, setDate] = useState('');
  const [image, setImage] = useState('');
  const [check, setCheck] = useState(false);
  const [users, setUsers] = useState(AllUsers.users);
  const fs = require('fs');
  const checkbox = useRef();
  const values = {
    name,
    surname,
    email,
    password,
    date,
    check,
    checkbox,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const person = {
      id: users.length + 1,
      name,
      surname,
      email,
      password,
      date,
      image,
    };
    setUsers((users) => [...users, person]);
    const data = JSON.stringify(users, null, 2);
    fs.writeFile('users.json', data, (err) => {
      if (err) throw err;
    });
    reset();
  };

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleSurname = (event) => {
    setSurname(event.target.value);
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleDate = (event) => {
    setDate(event.target.value);
  };

  const handleImage = (event) => {
    setImage(URL.createObjectURL(event.target.files[0]));
  };

  const handleCheck = () => {
    setCheck(!check);
  };

  const reset = () => {
    setName('');
    setSurname('');
    setEmail('');
    setPassword('');
    setDate('');
    setImage('');
    setCheck(false);
    checkbox.current.checked = false;
  };

  return (
    <LoginContext.Provider
      value={{
        handleSubmit,
        handleName,
        handleSurname,
        handleEmail,
        handlePassword,
        handleDate,
        handleImage,
        handleCheck,
        values,
        reset,
        users,
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export default LoginContext;
