import React from "react";
import classes from "./AvailableMeals.module.css";
import { DUMMY_MEALS } from "./Dummy_meals";
import Card from "../UI/Card";
import MealItem from "./MealItem";
const AvailableMeals = () => {
  return (
    <section className={classes.meals}>
      <Card>
        <ul>
          {DUMMY_MEALS.map((meal, idx) => (
            <MealItem
              key={idx}
              name={meal.name}
              id={meal.id}
              description={meal.description}
              price={meal.price}
            />
          ))}
        </ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
