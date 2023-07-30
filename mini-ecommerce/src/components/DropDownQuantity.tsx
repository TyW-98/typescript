import React, { useState, ChangeEvent } from "react";
import {
  CartAction,
  CartActionType,
  CartItemType,
} from "../context/CartProvider";

type Props = {
  item: CartItemType;
  quantity: number;
  dispatch: React.Dispatch<CartAction>;
  CART_ACTION: CartActionType;
};

export default function DropDownQuantity({
  item,
  quantity,
  dispatch,
  CART_ACTION,
}: Props) {
  const quantityArray = Array.from({ length: 10 }, (_, index) => index + 1);

  function handleDropdownMenu(event: ChangeEvent<HTMLSelectElement>) {
    dispatch({
      type: CART_ACTION.QUANTITY,
      payload: { ...item, quantity: Number(event.target.value) },
    });
  }

  return (
    <>
      <label htmlFor="quantity">Quantity</label>
      <select
        className="dropdown__container"
        value={quantity}
        onChange={handleDropdownMenu}
        id="quantity"
        aria-label="Item Quantity"
      >
        {quantityArray.map((value) => {
          return (
            <option value={value} key={value}>
              {value}
            </option>
          );
        })}
      </select>
    </>
  );
}
