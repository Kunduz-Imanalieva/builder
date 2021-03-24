import SaladIngredient from "../SaladIngredient/SaladIngredient";
import classes from "./SaladPreview.module.css";

const SaladPreview = ({ingredients}) => {
    const result = [];

    for (const ingredient in ingredients) {
       for (let i = 0; i < ingredients[ingredient]; i++) {
           result.push(<SaladIngredient type={ingredient}/>);
       }
    }
    return ( <div className={classes.SaladPreview}>
      {result}
    </div> );
}
 
export default SaladPreview;