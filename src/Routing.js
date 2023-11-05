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
          <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Arvind</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/post">Post Data</Nav.Link>
            <Nav.Link href="/get">Get Data</Nav.Link>
          </Nav>
        </Container>
      </Navbar> 
      <br></br> 
        <Routes>
           
        
            <Route path="/post" element={<PostData/>}/>
            <Route path="/get"  element={<GetData/>}/>
        </Routes>
        </BrowserRouter>
        </div>
     )
}
export default Rounting