import { Form, Col, Button, Image } from "react-bootstrap";
import { useState } from "react";
import coverImg from "../assets/pexels-suzy-hazelwood-1172018.jpg";

const UserForm = () => {
  const [user, setUser] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
  });

  const [submit, setSubmit] = useState({
    canSubmit: false,
  });

  const handleInput = (e, propertyName) => {
    e.target.value.length === 0
      ? (e.target.style.backgroundColor = "white")
      : e.target.value.length < 2
      ? (e.target.style.backgroundColor = "red")
      : (e.target.style.backgroundColor = "green");
    setUser({
      ...user,
      [propertyName]: e.target.value,
    });
  };

  return (
    <div className="registration-form">
      <Form className="form-container">
        <Form.Row>
          <div className="form-image">
            <img src={coverImg} alt="should be image" />
          </div>
          <Form.Group as={Col} className="form-data">
            <Form.Group controlId="formGridEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                value={user.name}
                onChange={(e) => handleInput(e, "name")}
              />
            </Form.Group>

            <Form.Group controlId="formGridPassword">
              <Form.Label>Surname</Form.Label>
              <Form.Control type="text" placeholder="Enter surname" />
            </Form.Group>

            <Form.Group controlId="formGridPassword">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formGridEmail">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter name" />
            </Form.Group>

            <Form.Group controlId="formGridPassword">
              <Form.Label>Repeat Password</Form.Label>
              <Form.Control type="text" placeholder="Enter surname" />
            </Form.Group>
            <Button variant="primary" type="submit" disabled>
              Submit
            </Button>
          </Form.Group>
        </Form.Row>
      </Form>
    </div>
  );
};

export default UserForm;
