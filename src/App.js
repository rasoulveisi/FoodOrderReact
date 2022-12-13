import { useState } from "react";
import Header from "./compnents/Layout/Header";
import Products from "./compnents/Products/Products";
import Cart from "./compnents/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const shownCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <CartProvider>
      {cartIsShown && <Cart onHideCart={hideCartHandler} />}
      <Header onShowCart={shownCartHandler} />
      <main>
        <Products />
      </main>
    </CartProvider>
  );
}

export default App;
