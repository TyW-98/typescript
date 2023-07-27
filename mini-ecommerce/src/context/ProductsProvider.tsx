import { createContext, useState } from "react";

export type ProductType = {
  id: string;
  name: string;
  price: number;
};

// Initialise starting value of Products
const initProductState: ProductType[] = [
  {
    id: "product0001",
    name: "Widget",
    price: 9.99,
  },
  {
    id: "product0002",
    name: "Premium Widget",
    price: 39.99,
  },
  {
    id: "product0003",
    name: "Premium Delux Widget",
    price: 79.99,
  },
];

export type UseProductsContextType = { products: ProductType[] };

// Initialise starting value of outer products object
const initContextState: UseProductsContextType = { products: [] };

// Product context start with an empty array.
const ProductsContext = createContext<UseProductsContextType>(initContextState);

// Either one element or an array of elements.
type ChildrenType = { children?: React.ReactElement | React.ReactElement[] };

export const ProductsProvider = ({
  children,
}: ChildrenType): React.ReactElement => {
  const [products, setProducts] = useState<ProductType[]>(initProductState);

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContext;
