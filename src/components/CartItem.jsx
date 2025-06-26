import React from "react";
import { Button, Stack } from "react-bootstrap";
import { formatCurrency } from "../utilities/formatCurrency";
import storeItems from "../data/storeItems.json";
import { useShoppingCart } from "../context/ShoppingCartContext";

export function CartItem({ id, quantity }) {
  const { name, price, imgUrl } = storeItems.find((item) => item.id === id);
  const { removeItem } = useShoppingCart();

  return (
    <Stack direction="horizontal" gap={3}>
      <img
        src={imgUrl}
        alt="google phone"
        style={{
          objectFit: "cover",
          width: "min(25%, 125px)",
          aspectRatio: "5 / 3",
        }}
      />
      <div className="me-auto">
        <div className="d-flex flex-column" style={{ gap: ".25rem" }}>
          <div
            className="d-flex align-items-baseline"
            style={{ gap: ".25rem", lineHeight: "1" }}
          >
            {name}
            <span className="text-muted" style={{ fontSize: ".65rem" }}>
              x{quantity}
            </span>
          </div>
          <div
            className="text-muted"
            style={{ fontSize: ".75rem", lineHeight: "1" }}
          >
            {formatCurrency(price)}
          </div>
        </div>
      </div>
      <div className="fw-bold">{formatCurrency(price * quantity)}</div>
      <Button variant="outline-danger" size="sm" onClick={() => removeItem(id)}>
        &times;
      </Button>
    </Stack>
  );
}
