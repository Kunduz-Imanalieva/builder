import classes from "./Modal.module.css";
import Backdrop from "../Backdrop/Backdrop";

const Modal = ({ children }) => {
  return (
    <div className={classes.Modal}>
      <Backdrop show={true} />
      <div className={classes.content}>
        {children}
      </div>
    </div>
  );
}

export default Modal;