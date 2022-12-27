import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({
  isCartOpen: false,
  cartItems: [],
  setIsCartOpen: () => {},
  addProductsToCart: () => {},
  count: 0,
});

const addItemToCart = (cartItems, productToAdd) => {
  const existingItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [count, setCount] = useState(0);

  const addProductsToCart = (productToAdd) => {
    setCartItems(addItemToCart(cartItems, productToAdd));
  };
  useEffect(() => {
    const newCartItems = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCount(newCartItems);
  }, [cartItems]);

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    count,
    addProductsToCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
