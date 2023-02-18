'use client'

import React from "react";
import {Box, Button, Grid, IconButton, Stack, TextField} from "@mui/material";
import PhotoCamera from '@mui/icons-material/PhotoCamera';

const formItems = [
    {
        name: 'Email',
        ref: 'email'
    },{
        name: 'Verification code',
        ref: 'verification'
    },{
        name: 'Password',
        ref: 'password'
    },{
        name: 'Re-enter password',
        ref: 'password2'
    }
]


export default function Signup() {
    const [textFieldErrors, setTextFieldErrors] = React.useState({
        password: false,
        password2: false,
        email: false,
        verification: false
    })
    const [textFieldHelperTexts, setTextFieldHelperTexts] = React.useState({
        password: "",
        password2: "",
        email: "",
        verification: ""
    })
    const [emailVerified, setEmailVerified] = React.useState(false)

    const [password, setPassword] = React.useState("")
    const [password2, setPassword2] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [verification, setVerification] = React.useState("")
    const [image, setImage] = React.useState("");

    const [showPassword, setShowPassword] = React.useState(false);

    const validateForm = () => {
        let matchPassword = String(password).match(
            /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/
        )
        let passwordMatches = password === password2
        let passwordInRightForm = matchPassword !== null && matchPassword.length >= 1
        let validatePassword = passwordInRightForm && passwordMatches
        let validateVerification = String(verification).toUpperCase() === "HELLO"
        let errors = {
            password: !validatePassword,
            password2: !validatePassword,
            verification: !validateVerification
        }
        let helperTexts = {
            password: !passwordMatches ? "Password does not match" :
                !passwordInRightForm ? "Invalid password" : "",
            password2: !passwordMatches ? "Password does not match" : "",
            verification: !validateVerification ? "Wrong verification code" : ""
        }

        // @ts-ignore
        setTextFieldErrors(errors)
        // @ts-ignore
        setTextFieldHelperTexts(helperTexts)
        return !(validatePassword && validateVerification)
    }

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleRegister = () => {
        let hasError = validateForm()
        if(!hasError){
            let credential = {
                email,
                password
            }
            console.log(credential)  // pass the credential to api
        } else {
            console.error("Wrong input")
        }

    };

    const handleTextFieldChange = (event: { target: {
            value: string;
            id: any; }; }) => {
        switch (event.target.id) {
            case "email-text-field":
                setEmail(event.target.value)
                break
            case "password-text-field":
                setPassword(event.target.value)
                break
            case "password2-text-field":
                setPassword2(event.target.value)
                break
            case "verification-text-field":
                setVerification(event.target.value)
                break
            default:
                console.error("Invalid handling of textfield")
        }
    }

    //@ts-ignore
    const handleAvatarUpload = (event) => {
        let img = URL.createObjectURL(event.target.files[0])
        console.log(img)
        setImage(img);
    }

    // connect the email verification code api here
    const handleEmailVerification = () => {
        let matchEmail = String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            )
        let validateEmail = matchEmail !== null && matchEmail.length >= 1
        let errors = {
            email: !validateEmail
        }
        let helperTexts = {
            email: !validateEmail ? "Invalid email" : ""
        }

        setEmailVerified(validateEmail)
        // @ts-ignore
        setTextFieldErrors(errors)
        // @ts-ignore
        setTextFieldHelperTexts(helperTexts)
    };
    return (
        <div>
            <h1 className="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">
                Register
            </h1>
            <Box
                justifyContent="center"
                alignItems='center'
                sx={{
                    top: 100,
                    width: 700,
                    margin: 'auto',
                    marginTop: 3,
                    border: 2,
                    padding: 5,
                    borderColor: 'white',
                    backgroundColor: 'rgba(255,255,255,0.04)'
                }}
            >

                <Grid container sx={{
                    boarder: 20,
                    marginTop: 5
                }}>
                    <Grid item={true} xs={7}>
                        <Stack
                            justifyContent="center"
                            alignItems="center"
                            spacing={2}
                            sx={{
                            margin: 'auto'
                        }}>
                            {
                                formItems.map((item, index) => {
                                    let isPassword = item.ref === "password" || item.ref === "password2"
                                    let isEmail = item.ref === "email"
                                    let hasError = textFieldErrors[item.ref as keyof typeof textFieldErrors]
                                    let helperText = textFieldHelperTexts[item.ref as keyof typeof textFieldHelperTexts]
                                    return (
                                        <Box key={index} sx={{width: 300}}>

                                            <p>{item.name}</p>
                                            <TextField
                                                required
                                                disabled={emailVerified && isEmail}
                                                type={isPassword && !showPassword ? "password" : "text"}
                                                variant="standard"
                                                id={item.ref + "-text-field"}
                                                onChange={handleTextFieldChange}
                                                error={hasError}
                                                helperText={helperText}
                                            />
                                            <Button
                                                hidden={item.ref !== 'email'}
                                                variant="text"
                                                size="small"
                                                onClick={handleEmailVerification}
                                                sx={{
                                                margin: 'auto'
                                            }}
                                            >
                                                Verify
                                            </Button>
                                            <Button
                                                hidden={!isPassword}
                                                variant="text"
                                                size="small"
                                                onClick={handleClickShowPassword}
                                                sx={{
                                                    margin: 'auto'
                                                }}
                                            >
                                                { showPassword ? 'Hide' : 'Show'}
                                            </Button>
                                        </Box>
                                    )
                                })
                            }

                        </Stack>
                    </Grid>
                    <Grid item={true} xs={5} sx={{
                        margin: 'auto',
                        textAlign: 'center'
                    }}>
                        <p>Choose your avatar</p>
                        <Box sx={{
                            width: '%100',
                            margin: 1,
                            background: 'white'
                        }}>
                            {image && <img src={image} alt="Uploaded Image"/>}
                        </Box>

                        <IconButton
                            color="primary"
                            aria-label="upload picture"
                            component="label"
                            sx={{
                                margin: 'auto'
                            }}
                        >
                            <input hidden
                                   accept="image/*"
                                   type="file"
                                   onChange={handleAvatarUpload}/>
                            <PhotoCamera />
                        </IconButton>
                    </Grid>


                    <Box sx={{
                        textAlign: 'center',
                        width: '100%',
                        margin: 5
                    }}>
                        {emailVerified && <Button
                            disabled={!emailVerified}
                            variant="outlined"
                            onClick={handleRegister}
                        >Register</Button>}
                        {!emailVerified && <p>*Please verify your email first</p>}
                    </Box>
                </Grid>

            </Box>
        </div>

    )
}
