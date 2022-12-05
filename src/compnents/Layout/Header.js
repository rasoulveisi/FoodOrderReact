import classes from "./Header.module.css";
import headerImage from "../../assets/meals.jpg";
import HeaderButton from "./HeaderButton";
const Header = () => {
  return (
    <>
      <header className={classes.header}>
        <h1>MealsCart</h1>
        <HeaderButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={headerImage} />
      </div>
    </>
  );
};

export default Header;
