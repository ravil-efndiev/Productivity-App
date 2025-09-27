import { Button, Link, Typography } from "@mui/material";
import React, { useState } from "react";
import Form from "../Components/Form";
import FormInput from "../Components/FormInput";
import { Link as RouterLink } from "react-router";
import axios from "axios";
import type { ServerResultUser } from "../types";

const SignupPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [serverError, setServerError] = useState<string | undefined>();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:3000/users/signup",
        {
          username: username,
          email: email,
          password: password,
        },
        { withCredentials: true }
      )
      .then((res) => {
        setServerError(undefined);
        console.log(res.data.user as ServerResultUser);
      })
      .catch((err) => {
        setServerError(err.response.data.message);
      });
  };

  return (
    <Form title="Sign Up" onSubmit={handleSubmit}>
      <FormInput
        label="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <FormInput
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <FormInput
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {serverError && (
        <Typography sx={{ color: "#b71d1d" }}>{serverError}</Typography>
      )}
      <Button
        variant="contained"
        color="secondary"
        type="submit"
        sx={{ mt: 3, mb: 1 }}
      >
        Sign Up
      </Button>
      <Typography>
        Already have an account?{" "}
        <Link component={RouterLink} to="/login">
          Log In
        </Link>
      </Typography>
    </Form>
  );
};

export default SignupPage;
