import Button from "../../../UI/Button/Button";
import SaladIngredient from "../../SaladIngredient/SaladIngredient";
import classes from "./SaladControl.module.css";

const SaladControl = ({ type, addIngredient, removeIngredient, count }) => {
  return (
    <div className={classes.SaladControl}>
      <Button onClick={() => addIngredient(type)}>+</Button>
      <div className={classes.ingredient}>
        <SaladIngredient type={type} fixed />
      </div>
      <Button onClick={() => removeIngredient(type)} disabled={!count}>-</Button>
    </div>
  );
};

export default SaladControl;
