import Navbar from "./Navbar";
import React from "react";
function App(){
    return (
        <React.Fragment>
            <Navbar title="Using Fragment" />
        
        <div className="bg-dark">
            Hello World!
        </div>
        </React.Fragment>
    )
}

export default App;