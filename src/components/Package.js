import React from "react";
import { Card } from "react-bootstrap";
import gold from '../GoldIcon.png';
import { TiTick } from "react-icons/ti";
import { ImCross} from "react-icons/im";
import { Button } from "react-bootstrap";
 const Packages = ()=>{
     return(
         <> 
         <Card style={{ width: '18rem' }}>
             <Card.Body>
          <Card.Text>Gold</Card.Text>
          <Card.Img src={gold} />
          <Card.Text><b>Rs. 400 / year</b></Card.Text>
          <Card.Text>
          <ul style={{listStyle:'none'}} >
             <li><TiTick/>10+ templates designs</li>
             <li><TiTick/>100+ accounts per month</li>
             <li><TiTick/>Calandar facilities</li>
             <li style={{color:'#3d3d29'}}><ImCross/>Google map facilities</li>
         </ul>
         <Button variant="primary" style={{margin:'center'}}>Subscribe</Button>

          </Card.Text>
          </Card.Body>
         </Card>
         </>
     )
 }

 export default Packages;


