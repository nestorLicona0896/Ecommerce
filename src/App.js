
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
// pages|sections
import Home from './pages/HomePage';
import Portal from './pages/PortalPage';
import Category from './pages/CategoryPage';
// styles
import './global.css';


function App() {

    const [showHomePage, setShowHomePage] = useState(true);

    const handleButtonClick = () => {
      setShowHomePage(false);
    };

    return (
        <Router>
            <div className="App">
                {/* header section */}
                <header className='App-header'>
                    
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/portal">Portal</Link>
                            </li>

                        </ul>
                    </nav>
                </header>
                
                {/* main content section */}
                <main className='App-main'>

                   
                    <Routes>
                        <Route path="/" element={<Home/>} />
                        <Route path="/portal" element={<Portal/>} />
                        <Route path="/category" element={<Category/>} />
                    </Routes>
                    
                </main>

                {/* footer section */}
                <footer className='App-footer'>
                    <p>© 2023 <a href="#..">Web Market</a>. Todos los derechos reservados. <a href="#..">Poliza de cookies</a> , <a
                        href="#..">Privacidad</a> y <a href="#..">Terminos</a>.
                    </p>
                </footer>
            </div>
        </Router>
    );
}

export default App;
