import React, { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import Button from "../button/button.component";
import "./product-card.styles.scss";
const ProductCart = ({ product }) => {
  const { id, name, price, imageUrl } = product;
  const { addProductsToCart } = useContext(CartContext);
  const productToAdd = () => addProductsToCart(product);
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
      <button onClick={productToAdd}>Add to cart</button>
    </div>
  );
};

export default ProductCart;
