import Link from 'next/link';
import { useEffect } from 'react';

interface CartModalProps {
  cart: any; // Define the type of your cart, or use `any` for now
  addToCart: (product: any) => void;
  removeFromCart: (productId: number) => void;
  clearCart: () => void;
  isVisible: boolean;
  onClose: () => void;
}

export default function CartModal({
  cart,
  addToCart,
  removeFromCart,
  clearCart,
  isVisible,
  onClose,
}: CartModalProps) {
  // Close the modal if the user clicks outside of it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const modalElement = document.querySelector('.cart-modal');
      if (modalElement && !modalElement.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isVisible) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  const handleRemoveAll = () => {
    clearCart();
    onClose(); // Close modal after removing all items
  };

  return (
    <div className="cart-modal">
      <div className="cart-head">
        <h6>Cart ({cart.length})</h6>
        <span onClick={handleRemoveAll} aria-label="Remove All">
          Remove All
        </span>
      </div>

      {/* Render your cart items */}
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item: any) => (
            <li key={item.id}>
              <div className="item-info"> 
                <div>{item.name}</div>  
                <div>${item.price.toLocaleString()}</div> 
              </div>
              <span>
                <input
                  type="number"
                  value={item.quantity || 0}
                  onChange={(e) => {
                    const value = parseInt(e.target.value);
                    if (value === 0) {
                      removeFromCart(item.id);
                    }
                  }}
                />
              </span>                          
            </li>
          ))}
        </ul>
      )}

      {/* Add the checkout button using Link */}
      <div className="checkout">
        <Link href="/checkout">
          <button disabled={cart.length === 0}>
            Proceed to Checkout
          </button>
        </Link>
      </div>
    </div>
  );
}
