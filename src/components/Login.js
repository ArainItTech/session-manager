import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../config/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { Form, FormGroup, Input, Label, Button } from "reactstrap";
import {signInWithEmailAndPassword}  from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate("/dashboard");
  }, [user, loading, navigate]);

  const onHandleSubmit = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <Form className="form" onSubmit={onHandleSubmit}>
      <h1 className="title">Login</h1>
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
          id="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          type="password"
        />
        <Label for="password">Password</Label>
      </FormGroup>

      <div className="form-footer">
        <p className="forgot">
          <Link active className="forgot-pass" to="/forgot">
            Forgot Password?
          </Link>
        </p>
        <div className="actions">
          <Button className="btn-secondary"> Cancel </Button>
          <Button className="btn-primary" type="submit">
            Login
          </Button>
        </div>
      </div>
    </Form>
  );
};

export default Login;
