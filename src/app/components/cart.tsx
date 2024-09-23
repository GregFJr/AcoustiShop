"use client";

interface CartModalProps {
  cart: any; // Define the type of your cart, or use `any` for now
  addToCart: (product: any) => void;
  removeFromCart: (productId: number) => void;
  isVisible: boolean;
  onClose: () => void;
}

export default function CartModal({
  cart,
  addToCart,
  removeFromCart,
  isVisible,
  onClose,
}: CartModalProps) {
  if (!isVisible) return null;

  return (
    <div className="cart-modal">
      <div className="cart-head">
        <h6>Cart ({cart.length})</h6>
        <button onClick={onClose} aria-label="Close Cart">
          Close
        </button>
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
    </div>

  );
}
