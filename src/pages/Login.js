import { useState, useContext } from "react";
import { Box, Button, Stack, TextField } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Signup from "./Signup";
import "../styles/login.css";
import BACKEND_BASE_LINK from "../env.js";
import {AppContext} from "../context/appContext"

export default function Login() {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [isFocusOnLogin, setFocusOnLogin] = useState(true);   // focus animation

  const {hasLoggedIn, setHasLoggedIn} = useContext(AppContext);
  const navigate = useNavigate();

  async function handleLogin(){
    let credential = {
      username,
      password,
    };
    console.log(credential); // pass the credential to api

    if (username === "admin" && !hasLoggedIn) {
      setHasLoggedIn(true);
      navigate("/profile");
      console.log("successfully logged in");
      return;
    } else {
      console.error(
          `login failed - ${
              hasLoggedIn ? "Already Logged in" : "Wrong username or password"
          }`
      );
    }

    const options = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: `{"username":${credential.username},"password":${credential.password}}`,
    };

    const response = await fetch(BACKEND_BASE_LINK + '/login', options);
    // bug:  'Access-Control-Allow-Origin' header is present on the requested resource. If
    switch (response.status) {
      case 200:
        // login success
        const resData = await response.json();
        const token = resData.token;
        // bugs TO DO: wait for backend to fix the returned user id
        localStorage.setItem('token', token);
        setHasLoggedIn(true);
        break;
      case 401:
        // login failed
        console.error("login failed")
        break;
      default:
        break;
    }

  };

  const handleTextFieldChange = (event) => {
  let targetId = event.target.id;
  if (targetId === "username-text-field") {
    setUsername(event.target.value);
  } else if (targetId === "password-text-field") {
    setPassword(event.target.value);
  } else {
    console.error("Invalid handling of textfield");
  }
};

  return (
    <Box className="login-signup-box-container bg-white">
      {!hasLoggedIn ? (
        <Box
          className={`login-box ${isFocusOnLogin ? "focused" : ""}`}
          onClick={() => {
            setFocusOnLogin(true);
          }}
        >
          <Box
            sx={{
              textAlign: "center",
              fontSize: "2em",
              marginTop: "40px",
            }}
          >
            <h1>Login</h1>
          </Box>
          <Stack
            spacing={4}
            sx={{
              padding: 10,
              margin: "auto",
              maxWidth: 500,
            }}
          >
            <p>Username</p>
            <TextField
              required
              variant="standard"
              id="username-text-field"
              onChange={handleTextFieldChange}
            />
            <p>Password</p>
            <TextField
              required
              variant="standard"
              id="password-text-field"
              onChange={handleTextFieldChange}
            />
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              spacing={2}
            >
              <Button variant="outlined" onClick={handleLogin}>
                Log in
              </Button>
              {/*<Button variant="outlined" href={'/signup'}>Register</Button>*/}
            </Stack>
          </Stack>
        </Box>
      ) : (
        <Box
          sx={{
            display: "inline-block",
            width: "50%",
            margin: "0",
          }}
        >
          <h1>Successfully logged in, redirecting...</h1>
          <p>
            If redirection not working, click this link
            <Link href="/form" className="btn btn-ghost normal-case text-lg">
              My Account
            </Link>
          </p>
        </Box>
      )}
      <Signup
        isFocusOnLogin={isFocusOnLogin}
        setFocusOnLogin={setFocusOnLogin}
      />{" "}
      {/* add the SIGN-UP here */}
    </Box>
  );
}
