import React, { useState } from 'react';
import FormToDoData from './FormToDoData';
import FormToDoItem from './FormToDoItem';
import FormToDoMessage from './FormToDoMessage';

export default function ToDoForm({ array, handleNote }) {
  const [text, setText] = useState('');
  const [data, setData] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (data === '' && text === '') {
      setMessage('Podaj date i wiadomość!');
    } else if (text === '') {
      setMessage('Podaj wiadomość !');
    } else if (data === '') {
      setMessage('Podaj datę !');
    } else if (dateChecker(data)) {
      setMessage('Podaj datę ale w przyszłości!');
    } else {
      setMessage('');
      handleNote([...array, { text, data }]);
    }
  };

  const dateChecker = (date) => {
    const arr = date.split('-');
    const now = new Date();
    if (
      now.getMonth() + 1 >= +arr[1] &&
      now.getDate() > +arr[2] &&
      now.getFullYear() >= +arr[0]
    ) {
      return true;
    } else {
      return false;
    }
  };

  const handleItem = (event) => {
    setText(event.target.value);
  };

  const handleData = (event) => {
    setData(event.target.value);
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <FormToDoItem value={text} funHandler={handleItem} />
        <FormToDoData value={data} funHandler={handleData} />
        <button id="submit__button" type="submit" className="btn btn-warning">
          Submit
        </button>
      </form>
      <FormToDoMessage date={data} text={text} message={message} />
    </div>
  );
}
