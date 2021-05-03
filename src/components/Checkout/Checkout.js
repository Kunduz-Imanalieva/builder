
import SaladPreview from "../SaladBuilder/SaladPreview/SaladPreview";
import CheckoutForm from "./CheckoutForm/CheckoutForm";

const Checkout = ({ history }) => {
  function cancelCallback() {
    history.replace('/');
  }

  return (
    <div>
        <SaladPreview ingredients={{
        tomato: 5, 
        cucumber: 10,
        lettuce: 20,
      }} price={150} />
      <CheckoutForm />
    </div>
  );
}
 
export default Checkout;