import React, { useState, useEffect } from 'react';
import './style.css';

import Product from './components/Product';
import ProductForm from './components/ProductForm';

export default function App() {
  const [shopList, setShopList] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json) => {
        setShopList(json);
      });
  }, []);

  const handleAddProduct = (el) => {
    setShopList([...shopList, el]);
  };

  return (
    <div>
      <div className="container">
        {shopList.map((el) => {
          return (
            <Product
              key={el.id}
              image={el.image}
              title={el.title}
              price={el.price}
              description={el.description}
            />
          );
        })}
      </div>
      <div className="form_cont">
        <span className="add__label">Add a Product</span>
        <ProductForm fun={handleAddProduct} />
      </div>
    </div>
  );
}
