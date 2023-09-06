
import { rotatePortal } from "./PortalComponent";


// Toggle login form component's className:
export function displayLoginSection (setRegisterFormClass, setLoginFormClass) {
    const selectedIndex = 2;
    setRegisterFormClass('InactiveForm');
    setLoginFormClass('ActiveForm');
    rotatePortal(selectedIndex);
}

// Toggle code form component's className:
export function displayCodeSection (setRegisterFormClass, setCodeFormClass) {
    const selectedIndex = 4;
    setRegisterFormClass('InactiveForm');
    setCodeFormClass('ActiveForm');
    rotatePortal(selectedIndex);
}


// Handles the submit event on register form
export async function submitFormData (event, formData) {
    event.preventDefault();

    // Validate form data here if needed
    try {
        // Send data to the server for processing
        console.log('formData:', formData);
        const response = await fetch('http://localhost:4000/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },

            body: JSON.stringify(formData),

        });

        if (response.ok) {
            // Data successfully saved on the server
            // You might want to redirect or show a success message
            alert("data saved! ");
        } else {
            // Handle server error
            alert("data NOT saved! ");
        }

    } catch (error) {
        // Handle network or other errors
    }
}

// Handles reset input fields event on register form
export function clearForm (setFormData) {
    const clearedData = {
        username: '',
        email: '',
        password: '',
        // Other form fields...
    };
    setFormData(clearedData);
}



