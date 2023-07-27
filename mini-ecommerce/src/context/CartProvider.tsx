import { createContext, useReducer, useMemo, useState } from "react";

export type CartItemType = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

type CartStateType = { cart: CartItemType[] };

// Initial state of cart
const initCartState: CartStateType = { cart: [] };

const Cart_Action_Type = {
  ADD: "ADD",
  REMOVE: "REMOVE",
  QUANTITY: "QUANTITY",
  SUBMIT: "SUBMIT",
};

export type CartActionType = typeof Cart_Action_Type;

export type CartAction = {
  type: string;
  payload?: CartItemType;
};

const reducer = (state: CartStateType, action: CartAction): CartStateType => {
  switch (action.type) {
    // Add product to cart
    case Cart_Action_Type.ADD: {
      if (!action.payload) {
        throw new Error("action.payload missing in ADD action");
      }
      // Get product details
      const { id, name, price } = action.payload;
      // Filter products that is not updating
      const filterCart: CartItemType[] = state.cart.filter(
        (item) => item.id !== id
      );
      // Find product which is being updated
      const updateItem: CartItemType | undefined = state.cart.find(
        (item) => item.id === id
      );
      // Update the quantity of the product. If product not in cart, change product quantity to 1
      const quantity: number = updateItem ? updateItem.quantity + 1 : 1;
      // Spread products not being updated first before adding the product that is being updated.
      return { ...state, cart: [...filterCart, { id, name, price, quantity }] };
    }
    // Completely remove product from Cart
    case Cart_Action_Type.REMOVE: {
      if (!action.payload) {
        throw new Error("action.payload missing in REMOVE action");
      }

      const { id } = action.payload;

      const filterCart: CartItemType[] = state.cart.filter(
        (item) => item.id !== id
      );

      return { ...state, cart: [...filterCart] };
    }
    // Reduce product quantity from cart
    case Cart_Action_Type.QUANTITY: {
      if (!action.payload) {
        throw new Error("action.payload missing in QUANTITY action");
      }
      const { id, quantity } = action.payload;
      const filterCart: CartItemType[] = state.cart.filter(
        (item) => item.id !== id
      );
      const updateItem: CartItemType | undefined = state.cart.find(
        (item) => item.id === id
      );

      if (!updateItem) {
        throw new Error("Not such product in cart");
      }

      const updatedItem: CartItemType = { ...updateItem, quantity: quantity };

      return { ...state, cart: [...filterCart, updatedItem] };
    }
    case Cart_Action_Type.SUBMIT: {
      return { ...state, cart: [] };
    }
    default:
      throw new Error("Unidentified reducer action type");
  }
};

const useCartContext = (initCartState: CartStateType) => {
  const [state, dispatch] = useReducer(reducer, initCartState);

  // Use to memorise different types of action, to prevent Cart_Action_Type to cause re-render in the future.
  const CART_ACTION = useMemo(() => Cart_Action_Type, []);

  // It is a loop calculation where the prevValue is the accumulation of previous iteratations.
  // prevValue starts with 0 and each loop will add cartItem.quantity to it
  // In the end it will return a total sum of the product quantity in the cart.
  const totalProducts: number = state.cart.reduce((prevValue, cartItem) => {
    return prevValue + cartItem.quantity;
  }, 0);

  // Format it to include currency automatically
  const totalPrice = new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
    maximumFractionDigits: 2,
  }).format(
    state.cart.reduce((prevCost, cartItem) => {
      return prevCost + (cartItem.quantity * cartItem.price);
    }, 0)
  );

  // Ordering products in cart ascendingly.
  const cart = state.cart.sort((a,b) => {
    const productA = Number(a.id.slice(-4))
    const productB = Number(b.id.slice(-4))

    return productA - productB // Comparison function. If negative, productA will be first, if postive, productB will be first.
  })

  return {dispatch, CART_ACTION, totalPrice, totalProducts, cart}
};

export type UseCartContextType = ReturnType<typeof useCartContext>

// Initial state of cart context
const initCartContextState: UseCartContextType = {
    dispatch: () => {},
    CART_ACTION: Cart_Action_Type,
    totalPrice: "",
    totalProducts: 0,
    cart: []
}

export const CartContext = createContext<UseCartContextType>(initCartContextState)

type ChildrenType = {children ?: React.ReactElement | React.ReactElement[]}

export const CartProvider({children}:ChildrenType): React.ReactElement => {

    return (
        // Use useCartContext on initial state to create starting context
        <CartContext.Provider value={useCartContext(initCartState)}>
            {children}
        </CartContext.Provider>
    )
}