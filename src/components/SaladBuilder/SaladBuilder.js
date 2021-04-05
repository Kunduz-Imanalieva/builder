import axios from "axios";
import { useEffect, useState } from "react";
import classes from "./SaladBuilder.module.css";
import SaladControls from "./SaladControls/SaladControls";
import SaladPreview from "./SaladPreview/SaladPreview";

const SaladBuilder = () => {
    const prices = {
        cuccumber: 5,
        lettuce: 4,
        spinach: .5,
      };
    const [ingredients, setIngredients ]= useState({});

    const [price, setPrice] = useState(10);

    useEffect(() => {
        axios.get (`https://builder-e08b0-default-rtdb.firebaseio.com/ingredients.json`)
            .then((response) => {
            setIngredients({ ...response.data });
          }); 
      });



    function addIngredient(type) {
        const newIngredients = { ...ingredients};
        newIngredients[type]++;
        setPrice(price + prices[type]);
        setIngredients(newIngredients)
    }


    function removeIngredient(type) {
        if (ingredients[type]) {
        const newIngredients = { ...ingredients};
        newIngredients[type]--;
        setPrice(price - prices[type]);
        setIngredients(newIngredients)
        }
    }

    return ( <div className={classes.SaladBuilder}>
        <SaladPreview price={price} ingredients={ingredients}/>
        <SaladControls ingredients={ingredients}
        addIngredient={addIngredient}
         removeIngredient={removeIngredient}/>
         
    </div>
     );
}
 
export default SaladBuilder;