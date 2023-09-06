import {useClassContext} from "./FormClassContext"
// styles

// portal's functions
import { rotatePortal } from "./PortalComponent";


// Result section
export const PortalHomeComponent = () => {

    const {ResultFormClass, setResultFormClass, setHomeFormClass, ResultMessage} = useClassContext();
    //var resultMessage = "resultado 1";

    // Toggle the home form component's className:
    const displayHomeSection = () => {
        const selectedIndex = 0;
        setResultFormClass('InactiveForm');
        setHomeFormClass('ActivForm');
        rotatePortal(selectedIndex);
    }

    return (
        // Result section
        <form className={ResultFormClass}  id="result-form" >

            <h3 className={"FormSubHeader"} id="reset-mesagge">{ResultMessage}</h3>
            <button className={"FormButton"} type="button" id="continue-button" onClick={displayHomeSection}> Continuar </button>
        </form>
    )
};

export default PortalHomeComponent;