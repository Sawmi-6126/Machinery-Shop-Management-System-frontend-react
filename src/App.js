import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Addcustomer from "./Pages/Customer/Addcustomer";
import Customer from "./Pages/Customer/Customer";
import Signup from "./Pages/Signin/Signin";

function App() {
  return (
    <>
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="dashboard" element={<Dashboard />} />
          {/* <Route path="customer" element={<Customer />} />
          <Route path="customer/add" element={<Addcustomer />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
