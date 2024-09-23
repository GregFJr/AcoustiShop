"use client"

import { useCart } from '../hooks/useCart'; // Make sure the path is correct

export default function CheckoutPage() {
  const { cart } = useCart(); // Access the cart from useCart hook

  return (
    <div className="checkout-container">
      <h1>Checkout</h1>

      <div className="cart-summary">
        <h2>Your Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cart.map((item: any) => ( // Add proper typing for `item` based on your product structure
              <li key={item.id}>
                <span>{item.name} x {item.quantity}</span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </li>
            ))}
          </ul>
        )}
        <div className="total">
          <h3>
            Total: ${cart.reduce(
              (total: number, item: { price: number; quantity: number }) => total + item.price * item.quantity, 0
            ).toFixed(2)}
          </h3>
        </div>
      </div>
    </div>
  );
}
