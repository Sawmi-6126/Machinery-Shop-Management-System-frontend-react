import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Customer from "./Pages/Customer/Customer";
import Machine from "./Pages/Machine/Machine";
import Parts from "./Pages/Parts/Parts";
import Repair from "./Pages/Repair/Repair";
import Technician from "./Pages/Technician/Technician";
import AddCustomer from "./Pages/Customer/AddCustomer";
import Signin from "./Pages/Login/Signin";
import LandingPage from "./Pages/LandingPage/LandingPage";

function App() {
  return (
    <div>
      <div>
        <Router>
          <Sidebar />
          <Routes>
            <Route path="/" exact element={<LandingPage />} />
            <Route path="/signin" exact element={<Signin />} />
            <Route path="/dashboard" exact element={<Dashboard />} />
            <Route exact path="/customer" element={<Customer />} />
            <Route exact path="/addcustomer" element={<AddCustomer />} />
            <Route path="/machine" element={<Machine />} />
            <Route path="/parts" element={<Parts />} />
            <Route path="/repair" element={<Repair />} />
            <Route path="/technician" element={<Technician />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
