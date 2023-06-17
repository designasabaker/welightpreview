import { useState, useContext } from "react";
import { Box, Button, Stack, TextField } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Signup from "./Signup";
// import "../styles/login.css";
import BACKEND_BASE_LINK from "../env.js";
import {AppContext} from "../context/appContext"
import {LoginBox} from "../components/LoginComponents";
import SignUpBox from "../components/LoginComponents/SignUpBox";

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

  console.log("isFocusOnLogin: ", isFocusOnLogin);

  return (
    <div className="flex flex-row justify-center gap-4">
      {!hasLoggedIn
       ?
        (isFocusOnLogin
          ?
          <LoginBox setFocusOnLogin={setFocusOnLogin} handleTextFieldChange={handleTextFieldChange} handleLogin={handleLogin} />
          :
          <SignUpBox setFocusOnLogin={setFocusOnLogin}/>
        )
      :
      (
        <div
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
        </div>
      )}
      {/*<Signup*/}
      {/*  isFocusOnLogin={isFocusOnLogin}*/}
      {/*  setFocusOnLogin={setFocusOnLogin}*/}
      {/*/>*/}
      {/* add the SIGN-UP here */}
    </div>
  );
}
