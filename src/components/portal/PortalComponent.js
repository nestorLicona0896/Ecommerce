// The ClassProvider for the portal forms 
import { ClassProvider } from './FormClassContext'; 
import { RegisterFormDataProvider } from './useRegisterFormContext';

// Portal subcomponents
import PortalHomeComponent from "./PortalHomeComponent";
import PortalRegisterComponent from "./PortalRegisterComponent";
import PortalLoginComponent from "./PortalLoginComponent";
import PortalPasswordResetComponent from "./PortalPasswordResetComponent";
import PortalEmailComponent from "./PortalEmailComponent";
import PortalCodeComponent from "./PortalCodeComponent";
import PortalResultComponent from "./PortalResultComponent";

// Style for the portal and it's components
import "./Portal.css";

// Fields for the specifications of the sides size
const cellCount = 7; // number of sides for the portal
const theta = Math.round(360 / cellCount); // the angle of rotation to slide a whole side of the hexagon
let selectedIndex = 0; // the selected side 

/* Rotates the portal allowing to see the active form */
export const rotatePortal = (indexNumber) => {
    const carousel = document.querySelector('.Carousel');
    selectedIndex = indexNumber;
    var angle = theta * selectedIndex * -1;
    carousel.style.transform = 'rotateY(' + angle + 'deg)'; 
}

// Multiple side portal component (7 sides(forms) by now):
export const PortalComponent = () => {

    return (
        
        <div className={"PortalSection"}>
            <div className={"Carousel"}>
                <ClassProvider>

                    {/* Home section */}
                    <div className={"FormDiv"}>
                        <PortalHomeComponent />
                    </div>

                    {/* Register section */}
                    <div className={"FormDiv"}>
                        <RegisterFormDataProvider>
                            <PortalRegisterComponent />
                        </RegisterFormDataProvider>
                    </div>

                    {/* Login section */}
                    <div className={"FormDiv"}>
                        <PortalLoginComponent />
                    </div>

                    {/* Email section */}
                    <div className={"FormDiv"}>
                        <PortalEmailComponent/>
                    </div>

                    {/* Code section */}
                    <div className={"FormDiv"}>
                        <PortalCodeComponent />
                    </div>

                     {/* Password reset section */}
                     <div className={"FormDiv"}>
                        <PortalPasswordResetComponent/>
                    </div>

                    {/* Result section */}
                    <div className={"FormDiv"}>
                        <PortalResultComponent />
                    </div>
                </ClassProvider>
            </div>
        </div>
    )
};

export default PortalComponent;