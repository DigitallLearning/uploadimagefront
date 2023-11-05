import { useEffect, useState } from "react"
import {Container ,Card,Row, Col, Button} from 'react-bootstrap';  
function GetData()
{
    const [data1,setData]=useState([])
   useEffect(()=>
   {
    fetch("https://uploadimage-t8wr.onrender.com/").then((result)=>{
        // console.log(result)
        result.json().then((data)=>
        {

         setData(data)
        })
     })
   },[])
    return(
        <div>
           {/* <Table striped bordered hover variant="dark">
            <tbody>
                <tr>
                    <td>Product Id</td>
                    <td>Product Name</td>
                    <td>Product Desc</td>
                    <td>Product Price</td>
                    <td>Product Image</td>
                </tr>
                { 
                    data1.map((item,k)=>
                        <tr>
                        <td>{item.pid}</td> 
                        <td>{item.pname}</td>  
                        <td>{item.pdesc}</td>
                        <td>{item.pprice}</td>
                        <td><img src={item.pimage} width="200px" height="200px"/></td>
                      </tr>  
                    )
                }
            </tbody>
           </Table > */}

<Container className='p-4'>  
  <Row>      
 {
 data1.map((item) => (  
  <Card  
    style={{width:"200px"}}  
    className="m-2"  
  >  
    <Card.Img src={item.pimage} style={{height:"100px"}}/>
    <Card.Body>  
      <Card.Title style={{color:"red", fontSize:"15px"}}>{item.pname.substring(0, 20)}</Card.Title>
      <Card.Title style={{color:"blue", fontSize:"15px"}}>{item.pprice} Rs</Card.Title>  
      <Card.Text style={{color:"black", fontSize:"10px"}}>{item.pdesc.substring(0, 150)}</Card.Text> 
      <Button variant="primary">Buy Now</Button>
    </Card.Body>  
  </Card>  
))}  
</Row>  
</Container> 
        </div>
    )
}
export default GetData
   
