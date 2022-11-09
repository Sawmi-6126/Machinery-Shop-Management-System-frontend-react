import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Signin from "./Pages/Login/Signin";
import Customer from "./Pages/Customer/Customer";
import Machine from "./Pages/Machine/Machine";
import Parts from "./Pages/Parts/Parts";
import Repair from "./Pages/Repair/Repair";
import Technician from "./Pages/Technician/Technician";

function App() {
  return (
    <>
      <Router>
        <Sidebar />
        <Routes>
          <Route exact path="signin" element={<Signin />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="customer" element={<Customer />} />
          <Route path="machine" element={<Machine />} />
          <Route path="parts" element={<Parts />} />
          <Route path="repair" element={<Repair />} />
          <Route path="technician" element={<Technician />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
