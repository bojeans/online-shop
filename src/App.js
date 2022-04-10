import { useEffect, useState } from "react";
import React from "react";
import "./App.css";
import { fetchProducts } from "./services/fetchProducts";
import Products from "./components/Products";
import FilterBy from "./components/FilterBy";
import SortBy from "./components/SortBy";
import Search from "./components/Search/Search";

// Business logic from util folder
import { getProducts } from "./services/getProducts";
import { getCategories } from "./utils/getCategories";
import { filterByCategory } from "./utils/filterByCategory";
import { sortProducts } from "./utils/sortProducts";

function App() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("all");
  const [categories, setCategories] = useState([]);
  const [sortBy, setSortBy] = useState("latest");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [search, setSearch] = useState("");

  const loadData = async () => {
    const products = await fetchProducts();
    setProducts(products);
  };

  useEffect(() => {
    loadData();
  }, []);

  // Filter / sort products
  useEffect(() => {
    const filtered = filterByCategory(products, category);
    const sorted = sortProducts(filtered, sortBy);
    const searched = getProductsBySearch(sorted, search);
    setFilteredProducts(searched);
    setCurrentPage(1);
  }, [category, sortBy, products, search]);

  return (
    <div className="main">
      <h1>Ice Cream Shop</h1>
      <div>
        <CategoryFilter setCategory={setCategory} categories={categories} />
        <SortBy setSortBy={setSortBy} />
        <Search setSearch={setSearch} />
      </div>
      <Products products={products} />
    </div>
  );
}

export default App;
