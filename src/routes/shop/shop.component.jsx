import React, { useContext } from "react";
import ProductCart from "../../components/product-cart/product-card.component";
import { ProductContext } from "../../contexts/products.context";
import "./shop.style.scss";

const Shop = () => {
  const { products } = useContext(ProductContext);
  return (
    <>
      <div className="products-container">
        {products.map((product) => {
          return <ProductCart key={product.id} product={product} />;
        })}
      </div>
    </>
  );
};

export default Shop;
