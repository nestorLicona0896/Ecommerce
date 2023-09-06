import { useClassContext } from "./FormClassContext";
// Styles
 
// Images
import email from "../../assets/mail.png";
// Portal functions
import { rotatePortal } from "./PortalComponent";

export const PortalEmailComponent = () => {

    const { EmailFormClass, setEmailFormClass, setCodeFormClass } = useClassContext();


    // Toggle the code form component's className:
    const displayCodeSection = () => {
        // first the function validate the data(skip 4 now)..
        const selectedIndex = 4;
        setEmailFormClass('InactiveForm');
        setCodeFormClass('ActiveForm')
        rotatePortal(selectedIndex);
    }

    return (
        // Email section
        <form className={EmailFormClass} method="get" id="email-form">

            <h3 className={"FormSubHeader"}>Ingresa el correo de la cuenta para reestablecer la contraseña</h3>

            <label className={"FormLabel"}>Correo</label>
            <div className={"InputFieldSection"} id="email-field">
                <img className={"InputIcon"} src={email} id="email-icon" alt="" />
                <input className={"InputField"} type="email" placeholder="ejemplo@hotmail.com" id="email-address" name="email-address" required />
            </div>
            <label className={"FormMessageLabel"} id="email-message-label"><b className={"FormMessageLabelB"}>Mensaje sobre el campo correo!</b></label>

            <button className={"FormButton"} type="submit" id="send-button" onClick={displayCodeSection}> Enviar código </button>
        </form>

    )
};

export default PortalEmailComponent;