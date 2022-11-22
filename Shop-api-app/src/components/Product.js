import React from 'react';
import '../style.css';

export default function Product({ image, title, price, description }) {
  return (
    <div className="product">
      <div className="cont__pic">
        <img className="picture" src={image} alt="image" />
      </div>
      <p className="title">{title}</p>
      <p className="price">Cena: {price} zł.</p>
      <p className="description">{description}</p>
    </div>
  );
}
