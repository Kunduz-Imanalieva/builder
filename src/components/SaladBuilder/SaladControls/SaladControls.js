import SaladControl from "./SaladControl/SaladControl";
import classes from "./SaladControls.module.css";

const SaladControls = ({ingredients, addIngredient, removeIngredient}) => {
    const results = [];
    for (const ingredient in ingredients) {
        results.push( <SaladControl 
            key={ingredient}
            addIngredient={addIngredient} 
            removeIngredient={removeIngredient}
            type={ingredient} />);
    }

    return ( 
    <div className={classes.SaladControls}>
        <strong>Ingredients</strong>
       {results}
    </div> );
}
 
export default SaladControls;