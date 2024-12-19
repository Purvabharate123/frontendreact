import React, { useState } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Menu from "./Menu";
import Cart from "./Cart";
import PaymentForm from "./PaymentForm";

const Main = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };

  return (
    <>
      <Navbar />
      <Hero />
      <Menu addToCart={addToCart} />
      <Cart cart={cart} removeFromCart={removeFromCart} />
      <PaymentForm />
    </>
  );
};

export default Main;
