import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "../Styles/Pages.css";
import * as MdIcons from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import axios from "axios";

function AddRepair() {
  const navigate = useNavigate();
  const navigateToRepair = () => {
    navigate("/repair");
  };
  const [repair, setRepair] = useState({
    job_id: "",
    brand: "",
    type: "",
    color: "",
    received_date: "",
    status: "",
  });

  const addrepair = () => {
    axios.post("http://localhost:3001/repair", repair);
  };

  return (
    <div className="form-content">
      <section className="section">
        <div className="col-md-6">
          <h5>
            <MdIcons.MdPersonAddAlt1 /> &nbsp;
            <b>Add New Task</b>
          </h5>
          <hr />
        </div>

        <Form method="POST">
          <Row className="mb-3">
            <Form.Label>Job Id</Form.Label>
            <InputGroup className="mb-3">
              <Form.Control
                placeholder=""
                aria-label=""
                aria-describedby="basic-addon2"
                onChange={(event) => {
                  setRepair({ ...repair, job_id: event.target.value });
                }}
              />
              <Button variant="outline-secondary" id="button-addon2">
                <MdIcons.MdPrint />
              </Button>
            </InputGroup>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Customer mobile</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                // onChange={(event) => {
                //   setRepair({ ...repair, : event.target.value });
                // }}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Customer Name</Form.Label>
              <Form.Control type="text" placeholder="" />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Machine Type</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                onChange={(event) => {
                  setRepair({ ...repair, type: event.target.value });
                }}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridAddress2">
              <Form.Label>Brand</Form.Label>
              <Form.Control
                placeholder=""
                onChange={(event) => {
                  setRepair({ ...repair, brand: event.target.value });
                }}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Color </Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                onChange={(event) => {
                  setRepair({ ...repair, color: event.target.value });
                }}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Technician</Form.Label>
              <Form.Select aria-label="Default select example">
                <option></option>
                <option value="1">Thanu</option>
                <option value="2">Sri</option>
                {/* <option value="3">Completed</option> */}
              </Form.Select>
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridAddress2">
              <Form.Label>Received Date </Form.Label>
              <Form.Control
                type="Date"
                placeholder=""
                onChange={(event) => {
                  setRepair({ ...repair, received_date: event.target.value });
                }}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Status</Form.Label>
              <Form.Select aria-label="Default select example">
                <option></option>
                <option value="1">Pending</option>
                <option value="2">On Progress</option>
                <option value="3">Completed</option>
              </Form.Select>
            </Form.Group>
          </Row>
          <div className="bottom-buttons">
            <Button variant="primary" type="submit" onClick={navigateToRepair}>
              Save
            </Button>
            &nbsp;
            <Button
              variant="secondary"
              type="submit"
              onClick={navigateToRepair}
            >
              Cancel
            </Button>
          </div>
        </Form>
      </section>
    </div>
  );
}

export default AddRepair;
