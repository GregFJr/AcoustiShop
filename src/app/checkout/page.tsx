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
              <input type="text" placeholder="Phone Number" data-name="phone-number"/>
            </label>
          </div>
    {/*------------------------------Shipping-----------------------------------------------------------*/}
          <div className="shipping-info">
            <h5>Shipping info</h5>
            <label htmlFor="adress">Address
                <input type="text" placeholder="Address" data-name="address" />
            </label>

                <div>
                    <label htmlFor="zip">Zip
                        <input type="text" placeholder="100001" data-name="zip" />
                    </label>

                    <label htmlFor="city">City
                        <input type="text" placeholder="New York" data-name="city" />
                    </label>
                </div>

                <label htmlFor="country">Country
                    <input type="text" placeholder="United States" data-name="country" />
                </label>
          </div>
{/*------------------------------Payment-----------------------------------------------------------*/}
          <div className="payment-details">
            <h5>Payment Details</h5>
            <div className="checkboxes">
                <input type="checkbox" data-name="e-money" />
                <input type="checkbox" data-name="Cash on Delivery" />
            </div>
          </div>

        <div className="e-money-container">
          <label htmlFor="e-money number">
            E-Money Number
            <input type="text" placeholder="1234567890" data-name="e-money-number" />
          </label>

          <label htmlFor="e-money pin">
            E-Money Pin
            <input type="text" placeholder="1234" data-name="e-money-pin" />
          </label>
        </div>

        </form>
      </section>

      <div className="cart-summary">
        <h6>Summary</h6>
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
                   <div>{item.name}</div> <div> ${(item.price * item.quantity).toFixed(2)}</div>
                  </span>
                  <span>x{item.quantity}</span>
                </li>
              )
            )}
          </ul>
        )}
<div className="total">
  
    <div>
   <h3> Total </h3>
    ${new Intl.NumberFormat('en-US', { 
      minimumFractionDigits: 2, 
      maximumFractionDigits: 2 
    }).format(
      cart.reduce(
        (total: number, item: { price: number; quantity: number }) =>
          total + item.price * item.quantity,
        0
      )
    )}
    </div>
  
  
  <div>
   <h3> Shipping</h3>
    ${cart.reduce((total: number, item: { quantity: number }) => total + item.quantity, 0) > 4 ? 'Free' : '50.00'}
  </div>

  
<div>
   <h3>VAT included</h3>
    ${new Intl.NumberFormat('en-US', { 
      minimumFractionDigits: 2, 
      maximumFractionDigits: 2 
    }).format(
      cart.reduce(
        (total: number, item: { price: number; quantity: number }) =>
          total + item.price * item.quantity,
        0
      ) * 0.08
    )}
 </div>
  
  
<div>
   <h3> Grand total</h3>
   <span> ${new Intl.NumberFormat('en-US', { 
      minimumFractionDigits: 2, 
      maximumFractionDigits: 2 
    }).format(
      cart.reduce(
        (total: number, item: { price: number; quantity: number }) =>
          total + item.price * item.quantity,
        0
      ) +
      (cart.reduce((total: number, item: { quantity: number }) => total + item.quantity, 0) > 4 ? 0 : 50) +
      (cart.reduce(
        (total: number, item: { price: number; quantity: number }) =>
          total + item.price * item.quantity,
        0
      ) * 0.08)
    )}</span>
    </div>
  
</div>

    <button type="submit">Continue & Pay</button>
      </div>
    </div>
  );
}
