import React from 'react';

export default function FormToDoMessage({ message }) {
  return (
    <div>
      {message ? (
        <div id="red__alert" className="alert alert-danger" role="alert">
          {message}
        </div>
      ) : (
        ''
      )}
    </div>
  );
}
