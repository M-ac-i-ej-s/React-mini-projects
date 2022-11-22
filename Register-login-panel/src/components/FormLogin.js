import React, { useState, useContext, useEffect } from 'react';
import '../style.css';
import LoginProvider from '../context/LoginContext';

export default function App({ changeStatus }) {
  const [checking, setChecking] = useState(false);

  const {
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
  } = useContext(LoginProvider);

  const borderEmailStyle = () => {
    const validateEmail = (email) => {
      return String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };
    if (validateEmail(values.email)) {
      return '1px solid green';
    } else {
      return '1px solid red';
    }
  };

  const borderNameStyle = (value) => {
    if (value != '') {
      return '1px solid green';
    } else {
      return '1px solid red';
    }
  };

  const passwordChangedRed = (value) => {
    const strongRegex = new RegExp(
      '^(?=.{14,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$',
      'g'
    );
    const mediumRegex = new RegExp(
      '^(?=.{10,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$',
      'g'
    );
    const enoughRegex = new RegExp('(?=.{8,}).*', 'g');
    if (value.length == 0) {
      return 'white';
    } else if (false == enoughRegex.test(value)) {
      return 'red';
    } else if (strongRegex.test(value)) {
      return 'green';
    } else if (mediumRegex.test(value)) {
      return 'yellow';
    } else {
      return 'red';
    }
  };

  const passwordChangedYellow = (value) => {
    const strongRegex = new RegExp(
      '^(?=.{14,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$',
      'g'
    );
    const mediumRegex = new RegExp(
      '^(?=.{10,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$',
      'g'
    );
    if (strongRegex.test(value)) {
      return 'green';
    } else if (mediumRegex.test(value)) {
      return 'yellow';
    } else {
      return '';
    }
  };

  const passwordChangedGreen = (value) => {
    const strongRegex = new RegExp(
      '^(?=.{14,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$',
      'g'
    );
    if (strongRegex.test(value)) {
      return 'green';
    } else {
      return '';
    }
  };

  const dateChecker = (date) => {
    if (date === undefined) {
      return '1px solid red';
    } else {
      const arr = date.split('-');
      const now = new Date();
      if (
        now.getMonth() + 1 >= +arr[1] &&
        now.getDate() > +arr[2] &&
        now.getFullYear() >= +arr[0]
      ) {
        return '1px solid green';
      } else {
        return '1px solid red';
      }
    }
  };

  useEffect(() => {
    if (
      borderEmailStyle(values.email) === '1px solid green' &&
      borderNameStyle(values.name) === '1px solid green' &&
      borderNameStyle(values.surname) === '1px solid green' &&
      passwordChangedRed(values.password) != 'white' &&
      dateChecker(values.date) === '1px solid green' &&
      values.check === true
    ) {
      setChecking(true);
    } else {
      setChecking(false);
    }
  });

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div>
          <span className="span__input">Name</span>
          <span className="span__redStar">*</span>
        </div>
        <input
          style={{ border: borderNameStyle(values.name) }}
          className="input__style"
          onChange={handleName}
          value={values.name}
          placeholder="Name"
          type="text"
          required
        />
      </div>
      <div>
        <div>
          <span className="span__input">Surname</span>
          <span className="span__redStar">*</span>
        </div>
        <input
          style={{ border: borderNameStyle(values.surname) }}
          className="input__style"
          onChange={handleSurname}
          value={values.surname}
          placeholder="Surname"
          type="text"
          required
        />
      </div>
      <div>
        <div>
          <span className="span__input">Email</span>
          <span className="span__redStar">*</span>
        </div>
        <input
          style={{ border: borderEmailStyle() }}
          className="input__style"
          onChange={handleEmail}
          value={values.email}
          placeholder="Email"
          type="text"
        />
      </div>
      <div>
        <div>
          <span className="span__input">Password</span>
          <span className="span__redStar">*</span>
        </div>
        <input
          className="input__style"
          onChange={handlePassword}
          value={values.password}
          placeholder="Password"
          type="password"
        />
      </div>
      <div>
        <div>pass power</div>
        <div>
          <div
            style={{ backgroundColor: passwordChangedRed(values.password) }}
            className="div__power"
          ></div>
          <div
            style={{ backgroundColor: passwordChangedYellow(values.password) }}
            className="div__power"
          ></div>
          <div
            style={{ backgroundColor: passwordChangedGreen(values.password) }}
            className="div__power"
          ></div>
        </div>
      </div>
      <div>
        <div>
          <span className="span__input">Date</span>
          <span className="span__redStar">*</span>
        </div>
        <input
          style={{ border: dateChecker(values.date) }}
          className="input__style"
          onChange={handleDate}
          value={values.date}
          type="date"
        />
      </div>
      <div>
        <span className="span__input">Zdjęcie</span>
        <input className="input__style" onChange={handleImage} type="file" />
      </div>
      <div>
        <div className="check__terms">
          <span className="span__accept">Accept all terms</span>
          <span className="span__redStar">*</span>
          <input
            className="checkbox__input"
            onChange={handleCheck}
            value={values.check}
            type="checkbox"
            ref={values.checkbox}
          />
        </div>
        <div className="link" onClick={() => changeStatus('login')}>
          sign in
        </div>
      </div>
      <button type="submit" disabled={!checking} className="btn btn-primary">
        Register
      </button>
      <button onClick={reset} className="btn btn-secondary">
        Reset
      </button>
    </form>
  );
}
