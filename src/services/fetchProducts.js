const getProductsWithPrices = (products, prices) =>
  products.data.map((product) => ({
    prices: prices.data.filter((price) => price.product === product.id),
    ...product,
  }));

const fetchProducts = async () => {
  const res1 = await fetch(`${process.env.REACT_APP_API_URL}/products`);
  const products = await res1.json();
  console.log(products)

  const res2 = await fetch(`${process.env.REACT_APP_API_URL}/prices`);
  const prices = await res2.json();
  console.log(prices)

  return getProductsWithPrices(products, prices);
};


export { fetchProducts }