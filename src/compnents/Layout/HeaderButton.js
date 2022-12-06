import classes from "./HeaderButton.module.css";
import CartIcon from "../Cart/CartIcon";

const HeaderButton = (props) => {
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>CartList</span>
      <span className={classes.badge}>3</span>
    </button>
  );
};

export default HeaderButton;
