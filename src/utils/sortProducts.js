const sortProducts = (products, sort) => {
  return products.sort((a, b) => {
    if (sort === "high") {
      return b.prices[0].unit_amount - a.prices[0].unit_amount;
    }

    if (sort === "low") {
      return a.prices[0].unit_amount - b.prices[0].unit_amount;
    }

    if (sort === "latest") {
      return b.created - a.created;
    }

    return products;
  });
};

export { sortProducts };
