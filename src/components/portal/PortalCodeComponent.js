
// styles
import PortalCSS from "./PortalComponent.module.css";
import CodeCSS from "./PortalCode.module.css";

export const PortalHomeComponent = () => {
    const styles = {
        codeForm: {
            alignItems: "flex-start",
        }
      }
    return (
        //<!-- VERIFICATION CODE SECTION-->
        <form className={PortalCSS.inactiveForm} style={styles.codeForm} action="" method="" id="code-form">

            <h3 className={PortalCSS.subHeader}>Ingresa el código enviado a la dirección de correo:
                <label className={CodeCSS.labelEmailDirection} id="label-email-direction">ejemplo@hotmail.com</label>
            </h3>

            <label className={PortalCSS.label} for="" id="label-code">Código</label>

            <div className={CodeCSS.codeContainer} id="code-container">
                <input className={CodeCSS.input} type="text" maxlength="1" id="input-digit-1" required />
                <input className={CodeCSS.input} type="text" maxlength="1" id="input-digit-2" required />
                <input className={CodeCSS.input} type="text" maxlength="1" id="input-digit-3" required />
                <input className={CodeCSS.input} type="text" maxlength="1" id="input-digit-4" required />
                <input className={CodeCSS.input} type="text" maxlength="1" id="input-digit-5" required />
                <input className={CodeCSS.input} type="text" maxlength="1" id="input-digit-6" required />
            </div>
            <label className={PortalCSS.labelMessage} id="label-code-message"><b className={PortalCSS.labelMessageB}>Mensaje sobre el campo code!</b></label>
            <div></div>
            <button className={PortalCSS.button} type="submit" id="verify-button" onclick="verifyCode()"> Verificar </button>

            <label className={PortalCSS.label}> En caso de no recibir el código de verificación puede
                <b className={PortalCSS.labelB}> Enviarlo de nuevo!</b> o puede
                <b className={PortalCSS.labelB}> Cambiar la dirección de correo</b>
            </label>
        </form>
        
    )
};

export default PortalHomeComponent;