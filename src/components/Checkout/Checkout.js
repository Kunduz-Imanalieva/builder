import classes from "./Checkout.module.css";
import SaladPreview from "../SaladBuilder/SaladPreview/SaladPreview";
import CheckoutForm from "./CheckoutForm/CheckoutForm";
import axios from "axios";
import { useSelector } from "react-redux";

const Checkout = ({ history }) => {
  const ingredients = useSelector((state) => state.builder.ingredients);
  const price = useSelector((state) => state.builder.price);
  function cancelCallback() {
    history.replace("/");
  }

  function submitCallback(event) {
    const data = new FormData(event.target);
    axios
      .post("https://builder-e08b0-default-rtdb.firebaseio.com/orders.json", {
        name: data.get("name"),
        address: data.get("address"),
        phone: data.get("phone"),
        ingredients: ingredients,
        price: price,
      })
      .then((response) => {
        history.replace("/");
      });
    event.preventDefault();
  }

  return (
    <div className={classes.Checkout}>
      <SaladPreview ingredients={ingredients} price={price} />
      <CheckoutForm
        cancelCallback={cancelCallback}
        submitCallback={submitCallback}
      />
    </div>
  );
};

export default Checkout;
