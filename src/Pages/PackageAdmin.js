import { Dropdown, DropdownButton, Table } from "react-bootstrap";

const PackageAdmin = () => {
    return(
        <>
       
   <table>
    <tbody>
        <tr>
            <td><b className="fs-5">Select the package :  </b></td>
            <td>
            <DropdownButton id="dropdown-item-button" title="Select Package" className="my-3 mx-5">
            <Dropdown.Item as="button">Platinum</Dropdown.Item>
            <Dropdown.Item as="button">Gold</Dropdown.Item>
            <Dropdown.Item as="button">Silver</Dropdown.Item>
            </DropdownButton>
            </td>
        </tr>
    </tbody>
   </table>
   
   
      

<Table >
  <tbody>
    <tr>
      <td>1</td>
      <td>Package Name</td>
      <td></td>
      <td>Otto</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Package Price</td>
      <td></td>
      <td>Otto</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Package Features</td>
      <td></td>
      <td>Otto</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Package Description</td>
      <td></td>
      <td>Otto</td>
    </tr>
    <tr>
    <td>5</td>
      <td>Subscription Period</td>
      <td></td>
      <td>Otto</td>
    </tr>
    <tr>
      <td>6</td>
      <td>Package Logo</td>
      <td></td>
      <td>Otto</td>
    </tr>
    <tr>
      <td>7</td>
      <td>Package Advertisements</td>
      <td></td>
      <td>Otto</td>
    </tr>
   
  </tbody>
</Table>
        </>
    )
}

export default PackageAdmin;