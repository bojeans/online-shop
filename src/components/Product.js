const Product = (name, images, description, price, id) => {
  return (
    <li>
      <img src={images} alt={name} />
      <h2>{name}</h2>
      <p>{description}</p>
      <p>{price}</p>
      <button>Buy Now</button>
    </li>
  );
};

export default Product;
