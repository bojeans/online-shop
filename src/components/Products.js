import React from "react";
import Product from "./Product";

const Products = ({ products }) => {
  return (
    <ul>
      {products.map((product) => (
        <Product
          key={product.id}
          image={product.images[0]}
          name={product.name}
          description={product.description}
          price={product.prices[0].unit_amount}
          priceId={product.prices[0].id}
        />
      ))}
    </ul>
  );
};

export default Products;
