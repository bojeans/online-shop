import Product from "../Product";
import formatAmount from "../../utils/formatAmount";
import React from "react";

const FeaturedProducts = ({ products, setIsFeaturedDisplayed }) => {
  return (
    <div className="featuredProducts">
      <h2>Featured Products</h2>

      <div className="button">
        <button
          data-testid="close-button"
          onClick={() => setIsFeaturedDisplayed(false)}
        >
          Close
        </button>
      </div>

      <div className="featuredProductsContainer">
        {products.map((product) => (
          <Product
            key={product.id}
            image={product.images[0]}
            name={product.name}
            description={product.description}
            price={formatAmount(product.prices[0].unit_amount)}
            priceId={product.prices[0].id}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
