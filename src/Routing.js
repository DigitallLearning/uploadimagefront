import { BrowserRouter, Link, Route, Routes} from "react-router-dom"
import "./routing.css"
import Nav from "./Nav"
import Foot from "./Foot"
import Home from "./Home"
function Rounting()
{
     return(
        <div>
        <BrowserRouter>
        <Nav></Nav><br></br>
        <Routes> 
        <Route path="/" element={<Home></Home>}/> 
            {/* <Route path="/" element={<GetData/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/item" element={<Item/>}/>
            <Route path="/post" element={<PostData></PostData>}/> */}
        </Routes>
        </BrowserRouter>
        <Foot></Foot>
        </div>
     )
}
export default Rounting