import React from "react";
import { Box, Button, Grid, IconButton, Stack, TextField } from "@mui/material";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { useState } from "react";
import { motion } from "framer-motion"
// import "../styles/login.css";

const formItems = [
    {
        name: "Email",
        ref: "email",
    },
    {
        name: "Verification code",
        ref: "verification",
    },
    {
        name: "Password",
        ref: "password",
    },
    {
        name: "Re-enter password",
        ref: "password2",
    },
];

export default function SignUpBox({setFocusOnLogin }) {
    const [textFieldErrors, setTextFieldErrors] = useState({
        password: false,
        password2: false,
        email: false,
        verification: false,
    });
    const [textFieldHelperTexts, setTextFieldHelperTexts] = useState({
        password: "",
        password2: "",
        email: "",
        verification: "",
    });
    const [emailVerified, setEmailVerified] = useState(false);

    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [email, setEmail] = useState("");
    const [verification, setVerification] = useState("");
    const [image, setImage] = useState("");

    const [showPassword, setShowPassword] = useState(false);

    const validateForm = () => {
        let matchPassword = String(password).match(
            /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/
        );
        let passwordMatches = password === password2;
        let passwordInRightForm =
            matchPassword !== null && matchPassword.length >= 1;
        let validatePassword = passwordInRightForm && passwordMatches;
        let validateVerification = String(verification).toUpperCase() === "HELLO";
        let errors = {
            password: !validatePassword,
            password2: !validatePassword,
            verification: !validateVerification,
        };
        let helperTexts = {
            password: !passwordMatches
                ? "Password does not match"
                : !passwordInRightForm
                    ? "Invalid password"
                    : "",
            password2: !passwordMatches ? "Password does not match" : "",
            verification: !validateVerification ? "Wrong verification code" : "",
        };

        setTextFieldErrors(errors);
        setTextFieldHelperTexts(helperTexts);
        return !(validatePassword && validateVerification);
    };

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleRegister = () => {
        let hasError = validateForm();
        if (!hasError) {
            let credential = {
                email,
                password,
            };
            console.log(credential); // pass the credential to api
        } else {
            console.error("Wrong input");
        }
    };

    const handleTextFieldChange = (event) => {
        switch (event.target.id) {
            case "email-text-field":
                setEmail(event.target.value);
                break;
            case "password-text-field":
                setPassword(event.target.value);
                break;
            case "password2-text-field":
                setPassword2(event.target.value);
                break;
            case "verification-text-field":
                setVerification(event.target.value);
                break;
            default:
                console.error("Invalid handling of textfield");
        }
    };

    const handleAvatarUpload = (event) => {
        let img = URL.createObjectURL(event.target.files[0]);
        console.log(img);
        setImage(img);
    };

    // connect the email verification code api here
    const handleEmailVerification = () => {
        let matchEmail = String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
        let validateEmail = matchEmail !== null && matchEmail.length >= 1;
        let errors = {
            email: !validateEmail,
        };
        let helperTexts = {
            email: !validateEmail ? "Invalid email" : "",
        };

        setEmailVerified(validateEmail);
        setTextFieldErrors(errors);
        setTextFieldHelperTexts(helperTexts);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className={`flex flex-row rounded-md border-black/0.4 px-12 py-4}`}>
            <div>
            <Box
                style={{
                    textAlign: "center",
                    fontSize: "2em",
                    marginTop: "40px",
                }}
            >
                <h1>Sign Up</h1>
            </Box>
            <Grid
                container
                style={{
                    border: 0,
                    marginTop: 5,
                    display: "flex",
                    justifyItems: "center",
                }}
            >
                <Grid item xs={7} style={{ maxWidth: "100%" }}>
                    <Stack
                        justifyContent="center"
                        alignItems="center"
                        spacing={2}
                        style={{
                            margin: "0",
                        }}
                    >
                        {formItems.map((item, index) => {
                            const isPassword =
                                item.ref === "password" || item.ref === "password2";
                            const isEmail = item.ref === "email";
                            const hasError = textFieldErrors[item.ref];
                            const helperText = textFieldHelperTexts[item.ref];

                            return (
                                <Box key={index} sx={{ width: 300 }}>
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
                                    {item.ref === "email" && (
                                        <Button
                                            variant="text"
                                            size="small"
                                            onClick={handleEmailVerification}
                                            sx={{
                                                margin: "auto",
                                            }}
                                        >
                                            Verify
                                        </Button>
                                    )}
                                    {isPassword && (
                                        <Button
                                            variant="text"
                                            size="small"
                                            onClick={handleClickShowPassword}
                                            sx={{
                                                margin: "auto",
                                            }}
                                        >
                                            {showPassword ? "Hide" : "Show"}
                                        </Button>
                                    )}
                                </Box>
                            );
                        })}

                        <Button
                            variant="outlined"
                            onClick={() => (window.location.href = "/signup")}
                        >
                            Register
                        </Button>
                        <button
                            className={"font-medium text-blue-600 dark:text-blue-500 hover:underline"}
                            onClick={()=>setFocusOnLogin(true)}
                        >
                            Have a account? Click here to login!
                        </button>
                    </Stack>
                </Grid>
            </Grid>
            </div>

            <div
                className={"flex flex-col text-center justify-center"}>
                <h1>Choose your avatar</h1>
                <div>
                    {image && <img src={image} alt="Uploaded Image" />}
                </div>
                <IconButton>
                    <input
                        hidden
                        accept="image/*"
                        type="file"
                        onChange={handleAvatarUpload}
                    />
                    <PhotoCamera />
                </IconButton>
                {emailVerified && (
                    <Button
                        disabled={!emailVerified}
                        variant="outlined"
                        onClick={handleRegister}>
                        Register
                    </Button>
                )}
                {!emailVerified && <p>*Please verify your email first</p>}
            </div>
        </motion.div>
    );
}
