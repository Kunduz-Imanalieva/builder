import Toolbar from "../Toolbar/Toolbar";
import classes from "./Layout.module.css";

const Layout = ({children}) => {
  return (
    <div className = {classes.Layout}>
     <Toolbar/>
     {children}
    </div>
  );
}

export default Layout;