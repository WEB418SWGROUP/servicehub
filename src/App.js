import "bootstrap/dist/css/bootstrap.css"
import './App.css';
import Navibar from "./components/NavBar";
import Packages from "./components/Package";
import Input from "./controls/Input";
import PackagePage from "./Pages/PackagePage";

function App() {
  return (
    <>
     <Navibar/>
    {/* <Packages/>  */}
    <PackagePage/>
    </>
    
     
  );
}

export default App;
