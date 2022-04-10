const getCategories = (products) => {
  const categories = [];

  for (const product of products) {
    // capitalise first letter of the category
    // https://www.digitalocean.com/community/tutorials/js-capitalizing-strings
    let category = product.metadata.category
      .trim()
      .toLowerCase()
      .replace(/\w\S*/g, (w) => w.replace(/^\w/, (c) => c.toUpperCase()));

    if (!categories.includes(category)) {
      categories.push(category);
    }
  }

  return categories;
};

export { getCategories };
