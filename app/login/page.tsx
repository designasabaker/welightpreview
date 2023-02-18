'use client'

import React from "react";
import {Box, Button, Stack, TextField} from "@mui/material";
import {useUser} from "../../context/userStore"
import Link from "next/link";
import {useRouter} from "next/navigation";

export default function Login() {
    const router = useRouter()
    const { hasLoggedIn, setHasLoggedIn } = useUser()
    const [password, setPassword] = React.useState("")
    const [username, setUsername] = React.useState("")
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
        <div>
            {
                !hasLoggedIn ? (
                    <Box sx={{
                        top: '200px',
                        width: '50%',
                        margin: 'auto'
                    }}>
                        <h1 className="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">
                            Sign In
                        </h1>
                        <Box sx={{
                            top: 100,
                            width: 700,
                            margin: 'auto',
                            marginTop: 3,
                            border: 2,
                            padding: 5,
                            borderColor: 'white',
                            backgroundColor: 'rgba(255,255,255,0.04)'
                        }}>
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

                    </Box>
                ) : (
                    <Box sx={{
                        width: '50%',
                        margin: 'auto'
                    }}>
                        <h1>Successfully logged in, redirecting...</h1>
                        <p>
                            If redirection not working, click this link
                            <Link href="/form" className="btn btn-ghost normal-case text-lg">My Account</Link>
                        </p>
                    </Box>
                )
            }
        </div>

    )
}
