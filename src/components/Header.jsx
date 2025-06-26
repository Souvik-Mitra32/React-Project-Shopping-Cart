import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";

export function Header() {
  const { openCart, cartItems } = useShoppingCart();
  return (
    <Navbar sticky="top" className="shadow-sm bg-white mb-3">
      <Container>
        <Nav className="me-auto">
          <Nav.Link as={NavLink} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to="/store">
            Store
          </Nav.Link>
          <Nav.Link as={NavLink} to="/about">
            About
          </Nav.Link>
        </Nav>
        {cartItems.length > 0 && (
          <Button
            variant="outline-primary"
            className="rounded-circle"
            style={{ height: "3rem", width: "3rem", position: "relative" }}
            onClick={openCart}
          >
            <svg viewBox="0 0 576 512">
              <path d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
            </svg>
            <div
              className="rounded-circle bg-danger text-white"
              style={{
                height: "1.5rem",
                width: "1.5rem",
                position: "absolute",
                right: "0",
                bottom: "0",
                transform: "translate(25%, 25%)",
              }}
            >
              {cartItems.length}
            </div>
          </Button>
        )}
      </Container>
    </Navbar>
  );
}
