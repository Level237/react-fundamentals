import Navbar from "./Navbar";
import List from "./List";
function App(){

    const guitars=['Strat','Les Paul','Explorer'];
    //let stuff=List({title:'Guitars',items:guitars})

    return (
        <>
            <Navbar title="Css and Separating JS and JSX" />
        
        <div className="container">
            <List
            title="Guitars"
            items={guitars}
            background="primary"
            />
        </div>
        </>
    )
}

export default App;