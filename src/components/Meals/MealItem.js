import React, { useContext } from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../store/cart-context";
const MealItem = ({ name, idx, description, price, id }) => {
  const cartctx = useContext(CartContext);
  const amount = `$${price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartctx.addItem({ id: id, name: name, amount: amount, price: price });
  };
  return (
    <li key={idx} className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{amount}</div>
      </div>
      <div>
        <MealItemForm key={id} id={id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
