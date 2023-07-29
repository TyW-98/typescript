import { useContext } from "react";
import ProductsContext from "../context/ProductsProvider";
import { UseProductsContextType } from "../context/ProductsProvider";

export default function useProduct(): UseProductsContextType {
  return useContext(ProductsContext);
}
