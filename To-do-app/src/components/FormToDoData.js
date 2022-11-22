import React, { useState } from 'react';
export default function FormToDoData({ value, funHandler }) {
  return (
    <div className="input">
      <div className="row">
        <div className="col-sm-6">
          <input
            type="date"
            className="form-control"
            id="datetimepicker4"
            value={value}
            onChange={funHandler}
          />
        </div>
      </div>
    </div>
  );
}
