import React from "react";
import "./home.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";


class Home extends React.Component {

   
    render() {
        
        return (
            <div className="homeContainer">
                <Link to="/portal"> <button className={"formButton"} id="portal-button">Portal de usuarios</button> </Link> {/* clickleable link to request path to page/component portal, like 'a' html element */}
            </div>
        )
    }
}

export default Home;