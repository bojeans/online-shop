const getPaginationLinks = (products, limit) => {
  const numberOfPages = Math.ceil(products.length / limit);
  const pages = [];
  for (let index = 0; index < numberOfPages; index++) {
    pages.push(index + 1);
  }
  return pages;
};

export { getPaginationLinks };
