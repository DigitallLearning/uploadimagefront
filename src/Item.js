import Card from 'react-bootstrap/Card';
import {Button} from 'react-bootstrap'; 
import logo from "./logo.svg"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom";

function Item()
{
  const location = useLocation();
  const carddata = location.state;
  const [carddata1,setCarddata]=useState({})
  useEffect(()=>
  {
   fetch("https://uploadimage-t8wr.onrender.com/").then((result)=>{
       // console.log(result)
       result.json().then((data)=>
       {
        let carddata2 = data.find(element => element.pid == carddata.name);
           // console.log(restaurant)
          
           setCarddata(carddata2)
       })
    })
  },[])
      return(
        <div>
           <Card  className="m-2"  >
            
        <Card.Img variant="top" src={carddata1.pimage} style={{height:"300px",width:"300px"}} />
        <Card.Body>
          <Card.Title style={{color:"red"}}> {carddata1.pname}</Card.Title>
          <Card.Title style={{color:"blue"}}> {carddata1.pprice} Rs</Card.Title>
          <Card.Text style={{color:"black"}}>{carddata1.pdesc}</Card.Text>
          <Button variant="primary" >Buy Now</Button>
        </Card.Body>
      </Card>
      
    
        </div>
      )
}
export default Item