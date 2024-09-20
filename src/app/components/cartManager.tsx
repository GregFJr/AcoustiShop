"use client";

// CartManager.tsx
"use client";

import { useState } from "react";
import CartModal from "./cart";
import { useCart } from "../hooks/useCart";
import Nav from "./nav";

export default function CartManager({ children }: { children: React.ReactNode }) {
  const { cart, addToCart, removeFromCart } = useCart();
  const [isCartVisible, setIsCartVisible] = useState(false);

  const toggleCart = () => {
    setIsCartVisible(!isCartVisible);
  };

  return (
    <>
      <Nav onCartClick={toggleCart} />
      <CartModal
        cart={cart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        isVisible={isCartVisible}
        onClose={toggleCart}
      />
      {children}
    </>
  );
}

