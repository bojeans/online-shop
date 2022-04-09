import { React, useEffect, useState } from "react";
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
      hello world
      <Products products={products} />
    </div>
  );
}

export default App;
