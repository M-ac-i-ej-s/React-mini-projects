import React, { useState, useContext } from 'react';
import LoginProvider from '../context/LoginContext';
import '../style.css';

export default function App({ changeStatus }) {
  const { users } = useContext(LoginProvider);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [border, setBorder] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const emails = users.reduce((prev, curr) => {
      return [...prev, curr.email];
    }, []);
    const passwords = users.reduce((prev, curr) => {
      return [...prev, curr.password];
    }, []);
    if (emails.includes(email) && passwords.includes(password)) {
      changeStatus('logged', email, password);
    } else {
      setBorder('1px solid red');
    }
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <span>email</span>
        <input
          style={{ border: border }}
          className="input__style"
          type="text"
          placeholder="email"
          value={email}
          onChange={handleEmail}
        />
      </div>
      <div>
        <span>password</span>
        <input
          style={{ border: border }}
          value={password}
          onChange={handlePassword}
          className="input__style"
          type="password"
          placeholder="password"
        />
      </div>
      <div>
        <span className="span__incorrect">
          {border === '1px solid red' ? 'incorrect email or password' : ''}
        </span>
        <span onClick={() => changeStatus('register')} className="link">
          register
        </span>
      </div>
      <button type="submit" className="btn btn-primary">
        Log in
      </button>
    </form>
  );
}
