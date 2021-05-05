const initialState = {
  ingredients: {
    tomato: 5,
    lettuce: 5,
    broccoli: 5,
    onion: 5,
    cucumber: 5,
  },
  price: 200,
};

const prices = {
  cucumber: 5,
  lettuce: 4,
  onion: 2,
  tomato: 2,
  broccoli: 3,
};

const builderReducer = (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case "ADD_INGREDIENT":
      newState.ingredients[action.ingredient]++;
      newState.price += prices[action.ingredient];
      break;
    case "REMOVE_INGREDIENT":
      newState.ingredients[action.ingredient]--;
      newState.price -= prices[action.ingredient];
      break;

    default:
      break;
  }

  return newState;
};

export default builderReducer;
