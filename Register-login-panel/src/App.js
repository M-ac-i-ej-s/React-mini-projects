import React, { useState, useContext } from 'react';
import './style.css';
import FormLogin from './components/FormLogin';
import FormSignIn from './components/FormSignIn';
import LoggedUser from './components/LoggedUser';
import { LoginProvider } from './context/LoginContext';

export default function App() {
  const [isUser, setIsUser] = useState('login');
  const [user, setUser] = useState({});

  const handleStatus = (status, email = '', password = '') => {
    setUser({ email, password });
    setIsUser(status);
  };

  return (
    <LoginProvider>
      <div className="bg"></div>
      <div className="bg bg2"></div>
      <div className="bg bg3"></div>
      {isUser === 'register' ? (
        <FormLogin changeStatus={handleStatus} />
      ) : isUser === 'login' ? (
        <FormSignIn changeStatus={handleStatus} />
      ) : isUser === 'logged' ? (
        <LoggedUser email={user.email} password={user.password} />
      ) : (
        <p>something went wrong :(</p>
      )}
    </LoginProvider>
  );
}
