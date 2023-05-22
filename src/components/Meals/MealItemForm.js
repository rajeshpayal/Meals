import React, { useState } from "react";

import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  // amount is the numbers of quanity of an item
  const [amount, setAmount] = useState(0);
  const [numItem, setNumItem] = useState(0);
  const [error, setError] = useState(false);
  const submitHandler = (event) => {
    event.preventDefault();
    if (amount < 1 || amount > 5) {
      setError(true);
      return;
    }
    props.onAddToCart(numItem + Number(amount));
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.input}>
        <label htmlFor="amount">Amount</label>
        <input
          label="Amount"
          id="amount"
          type="number"
          min="1"
          max="5"
          defaultValue={"1"}
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <button id={props.id}>+ Add</button>
      {error && <p>Please enter a valid amount (1-5)</p>}
    </form>
  );
};

export default MealItemForm;
