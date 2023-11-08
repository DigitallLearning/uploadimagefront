import "./routing.css"
import { NavLink } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'
import Register from "./Register";
import {useNavigate} from "react-router-dom"
function Nav()
{
  const navigate = useNavigate();
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
           <li> <Button variant="primary" onClick={()=>navigate("/register")}>Register</Button></li>
            <li><Button variant="primary" onClick={()=>navigate("/login")}>Login</Button></li>
          </ul>   
        </div>
      </div>
      
    </nav>
    )
}
export default Nav