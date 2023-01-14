import Navbar from "./Navbar";
import React from "react";
import List from "./List";
function App(){

    const guitars=['Strat','Les Paul','Explorer'];


    return (
        <React.Fragment>
            <Navbar title="Css and Separating JS and JSX" />
        
        <div className="container">
            <List
            title="Guitars"
            items={guitars}
            />
        </div>
        </React.Fragment>
    )
}

export default App;