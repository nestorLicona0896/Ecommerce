import React from "react";
// portal subcomponents
import PortalHomeComponent from "./PortalHomeComponent";
import PortalRegisterComponent from "./PortalRegisterComponent";
import PortalLoginComponent from "./PortalLoginComponent";
import PortalEmailComponent from "./PortalEmailComponent";
import PortalCodeComponent from "./PortalCodeComponent";
import PortalResultComponent from "./PortalResultComponent";
// styles
import PortalCSS from "./PortalComponent.module.css";


// Hexagonal portal:
export const PortalComponent = () => {


    return (
        
        <div className={PortalCSS.portalSection}>

            <div className={PortalCSS.carousel}>
                {/* portal home section */}
                <div className={PortalCSS.formDiv}>
                    <PortalHomeComponent/>
                </div>
                {/* portal register section */}
                <div className={PortalCSS.formDiv}>
                    <PortalRegisterComponent/>
                </div>
                {/* portal login section */}
                <div className={PortalCSS.formDiv}>
                    <PortalLoginComponent/>
                </div>
                {/* portal email section */}
                <div className={PortalCSS.formDiv}>
                    <PortalEmailComponent/>
                </div>
                {/* portal code section */}
                <div className={PortalCSS.formDiv}>
                    <PortalCodeComponent/>
                </div>
                {/* portal result section */}
                <div className={PortalCSS.formDiv}>
                    <PortalResultComponent/>
                </div>
            </div>
        </div>
    )
};

export default PortalComponent;