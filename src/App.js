import { useState } from "react";
import Header from "./compnents/Layout/Header";
import Meals from "./compnents/Meal/Meals";
import Cart from "./compnents/Cart/Cart";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const shownCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <>
      {cartIsShown && <Cart onHideCart={hideCartHandler} />}
      <Header onShowCart={shownCartHandler} />
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
