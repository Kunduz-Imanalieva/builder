import SaladIngredient from "../../SaladIngredient/SaladIngredient";
import classes from "./SaladControl.module.css";

const SaladControl = ({type, addIngredient, removeIngredient}) => {
    return ( 
    <div className={classes.SaladControl}>
    <button className={classes.more} onClick={() => addIngredient(type)}>+</button>
    <div className={classes.ingredient}>
      <SaladIngredient type={type} fixed />
    </div>
    <button className={classes.less} onClick={() => removeIngredient(type)}>-</button>
    </div> 
    );
}
 
export default SaladControl;