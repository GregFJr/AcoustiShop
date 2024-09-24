"use client";

import { useCart } from "../hooks/useCart"; // Make sure the path is correct

export default function CheckoutPage() {
  const { cart } = useCart(); // Access the cart from useCart hook

  return (
    <div className="checkout-container">
      <section className="checkout-form">
        <h1>Checkout</h1>
        <form>
          <div className="billing-details">
            <h5>Billing Details</h5>
            <div>
              <label htmlFor="name">
                Name
                <input type="text" placeholder="Name" data-name="name" />
              </label>
              <label htmlFor="email">
                Email
                <input type="text" placeholder="Email" data-name="email" />
              </label>
            </div>

            <label htmlFor="phone-number">
              Phone Number
              <input
                type="text"
                placeholder="Phone Number"
                data-name="phone-number"
              />
            </label>
          </div>

          <label htmlFor="address">Address</label>
          <input type="text" placeholder="Address" data-name="address" />
          {/* Payment method selection */}
          <select>
            <option value="credit">Credit Card</option>
            <option value="debit">Debit Card</option>
            <option value="paypal">PayPal</option>
          </select>
          {/* Submit button */}
          <button type="submit">Submit Order</button>
        </form>
      </section>

      <div className="cart-summary">
        <h2>Your Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cart.map(
              (
                item: any // Add proper typing for `item` based on your product structure
              ) => (
                <li key={item.id}>
                  <span>
                    {item.name} x {item.quantity}
                  </span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </li>
              )
            )}
          </ul>
        )}
        <div className="total">
          <h3>
            Total: $
            {cart
              .reduce(
                (total: number, item: { price: number; quantity: number }) =>
                  total + item.price * item.quantity,
                0
              )
              .toFixed(2)}
          </h3>
        </div>
      </div>
    </div>
  );
}
