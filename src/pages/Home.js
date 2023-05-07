import React, {useContext} from "react";
import {Link} from "react-router-dom";
import {AppContext} from "../context/appContext";
//import { Box, Button, Stack, TextField } from "@mui/material";

export default function Home() {
  const {hasLoggedIn} = useContext(AppContext);
  return (
    <div className="text-center">
      <h1>~~~Home~~~</h1>
      {hasLoggedIn ?
         <Link to="/Profile/basic-info">Go to My Profile</Link> :
         <Link to="/login">Login</Link> }
    </div>
  );
}
