import React, { useState } from 'react';
import '../style.css';

export default function ProductForm({ fun }) {
  const [titleValue, setTitle] = useState('');
  const [priceValue, setPrice] = useState(0);
  const [descriptionValue, setDescription] = useState('');
  const [imageValue, setImage] = useState(null);
  const [categoryValue, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('https://fakestoreapi.com/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: titleValue,
        price: priceValue,
        description: descriptionValue,
        image: imageValue,
        category: categoryValue,
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        fun(json);
      });
  };

  const handleTitle = (event) => {
    setTitle(event.target.value);
  };

  const handlePrice = (event) => {
    setPrice(event.target.value);
  };

  const handleDescription = (event) => {
    setDescription(event.target.value);
  };

  const handleImage = (event) => {
    setImage(URL.createObjectURL(event.target.files[0]));
  };

  const handleCategory = (event) => {
    setCategory(event.target.value);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        value={titleValue}
        onChange={handleTitle}
        placeholder="title"
        type="text"
      />
      <input
        value={priceValue}
        onChange={handlePrice}
        placeholder="price"
        type="number"
      />
      <input
        value={descriptionValue}
        className="description"
        placeholder="description"
        type="text"
        onChange={handleDescription}
      />
      <input onChange={handleImage} placeholder="image" type="file" />
      <input
        value={categoryValue}
        onChange={handleCategory}
        placeholder="category"
        type="text"
      />
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}
