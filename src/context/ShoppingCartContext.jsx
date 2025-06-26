import { createContext, useContext, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const ShoppingCartContext = createContext({});

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useLocalStorage("react-shopping-cart", []);

  function openCart() {
    setIsOpen(true);
  }

  function closeCart() {
    setIsOpen(false);
  }

  function getItemQuantity(id) {
    return cartItems.find((cartItem) => cartItem.id === id)?.quantity || 0;
  }

  function increaseQuantity(id) {
    setCartItems((currentCartItems) => {
      if (currentCartItems.find((cartItem) => cartItem.id === id) == null) {
        return [...currentCartItems, { id, quantity: 1 }];
      } else {
        return currentCartItems.map((cartItem) => {
          if (cartItem.id === id) {
            return { ...cartItem, quantity: cartItem.quantity + 1 };
          } else {
            return cartItem;
          }
        });
      }
    });
  }

  function decreaseQuantity(id) {
    setCartItems((currentCartItems) => {
      if (
        currentCartItems.find((cartItem) => cartItem.id === id)?.quantity === 1
      ) {
        return currentCartItems.filter((cartItem) => cartItem.id !== id);
      } else {
        return currentCartItems.map((cartItem) => {
          if (cartItem.id === id) {
            return { ...cartItem, quantity: cartItem.quantity - 1 };
          } else {
            return cartItem;
          }
        });
      }
    });
  }

  function removeItem(id) {
    setCartItems((currentCartItems) =>
      currentCartItems.filter((cartItem) => cartItem.id !== id)
    );
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        isOpen,
        openCart,
        closeCart,
        cartItems,
        getItemQuantity,
        increaseQuantity,
        decreaseQuantity,
        removeItem,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
