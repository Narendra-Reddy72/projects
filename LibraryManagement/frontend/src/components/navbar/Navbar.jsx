import React from "react";
import { Link } from "react-router-dom";

function Navbar (){
    return(
        <div className="nav-container">
            <nav className="navbar">
                <ul className="nav-link">
                    <li><Link to='/signup'>Signup</Link></li>
                    <li><Link to='/login'>Login</Link></li>
                    <li><Link to='/bookForm'>BookForm</Link></li>
                    <li><Link to=''></Link></li>
                    <li><Link to=''></Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;