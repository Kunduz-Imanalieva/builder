import Button from "../../../UI/Button/Button";
import SaladIngredient from "../../SaladIngredient/SaladIngredient";
import classes from "./SaladControl.module.css";
import {useDispatch} from "react-redux";

const SaladControl = ({ type, count }) => {
  const dispatch = useDispatch();

  return (
    <div className={classes.SaladControl}>
      <Button onClick={() => dispatch({type: "ADD_INGREDIENT", ingredient: type})}>+</Button>
      <div className={classes.ingredient}>
        <SaladIngredient type={type} fixed />
      </div>
      <Button onClick={() => dispatch({type: "REMOVE_INGREDIENT", ingredient: type})} disabled={!count}>-</Button>
    </div>
  );
};

export default SaladControl;
