'use client'

import React from "react";
import {Box, Button, Stack, TextField} from "@mui/material";
import {useUser} from "../../context/userStore"
import Link from "next/link";
import {useRouter} from "next/navigation";
import Signup from "../signup/page";
import "./loginSignup.css";

export default function Login() {
    const router = useRouter()
    const { hasLoggedIn, setHasLoggedIn } = useUser()
    const [password, setPassword] = React.useState("")
    const [username, setUsername] = React.useState("")
    // focus animation
    const [isFocusOnLogin, setFocusOnLogin] = React.useState(true);
    const handleLogin = () => {
        let credential = {
            username,
            password
        }
        console.log(credential)  // pass the credential to api

        if(username === "admin" && !hasLoggedIn){
            router.push('/form')
            setHasLoggedIn(true)
            console.log("successfully logged in")

        } else {
            console.error(`login failed - ${hasLoggedIn ? 'Already Logged in' : 'Wrong username or password'}`)
        }
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
    <Box
        className="login-signup-box-container bg-white"
    >
            {
                !hasLoggedIn ? (
                        <Box
                             className={`login-box ${isFocusOnLogin ? 'focused' : ''}`}
                             onClick={() => {setFocusOnLogin(true)}}
                             >
                            <Box sx={{
                                textAlign: 'center',
                                fontSize: '2em',
                                marginTop:'40px',
                            }}>
                                <h1>Login</h1>
                            </Box>
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
                                    {/*<Button variant="outlined" href={'/signup'}>Register</Button>*/}
                                </Stack>
                            </Stack>
                        </Box>

                ) : (
                    <Box sx={{
                        display: 'inline-block',
                        width: '50%',
                        margin: '0'
                    }}>
                        <h1>Successfully logged in, redirecting...</h1>
                        <p>
                            If redirection not working, click this link
                            <Link href="/form" className="btn btn-ghost normal-case text-lg">My Account</Link>
                        </p>
                    </Box>
                )
            }
            <Signup isFocusOnLogin={isFocusOnLogin} setFocusOnLogin={setFocusOnLogin}/> {/* add the SIGN-UP here */}
    </Box>
    )
}
