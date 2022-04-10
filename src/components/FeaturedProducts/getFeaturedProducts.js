const getFeaturedProducts = (products) => {
  const featuredProduct = ({ metadata }) => {
    return metadata.featured === "yes";
  };

  const filteredProducts = products.filter(featuredProduct);
  return filteredProducts;
};

export { getFeaturedProducts };
