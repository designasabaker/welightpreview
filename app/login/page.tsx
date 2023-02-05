'use client'

import React from "react";
import {Box, Button, Stack, TextField} from "@mui/material";

export default function Login() {
    let [password, setPassword] = React.useState("")
    let [username, setUsername] = React.useState("")
    const handleLogin = () => {
        let credential = {
            username,
            password
        }
        console.log(credential)  // pass the credential to api
    };

    const handleTextFieldChange = (event: { target: {
            value: string;
            id: any; }; }) => {
        let targetId = event.target.id
        if(targetId === "username-text-field"){
            setUsername(event.target.value)
        } else if(targetId === "password-text-field"){
            setPassword(event.target.value)
        } else {
            console.error("Invalid handling of textfield")
        }
    }
    return (
        <div>
            <Box sx={{
                top: '200px',
                width: '50%',
                margin: 'auto'
            }}>
                <h1 className="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">
                    Sign In
                </h1>
                <Stack spacing={4} sx={{
                    padding: 10,
                    margin: 'auto',
                    maxWidth: 500
                }}>
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
                    <Stack direction="row" justifyContent="center" alignItems="center" spacing={2}>
                        <Button variant="outlined" onClick={handleLogin}>Log in</Button>
                        <Button variant="outlined" href={'/signup'}>Register</Button>
                    </Stack>
                </Stack>
            </Box>
        </div>

    )
}
