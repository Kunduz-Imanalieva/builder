import Button from "../../../UI/Button/Button";
import SaladIngredient from "../../SaladIngredient/SaladIngredient";
import classes from "./SaladControl.module.css";
import {useDispatch} from "react-redux";
import { add, remove } from "../../../../store/actions/builder";

const SaladControl = ({ type, count }) => {
  const dispatch = useDispatch();

  return (
    <div className={classes.SaladControl}>
      <Button onClick={() => dispatch(add(type))}>+</Button>
      <div className={classes.ingredient}>
        <SaladIngredient type={type} fixed />
      </div>
      <Button onClick={() => dispatch(remove(type))} disabled={!count}>-</Button>
    </div>
  );
};

export default SaladControl;
