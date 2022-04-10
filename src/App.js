import { useEffect, useState } from "react";
import React from "react";
import "./App.css";

// Components

import Products from "./components/Products";
import CategoryFilter from "./components/FilterBy";
import SortBy from "./components/SortBy";
import Search from "./components/Search/Search";
import { getProductsBySearch } from "./components/Search/getProductsBySearch";
import FeaturedProducts from "./components/FeaturedProducts/FeaturedProducts";
import { getFeaturedProducts } from "./components/FeaturedProducts/getFeaturedProducts";
import Pagination from "./components/Pagination/Pagination";
import { getPaginatedProducts } from "./components/Pagination/getPaginatedProducts";
import { getPaginationLinks } from "./components/Pagination/getPaginationLinks";

// Business logic from utility folder
import { getProducts } from "./services/getProducts";
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
  const [paginationLimit] = useState(6);
  const [pageList, setPaginationNumbers] = useState([]);
  const [displayedProducts, setDisplayedProducts] = useState([]);

  const loadData = async () => {
    const products = await getProducts();
    setProducts(products);

    const categories = getCategories(products);
    console.log(categories);
    setCategories(categories);
  };

  useEffect(() => {
    loadData();
  }, []);

  // Filter / sort products
  useEffect(() => {
    const filtered = filterByCategory(products, category);
    const sorted = sortProducts(filtered, sortBy);
    const searched = getProductsBySearch(sorted, searchPrefix);
    setFilteredProducts(searched);
    setCurrentPage(1);
  }, [category, sortBy, products, searchPrefix]);

  // Set featured products
  useEffect(() => {
    const featured = getFeaturedProducts(products);
    setFeaturedProducts(featured);
  }, [products, category, sortBy, setIsFeaturedDisplayed]);

  // Paginate products
  useEffect(() => {
    const pageList = getPaginationLinks(filteredProducts, paginationLimit);
    setPaginationNumbers(pageList);
    const page = getPaginatedProducts(
      filteredProducts,
      paginationLimit,
      currentPage
    );
    setDisplayedProducts(page);
  }, [filteredProducts, currentPage, paginationLimit]);

  return (
    <div className="main">
      <h1>Ice Cream Shop</h1>
      <div>
        <CategoryFilter setCategory={setCategory} categories={categories} />
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
      <Pagination pageList={pageList} setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default App;
