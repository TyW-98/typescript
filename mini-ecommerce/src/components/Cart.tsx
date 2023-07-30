import React, { useState } from "react";
import useCart from "../hooks/useCart";
import CartProductCard from "./CartProductCard";
import Purchased from "./Purchased";

export default function Cart() {
  const [purchased, setPurchased] = useState(false);
  const [productInCart, setProductInCart] = useState(true);
  const { dispatch, CART_ACTION, totalPrice, totalProducts, cart } = useCart();

  function handlePurchase() {
    dispatch({ type: CART_ACTION.SUBMIT });
    setPurchased(true);
  }

  return (
    <div className="cart__container">
      <div className="cart__main">
        {purchased ? (
          <Purchased />
        ) : productInCart ? (
          <div className="cart__body">
            {cart.map((item) => {
              return (
                <CartProductCard
                  key={item.id}
                  item={item}
                  dispatch={dispatch}
                  CART_ACTION={CART_ACTION}
                />
              );
            })}
            <div className="cart__summary">
              <div>
                <p>Total Price = {totalPrice}</p>
                <p>Number of Products = {totalProducts}</p>
              </div>
              <button onClick={handlePurchase} className="cart__submit">
                Pay Now
              </button>
            </div>
          </div>
        ) : (
          <h1 className="cart__empty-msg">No Product in cart</h1>
        )}
      </div>
    </div>
  );
}
