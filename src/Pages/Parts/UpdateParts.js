import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "./Parts.css";
import * as MdIcons from "react-icons/md";
import * as FaIcons from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function UpdateParts() {
  const navigate = useNavigate();

  const navigateToParts = () => {
    navigate("/parts");
  };

  return (
    <div className="form-content">
      <section className="section">
        <div className="col-md-6">
          <h5>
            <FaIcons.FaToolbox /> &nbsp;
            <b> Inventory </b>
          </h5>
          <hr />
        </div>
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Barcode</Form.Label>
              <Form.Control type="email" placeholder="" />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Description</Form.Label>
              <Form.Control type="password" placeholder="" />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Unit Price</Form.Label>
              <Form.Control type="email" placeholder="" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Quantity</Form.Label>
              <Form.Control type="password" placeholder="" />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group className="mb-3" controlId="formGridAddress2">
              <Form.Label>Discount </Form.Label>
              <Form.Control placeholder="" />
            </Form.Group>
          </Row>
          <Button variant="primary" type="submit" onClick={navigateToParts}>
            Update
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

export default UpdateParts;
