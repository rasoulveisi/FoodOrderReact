import classes from "./HeaderButton.module.css";
import CartIcon from "../Cart/CartIcon";

const HeaderButton = () => {
  return (
    <button className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>CartList</span>
      <span className={classes.badge}>3</span>
    </button>
  );
};

export default HeaderButton;
