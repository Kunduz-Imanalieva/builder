import React from "react";
import classes from "./SaladIngredient.module.css";
import cucumberBackground from "../../../images/cucumber.png";
import lettuceBackground from "../../../images/lettuce.png";
import onionBackground from "../../../images/onion.png";
import tomatoBackground from "../../../images/tomato.png";
import broccoliBackground from "../../../images/broccoli.png";
import mushroomBackground from "../../../images/mushroom.png";
import avocadoBackground from "../../../images/avocado.png";

const SaladIngredient = ({ type, fixed }) => {
  const types = {
    cucumber: {
      backgroundImage: `url(${cucumberBackground})`,
      width: "50px",
      height: "50px",
      backgroundSize: "cover" ,
    },
    lettuce: {
      backgroundImage: `url(${lettuceBackground})`,
      width: "60px",
      height: "60px",
      backgroundSize: "cover" ,
    },
    onion: {
      backgroundImage: `url(${onionBackground})`,
      width: "40px",
      height: "40px",
      backgroundSize: "cover" ,
    },
    tomato: {
      backgroundImage: `url(${tomatoBackground})`,
      width: "40px",
      height: "40px",
      backgroundSize: "cover" ,
    },
    broccoli: {
      backgroundImage: `url(${broccoliBackground})`,
      width: "60px",
      height: "40px",
      backgroundSize: "cover" ,
    },
    mushroom: {
      backgroundImage: `url(${mushroomBackground})`,
      width: "60px",
      height: "40px",
      backgroundSize: "cover" ,
    },
    avocado: {
      backgroundImage: `url(${avocadoBackground})`,
      width: "60px",
      height: "60px",
      backgroundSize: "cover" ,
    },
  };

  function getPosition(ingredientWidth) {
    const saladDiameter = 380;
    const saladRadius = saladDiameter / 2;
    const ingredientRadius = parseInt(ingredientWidth) / 2;

    const ingredientTop = Math.round(Math.random() * saladDiameter);
    const ingredientLeft = Math.round(Math.random() * saladDiameter);

    const distance =
      Math.sqrt(
        Math.pow(ingredientTop - saladRadius, 2) +
          Math.pow(ingredientLeft - saladRadius, 2)
      ) + ingredientRadius;

    return distance < saladRadius
      ? {
          top: ingredientTop - ingredientRadius,
          left: ingredientLeft - ingredientRadius,
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

  return <div className={classes.SaladIngredient} style={types[type]}></div>;
};

export default React.memo(SaladIngredient);
