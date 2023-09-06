import { useClassContext } from "./FormClassContext";
// styles

// images
import padlock from "../../assets/padlock.png";
// portal functions:
import { rotatePortal } from "./PortalComponent";

export const PortalPasswordResetComponent = () => {
    
    const { PasswordFormClass, setPasswordFormClass, setResultFormClass, setLoginFormClass, setResultMessage} = useClassContext();

    // Toggle the email form component"s className:
    const displayLoginSection = () => {
        const selectedIndex = 3;
        setPasswordFormClass("InactiveForm");
        setLoginFormClass("ActiveForm");
        rotatePortal(selectedIndex);
    };

    // Toggle the result form component"s className:
    const displayResultSection = () => {
        const selectedIndex = 6;
        setPasswordFormClass("InactiveForm");
        setResultFormClass("ActiveForm");
        setResultMessage("mensaje si la contraseña fue cambiada (cuenta existente)");
        rotatePortal(selectedIndex);
    };

    // Validates the password :



    return (
        
        // Login account section
        <form className={PasswordFormClass}  id="password-reset-form">
        
            <h1 className={"FormHeader"} >Restablecer Contraseña!</h1>
            <h3 className={"FormSubHeader"}>Ingresa la nueva contraseña por favor</h3>
            
            <div className={"PasswordRequirementSection"}>
                <h3 className={"FormLabel"}>Debe contener:</h3>
                <ul className ={"PasswordRequirementList"} id="password-requirements-list" >
                    <li>al menos 8 carácteres</li>
                    <li>al menos una letra mayúscula</li>
                    <li>al menos un número</li>
                    <li>al menos un carácter especial</li>
                </ul>
            </div>
        
            <label className={"FormLabel"}>Contraseña</label>
            <div className={"InputFieldSection"} id="password-field">
                <img className={"InputIcon"} src={padlock} id="padlock-icon" alt=""/>
                <input className={"InputField"} type="password" placeholder="******" maxLength="28" id="input-password-1" name="password-input-1" required />
            </div>
            <label className={"FormMessageLabel"} id="password-message-label-1"><b className={"labeMessageB"}>Mensaje sobre el campo contraseña!</b></label>
            
            <label className={"FormLabel"}>Confirmar nueva contraseña</label>
            <div className={"InputFieldSection"} id="password-field">
                <img className={"InputIcon"} src={padlock} id="padlock-icon" alt=""/>
                <input className={"InputField"} type={"password"} placeholder="******" maxLength="28" id="password-input-2" name="password-input-2" required />
            </div>
            <label className={"FormMessageLabel"} id="password-message-label-2"><b className={"labeMessageB"}>Mensaje sobre el campo contraseña!</b></label>
        
            <div className={"RecaptchaSection"}>
               
            </div>
        
            <button className={"FormButton"} type="submit" id="reset-button" onClick={displayResultSection}> Confirmar cambio </button>
        

        </form>
    )
};

export default PortalPasswordResetComponent;