// src/routes.jsx
 
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
 
import Home from './pages/Home'
import History from './pages/notre-histoire'
 
export default function MainRouter () {
    return (
        <Router>
            <div>
                <Route exact path="/" component={Home}/>;
                <Route path="/notre-histoire" component={History}/>;
            </div>
        </Router>
    );
};