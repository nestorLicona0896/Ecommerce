import React from "react";
import PortalComponent from "../components/portal/PortalComponent";
// styles:
import "./portal.css"

class Portal extends React.Component {

    render() {        

        return (
            <div className="portalContainer">
                <PortalComponent/>
            </div>
        )
    }
}

export default Portal;