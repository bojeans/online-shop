import { useEffect, useState } from "react";
import React from "react";
import "./App.css";

// Components

import Products from "./components/Products";
import FilterBy from "./components/FilterBy";
import SortBy from "./components/SortBy";
import Search from "./components/Search/Search";
import { getProductsBySearch } from "./components/Search/getProductsBySearch";
import FeaturedProducts from "./components/FeaturedProducts/FeaturedProducts";
import { getFeaturedProducts } from "./components/FeaturedProducts/getFeaturedProducts";

// Business logic from util folder
import { fetchProducts } from "./services/fetchProducts";
import { getCategories } from "./utils/getCategories";
import { filterByCategory } from "./utils/filterByCategory";
import { sortProducts } from "./utils/sortProducts";

function App() {
  // State
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("all");
  const [categories, setCategories] = useState([]);
  const [sortBy, setSortBy] = useState("latest");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchPrefix, setSearch] = useState("");
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [isFeaturedDisplayed, setIsFeaturedDisplayed] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

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
    // const searched = getProductsBySearch(sorted, searchPrefix);
    // setFilteredProducts(searched);
    setCurrentPage(1);
  }, [category, sortBy, products, searchPrefix]);

  // Set featured products
  useEffect(() => {
    const featured = getFeaturedProducts(products);
    setFeaturedProducts(featured);
  }, [products, category, sortBy, setIsFeaturedDisplayed]);

  return (
    <div className="main">
      <h1>Ice Cream Shop</h1>
      <div>
        <FilterBy setCategory={setCategory} categories={categories} />
        <SortBy setSortBy={setSortBy} />
        <Search setSearch={setSearch} />
      </div>
      {isFeaturedDisplayed && (
        <FeaturedProducts
          products={featuredProducts}
          setIsFeaturedDisplayed={setIsFeaturedDisplayed}
        />
      )}
      <Products products={products} />
    </div>
  );
}

export default App;
