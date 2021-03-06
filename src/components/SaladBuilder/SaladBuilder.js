import axios from "../../axios";
import { useEffect, useState } from "react";
import classes from "./SaladBuilder.module.css";
import SaladControls from "./SaladControls/SaladControls";
import SaladPreview from "./SaladPreview/SaladPreview";
import Modal from "../UI/Modal/Modal";
import OrderSummary from "./OrderSummary/OrderSummary";
import Button from "../UI/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { load } from "../../store/actions/builder";
import withAxios from "../withAxios";

const SaladBuilder = ({ history }) => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.token !== null);
  const ingredients = useSelector((state) => state.builder.ingredients);
  const price = useSelector((state) => state.builder.price);
  const [ordering, setOrdering] = useState(false);

  useEffect(() => dispatch(load()), [dispatch]);

  function startOrdering() {
    if (isAuthenticated) {
      setOrdering(true);
    } else {
      history.push("/auth");
    }
  }

  function stopOrdering() {
    setOrdering(false);
  }

  function finishOrdering() {
    history.push("/checkout");
  }

  return (
    <div className={classes.SaladBuilder}>
      <SaladPreview price={price} ingredients={ingredients} />
      <SaladControls ingredients={ingredients} startOrdering={startOrdering} />
      <Modal show={ordering} cancel={stopOrdering}>
        <OrderSummary ingredients={ingredients} price={price} />

        <Button onClick={finishOrdering} green="green">
          Checkout
        </Button>
        <Button onClick={stopOrdering}>Cancel</Button>
      </Modal>
    </div>
  );
};

export default withAxios(SaladBuilder, axios);
