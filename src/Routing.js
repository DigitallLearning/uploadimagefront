import { BrowserRouter, Link, Route, Routes} from "react-router-dom"
import GetData from "./GetData"
import PostData from "./PostData"
import "./routing.css"
import Nav from "./Nav"
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
        </Routes>
        </BrowserRouter>
        </div>
     )
}
export default Rounting