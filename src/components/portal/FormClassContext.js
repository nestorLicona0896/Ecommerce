// This class allows to dynamically switch state for set a new className to the form components on the portal page
import React, { createContext, useContext, useState } from 'react';

const ClassContext = createContext();

export function ClassProvider({ children }) {
    //const [activeForm, setActiveFormClass] = useState('activeForm');
    //const [unactiveForm, setUnactiveFormClass] = useState('inactiveForm');

    const [HomeFormClass, setHomeFormClass] = useState('ActiveForm'); // the className state and setter for home form
    const [RegisterFormClass, setRegisterFormClass] = useState('InactiveForm'); // the className state and setter for register form
    const [LoginFormClass, setLoginFormClass] = useState('InactiveForm'); // the className state and setter for login form
    const [EmailFormClass, setEmailFormClass] = useState('InactiveForm'); // the className state and setter for email form
    const [CodeFormClass, setCodeFormClass] = useState('InactiveForm'); // the className state and setter for code form
    const [PasswordFormClass, setPasswordFormClass] = useState('InactiveForm'); // the className state and setter for password reset form
    const [ResultFormClass, setResultFormClass] = useState('InactiveForm'); // the className state and setter for result form
    const [ResultMessage, setResultMessage] = useState('Mensaje con el resultado :D'); // the className state and setter for result message on result form
    
    return (
      <ClassContext.Provider value={{ HomeFormClass, setHomeFormClass,
                                      RegisterFormClass, setRegisterFormClass,
                                      LoginFormClass, setLoginFormClass,
                                      PasswordFormClass, setPasswordFormClass,
                                      EmailFormClass, setEmailFormClass,
                                      CodeFormClass, setCodeFormClass,
                                      ResultFormClass, setResultFormClass,
                                      ResultMessage, setResultMessage,
                                    }}>
      {children}
      </ClassContext.Provider>
    );
}

export function useClassContext() {
  return useContext(ClassContext);
}
