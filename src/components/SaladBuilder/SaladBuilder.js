import { useState } from "react";
import classes from "./SaladBuilder.module.css";
import SaladControls from "./SaladControls/SaladControls";
import SaladPreview from "./SaladPreview/SaladPreview";

const SaladBuilder = () => {
    const [ingredients, setIngredients ]= useState({
        tomato: 1,
        avocado: 1,
        cucumber: 1,
    });


    function addIngredient(type) {
        const newIngredients = { ...ingredients};
        newIngredients[type]++;
        setIngredients(newIngredients)
    }


    function removeIngredient(type) {
        const newIngredients = { ...ingredients};
        newIngredients[type]--;
        setIngredients(newIngredients)
    }

    return ( <div className={classes.SaladBuilder}>
        <SaladPreview ingredients={ingredients}/>
        <SaladControls ingredients={ingredients}
        addIngredient={addIngredient}
         removeIngredient={removeIngredient}/>
         
    </div>
     );
}
 
export default SaladBuilder;