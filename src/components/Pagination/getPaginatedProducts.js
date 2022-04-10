const getPaginatedProducts = (products, limit, page) => {
  const index = (page - 1) * limit;

  return products.slice(index, index + limit);
};

export { getPaginatedProducts };
