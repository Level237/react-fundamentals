import Navbar from "./Navbar";
import List from "./List";
import Counter from "./Counter";
function App(){

    const guitars=['Strat','Les Paul','Explorer'];
    //let stuff=List({title:'Guitars',items:guitars})

    return (
        <>
            <Navbar title="Getting Started with state" />
        
        <div className="container">

            <Counter />
            {/* <List
            title="Guitars"
            background="danger"
            /> */}
        </div>
        </>
    )
}

export default App;