import { React } from "react";
import { Card, CardGroup } from "react-bootstrap";
import Packages from "../components/Package"; 

const PackagePage = () => {
    return(
        <>
       <h1 style={{fontSize:"30px",fontFamily:"Trebuchet MS",textAlign:"center"}}><b>Choose your</b> <span style={{color:"#0080ff"}} ><b>Package</b> </span></h1> 
       <CardGroup className="container-fluid" >
           <Card style={{border:'none',marginLeft:"5%"}}  ><Card.Body><Packages/></Card.Body></Card>
           <Card style={{border:'none',marginLeft:"5%"}}><Card.Body><Packages/></Card.Body></Card>
           <Card style={{border:'none',marginLeft:"5%"}}><Card.Body><Packages/></Card.Body></Card>
       </CardGroup>   
       </> 
    )
  
}

export default PackagePage;