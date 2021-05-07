export const add = (ingredient) => ({
    type: "ADD_INGREDIENT",
    ingredient: ingredient
  });
  
  export const remove = (ingredient) => ({
    type: "REMOVE_INGREDIENT",
    ingredient: ingredient
  }); 