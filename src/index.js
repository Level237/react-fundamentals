import React from "react";
import  ReactDOM  from "react-dom/client";

import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Home";
import ReactNews from "./ReactNews";
import JavaScriptNews from "./Javascript";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import './index.css';
const root=ReactDOM.createRoot(document.getElementById('root'));

root.render(
    // <React.StrictMode>
         <Router>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/react" element={<ReactNews />}/>
                <Route path="/javascript" element={<JavaScriptNews />}/>
                <Route path="/" element={<Home />}/>
            </Routes>
         </Router>
    // </React.StrictMode>
   
);