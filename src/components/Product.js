import React from "react";

const Product = ({ name, image, description, price, id }) => {
  return (
    <li>
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>{description}</p>
      <p>{price}</p>
      <button>Buy Now</button>
    </li>
  );
};

export default Product;
