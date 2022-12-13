import { useContext } from "react";

import ProductsItemsForm from "./ProductsItemsForm";
import classes from "./ProductsItems.module.css";
import CartContex from "../../../store/cart-contex";

const ProductsItems = (props) => {
  const cartContex = useContext(CartContex);
  const price = `$ ${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartContex.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
  return (
    <li className={classes.products}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <ProductsItemsForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default ProductsItems;
