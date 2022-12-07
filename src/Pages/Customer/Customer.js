import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import "../Styles/Pages.css";
import * as MdIcons from "react-icons/md";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";

function Customer() {
  const navigate = useNavigate();

  const navigateToAddNewCustomer = () => {
    navigate("/addcustomer");
  };
  const navigateToUpdateCustomer = () => {
    navigate("/updatecustomer");
  };

  const [customerList, setCustomerList] = useState([]);

  const deleteCustomer = (id) => {
    axios.delete(`http://localhost:3001/customer/${id}`).then(() => {
      window.location.reload(false);
    });
  };

  //React hook, get is used to fetch the data
  useEffect(() => {
    axios.get("http://localhost:3001/customer").then((allcustomers) => {
      setCustomerList(allcustomers.data);
    });
  }, []);

  return (
    <div className="page-content">
      <section className="section-main">
        <div className="col-md-6">
          <h5>
            <MdIcons.MdPerson /> &nbsp;
            <b> Customers</b>
          </h5>
          <hr></hr>
        </div>
        <div className="components">
          <Button variant="contained" onClick={navigateToAddNewCustomer}>
            <MdIcons.MdAdd />
            Add New Customer
          </Button>
        </div>
        <div className="table-control">
          {/* <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>First Name</TableCell>
                  <TableCell align="right">Last Name</TableCell>
                  <TableCell align="right">Mobile No.</TableCell>
                  <TableCell align="right">Address</TableCell>
                  <TableCell align="right">Email</TableCell>
                  <TableCell align="right">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {customerList.map((customer, key) => (
                  <TableRow
                    key={key}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {customer.f_name}Sawmika
                    </TableCell>
                    <TableCell align="right">
                      {customer.l_name}
                      Suthakaran
                    </TableCell>
                    <TableCell align="right">
                      {customer.mobile}0712354879
                    </TableCell>
                    <TableCell align="right">
                      {customer.address}Kelaniya
                    </TableCell>
                    <TableCell align="right">
                      {customer.email}abc@gmail.com
                    </TableCell>
                    <TableCell align="right">
                      <Button
                        variant="contained"
                        onClick={navigateToUpdateCustomer}
                      >
                        <MdIcons.MdCreate />
                      </Button>{" "}
                      &nbsp;
                      <Button
                        style={{
                          padding: "5px",
                          backgroundColor: "red",
                        }}
                        variant=""
                        onClick={() => deleteCustomer(customer.id)}
                      >
                        <MdIcons.MdDelete />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer> */}
          <Table striped className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Mobile</th>
                <th>Address</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Sawmika</td>
                <td>Suthakaran</td>
                <td>0724536987</td>
                <td>Kelaniya</td>
                <td>abc@gmail.com</td>
                <td>
                  <Button
                    variant="contained"
                    onClick={navigateToUpdateCustomer}
                  >
                    <MdIcons.MdCreate />
                  </Button>{" "}
                  &nbsp;
                  <Button
                    style={{
                      padding: "5px",
                      backgroundColor: "red",
                    }}
                    variant=""
                  >
                    <MdIcons.MdDelete />
                  </Button>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </section>
    </div>
  );
}

export default Customer;
