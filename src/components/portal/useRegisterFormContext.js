import { createContext, useContext, useState } from 'react';
import { submitFormData, clearForm, displayLoginSection, displayCodeSection } from './registerFormLogic';
import { useClassContext } from './FormClassContext';

const FormDataContext = createContext();

// Class for context and functionality of the register form
export function RegisterFormDataProvider ({ children }) {

    const { RegisterFormClass, setRegisterFormClass, setLoginFormClass, setCodeFormClass } = useClassContext();

    // form data context for reseting input fields:
    const [formData, setFormData] = useState({
        username: '', 
        email: '',
        password: '',
        // Other form fields...
    });

    // Handle form submission using the logic layer function
    const handleSubmit = (e) => {
        
        submitFormData(e, formData);
        handleClear();
    };

    // Clear the form using the logic layer function
    const handleClear = () => {
        
        clearForm(setFormData);
    };

    // Handle click on login label to display login form:
    const handleDisplayLoginSection = () => {
        
        displayLoginSection(setRegisterFormClass, setLoginFormClass);
    };

    // Handle click on login label to display login form:
    const handleDisplayCodeSection = () => {
        
        displayCodeSection(setRegisterFormClass, setCodeFormClass);
    };


    return (
        <FormDataContext.Provider value = {{RegisterFormClass, formData, setFormData, handleSubmit, handleClear, handleDisplayLoginSection, handleDisplayCodeSection }}>
            {children}
        </FormDataContext.Provider>
    );
}

export function useFormDataContext () {
    return useContext(FormDataContext);
}
