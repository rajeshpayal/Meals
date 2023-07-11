import React, { useContext, useState } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import Checkout from "./Checkout";
import { toast } from 'react-toastify';
import AddShoppingCartSharpIcon from '@mui/icons-material/AddShoppingCartSharp';
const Cart = (props) => {
  const [isCheckoutShown, setIsCheckoutShown] = useState(false);
  const cartctx = useContext(CartContext);

  const closeModalHandler = () => {
    props.closeModal();
  };

  const cartItemRemove = (id) => {
    toast("Meal is removed from cart")
    cartctx.removeItem(id);
  };

  const cartItemAdd = (item) => {
    toast("Meal is added to cart", {
      icon: <AddShoppingCartSharpIcon />
    })
    cartctx.addItem({ ...item, amount: 1 });
  };

  const checkoutHandler = () => {
    setIsCheckoutShown(true);
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
      {isCheckoutShown && <Checkout onCancel={closeModalHandler} />}
      <div className={classes.actions}>
        {!isCheckoutShown && (
          <button
            className={classes["button--alt"]}
            onClick={closeModalHandler}
          >
            Close
          </button>
        )}
        {(hasItems && !isCheckoutShown) && (
          <button className={classes.button} onClick={checkoutHandler}>
            Order
          </button>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
