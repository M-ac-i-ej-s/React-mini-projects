import React, { useState } from 'react';
import './style';
import RegisterForm from './components/RegisterForm';
import Logged from './components/Logged';

export default function App() {
  const [state, setState] = useState(true);
  const [email, setEmail] = useState('');

  const handleState = (email) => {
    setEmail(email);
    setState(!state);
  };

  return (
    <div>
      {state ? (
        <RegisterForm handleState={handleState} />
      ) : (
        <Logged email={email} />
      )}
    </div>
  );
}
