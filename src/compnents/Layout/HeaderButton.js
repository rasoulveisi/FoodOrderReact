import { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import CartContex from "../../store/cart-contex";
import classes from "./HeaderButton.module.css";

const HeaderButton = (props) => {
  const cartCtx = useContext(CartContex);

  const numberOfCartItems = cartCtx.items.reduce((curNum, item) => {
    return curNum + item.amount;
  }, 0);

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>CartList</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderButton;
