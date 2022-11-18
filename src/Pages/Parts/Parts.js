import React from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import "./Parts.css";
import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";
import Table from "react-bootstrap/Table";

function Parts() {
  const navigate = useNavigate();

  const navigateToAddParts = () => {
    navigate("/addparts");
  };
  const navigateToUpdateParts = () => {
    navigate("/updateparts");
  };

  return (
    <div className="page-content">
      <section className="section-main">
        <div className="col-md-6">
          <h5>
            <FaIcons.FaTools /> &nbsp;
            <b> Parts Pool</b>
          </h5>
          <hr></hr>
        </div>
        <div className="components">
          <Button variant="contained" onClick={navigateToAddParts}>
            <MdIcons.MdAdd />
            Add New Parts
          </Button>
        </div>
        <div className="table-control">
          <Table striped className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Machine Type</th>
                <th>Brand</th>
                <th>Color</th>
                <th>Received Date</th>
                <th>Customer Name</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Angle Grinder</td>
                <td>Hugo</td>
                <td>Red</td>
                <td>10/11/2022</td>
                <td>Suthakaran</td>
                <td>
                  <Button variant="contained" onClick={navigateToUpdateParts}>
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

export default Parts;
