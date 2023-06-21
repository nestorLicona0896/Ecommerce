
// styles
import PortalCSS from "./PortalComponent.module.css";
// images
import email from "../../assets/mail.png";

export const PortalHomeComponent = () => {
    const styles = {
        emailForm: {
            alignItems: "flex-start",
        }
      }
    return (
        //<!-- EMAIL SECTION -->
        <form className={PortalCSS.inactiveForm} style={styles.emailForm} method="get" id="email-form">

            <h3 className={PortalCSS.subHeader}>Ingresa el correo de la cuenta para reestablecer la contraseña</h3>

            <label className={PortalCSS.label}>Correo</label>
            <div className={PortalCSS.inputField} id="email-field">
                <img className={PortalCSS.inputIcon} src={email} id="email-icon" alt="" />
                <input className={PortalCSS.input} type="email" placeholder="ejemplo@hotmail.com" id="input-email" name="input-email" required
                    onfocus="highlightField3(this)" onfocusout="unhighlightField(this)" />
            </div>
            <label className={PortalCSS.labelMessage} id="label-email-message"><b className={PortalCSS.labelMessageB}>Mensaje sobre el campo correo!</b></label>

            <button className={PortalCSS.button} type="submit" id="send-button" onclick="sendRecoveryEmail()"> Enviar código </button>
        </form>

    )
};

export default PortalHomeComponent;