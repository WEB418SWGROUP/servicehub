import "bootstrap/dist/css/bootstrap.css"
import './App.css';
import Navibar from "./components/NavBar";
import PackagePage from "./Pages/PackagePage";
import { Routes, Route} from "react-router-dom";
import PackDetails from "./Pages/PackageDes";
import Payment from "./Pages/Payment";
import Admin from "./Pages/Admin";
import PackageAdmin from "./Pages/PackageAdmin";


function App() {
  return (
    <>
   {/* <Navibar/> */}
   <Routes>
     <Route path='/packages' element={<PackagePage/>}/>
     <Route path='/packages_details' element={<PackDetails/>}/>
     <Route path='/payment' element={<Payment/>}/>
     <Route path='/admin' element={<Admin/>}/>
     <Route path='/package_admin' element={<PackageAdmin/>}/>
   </Routes>
  
    </>
    
     
  );
}

export default App;
