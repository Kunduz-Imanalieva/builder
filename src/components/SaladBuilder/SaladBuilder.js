import axios from "axios";
import { useEffect, useState } from "react";
import classes from "./SaladBuilder.module.css";
import SaladControls from "./SaladControls/SaladControls";
import SaladPreview from "./SaladPreview/SaladPreview";
import Modal from "../UI/Modal/Modal";

const SaladBuilder = () => {
  const prices = {
    cucumber: 5,
    lettuce: 4,
    spinach: 0.5,
  };

  const [ingredients, setIngredients] = useState({});
  const [price, setPrice] = useState(0);
  const [ordering, setOrdering] = useState(false);

  useEffect(
    () =>
      axios
        .get("https://builder-e08b0-default-rtdb.firebaseio.com/default.json")
        .then((response) => {
          setPrice(response.data.price);
          setIngredients(response.data.ingredients);
        }),
    []
  );

  function addIngredient(type) {
    const newIngredients = { ...ingredients };
    newIngredients[type]++;
    setPrice(price + prices[type]);
    setIngredients(newIngredients);
  }

  function removeIngredient(type) {
    if (ingredients[type]) {
      const newIngredients = { ...ingredients };
      newIngredients[type]--;
      setPrice(price - prices[type]);
      setIngredients(newIngredients);
    }
  }

  function startOrdering() {
    setOrdering(true);
  }

  function stopOrdering() {
    setOrdering(false);
  }

  return (
    <div className={classes.SaladBuilder}>
      <SaladPreview price={price} ingredients={ingredients} />
      <SaladControls
        ingredients={ingredients}
        addIngredient={addIngredient}
        removeIngredient={removeIngredient}
        startOrdering={startOrdering}
      />
      <Modal show={ordering} cancel={stopOrdering}>
        Hello
      </Modal>
    </div>
  );
};

export default SaladBuilder;
