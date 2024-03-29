import java from "./img/java.png"
import mern from "./img/mern.png"
import mean from "./img/mean.png"
import python from "./img/python.png"
import android from "./img/android.png"
import react from "./img/react.png"
import node from "./img/node.png"
import hibernate from "./img/hibernate.png"
import spring from "./img/spring.png"
import springboot from "./img/springboot.png"
import anguler from "./img/anguler.png"
import mysql from "./img/mysql.png"
import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBRow,
    MDBCol
  } from 'mdb-react-ui-kit';
  
function Home() {
  return (
    <div>
  <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
      <MDBCol>
        <MDBCard>
         <center> <MDBCardImage
src={java} width="300px" height="200px"/></center>
          <MDBCardBody>
          <center><MDBCardTitle>Java Full Stack</MDBCardTitle></center>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard>
        <center> <MDBCardImage
src={mern} width="300px" height="200px"/></center>
          <MDBCardBody>
          <center><MDBCardTitle>MERN Full Stack</MDBCardTitle></center>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard>
        <center> <MDBCardImage
src={mean} width="300px" height="200px"/></center>
          <MDBCardBody>
            <center><MDBCardTitle>MEAN Full Stack</MDBCardTitle></center>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard>
         <center> <MDBCardImage
src={python} width="300px" height="200px"/></center>
          <MDBCardBody>
          <center><MDBCardTitle>Python Full Stack</MDBCardTitle></center>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard>
         <center> <MDBCardImage
src={android} width="300px" height="200px"/></center>
          <MDBCardBody>
          <center><MDBCardTitle>Android</MDBCardTitle></center>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard>
         <center> <MDBCardImage
src={react} width="300px" height="200px"/></center>
          <MDBCardBody>
          <center><MDBCardTitle>React JS</MDBCardTitle></center>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard>
         <center> <MDBCardImage
src={node} width="300px" height="200px"/></center>
          <MDBCardBody>
          <center><MDBCardTitle>Node JS</MDBCardTitle></center>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard>
         <center> <MDBCardImage
src={hibernate} width="300px" height="200px"/></center>
          <MDBCardBody>
          <center><MDBCardTitle>Hibernate</MDBCardTitle></center>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard>
         <center> <MDBCardImage
src={spring} width="300px" height="200px"/></center>
          <MDBCardBody>
          <center><MDBCardTitle>Spring</MDBCardTitle></center>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard>
         <center> <MDBCardImage
src={springboot} width="300px" height="200px"/></center>
          <MDBCardBody>
          <center><MDBCardTitle>Spring Boot</MDBCardTitle></center>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard>
         <center> <MDBCardImage
src={anguler} width="300px" height="200px"/></center>
          <MDBCardBody>
          <center><MDBCardTitle>Anguler JS</MDBCardTitle></center>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard>
         <center> <MDBCardImage
src={mysql} width="300px" height="200px"/></center>
          <MDBCardBody>
          <center><MDBCardTitle>MY SQL</MDBCardTitle></center>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
    
    </div>
  );
}
export default Home;
