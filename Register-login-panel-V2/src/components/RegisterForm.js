import React, { useState, useRef, useEffect } from 'react';
import { useFormik } from 'formik';
import '../style';
import { v4 as uuidv4 } from 'uuid';

export default function App({ handleState }) {
  const [dis, setDis] = useState(1);
  const manInput = useRef(false);
  const womanInput = useRef(false);
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const countryRef = useRef('');
  const checkRef = useRef('');

  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      setDis(dis + 1);
    }
  };

  const handleGenderMan = () => {
    setDis(dis + 1);
    formik.values.man = true;
    manInput.current.checked = true;
    womanInput.current.checked = false;
  };

  useEffect(() => {
    if (dis === 2) emailRef.current.focus();
    if (dis === 3) passwordRef.current.focus();
    if (dis === 5) countryRef.current.focus();
  }, [dis]);

  const handleGenderWoman = () => {
    setDis(dis + 1);
    formik.values.woman = true;
    manInput.current.checked = false;
    womanInput.current.checked = true;
  };

  const onKeyDown = (keyEvent) => {
    if ((keyEvent.charCode || keyEvent.keyCode) === 13) {
      keyEvent.preventDefault();
    }
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      woman: false,
      man: false,
      country: '',
      terms: false,
    },
    onSubmit: (values) => {
      const id = uuidv4();
      let chosenGender;
      if (manInput.current.checked) {
        chosenGender = 'Male';
      } else {
        chosenGender = 'Female';
      }
      const person = {
        name: values.name,
        email: values.email,
        password: values.password,
        gender: chosenGender,
        country: values.country,
        terms: values.terms,
      };
      localStorage.setItem(values.email, JSON.stringify(person));
      handleState(values.email);
    },
  });

  const reset = () => {
    formik.values.name = '';
    formik.values.email = '';
    formik.values.password = '';
    manInput.current.checked = false;
    womanInput.current.checked = false;
    formik.values.country = '';
    checkRef.current.checked = false;
    setDis(0);
    setTimeout(() => {
      setDis(1);
    }, 1000);
  };

  return (
    <div>
      <form
        onKeyDown={onKeyDown}
        onSubmit={formik.handleSubmit}
        className="form"
      >
        <div style={{ display: dis > 0 ? 'block' : 'none' }}>
          <div className="typewriter">
            <h1>What's your name ?</h1>
          </div>
          <input
            // autoFocus
            id="name"
            name="name"
            onKeyDown={handleEnter}
            type="text"
            value={formik.values.name}
            onChange={formik.handleChange}
            required
          />
        </div>
        <div style={{ display: dis > 1 ? 'block' : 'none' }}>
          <div className="typewriter">
            <h1>email ?</h1>
          </div>
          <input
            className="input__email"
            ref={emailRef}
            onKeyDown={handleEnter}
            type="text"
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            required
          />
        </div>
        <div style={{ display: dis > 2 ? 'block' : 'none' }}>
          <div className="typewriter">
            <h1>now let's set a password</h1>
          </div>
          <input
            ref={passwordRef}
            autoFocus
            onKeyDown={handleEnter}
            type="password"
            id="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            required
          />
        </div>
        <div style={{ display: dis > 3 ? 'block' : 'none' }}>
          <div className="typewriter">
            <h1>choose a gender</h1>
          </div>
          <div>
            <span className="select__gender">Male</span>
            <input
              className="radio__gender"
              type="radio"
              id="man"
              name="man"
              ref={manInput}
              onClick={handleGenderMan}
              value={formik.values.man}
              onChange={formik.handleChange}
            />
            <span className="select__gender">Female</span>
            <input
              className="radio__gender"
              type="radio"
              id="woman"
              name="woman"
              ref={womanInput}
              onClick={handleGenderWoman}
              value={formik.values.woman}
              onChange={formik.handleChange}
            />
          </div>
        </div>
        <div style={{ display: dis > 4 ? 'block' : 'none' }}>
          <div className="typewriter">
            <h1>and set where are u from ?</h1>
          </div>
          <input
            onKeyDown={handleEnter}
            type="text"
            id="country"
            name="country"
            ref={countryRef}
            value={formik.values.country}
            onChange={formik.handleChange}
            required
          />
        </div>
        <div style={{ display: dis > 5 ? 'block' : 'none' }}>
          <div className="typewriter">
            <h1>Are you ready ?</h1>
          </div>
          <div className="cont__check">
            <input
              onKeyDown={handleEnter}
              className="checkbox__terms"
              type="checkbox"
              id="terms"
              name="terms"
              ref={checkRef}
              onClick={() => setDis(dis + 1)}
              value={formik.values.terms}
              onChange={formik.handleChange}
              required
            />
            <h1>I accept all terms</h1>
          </div>
        </div>
        <div style={{ display: dis > 6 ? 'block' : 'none' }}>
          <button className="button__register" type="submit">
            Register
          </button>
        </div>
      </form>
      <button type="reset" onClick={reset}></button>
    </div>
  );
}
