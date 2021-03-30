import SaladIngredient from "../SaladIngredient/SaladIngredient";
import classes from "./SaladPreview.module.css";

const SaladPreview = ({ingredients}) => {
    const result = [];

    for (const ingredient in ingredients) {
       for (let i = 0; i < ingredients[ingredient]; i++) {
           result.push(<SaladIngredient key={ingredient + i} type={ingredient}/>)
       }
    }
    return ( <div className={classes.SaladPreview}>
      <div 
      className={classes.ingredients}>
      {result}
      </div>
    </div> 
    );
}
 
export default SaladPreview;