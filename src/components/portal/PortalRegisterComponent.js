
// styles
import PortalCSS from "./PortalComponent.module.css";
// images
import user from "../../assets/user.png";
import email from "../../assets/mail.png";
import padlock from "../../assets/padlock.png";

export const PortalRegisterComponent = () => {
    const styles = {
        registerForm: {
            alignItems: "flex-start",
        }
      }
      
    return (
        // portal register user section
        
        <form className={PortalCSS.inactiveForm} style={styles.registerForm} action="" method="POST" id="register-form">
            
            <h1 className={PortalCSS.header}>Bienvenido!</h1>
            <h3 className={PortalCSS.subHeader}>Completa los datos para continuar</h3>

            <label className={PortalCSS.label}>Nombre</label>
            <div className={PortalCSS.inputField} id="name-field">
                <img className={PortalCSS.inputIcon} src={user} alt="" id="user-icon" />
                <input className={PortalCSS.input} type="text" placeholder="Nombre Apellido" maxlength="50" id="username" name="username" required
                    onfocus="highlightField()" onfocusout="unhighlightField()" />
            </div>
            <label className={PortalCSS.labelMessage} id="label-name-message"><b className={PortalCSS.labelMessageB}>Mensaje sobre el campo nombre!</b></label>

            <label className={PortalCSS.label}>Correo</label>
            <div className={PortalCSS.inputField} id="email-field">
                <img className={PortalCSS.inputIcon} src={email} alt="" id="email-icon" />
                <input className={PortalCSS.input} type="email" placeholder="ejemplo@hotmail.com" maxlength="50" id="email_address" name="email_address" required
                    onfocus="highlightField()" onfocusout="unhighlightField()" />
            </div>
            <label className={PortalCSS.labelMessage} id="label-email-message"><b className={PortalCSS.labelMessageB}>Mensaje sobre el campo correo!</b></label>

            <label className={PortalCSS.label}>Contraseña</label>
            <div className={PortalCSS.inputField} id="password-field">
                <img className={PortalCSS.inputIcon} src={padlock} alt="" id="padlock-icon" />
                <input className={PortalCSS.input} type="password" placeholder="********" maxlength="28" id="input_password" name="input_password" required
                    onfocus="highlightField(this)" onfocusout="unhighlightField(this)" />
            </div>
            <label className={PortalCSS.labelMessage} id="label-password-message"><b className={PortalCSS.labelMessageB}>Mensaje sobre el campo contraseña!</b></label>

            <div className={PortalCSS.recaptchaSection}>
                <div class="g-recaptcha" data-sitekey="6LfAP-ojAAAAADEdWZPydAY6zA4cbl10LK1FcN9g">
                </div>
            </div>

            <button className={PortalCSS.button} type="submit" id="button-create-account" onclick="register()">Crear cuenta</button>

            <label className={PortalCSS.label}> Ya tienes una cuenta? <b className={PortalCSS.labelB} onclick="displayLoginSection()"> Inicia sesión </b></label>
        </form>
    )
};

export default PortalRegisterComponent;