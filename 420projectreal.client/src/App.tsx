import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import FAQ from './Routes/FAQ/FAQ';
import MainPage from './MainPage';
import Generator from './Routes/Generator/Generator';
import Results from './Routes/Results/Results';
import image from './assets/Images/movie.png';

const App: React.FC = () => {
    return (
        <div className="app-container">
            <nav className="navbar custom-navbar">
                <div className="container-fluid d-flex align-items-center justify-content-between">
                    {/* Left-aligned logo and title */}
                    <div className="d-flex align-items-center">
                        <a href="/" className="navbar-logo me-2">
                            <img src={image} alt="Logo" className="logo-img" />
                        </a>
                        <span className="navbar-caption">MovieStuff</span>
                    </div>

                    {/* Centered navigation links */}
                    <ul className="navbar-nav mx-auto d-flex flex-row">
                        <li className="nav-item px-3">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item px-3">
                            <Link className="nav-link" to="/results">Results</Link>
                        </li>
                        <li className="nav-item px-3">
                            <Link className="nav-link" to="/support">Support</Link>
                        </li>
                    </ul>

                    {/* Right-aligned icons and button */}
                    <div className="d-flex align-items-center icons-menu">
                        <a href="mailto:support@example.com" className="iconfont-wrapper p-2 me-3">
                            <span className="mbr-iconfont mobi-mbri-letter mobi-mbri"></span>
                        </a>
                        <a href="#" className="iconfont-wrapper p-2 me-3">
                            <span className="mbr-iconfont mobi-mbri-up mobi-mbri"></span>
                        </a>
                        <a href="#" className="iconfont-wrapper p-2 me-3">
                            <span className="mbr-iconfont mobi-mbri-like mobi-mbri"></span>
                        </a>
                        <Link to="/generate" className="btn btn-primary">Generate</Link>
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
