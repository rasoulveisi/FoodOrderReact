import classes from "./Header.module.css";
import headerImage from "../../assets/meals.jpg";
import HeaderButton from "./HeaderButton";
const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>Product Cart</h1>
        <HeaderButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={headerImage} />
      </div>
    </>
  );
};

export default Header;
