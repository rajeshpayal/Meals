import React, { useContext, useEffect, useState } from "react";
import classes from "./HeaderCartButton.module.css";

import CartContext from "../../store/cart-context";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from "@mui/material";
const HeaderCartButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighLighted] = useState(false);
  const cartCtx = useContext(CartContext);

  const numberOFCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : " "
    }`;

  const { items } = cartCtx;

  useEffect(() => {
    if (cartCtx.items.length === 0) {
      return;
    }
    setBtnIsHighLighted(true);
    const timer = setTimeout(() => {
      setBtnIsHighLighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (

    <Badge color="secondary" badgeContent={numberOFCartItems} onClick={() => props.openModal()} style={{ cursor: "pointer" }}><ShoppingCartIcon /></Badge>


  );
};

export default HeaderCartButton;
