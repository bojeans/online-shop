const getProductsBySearch = (products, searchPrefix) => {
  return products.filter((search) => {
    if (searchPrefix !== "") {
      return search.name.toLowerCase().includes(searchPrefix.toLowerCase());
    } else return true;
  });
};

export { getProductsBySearch };
