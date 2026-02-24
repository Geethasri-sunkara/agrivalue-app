import { createContext, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <ProductContext.Provider
      value={{ products, addProduct, cart, addToCart }}
    >
      {children}
    </ProductContext.Provider>
  );
};