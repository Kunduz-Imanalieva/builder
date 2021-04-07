import SaladControl from "./SaladControl/SaladControl";
import classes from "./SaladControls.module.css";

const SaladControls = ({ingredients, addIngredient, removeIngredient}) => {
    const results = [];
    let total = 0;
    for (const ingredient in ingredients) {
        total += ingredients[ingredient];
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
        <button disabled={!total}>Order</button>
    </div> );
}
 
export default SaladControls;