import React, { useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import FAQ from './Routes/FAQ/FAQ';
import MainPage from './MainPage';
import Generator from './Routes/Generator/Generator';
import Results from './Routes/Results/Results';
import image from './assets/Images/movie.png';
import DarkMode from "./DarkMode";
import { Tooltip } from 'react-tooltip';

interface FacebookSDK {
    init: (options: { appId: string; cookie: boolean; xfbml: boolean; version: string }) => void;
    ui: (params: { method: string; href: string; quote: string }, callback?: (response: Record<string, unknown>) => void) => void;
}

declare global {
    interface Window {
        fbAsyncInit: () => void;
    }
    const FB: FacebookSDK;
}

const App: React.FC = () => {
    useEffect(() => {
        window.fbAsyncInit = function() {
            FB.init({
                appId      : import.meta.env.VITE_FBAPPID,
                cookie     : true,
                xfbml      : true,
                version    : 'v21.0'
            });
        };
    }, []);

    return (
        <div className="app-container">
            <nav className="navbar custom-navbar">
                <div className="container-fluid d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                        <a 
                            data-tooltip-id="gohome"
                            data-tooltip-content="Click to start over"
                            data-tooltip-place="top"
                            href="/" className="navbar-logo me-2">
                                <img src={image} alt="Logo" className="logo-img" />
                        </a>
                        <Tooltip id="gohome" />
                        <span className="navbar-caption nav-item px-3"> Elevator Pitch</span>
                    </div>
                    <div className="d-flex align-items-center icons-menu">
                        <ul className="navbar-nav mx-auto d-flex flex-row">
                            <li className="nav-item px-3"
                                data-tooltip-id="home"
                                data-tooltip-content="Click to go home"
                                data-tooltip-place="top">
                                <Link className="nav-link" to="/" >Home</Link>
                                <Tooltip id="home" />
                            </li>
                            <li className="nav-item px-3"
                                data-tooltip-id="results"
                                data-tooltip-content="Click to see previous results"
                                data-tooltip-place="top">
                                <Link className="nav-link" to="/results">Results</Link>
                                <Tooltip id="results" />
                            </li>
                            <li className="nav-item px-3" 
                                data-tooltip-id="support"
                                data-tooltip-content="Click here for assistance"
                                data-tooltip-place="top">
                                <Link className="nav-link" to="/support">Support</Link>
                                <Tooltip id="support" />
                            </li>
                            <li>
                                <div
                                    data-tooltip-id="darkmode"
                                    data-tooltip-content="Click to change theme"
                                    data-tooltip-place="top">
                                    <DarkMode />
                                </div>
                                <Tooltip id="darkmode" />
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="container mt-4">
                <Routes>
                    <Route path="/" element={<MainPage/>} />
                    <Route path="/results" element={<Results />} />
                    <Route path="/support" element={<FAQ />} />
                    <Route path="/generate" element={<Generator />} />
                </Routes>
            </div>
        </div>
    );
};

export default App;
