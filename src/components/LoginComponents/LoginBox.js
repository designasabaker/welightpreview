import React from "react"

import {Link} from "react-router-dom";

export const LoginBox = (props) => {
    // eslint-disable-next-line react/prop-types
    const {setFocusOnLogin,handleTextFieldChange,handleLogin} = props;

    return(
        <>
            <div className={`min-w-[300px] max-w-[600px] flex flex-col text-center p-12 border-black/0.4`}>
                <div className={"my-6"}>
                    <h1 className={"text-2xl "}>Login</h1>
                    <p className={"text-xs font-sans font-thin mt-1 text-gray-500"}>Welcome back! Please enter your details.</p>
                </div>
                {/* login username and password */}
                <div className={"flex flex-col text-md gap-3 mt-3"}>
                    {/*<p className={"mt-3"}>Username</p>*/}
                    <input
                        required
                        type={"text"}
                        id="username-text-field"
                        onChange={handleTextFieldChange}
                        placeholder={"Username"}
                        className={"border-b border-b-black/0.4 focus:outline-none focus:border-b-blue-500 transition-all ease-in-out duration-300"}
                    />
                    {/*<p className={"mt-3"}>Password</p>*/}
                    <input
                        required
                        type={"password"}
                        id="password-text-field"
                        onChange={handleTextFieldChange}
                        placeholder={"Password"}
                        className={"border-b border-b-black/0.4 focus:outline-none focus:border-blue-500 transition-all ease-in-out duration-300"}
                    />
                </div>
                <div className={"flex flex-col text-md"}>
                    {/* forget passwords */}
                    <Link
                        className={"text-end font-sans font-thin text-xs text-blue-100 dark:text-blue-500 hover:underline mt-3"}
                        to={"/login"}>
                        Forgot Password
                    </Link>
                    <div className={"my-6"}>
                        <button
                            // variant="outlined"
                            onClick={handleLogin}
                            className={"w-full font-sans block my-1 bg-transparent hover:bg-blue-500 text-blue-500 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"}>
                            Log in
                        </button>
                        <button
                            className={"text-xs font-sans font-thin text-blue-600 dark:text-blue-500 hover:underline"}
                            onClick={()=>setFocusOnLogin(false)}>
                            Don&apos;t have an account?
                            <span
                                className={"text-xs font-sans font-bold text-blue-600 dark:text-blue-500 hover:underline"}>
                                Sign up for free
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}