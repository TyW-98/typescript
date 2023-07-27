import { createContext, useState, useEffect } from "react";

export type ProductType = {
  id: string;
  name: string;
  price: number;
};

// Initialise starting value of Products
// const initProductState: ProductType[] = [
//   {
//     id: "product0001",
//     name: "Widget",
//     price: 9.99,
//   },
//   {
//     id: "product0002",
//     name: "Premium Widget",
//     price: 39.99,
//   },
//   {
//     id: "product0003",
//     name: "Premium Delux Widget",
//     price: 79.99,
//   },
// ];

const initProductState: ProductType[] = [];

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

  useEffect(() => {
    const fetchProductsData = async (): Promise<ProductType[]> => {
      const data = await fetch("http://localhost:3500/products")
        .then((res) => res.json())
        .catch((err) => {
          if (err instanceof Error) console.log(err.message);
        });
    };
  }, []);

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContext;
