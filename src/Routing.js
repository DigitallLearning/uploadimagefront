import { BrowserRouter, Link, Route, Routes} from "react-router-dom"
import GetData from "./GetData"
import PostData from "./PostData"
import "./routing.css"
import Nav from "./Nav"
import Foot from "./Foot"
import Register from "./Register"
function Rounting()
{
     return(
        <div>
        <BrowserRouter>
        <Nav></Nav><br></br>
        <Routes> 
            <Route path="/" element={<GetData/>}/>
            <Route path="/post" element={<PostData/>}/>
            <Route path="/get"  element={<GetData/>}/>
            <Route path="/register" element={<Register/>}/>
        </Routes>
        </BrowserRouter>
        <Foot></Foot>
        </div>
     )
}
export default Rounting