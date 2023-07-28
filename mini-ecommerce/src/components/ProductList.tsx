import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import useProduct from "../hooks/useProduct";
import useCart from "../hooks/useCart";

export default function ProductList() {
  const { dispatch, CART_ACTION, cart } = useCart();
  const { products } = useProduct();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (products.length > 0) {
      setLoading(false);
    }
  }, [products]);

  console.log(products);

  return (
    <>
      {loading ? (
        <h5>Loading ...</h5>
      ) : (
        <div className="product__list-container">
          {products.map((product) => {
            // Check if product is in the cart
            const inCart: boolean = cart.some((item) => item.id === product.id);
            return (
              <ProductCard
                key={product.id}
                product={product}
                dispatch={dispatch}
                CART_ACTION={CART_ACTION}
                inCart={inCart}
              />
            );
          })}
        </div>
      )}
    </>
  );
}
