import { Button, Link, Typography } from '@mui/material';
import React, { useState } from 'react'
import Form from '../Components/Form';
import FormInput from '../Components/FormInput';
import { Link as RouterLink } from "react-router";

const SignupPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("submitted");
  }

  return (
    <Form title="Sign Up" onSubmit={handleSubmit} >
      <FormInput label="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <FormInput label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <FormInput label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <Button variant="contained" color="secondary" type="submit" sx={{ mt: 3, mb: 1 }}>
        Sign Up
      </Button>
      <Typography>Already have an account? <Link component={RouterLink} to="/login">Log In</Link></Typography>
   </Form>
  )
}

export default SignupPage;
