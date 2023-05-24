import { useContext, useRef, useState } from "react";
import classes from "./Checkout.module.css";
import axios from "axios";
import { url } from "../../constant/constant";
import CartContext from "../../store/cart-context";

const Checkout = (props) => {
  const cartctx = useContext(CartContext);
  const nameRef = useRef();
  const streetRef = useRef();
  const cityRef = useRef();
  const postalCodeRef = useRef();

  const [sendingRequest, setSendingRequest] = useState(false);
  const [error, setError] = useState({ isError: false, errorMsg: "" });
  const confirmHandler = (event) => {
    event.preventDefault();
    const name = nameRef.current.value;
    const street = streetRef.current.value;
    const city = cityRef.current.value;
    const postalCode = postalCodeRef.current.value;
    if (
      name.trim() === "" ||
      street.trim() === "" ||
      city.trim() === "" ||
      postalCode.trim() === ""
    ) {
      return;
    }
    setSendingRequest(true);
    axios
      .post(`${url}/orders.json`, {
        name,
        street,
        city,
        postalCode,
        items: cartctx.items,
        price: cartctx.price,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        setError({ isError: true, message: error.message });
      })
      .finally(() => {
        setSendingRequest(false);
        cartctx.clearCart();
        nameRef.current.value = "";
        streetRef.current.value = "";
        postalCodeRef.current.value = "";
        cityRef.current.value = "";
      });

    console.log({ name, street, city, postalCode });
  };

  const tryHandler = () => {
    setError({ isError: false, errorMsg: "" });
    nameRef.current.value = "";
    streetRef.current.value = "";
    postalCodeRef.current.value = "";
    cityRef.current.value = "";
  };

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={classes.control}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalCodeRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityRef} />
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        {!error.isError && (
          <button className={classes.submit}>
            {sendingRequest ? "sending" : "Confirm"}
          </button>
        )}
        {error.isError && (
          <button className={classes.submit} onClick={tryHandler}>
            Try Again
          </button>
        )}
      </div>
    </form>
  );
};

export default Checkout;
