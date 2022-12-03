import React from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import "../Styles/Pages.css";
import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";

function Repair() {
  const navigate = useNavigate();

  const navigateToAddNewRepair = () => {
    navigate("/addrepair");
  };
  const navigateToUpdateRepair = () => {
    navigate("/updaterepair");
  };

  return (
    <div className="page-content">
      <section className="section-main">
        <div className="col-md-6">
          <h5>
            <FaIcons.FaTools /> &nbsp;
            <b> Repair</b>
          </h5>
          <hr></hr>
        </div>
        <div className="components">
          <Button variant="contained" onClick={navigateToAddNewRepair}>
            <MdIcons.MdAdd />
            Add New Repair Details
          </Button>
        </div>
        <div className="search">
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="contained">Search</Button>
          </Form>
        </div>
        <div className="table-control">
          <Table striped className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Job Id</th>
                <th>Machine</th>
                <th>Technician</th>
                <th>Repair Date</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>6234</td>
                <td>Drill</td>
                <td>Thanuskaran</td>
                <td>10/11/2022</td>
                <td>On progress</td>
                <td>
                  <Button variant="contained" onClick={navigateToUpdateRepair}>
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

export default Repair;
