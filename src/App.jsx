import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Store } from "./pages/Store";
import { Header } from "./components/Header";
import { Container } from "react-bootstrap";
import { Cart } from "./components/Cart";
import { ShoppingCartProvider } from "./context/ShoppingCartContext.jsx";

function App() {
  return (
    <ShoppingCartProvider>
      <Header />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Container>
      <Cart />
    </ShoppingCartProvider>
  );
}

export default App;
