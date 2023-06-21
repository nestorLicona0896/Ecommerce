import React from "react";
import "./home.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";


class Home extends React.Component {

    handleClick = () => {
        const { onClick } = this.props;

        if (onClick) {
          onClick(true);
        }
    };

    render() {
        
        return (
            <div className="homeContainer">
                <Link to="/portal"> <button class="button" id="portal-button">Portal de usuarios</button> </Link>
            </div>
        )
    }
}

export default Home;