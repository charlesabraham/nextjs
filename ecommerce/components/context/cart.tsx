"use client";

import { IMovie } from "@/lib/interface/album";
import { createContext, useContext, useEffect, useState } from "react";

export interface CartContext {
  items: IMovie[];
  addToCart(album: IMovie): void;
  removeFromCart(album: IMovie): void;
}

const CartContext = createContext<CartContext>({
  items: [],
  addToCart() {},
  removeFromCart() {},
});

const { Provider } = CartContext;

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [items, setItems] = useState<IMovie[]>([]);

  useEffect(() => {
    const cartString = window.localStorage.getItem("cart") || "";
    setItems(JSON.parse(cartString) as IMovie[]);
  }, []);

  const addToCart = (album: IMovie) => {
    const updateCart = [...items, album];
    setItems(updateCart);
    window.localStorage.setItem("cart", JSON.stringify(updateCart));
  };

  const removeFromCart = (album: IMovie) => {
    // setItems([...items, album]);
  };

  return (
    <Provider value={{ items, addToCart, removeFromCart }}>{children}</Provider>
  );
};

const useCart = () => {
  return useContext(CartContext);
};

export { CartProvider, useCart };
