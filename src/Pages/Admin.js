import { React } from "react";
import { Container } from "react-bootstrap";
import { ListGroup, Navbar , Card} from "react-bootstrap";
const Admin = () => {
    return (
        <>
        <Navbar bg="dark" variant="dark">
      <Container>
      <Navbar.Brand href="#home">
       Service Hub
       </Navbar.Brand>
       </Container>
       </Navbar>
     
       <div style={{display:"flex"}}>
        <div  style={{border:"1px solid black",width:"25%",height:"100%",position: "fixed"}}><Card style={{ width: "100%" }}>
  <ListGroup variant="flush">
    <ListGroup.Item>Cras justo odio</ListGroup.Item>
    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
  </ListGroup>
</Card></div>
        <div style={{border:"1px solid black",width:"75%",marginLeft:"25%"}}><Card><Card.Header>Packages</Card.Header><Card.Body><h1>g</h1></Card.Body></Card></div>
       </div>
      
        </>
       
    )
}

export default Admin;
