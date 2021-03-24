import classes from "./SaladBuilder.module.css";
import SaladControls from "./SaladControls/SaladControls";
import SaladPreview from "./SaladPreview/SaladPreview";

const SaladBuilder = () => {
    const ingredients ={
        tomato: 1,
        avocado: 1,
        cucumber: 1,
    };

    return ( <div className={classes.SaladBuilder}>
        <SaladPreview ingredients={ingredients}/>
        <SaladControls/>
    </div>
     );
}
 
export default SaladBuilder;