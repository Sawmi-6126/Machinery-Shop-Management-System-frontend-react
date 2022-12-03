import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "../Styles/Pages.css";
import * as MdIcons from "react-icons/md";
import { useNavigate } from "react-router-dom";

function AddRepair() {
  const navigate = useNavigate();

  const navigateToParts = () => {
    navigate("/parts");
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
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Job Id</Form.Label>
              <Form.Control type="email" placeholder="" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Machine</Form.Label>
              <Form.Control type="password" placeholder="" />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Technician</Form.Label>
              <Form.Control type="email" placeholder="" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Status</Form.Label>
              <Form.Control type="password" placeholder="" />
            </Form.Group>
          </Row>
          <Row>
            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Repair Date </Form.Label>
              <Form.Control type="Date" placeholder="" />
            </Form.Group>
          </Row>
          <Button variant="primary" type="submit" onClick={navigateToParts}>
            Save
          </Button>
          &nbsp;
          <Button variant="secondary" type="submit" onClick={navigateToParts}>
            Cancel
          </Button>
        </Form>
      </section>
    </div>
  );
}

export default AddRepair;
