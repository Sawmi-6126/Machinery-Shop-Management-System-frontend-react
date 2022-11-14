import React from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import "./Customer.css";
import * as MdIcons from "react-icons/md";
import Table from "react-bootstrap/Table";

function Customer() {
  const navigate = useNavigate();

  const navigateToAddNewCustomer = () => {
    navigate("/addcustomer");
  };

  return (
    <div className="page-content">
      <section className="section-main">
        <div className="col-md-6">
          <h5>
            <MdIcons.MdPerson /> &nbsp;
            <b> Customer</b>
          </h5>
          <hr></hr>
        </div>
        <div className="components">
          <Button variant="contained" onClick={navigateToAddNewCustomer}>
            <MdIcons.MdPersonAddAlt1 />
            Add New Customer
          </Button>
        </div>
        <div className="table-control">
          <Table striped className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Mobile No.</th>
                <th>Email</th>
                <th>Address</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>0712548789</td>
                <td>abc@gmail.com</td>
                <td>hgfdsdfgh</td>
                <td>
                  <Button variant="contained">
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
