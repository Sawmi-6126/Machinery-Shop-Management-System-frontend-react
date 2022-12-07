import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "../Styles/Pages.css";
import * as MdIcons from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function AddCustomer() {
  const navigate = useNavigate();

  const navigateToCustomer = () => {
    navigate("/customer");
  };

  const [customer, setCustomer] = useState({
    f_name: "",
    l_name: "",
    address: "",
    mobile: "",
    email: "",
  });

  const addCustomer = () => {
    axios.post("http://localhost:3001/customer", customer);
  };

  return (
    <div className="form-content">
      <section className="section">
        <div className="col-md-6">
          <h5>
            <MdIcons.MdPersonAddAlt1 /> &nbsp;
            <b>Add New Customer</b>
          </h5>
          <hr />
        </div>
        <Form>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Sawmika"
                value={customer.f_name}
                onChange={(event) => {
                  setCustomer({ ...customer, f_name: event.target.value });
                }}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Suthakaran"
                value={customer.l_name}
                onChange={(event) => {
                  setCustomer({ ...customer, l_name: event.target.value });
                }}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Mobile No.</Form.Label>
              <Form.Control
                type="String"
                placeholder="07x xxxxxxx"
                value={customer.mobile}
                onChange={(event) => {
                  setCustomer({ ...customer, mobile: event.target.value });
                }}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="abc@gmail.com"
                value={customer.email}
                onChange={(event) => {
                  setCustomer({ ...customer, email: event.target.value });
                }}
              />
            </Form.Group>
          </Row>
          <Form.Group className="mb-3" controlId="formGridAddress2">
            <Form.Label>Address </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter address here."
              value={customer.address}
              onChange={(event) => {
                setCustomer({ ...customer, address: event.target.value });
              }}
            />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={addCustomer}>
            Save
          </Button>
          &nbsp;
          <Button
            variant="secondary"
            type="submit"
            onClick={navigateToCustomer}
          >
            Cancel
          </Button>
        </Form>
      </section>
    </div>
  );
}

export default AddCustomer;
