import React, { useEffect, useState } from "react";
import classes from "./AvailableMeals.module.css";

import Card from "../UI/Card";
import MealItem from "./MealItem";
import axios from "axios";
import { url } from "../../constant/constant";


const AvailableMeals = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({ isError: false, errorMsg: "" });

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${url}/meals.json`)
      .then((response) => {
        const { data } = response;
        const loadedMeals = [];
        for (const key in data) {
          loadedMeals.push({
            id: key,
            name: data[key].name,
            price: data[key].price,
            description: data[key].description,
          });
          setData(loadedMeals);
        }
      })
      .catch((err) => setError({ isError: true, errorMsg: err.message }))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <section className={classes.MealsLoading}>
        <p>Loading...</p>
      </section>
    );
  }

  if (error.isError) {
    return (
      <section className={classes.MealsError}>
        <p>{error.errorMsg}</p>
      </section>
    );
  }

  return (
    <section className={classes.meals}>
      <Card>
        <ul>
          {data.map((meal, idx) => (
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
