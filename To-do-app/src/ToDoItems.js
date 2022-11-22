import React, { useState } from 'react';
import ToDoForm from './components/ToDoForm';
import './style.css';

export default function ToDoForm() {
  const [arr, setArr] = useState([]);

  const handleNote = (arr) => {
    setArr(arr);
  };

  const handleDelete = (el) => {
    setArr(arr.filter((x) => x != el));
  };

  return (
    <div>
      <div className="slider-thumb"></div>
      <ToDoForm array={arr} handleNote={handleNote} />
      <div className="list">
        {arr.map((el, index) => {
          return (
            <div key={index} className="slide">
              <span className="text">{el.text}</span>
              <span className="date">{el.data}</span>
              <button
                id="button_Delete"
                className="btn btn-danger"
                onClick={() => handleDelete(el)}
              >
                delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
