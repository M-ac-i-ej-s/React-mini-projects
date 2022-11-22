import React, { useState } from 'react';

export default function FormToDoItem({ value, funHandler }) {
  return (
    <div className="input">
      <input
        type="text"
        value={value}
        onChange={funHandler}
        maxLength="30"
        className="form-control mb-2 mr-sm-2"
        id="inlineFormInputName2"
        placeholder="Message"
      />
    </div>
  );
}
