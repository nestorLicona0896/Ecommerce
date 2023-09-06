import { useClassContext } from './FormClassContext';
// styles

// images
import email from "../../assets/mail.png";
import padlock from "../../assets/padlock.png";
// portal functions:
import { rotatePortal } from './PortalComponent';

export const PortalLoginComponent = () => {
    
    const { LoginFormClass, setRegisterFormClass, setLoginFormClass, setEmailFormClass} = useClassContext();

    // Toggle the register form component's className:
    const displayRegister = () => {
        const selectedIndex = 1;
        setLoginFormClass('InactiveForm');
        setRegisterFormClass('ActiveForm');
        rotatePortal(selectedIndex);
    };

    // Toggle the email form component's className:
    const displayEmailSection = () => {
        const selectedIndex = 3;
        setLoginFormClass('InactiveForm');
        setEmailFormClass('ActiveForm');
        rotatePortal(selectedIndex);
    };

    return (
        
        // Login account section
        <form className={LoginFormClass}  id="login-form">
        
            <h1 className={"FormHeader"} >Hola!</h1>
            <h3 className={"FormSubHeader"}>Inicia sesión para continuar</h3>
        
            <label className={"FormLabel"} >Correo</label>
            <div className={"InputFieldSection"}  id="email-field">
                <img className={"InputIcon"}  src={email} alt="" id="email-icon"/>
                <input className={"InputField"} type="email" placeholder="ejemplo@hotmail.com" maxLength="50" id="email" name="email" required />
            </div>
            <label className={"FormMessageLabel"} id="email-label-message"><b className={"FormMessageLabelB"}>Mensaje sobre el campo correo!</b></label>
        
            <label className={"FormLabel"}>Contraseña</label>
            <div className={"InputFieldSection"} id="password-field">
                <img className={"InputIcon"} src={padlock} id="padlock-icon" alt=""/>
                <input className={"InputField"} type="password" placeholder="********" maxLength="28" id="password" name="password" required />
            </div>
            <label className={"FormMessageLabel"} id="password-label-message"><b className={"FormMessageLabelB"}>Mensaje sobre el campo contraseña!</b></label>
        
            <div className={"RecaptchaSection"}>
                
            </div>
        
            <input className={"FormButton"} type="submit" id="login-button" onClick={displayEmailSection} value="Iniciar sesión"/>
        
            <div className={"PasswordOptionSection"}>
                <label className={"FormLabel"}><b className={"FormLabelB"} onClick={displayEmailSection}>Olvidaste la contraseña?</b></label>
        
                <div className={"PasswordOption"}>
                    <input className={"RememberMeChkbox"} type="checkbox" title="remember account" id="remember-me-chkbox" name="remember-me-chkbox" value="remember"/>
                    <label className={"FormLabelB"} htmlFor="remember-me-chkbox">Remember account</label>
                </div>
                
            </div>
        
            <label className={"FormLabel"}>No tienes una cuenta?<b className={"FormLabelB"} onClick={displayRegister}> Registrarse</b></label>
        
        </form>
    )
};

export default PortalLoginComponent;