const filterByCategory = (products, category) => {
  if (category === "all") {
    return [...products];
  }

  return products.filter(
    (product) => product.metadata.category === category.toLowerCase()
  );
};

export { filterByCategory };
