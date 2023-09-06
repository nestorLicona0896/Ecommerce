//custom hook for register form logic & behave
import { useFormDataContext} from "./useRegisterFormContext";

// images
import user from "../../assets/user.png";
import email from "../../assets/mail.png";
import padlock from "../../assets/padlock.png";

// Register form:
function PortalRegisterComponent () {

    const { RegisterFormClass, formData, setFormData, handleSubmit, handleDisplayLoginSection, handleClear } = useFormDataContext();

    // Handles the event whenever the input field change its value:
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };    
      
    return (
       
        // Register user section
        <form className={RegisterFormClass} id="register-form" onSubmit={handleSubmit} >
            
            {/* Form's header */}
            <h1 className={"FormHeader"}>Bienvenido!</h1>
            <h3 className={"FormSubHeader"}>Completa los datos para continuar</h3>

            {/* Input field section */}
            <label htmlFor="username" className={"FormLabel"}>Nombre</label>
            <div className={"InputFieldSection"} id="name-field">
                <img className={"InputIcon"} src={user} alt="" id="user-icon" />
                <input className={"InputField"} type="text" placeholder="Nombre Apellido" maxLength="50" id="username" name="username" value={formData.username} onChange={handleChange} required />
            </div>
            <label className={"FormMessageLabel"} id="name-message-label"><b className={"FormMessageLabelB"}>Mensaje sobre el campo nombre!</b></label>

            <label htmlFor="email" className={"FormLabel"}>Correo</label>
            <div className={"InputFieldSection"} id="email-field">
                <img className={"InputIcon"} src={email} alt="" id="email-icon" />
                <input className={"InputField"} type="email" placeholder="ejemplo@hotmail.com" maxLength="50" id="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <label className={"FormMessageLabel"} id="email-message-label"><b className={"FormMessageLabelB"}>Mensaje sobre el campo correo!</b></label>

            <label htmlFor="password" className={"FormLabel"}>Contraseña</label>
            <div className={"InputFieldSection"} id="password-field">
                <img className={"InputIcon"} src={padlock} alt="" id="padlock-icon" />
                <input className={"InputField"} type="password" placeholder="********" maxLength="28" id="password" name="password" value={formData.password} onChange={handleChange} required />
            </div> 
            <label className={"FormMessageLabel"} id="password-message-label"><b className={"FormMessageLabelB"}>Mensaje sobre el campo contraseña!</b></label>

            {/* Password Requirements section */}
            <div className={"PasswordRequirementSection"}>
                <label className={"FormLabel"}>La contraseña debe contener:</label>
                <ul className ={"PasswordRequirementList"} id="password-requirements-list" >
                    <li className={"PasswordRequirement"} id="password-requirement-1">al menos 8 carácteres</li>
                    <li className={"PasswordRequirement"} id="password-requirement-2">al menos una letra mayúscula</li>
                    <li className={"PasswordRequirement"} id="password-requirement-3">al menos un número</li>
                    <li className={"PasswordRequirement"} id="password-requirement-4">al menos un carácter especial</li>
                </ul>
            </div>

            {/* Recaptcha section */}
            <div className={"RecaptchaSection"}>
                
            </div>

            {/* Submit */}
            <button className={"FormButton"} type="submit" id="create-account-button"> Crear cuenta </button>

            {/* Show login form/hide register/rotate portal */}      
            <label className={"FormLabel"}> Ya tienes una cuenta? <b className={"FormLabelB"} onClick={handleDisplayLoginSection}> Inicia sesión </b></label>
        
        </form>
    )
};

export default PortalRegisterComponent;