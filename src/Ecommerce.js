
import { useState } from "react"


import {Container ,Card,Row, Col, Button} from 'react-bootstrap';  
function Ecommerce()
{
    const [data,setapidata]=useState([])
    fetch("https://fakestoreapi.com/products").then((result)=>{
       // console.log(result)
        result.json().then((data1)=>{
            console.log(data1)
           setapidata(data1)
        })
    })
      return(
        <div>
          
          
  <Container className='p-4'>  
  <Row>  
     
 {
 data.map((item) => (  
  <Card  
    style={{width:"200px"}}  
    className="m-2"  
  >  
    <Card.Img src={item.image} style={{height:"100px"}}/>
    <Card.Body>  
      <Card.Title style={{color:"red", fontSize:"15px"}}>{item.title.substring(0, 20)} Card Variant </Card.Title>  
      <Card.Text style={{color:"black", fontSize:"10px"}}>{item.description.substring(0, 150)}</Card.Text> 
      <Button variant="primary">Buy Now</Button>
    </Card.Body>  
  </Card>  
))}  
</Row>  
</Container>  
        </div>
      )
}
export default Ecommerce