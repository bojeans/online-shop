import { useEffect, useState } from "react";
import React from "react";
import "./App.css";
import { fetchProducts } from "./services/fetchProducts";
import Products from "./components/Products";

function App() {
  const [products, setProducts] = useState([]);

  const loadData = async () => {
    const products = await fetchProducts();
    setProducts(products);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <Products products={products} />
    </div>
  );
}

export default App;
