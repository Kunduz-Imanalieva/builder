import React from "react";
import classes from "./SaladIngredient.module.css";
import cucumberBackground from "../../../images/cucumber.svg";
import lettuceBackground from "../../../images/lettuce.svg";
import spinachBackground from "../../../images/spinach.svg";


const SaladIngredient = ({type, fixed}) => {
    const types = {
        cucumber: {backgroundImage: `url(${cucumberBackground})`, width: "35px", height: "35px"},
        lettuce: {backgroundImage: `url(${lettuceBackground})`, width: "35px", height: "35px"},
        spinach: {backgroundImage: `url(${spinachBackground})`, width: "35px", height: "35px"},
    }


    function getPosition(ingredientWidth) {
        const saladDiameter = 380;
        const saladRadius = saladDiameter / 2;
        const ingredientRadius = parseInt(ingredientWidth) / 2;
    
        const ingredientTop = Math.round(Math.random() * saladDiameter);
        const ingredientLeft = Math.round(Math.random() * saladDiameter);
    
        const distance = Math.sqrt(
          Math.pow(ingredientTop - saladRadius, 2) + Math.pow(ingredientLeft - saladRadius, 2)
        ) + ingredientRadius;
    
        return distance < saladRadius
          ? {
            top: ingredientTop - ingredientRadius,
            left: ingredientLeft - ingredientRadius
          }
          : getPosition(ingredientWidth);
      }
    
      // Get random position for this ingredient.
      if (!fixed) {
        const position = getPosition(types[type].width);
        types[type].top = position.top + "px";
        types[type].left = position.left + "px";
      }
      // Get random rotation for this ingredient.
      types[type].transform = `rotate(${Math.round(Math.random() * 360)}deg)`;
    
    return ( 
    <div className={classes.SaladIngredient} style={types[type]}></div> 
    );
}
 
export default SaladIngredient;