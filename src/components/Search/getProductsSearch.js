const getProductsSearch = (products, search) => {
  return products.filter((search) => {
    if (search !== "") {
      return search.name.toLowerCase().includes(search.toLowerCase());
    } else return true;
  });
};

export { getProductsSearch };
