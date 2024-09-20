import useSWR from 'swr';

const fetchCart = (key: string) => {
  if (typeof window !== 'undefined') {
    const cartData = localStorage.getItem(key);
    return cartData ? JSON.parse(cartData) : [];
  }
  return [];
};

export const useCart = () => {
  const { data: cart, mutate } = useSWR('cart', fetchCart, {
    fallbackData: [],
    revalidateOnFocus: false, // To avoid re-fetching on focus
  });

  const addToCart = (product: any) => {
    const updatedCart = [...cart, product];
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    mutate(updatedCart, false); // Update cart without re-fetching
  };

  const removeFromCart = (productId: number) => {
    const updatedCart = cart.filter((item: any) => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    mutate(updatedCart, false); // Update cart without re-fetching
  };

  return {
    cart,
    addToCart,
    removeFromCart,
  };
};
