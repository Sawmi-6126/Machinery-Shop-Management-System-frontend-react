import "./App.css";
import Sidebar from "./Components/Sidebar/Sidebar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Addcustomer from "./Pages/Customer/Addcustomer";
import Customer from "./Pages/Customer/Customer";

function App() {
  return (
    <>
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/" exact element={<Dashboard />} />
          <Route path="customer" element={<Customer />} />
          <Route path="customer/add" element={<Addcustomer />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
