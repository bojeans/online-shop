import React, { useState, useEffect } from "react";
import { getProducts } from "../../services/getProducts";

let msg = "";
const SearchItems = ({ resultItems }) => {
  const [products, setProducts] = useState([]);
  const loadData = async () => {
    const products = await getProducts();
    setProducts(products);
  };

  useEffect(() => {
    loadData();
  }, []);

  if (products.length === 0) {
    msg = "no products to display";
  } else if (products.length === 1) {
    msg = `displaying ${products.length} product`;
  } else if (products.length > 1) {
    msg = `displaying ${products.length} products`;
  }

  return (
    <div>
      <p>{msg}</p>
    </div>
  );
};

export default SearchItems;
