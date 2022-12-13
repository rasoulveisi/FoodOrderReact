import { useReducer } from "react";
import CartContex from "./cart-contex";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};
const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    const prevCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const prevCartItem = state.items[prevCartItemIndex];
    let updatedItems;

    if (prevCartItem) {
      const updatedItem = {
        ...prevCartItem,
        amount: prevCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[prevCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "REMOVE") {
    const prevCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const prevCartItem = state.items[prevCartItemIndex];

    const updatedTotalAmount = state.totalAmount - prevCartItem.price;
    let updatedItems;

    if (prevCartItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = { ...prevCartItem, amount: prevCartItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[prevCartItemIndex] = updatedItem;
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "CLEAR") {
    return defaultCartState;
  }

  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };
  const removeItemFromHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const clearCartHandler = () => {
    dispatchCartAction({ type: "CLEAR" });
  };

  const cartContex = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromHandler,
    clearCart: clearCartHandler,
  };
  return (
    <CartContex.Provider value={cartContex}>
      {props.children}
    </CartContex.Provider>
  );
};

export default CartProvider;
