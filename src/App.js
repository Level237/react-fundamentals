import Navbar from "./Navbar";
import List from "./ListClass";
import Counter from "./CounterClass";
function App(){

    const guitars=['Strat','Les Paul','Explorer'];
    //let stuff=List({title:'Guitars',items:guitars})

    return (
        <>
            <Navbar title="Using Controlled Input" />
        
        <div className="container">

            {/* <Counter /> */}
            {/* <AddItem/> */}
            <List
            title="Guitars"
            items={guitars}
            background="danger"
            />
        </div>
        </>
    )
}

export default App;