import React from "react";
import { checkout } from "../services/checkout";

const Product = ({ name, image, description, price, priceId }) => {
  const clickEvent = () => {
    checkout(priceId);
  };
  return (
    <li className="product-container">
      <img src={image} alt={name} className="product-image" />
      <h2 className="product-title">{name}</h2>
      <p className="product-content">{description}</p>
      <p className="product-price">{price}</p>
      <button onClick={clickEvent} className="product-buynow-button">
        Buy Now
      </button>
    </li>
  );
};

export default Product;
