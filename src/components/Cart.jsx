import React from "react";
import { Offcanvas, Stack } from "react-bootstrap";
import { CartItem } from "./CartItem";
import { formatCurrency } from "../utilities/formatCurrency";
import { useShoppingCart } from "../context/ShoppingCartContext";
import storeItems from "../data/storeItems.json";

export function Cart() {
  const { isOpen, closeCart, cartItems } = useShoppingCart();
  const cartTotal = cartItems
    .map(
      (cartItem) =>
        storeItems.find((storeItem) => storeItem.id === cartItem.id)?.price *
        cartItem.quantity
    )
    .reduce((a, c) => a + c, 0);

  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Stack className="px-3 mt-2" gap={3}>
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} {...cartItem} />
        ))}
        <div className="fw-bold text-end" style={{ fontSize: "1.25rem" }}>
          Total: {formatCurrency(cartTotal)}
        </div>
      </Stack>
    </Offcanvas>
  );
}
