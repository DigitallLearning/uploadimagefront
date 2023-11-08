import Card from 'react-bootstrap/Card';
import logo from "./logo.svg"
function Item()
{
      return(
        <div>
           <Card>
        <Card.Img variant="top" src={logo} width="200px" height="200px" />
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
      
    
        </div>
      )
}
export default Item