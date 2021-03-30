
import classes from "./SaladIngredient.module.css";
import cucumberBackground from "../../../images/cucumber.svg";
import lettuceBackground from "../../../images/lettuce.svg";
import spinachBackground from "../../../images/spinach.svg";


const SaladIngredient = ({type}) => {
    const types = {
        cucumber: {cucumberBackground: `url(${cucumberBackground})`, width: "35px", height: "35px"},
        lettuce: {lettuceBackground: `url(${lettuceBackground})`, width: "35px", height: "35px"},
        spinach: {spinachBackground: `url(${spinachBackground})`, width: "35px", height: "35px"},
    }

    
    return ( 
    <div className={classes.SaladIngredient}>{type}</div> 
    );
}
 
export default SaladIngredient;