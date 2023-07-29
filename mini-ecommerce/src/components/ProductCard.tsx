import { ProductType } from "../context/ProductsProvider";
import { CartAction, CartActionType } from "../context/CartProvider";

type Props = {
  product: ProductType;
  dispatch: React.Dispatch<CartAction>;
  CART_ACTION: CartActionType;
  inCart: boolean;
};

export default function ProductCard({
  product,
  dispatch,
  CART_ACTION,
  inCard,
}: Props): React.ReactElement {
  // Dynamically retrieve image link for vite
  const img: string = new URL(
    `../assets/images/${product.id}.jpg`,
    import.meta.url
  ).href;

  const handleAddToCart = () =>
    dispatch({ type: CART_ACTION.ADD, payload: { ...product, quantity: 1 } });

  return (
    <div className="cart__container">
      <img src={img} className="productCard__image" alt={product.name} />
      <div className="productCard__info">
        <h3 className="productCard__name">{product.name}</h3>
        <h5 className="productCard__price">
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "GBP",
          }).format(product.price)}
        </h5>
      </div>
      <button onClick={handleAddToCart} className="productCard__add-btn">
        Add to Cart
      </button>
    </div>
  );
}
