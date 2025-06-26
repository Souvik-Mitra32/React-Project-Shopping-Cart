import React from "react";
import { Button, Card } from "react-bootstrap";
import { formatCurrency } from "../utilities/formatCurrency";
import { useShoppingCart } from "../context/ShoppingCartContext";

export function StoreItem({ id, name, price, imgUrl }) {
  const { getItemQuantity, increaseQuantity, decreaseQuantity, removeItem } =
    useShoppingCart();
  return (
    <Card>
      <Card.Img
        variant="top"
        src={imgUrl}
        height="200px"
        style={{ objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column" style={{ gap: "1rem" }}>
        <Card.Title className="d-flex align-items-baseline">
          <div className="me-auto">{name}</div>
          <div className="text-muted fs-6 ms-2">{formatCurrency(price)}</div>
        </Card.Title>
        {getItemQuantity(id) === 0 ? (
          <Button onClick={() => increaseQuantity(id)}>+ Add to Cart</Button>
        ) : (
          <div
            className="d-flex flex-column align-items-center"
            style={{ gap: ".5rem" }}
          >
            <div className="d-flex" style={{ gap: ".5rem" }}>
              <Button onClick={() => decreaseQuantity(id)}>-</Button>
              <div>
                <span className="fs-2">{getItemQuantity(id)}</span> in cart
              </div>
              <Button onClick={() => increaseQuantity(id)}>+</Button>
            </div>
            <Button variant="danger" size="sm" onClick={() => removeItem(id)}>
              Remove
            </Button>
          </div>
        )}
      </Card.Body>
    </Card>
  );
}
