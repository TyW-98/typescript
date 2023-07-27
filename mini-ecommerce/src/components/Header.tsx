import React, { Dispatch, SetStateAction } from "react";
import useCart from "../hooks/useCart";

type Props = {
  viewCart: boolean;
  setViewCart: Dispatch<SetStateAction<boolean>>;
};

export default function Header({ viewCart, setViewCart }: Props) {
  const { totalProducts, totalPrice } = useCart();

  function handleViewCart(): void {
    setViewCart((prevViewCart) => {
      return !prevViewCart;
    });
  }

  return (
    <>
      <header className="header">
        <div className="header-container">
          <h1 className="title">TxGears</h1>
          <div className="header-cart">
            <span className="header__quantity-info">
              Total Products = {totalProducts}
            </span>
            <span className="header__total-cost">
              Total price = {totalPrice}
            </span>
            <nav className="nav-btn">
              <button
                className="header__view-cart-btn"
                type="submit"
                onClick={handleViewCart}
              >
                {viewCart ? "View Products" : "View Cart"}
              </button>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}
