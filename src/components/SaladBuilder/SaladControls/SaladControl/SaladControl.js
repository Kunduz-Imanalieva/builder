import classes from "./SaladControl.module.css";

const SaladControl = ({type, addIngredient, removeIngredient}) => {
    return ( <div className={classes.SaladControl}>
    <button onClick={() => addIngredient(type)}>+</button>
    
    <button onClick={() => removeIngredient(type)}>-</button>
    </div> );
}
 
export default SaladControl;