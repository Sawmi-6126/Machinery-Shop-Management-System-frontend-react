import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Customer from "./Pages/Customer/Customer";
import AddCustomer from "./Pages/Customer/AddCustomer";
import UpdateCustomer from "./Pages/Customer/UpdateCustomer";
import Machine from "./Pages/Machine/Machine";
import AddMachine from "./Pages/Machine/AddMachine";
import UpdateMachine from "./Pages/Machine/UpdateMachine";
import Parts from "./Pages/Parts/Parts";
import AddParts from "./Pages/Parts/AddParts";
import UpdateParts from "./Pages/Parts/UpdateParts";
import Repair from "./Pages/Repair/Repair";
import Technician from "./Pages/Technician/Technician";
import AddTechnician from "./Pages/Technician/AddTechnician";
import UpdateTechnician from "./Pages/Technician/UpdateTechnician";
import LandingPage from "./Pages/LandingPage/LandingPage";
import Signup from "./Pages/Login/Signup";
import Signin from "./Pages/Login/Signin";

function App() {
  return (
    <div>
      <div>
        <Router>
          <Sidebar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/signin" exact element={<Signin />} />
            <Route path="/signup" exact element={<Signup />} />
            <Route path="/dashboard" exact element={<Dashboard />} />
            <Route path="/customer" element={<Customer />} />
            <Route path="/addcustomer" element={<AddCustomer />} />
            <Route path="/updatecustomer" element={<UpdateCustomer />} />
            <Route path="/machine" element={<Machine />} />
            <Route path="/addmachine" element={<AddMachine />} />
            <Route path="/updatemachine" element={<UpdateMachine />} />
            <Route path="/parts" element={<Parts />} />
            <Route path="/addparts" element={<AddParts />} />
            <Route path="/updateparts" element={<UpdateParts />} />
            <Route path="/repair" element={<Repair />} />
            <Route path="/technician" element={<Technician />} />
            <Route path="/addtechnician" element={<AddTechnician />} />
            <Route path="/updatetechnician" element={<UpdateTechnician />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
