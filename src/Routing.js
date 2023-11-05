import { BrowserRouter, Link, Route, Routes} from "react-router-dom"
import GetData from "./GetData"
import PostData from "./PostData"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function Rounting()
{
     return(
        <div>
        <BrowserRouter >
         <Link to="/">Home Page</Link><br></br>
         <Link to="/post">Post Page</Link><br></br>
         <Link to="/get">Get Page</Link><br></br> 
        <Routes> 
            <Route path="/post" element={<PostData/>}/>
            <Route path="/get"  element={<GetData/>}/>
        </Routes>
        </BrowserRouter>
        </div>
     )
}
export default Rounting