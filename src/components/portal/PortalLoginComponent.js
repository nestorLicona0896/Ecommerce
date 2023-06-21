// styles
import { hover } from "@testing-library/user-event/dist/hover";
import PortalCSS from "./PortalComponent.module.css";
import LoginCSS from "./PortalLogin.module.css";
// images
import email from "../../assets/mail.png";
import padlock from "../../assets/padlock.png";

export const PortalHomeComponent = () => {
    const styles = {
        loginForm: {
            alignItems: "flex-start"
        },

        label: {
            cursor: "pointer"
        }
      }
    return (
        
        //<!-- LOGIN FORM -->
        <form className={PortalCSS.inactiveForm} style={styles.loginForm} action="" method="get" id="login-form">
        
            <h1 className={PortalCSS.header} >Hola!</h1>
            <h3 className={PortalCSS.subHeader}>Inicia sesión para continuar</h3>
        
            <label className={PortalCSS.label} >Correo</label>
            <div className={PortalCSS.inputField}  id="email-field">
                <img className={PortalCSS.inputIcon}  src={email} alt="" id="email-icon"/>
                <input className={PortalCSS.input} type="email" placeholder="ejemplo@hotmail.com" maxlength="50" id="input-email" required onfocus="highlightField()"
                    onfocusout="unhighlightField()"/>
            </div>
            <label className={PortalCSS.labelMessage} id="label-email-message"><b className={PortalCSS.labelMessageB}>Mensaje sobre el campo correo!</b></label>
        
            <label className={PortalCSS.label}>Contraseña</label>
            <div className={PortalCSS.inputField} id="password-field">
                <img className={PortalCSS.inputIcon} src={padlock} id="padlock-icon" alt=""/>
                <input className={PortalCSS.input} type="password" placeholder="******" maxlength="28" id="input-password" name="input-password" required
                    onfocus="highlightField()" onfocusout="unhighlightField()"/>
            </div>
            <label className={PortalCSS.labelMessage} id="label-password-message"><b className={PortalCSS.labeMessageB}>Mensaje sobre el campo contraseña!</b></label>
        
            <div className={PortalCSS.recaptchaSection}>
                <div class="g-recaptcha" data-sitekey="6LfAP-ojAAAAADEdWZPydAY6zA4cbl10LK1FcN9g">
                </div>
            </div>
        
            <input className={PortalCSS.button} type="submit" id="login-button" onclick="login()" value="Iniciar sesión"/>
        
            <div className={LoginCSS.passwordOptionSection}>
                <label className={PortalCSS.label}><b className={PortalCSS.labelB} onclick="recoverPassword()">Olvidaste la contraseña?</b></label>
        
                <div className={LoginCSS.passwordOptionSectionDiv}>
                    <input className={LoginCSS.rememberMeChkbox} type="checkbox" title="remember account" id="remember-me-chkbox" value="remember"/>
                    <label className={PortalCSS.label} style={styles.label} for="remember-me-chkbox">Remember account</label>
                </div>
                
            </div>
        
            <label className={PortalCSS.label}>No tienes una cuenta?<b className={PortalCSS.labelB} onclick="displayRegisterSection()"> Registrarse</b></label>
        
        </form>
    )
};

export default PortalHomeComponent;