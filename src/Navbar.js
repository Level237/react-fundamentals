
import { Link } from "react-router-dom";
function Navbar({title,topics}){
    let listItems=topics.map((item,index)=>{
        return(
            <li className="nav-item">
                <Link to={`/news/${item}`} className="nav-link" key={index}>{item}</Link>
            </li>
        );
    })
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand " href="#"> React Fundamentals:{title}</a>

                <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                    {listItems}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;