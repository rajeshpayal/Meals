import React from "react";
import classes from "./Header.module.css";

import mealsImage from "../Images/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>Meal</h1>
        <HeaderCartButton openModal={props.openModal} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="meals" />
      </div>
    </>
  );
};

export default Header;
