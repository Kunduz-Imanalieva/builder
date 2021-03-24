import classes from "./Logo.module.css";
import logo from "../../images/logo.svg";

const Logo = () => {
  return (
    <div className = {classes.Logo}>
       <img src={logo} alt="Logo of the salad builder"/>
       <div>Salad</div>
      </div>
  );
}

export default Logo;