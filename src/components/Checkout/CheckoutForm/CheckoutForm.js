import Button from "../../UI/Button/Button"

const CheckoutForm = () => {
  return (
    <form>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" />
      </div>
      <div>
        <label htmlFor="address">Address</label>
        <input type="text" name="address" id="address" />
      </div>
      <div>
        <label htmlFor="phone">Phone</label>
        <input type="text" name="phone" id="phone" />
      </div>
      <Button>Checkout</Button>
      <Button>Cancel</Button>
    </form>
  );
}

export default CheckoutForm; 