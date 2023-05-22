import React, { useContext } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
const Cart = (props) => {
  const cartctx = useContext(CartContext);
  const closeModalHandler = () => {
    props.closeModal();
  };

  const cartItemRemove = (id) => {
    cartctx.removeItem(id);
  };

  const cartItemAdd = (item) => {
    cartctx.addItem({ ...item, amount: 1 });
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartctx.items.map((item, idx) => (
        <CartItem
          key={idx}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onAdd={cartItemAdd.bind(null, item)}
          onRemove={cartItemRemove.bind(null, item.id)}
        />
      ))}
    </ul>
  );
  const hasItems = cartctx.items.length > 0;
  return (
    <Modal closeModal={props.closeModal}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>${cartctx.totalAmount.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={closeModalHandler}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
