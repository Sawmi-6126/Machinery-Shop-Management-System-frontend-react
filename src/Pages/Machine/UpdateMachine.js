import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "./Machine.css";
import * as MdIcons from "react-icons/md";
import { useNavigate } from "react-router-dom";

function UpdateMachine() {
  const navigate = useNavigate();

  const navigateToMachine = () => {
    navigate("/machine");
  };

  return (
    <div className="form-content">
      <section className="section">
        <div className="col-md-6">
          <h5>
            <MdIcons.MdPersonAddAlt1 /> &nbsp;
            <b>Add New Machine Details</b>
          </h5>
          <hr />
        </div>
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Customer Mobile</Form.Label>
              <Form.Control type="email" placeholder="" />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Customer Name</Form.Label>
              <Form.Control type="password" placeholder="Suthakaran" />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Machine Type</Form.Label>
              <Form.Control type="email" placeholder="" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Brand</Form.Label>
              <Form.Control type="password" placeholder="" />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Color </Form.Label>
              <Form.Control placeholder="" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Received Date </Form.Label>
              <Form.Control type="Date" placeholder="" />
            </Form.Group>
          </Row>
          <Button variant="primary" type="submit" onClick={navigateToMachine}>
            Update
          </Button>
          &nbsp;
          <Button variant="secondary" type="submit" onClick={navigateToMachine}>
            Cancel
          </Button>
        </Form>
      </section>
    </div>
  );
}

export default UpdateMachine;