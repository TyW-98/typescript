import React from "react";
import useCart from "../hooks/useCart";

type Props = {
  viewCart: boolean;
};

export default function Footer({ viewCart }: Props) {
  const { totalPrice, totalProducts } = useCart();

  const currentYear: number = new Date().getFullYear();
  return (
    <footer>
      <div className={viewCart ? "" : "footer__container"}>
        {viewCart ? (
          ""
        ) : (
          <div className="footer__info">
            <span className="footer__quantity-info">
              Total Products = {totalProducts}
            </span>
            <span className="footer__total-cost">
              Total Price = {totalPrice}
            </span>
          </div>
        )}
        <p className={viewCart ? "footer__copyright" : ""}>
          Shopping Limited © {currentYear}
        </p>
      </div>
    </footer>
  );
}
