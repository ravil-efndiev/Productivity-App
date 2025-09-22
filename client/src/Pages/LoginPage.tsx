import { Button, Typography, Link } from "@mui/material";
import Form from "../Components/Form";
import FormInput from "../Components/FormInput";
import { Link as RouterLink } from "react-router";
import { useState } from "react";
import axios from "axios";
import type { ServerResultUser } from "../types";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [serverError, setServerError] = useState<string | undefined>();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/users/login",
        {
          username: username,
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
  }

  return (
    <Form title="Log In" onSubmit={handleSubmit} >
      <FormInput label="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <FormInput label="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      {serverError && <Typography sx={{ color: "#b71d1d" }}>{serverError}</Typography>}
      <Button variant="contained" color="secondary" type="submit" sx={{ mt: 3, mb: 1 }}>
        Log In
      </Button>
      <Typography>Don't have an account? <Link component={RouterLink} to="/signup">Sign Up</Link></Typography>
   </Form>
  )
}

export default LoginPage;
