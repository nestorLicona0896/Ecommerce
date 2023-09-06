// Class context
import { useClassContext } from "./FormClassContext";
// Styles

// Portal's functions
import {rotatePortal} from "./PortalComponent"

export const PortalHomeComponent = () => {

    const {CodeFormClass, setCodeFormClass, setResultFormClass, setPasswordFormClass, setResultMessage, accountRegister} = useClassContext();

    //
    const displayPaswordReset = () => {
        const selectedIndex = 5;
        setCodeFormClass('InactiveForm');
        setPasswordFormClass('ActiveForm');
        rotatePortal(selectedIndex);
    }

    //
    const displayResult = () => {
        const selectedIndex = 5;
        setCodeFormClass('InactiveForm');
        setResultFormClass('ActiveForm');
        setResultMessage('Mensaje si la cuenta fue verificada (la cuenta no existia)')
        rotatePortal(selectedIndex);
    }


    return (
        // Verification code section
        <form className={CodeFormClass} action="" method="" id="code-form">

            <h3 className={"FormSubHeader"}>Ingresa el código enviado a la dirección de correo:
                <label className={"FormLabel"} id="label-email-direction">ejemplo@hotmail.com</label>
            </h3>

            <label className={"FormLabel"} id="label-code">Código</label>

            <div className={"CodeContainer"} id="code-container">
                <input className={"InputField"} type="text" maxLength="1" id="input-digit-1" required />
                <input className={"InputField"} type="text" maxLength="1" id="input-digit-2" required />
                <input className={"InputField"} type="text" maxLength="1" id="input-digit-3" required />
                <input className={"InputField"} type="text" maxLength="1" id="input-digit-4" required />
                <input className={"InputField"} type="text" maxLength="1" id="input-digit-5" required />
                <input className={"InputField"} type="text" maxLength="1" id="input-digit-6" required />
            </div>
            <label className={"FormMessageLabel"} id="label-code-message"><b className={"labelMessageB"}>Mensaje sobre el campo code!</b></label>
            <div></div>

            <button className={"FormButton"} type="submit" id="verify-button" onClick={displayPaswordReset}> Verificar </button>

            <label className={"FormLabel"}> En caso de no recibir el código de verificación puede
                <b className={"FormLabelB"}> Enviarlo de nuevo!</b> o puede
                <b className={"FormLabelB"}> Cambiar la dirección de correo</b>
            </label>
        </form>
        
    )
};

export default PortalHomeComponent;