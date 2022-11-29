import React from 'react';
import image from './img.json';
import '../style';

export default function App({ email }) {
  return (
    <div className="block__logged">
      <img src={image.img} alt="" />
      <div>
        <span className="span__what">Name: </span>
        <span className="span__view">
          {JSON.parse(localStorage.getItem(email)).name}
        </span>
      </div>
      <div>
        <span className="span__what">Email: </span>
        <span className="span__view__email">
          {JSON.parse(localStorage.getItem(email)).email}
        </span>
      </div>
      <div>
        <span className="span__what">Gender: </span>
        <span className="span__view">
          {JSON.parse(localStorage.getItem(email)).gender}
        </span>
      </div>
      <div>
        <span className="span__what">Country: </span>
        <span className="span__view">
          {JSON.parse(localStorage.getItem(email)).country}
        </span>
      </div>
    </div>
  );
}
