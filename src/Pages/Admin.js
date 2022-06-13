import { React } from "react";
import { Container } from "react-bootstrap";
import { ListGroup, Navbar , Card} from "react-bootstrap";
import { NavLink , Outlet } from "react-router-dom";
const Admin = () => {
    return (
        <>
        <Navbar bg="dark" variant="dark" fixed="top">
      <Container>
      <Navbar.Brand href="#home">
       Service Hub
       </Navbar.Brand>
       </Container>
       </Navbar>
     
       <div style={{display:"flex",paddingTop:"4%"}}>
        <div  style={{border:"1px solid black",width:"25%",height:"100%",position: "fixed"}}><Card style={{ width: "100%" }}>
        <ListGroup variant="flush">
        <ListGroup.Item><NavLink to='package_admin'>Packages</NavLink></ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
        </Card></div>
        <div style={{width:"75%",marginLeft:"25%"}}><Card><Card.Header> <h1 style={{fontSize:"30px",fontFamily:"Trebuchet MS"}}><b>Package</b> <span style={{color:"#0080ff"}} ><b>Details</b> </span></h1> </Card.Header>
        <Card.Body><Outlet/></Card.Body></Card></div>
       </div>
      
        </>
       
    )
}

export default Admin;
