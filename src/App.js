import { React, useEffect, useState } from "react";
import "./App.css";
import { fetchProducts } from "./services/fetchProducts"

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
    {products}
    </div>
    );
}

export default App;
