import { useContext } from "react";
import CartContext from "../context/CartProvider";
import { UseCartContextType } from "../context/CartProvider";

// This hook is used to access data and functions defined in CartProvider.
export default function useCart(): UseCartContextType {
  return useContext(CartContext);
}
