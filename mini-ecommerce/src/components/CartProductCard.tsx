import React from "react";
import { ProductType } from "../context/ProductsProvider";
import DropDownQuantity from "./DropDownQuantity";
import {
  CartAction,
  CartActionType,
  CartItemType,
} from "../context/CartProvider";

type Props = {
  item: CartItemType;
  dispatch: React.Dispatch<CartAction>;
  CART_ACTION: CartActionType;
};

export default function CartProductCard({
  item,
  dispatch,
  CART_ACTION,
}: Props) {
  const img: string = new URL(
    `../assets/images/${item.id}.jpg`,
    import.meta.url
  ).href;

  const calculateCost: number = item.price * item.quantity;

  function handleRemoveProduct() {
    dispatch({ type: CART_ACTION.REMOVE, payload: item });
  }

  function numToCurrency(value: number): string {
    const currencyValue = new Intl.NumberFormat("en-us", {
      style: "currency",
      currency: "GBP",
    }).format(value);
    return currencyValue;
  }

  console.log(item.price);

  return (
    <div className="cart__product-card-container">
      <div className="cart__product-card-details">
        <div className="cart__product-image-div">
          <img src={img} className="cart__product-img" alt={item.name} />
        </div>
        <h3 className="cart__product-name" aria-label="Product Name">
          {item.name}
        </h3>
      </div>
      <h3 className="cart_-product-price" aria-label="Price per item">
        {numToCurrency(item.price)} per Item
      </h3>
      <DropDownQuantity
        item={item}
        quantity={item.quantity}
        dispatch={dispatch}
        CART_ACTION={CART_ACTION}
      />
      <h3 className="cart__product-total-cost" aria-label="Product Total Cost">
        {numToCurrency(calculateCost)}
      </h3>
      <button
        className="cart__remove-product-btn"
        aria-label="Remove Product From Cart"
        onClick={handleRemoveProduct}
      >
        ❌
      </button>
    </div>
  );
}
