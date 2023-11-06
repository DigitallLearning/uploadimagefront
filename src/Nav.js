import "./routing.css"
import { NavLink } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'
import Register from "./Register";
function Nav()
{
  
    return(
        <nav className="navbar">
        <div className="container">
        <div className="logo">
        </div>
        <div className="nav-elements">
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/post">Post Data</NavLink></li>
            <li><NavLink to="/get">View Data</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><NavLink to="/register">Register</NavLink></li>
            <li><NavLink to="/login">Login</NavLink></li>
          </ul>   
        </div>
      </div>
      
    </nav>
    )
}
export default Nav