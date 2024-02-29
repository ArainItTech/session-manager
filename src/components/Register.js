import React, { useState } from "react";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faAddressCard } from "@fortawesome/free-solid-svg-icons";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const Register = () => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onHandleSubmit = (event) => {
    event.preventDefault();
    const auth = getAuth();

    if (password !== confirmPassword) {
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
    .then(userCredential =>
        userCredential.updateProfile(auth.currentUser, {
          displayName: userName,
        })
    );
  };

  return (
    <Form className="form" onSubmit={onHandleSubmit}>
      <h1 className="title">SignUp</h1>
      <FormGroup floating>
        <Input
          id="userEmail"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="User Email"
          type="email"
        />
        <Label for="userEmail">User Email</Label>
      </FormGroup>
      <FormGroup floating>
        <Input
          id="userName"
          name="userName"
          onChange={(e) => setUserName(e.target.value)}
          placeholder="User Name"
          type="text"
        />
        <Label for="userNamr">User Name</Label>
      </FormGroup>
      <FormGroup floating>
        <Input
          id="password"
          name="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />
        <Label for="password">Password</Label>
      </FormGroup>
      <FormGroup floating>
        <Input
          id="confirmPassword"
          name="confirmPassword"
          placeholder="Confirm Password"
          onChange={(e) => setConfirmPassword(e.target.value)}
          type="password"
        />
        <Label for="confirmPassword">Confirm Password</Label>
      </FormGroup>

      <div className="form-footer">
        <Button className="btn-danger">
          <FontAwesomeIcon icon={faClose} /> Cancel
        </Button>
        <Button className="btn-primary" type="submit">
          <FontAwesomeIcon icon={faAddressCard} /> Register
        </Button>
      </div>
    </Form>
  );
};

export default Register;
