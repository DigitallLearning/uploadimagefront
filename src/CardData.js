import {Container ,Card,Row, Button} from 'react-bootstrap';  
function CardData(prop)
{
    return(
        <Container className='p-4'>  
        <Row>      
       {
       prop.data1.map((item) => (  
        <Card  
          style={{width:"200px"}}  
          className="m-2"  
        >  
          <Card.Img src={item.pimage} style={{height:"100px"}}/>
          <Card.Body>  
            <Card.Title style={{color:"red", fontSize:"15px"}}>{item.pname.substring(0, 20)}</Card.Title>
            <Card.Title style={{color:"blue", fontSize:"15px"}}>{item.pprice} Rs</Card.Title>  
            <Card.Text style={{color:"black", fontSize:"10px"}}>{item.pdesc.substring(0, 150)}</Card.Text> 
            <Button variant="primary">View Detail</Button>
          </Card.Body>  
        </Card>  
      ))}  
      </Row>  
      </Container>
    )
}
export default CardData