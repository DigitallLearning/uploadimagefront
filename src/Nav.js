import "./routing.css"
import { NavLink } from 'react-router-dom'
import {useNavigate} from "react-router-dom"
import UserProfile from './UserProfile';


function Nav()
{
 
  const navigate = useNavigate();

  function logout()
  {
    UserProfile.setName("null")
    navigate("/")
  }
    return(
      
        <nav className="navbar">
         
        <div className="container">
          
        <div className="logo">
      
        </div>
        <div className="nav-elements">
        
          <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/java">Java</NavLink></li>
            <li><NavLink to="/mean">MEAN</NavLink></li>
            <li><NavLink to="/mern">MERN</NavLink></li>
            <li><NavLink to="/python">Python</NavLink></li>
            <li><NavLink to="/android">Android</NavLink></li>
            <li><NavLink to="/react">React JS</NavLink></li>
            <li><NavLink to="/node">Node JS</NavLink></li>
            <li><NavLink to="/anguler">Anguler</NavLink></li>
          </ul>   
        </div>
      </div>
      
    </nav>
    )
}
export default Nav