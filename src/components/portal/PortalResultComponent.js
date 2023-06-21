
// styles
import PortalCSS from "./PortalComponent.module.css";


// portal result section
export const PortalHomeComponent = () => {
    const styles = {
        resultForm: {
            alignItems: "flex-start",
        }
    }
    return (
        //<!-- RESULT SECTION -->
        <form className={PortalCSS.inactiveForm} style={styles.resultform} action="" method="" id="result-form" >

            <h3 className={PortalCSS.subHeader} id="reset-mesagge">Tu cuenta ha sido verificada con exito, inicia sesión para continuar!</h3>
            <button className={PortalCSS.button} type="button" id="continue-button" onclick="displayPortalHome()"> Continuar </button>
        </form>
    )
};

export default PortalHomeComponent;