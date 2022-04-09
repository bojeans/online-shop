import React from "react";
import { checkout } from "../services/checkout";

const Product = ({ name, image, description, price, priceId }) => {
  const clickEvent = () => {
    checkout(priceId);
  };
  return (
    <li>
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>{description}</p>
      <p>{price}</p>
      <button onClick={clickEvent}> Buy Now</button>
    </li>
  );
};

export default Product;
