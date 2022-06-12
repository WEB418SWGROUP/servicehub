import { React } from "react";
import { Button, Card, CardGroup } from "react-bootstrap";
import { MdOutlineSupervisorAccount } from "react-icons/md"

const PackDetails = (props) => {

    return(
        <>
     
        <p className="packageName"  style={{color:'#e6ac00',textAlign:'left',padding:'1% 18% 2%'}}>{props.name} <b><span style={{fontSize:"30px",fontFamily:"Trebuchet MS",marginBottom: "2%",marginTop: "0%",textAlign:"center",color:'black'}}>: About  <span style={{color:"#0080ff"}} >Package</span></span></b>   </p>
        <CardGroup style={{margin:'0% 15%'}}>
        <Card><Card.Body><h1>Hi</h1>
            </Card.Body></Card>
            {/* <Card.Img src={props.image} style={{width:"70%",height:"70%",marginLeft:"15%"}} /> */}
            <Card><Card.Body>
                <Card.Text> <p style={{textAlign:'justify',paddingRight:'10%',paddingTop:'10%'}}>This is gold package . This package is nice. It has good features. It has great features such access
         100+ account per month, 10+ templates ,google.It is suitable for medium scale businesses. Subscribe and enjoy!
          </p>
          <p className="fs-5 text-secondary">Starts from <span style={{fontSize:'40px',color:'#e6ac00'}}>Rs.400</span> per year</p>
         <Button>Subscribe</Button>
         <h6 className="fs-5 text-primary" variant="primary" >Try package for free. Get one week free trial !</h6></Card.Text>
            </Card.Body></Card>  

           
    </CardGroup>

    <CardGroup style={{margin:'5% 10%',textAlign:'center'}}>
                <Card><Card.Body className="mx-auto"><MdOutlineSupervisorAccount size={50}/><h4>100+ Accounts</h4><p>You can access 100+ service consumers posts fit to your criterias per month.</p></Card.Body></Card>
                <Card><Card.Body className="mx-auto"><MdOutlineSupervisorAccount size={50}/><h4>100+ Accounts</h4><p>You can access 100+ service consumers posts fit to your criterias per month.</p></Card.Body></Card>
                <Card><Card.Body className="mx-auto"><MdOutlineSupervisorAccount size={50}/><h4>100+ Accounts</h4><p>You can access 100+ service consumers posts fit to your criterias per month.</p></Card.Body></Card>
                <Card><Card.Body className="mx-auto"><MdOutlineSupervisorAccount size={50}/><h4>100+ Accounts</h4><p>You can access 100+ service consumers posts fit to your criterias per month.</p></Card.Body></Card>
            </CardGroup>
    </>
    )
  
}

export default PackDetails;