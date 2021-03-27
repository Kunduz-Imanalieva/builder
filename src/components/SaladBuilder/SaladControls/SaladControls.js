import SaladControl from "./SaladControl/SaladControl";
import classes from "./SaladControls.module.css";

const SaladControls = ({ingredients, addIngredient, removeIngredient}) => {
    let type = {ingredients}
    const results = [];
    for (const ingredient in ingredients) {
        results.push( <SaladControl type={ingredient} addIngredient={addIngredient} removeIngredient={removeIngredient} />);
    }

    return ( 
    <div className={classes.SaladControls}>
       {results}
    </div> );
}
 
export default SaladControls;