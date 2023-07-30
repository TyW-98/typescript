import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

export default function App() {
  const [viewCart, setViewCart] = useState<boolean>(false);

  return (
    <>
      <Header viewCart={viewCart} setViewCart={setViewCart} />
      {viewCart ? <Cart /> : <ProductList />}
      <Footer viewCart={viewCart} />
    </>
  );
}
