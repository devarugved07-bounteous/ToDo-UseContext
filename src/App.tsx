import React from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    NavLink,
} from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import { TodoProvider } from "./TodoContext";

function App() {
    return (
        <TodoProvider>
            <Router>
                <nav className="nav">
                    <NavLink to="/" end className="nav-link">
                        Home
                    </NavLink>
                    <NavLink to="/about" className="nav-link">
                        About
                    </NavLink>
                </nav>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </Router>
        </TodoProvider>
    );
}

export default App;
