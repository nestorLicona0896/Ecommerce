
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

// pages|sections|componenets
import Home from './pages/HomePage';
import Portal from './pages/PortalPage';

// styles
import './global.css';


// main app to render on the react js npm server
function App() {

   
    return (
        <Router>
            <div className="App">
                {/* header section */}
                <header className='App-header'>
                    
                    <nav>
                        <ul>
                            <li>
                                <Link to="/home" className='nav-link'>Inicio</Link>{/* clickleable link to request path to home page/component, like 'a' html element but avoiding the page reload*/}
                            </li>
                            <li>
                                <Link to="/catalog" className='nav-link'>Catalogo</Link>{/* clickleable link to request path to catalog page/component, like 'a' html element but avoiding the page reload*/}
                            </li>
                            <li>
                                <Link to="/portal" className='nav-link'>Cuenta</Link>{/* clickleable link to request path to account portal page/component, like 'a' html element but avoiding the page reload*/}
                            </li>
                            <li> 
                                <Link to="/contact" className='nav-link'>Contacto</Link>
                            </li>
                            <li> 
                                <Link to="/about" className='nav-link'>Acerca de</Link>
                            </li>
                        </ul>
                    </nav>
                </header>
                
                {/* main content section */}
                <main className='App-main'>
                    
                    <Routes>{/* set of paths */} 
                        <Route path="/home" element={<Home/>} />{/* request path to page/component home */}
                        <Route path="/portal" element={<Portal/>} /> {/* request path to page/component portal */}
                    
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
