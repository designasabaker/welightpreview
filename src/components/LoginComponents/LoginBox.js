import { motion } from "framer-motion"
export const LoginBox = (props) => {
    const {setFocusOnLogin,handleTextFieldChange,handleLogin} = props;

    return(
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            // className={`login-box ${isFocusOnLogin ? "focused" : ""}`}
            className={`flex flex-col text-center rounded-md border-black/0.4 px-12 py-4}`}>
            <h1 className={"text-2xl my-9"}>Login</h1>
            <div>
                <p className={"mt-3"}>Username</p>
                <input
                    required
                    type={"text"}
                    id="username-text-field"
                    onChange={handleTextFieldChange}
                    className={"border-b border-b-black/0.4 focus:outline-none focus:border-b-blue-500 transition-all ease-in-out duration-300"}
                />
                <p className={"mt-3"}>Password</p>
                <input
                    required
                    type={"password"}
                    id="password-text-field"
                    onChange={handleTextFieldChange}
                    className={"border-b border-b-black/0.4 focus:outline-none focus:border-blue-500 transition-all ease-in-out duration-300"}
                />
                <div>
                    <button
                        // variant="outlined"
                        onClick={handleLogin}
                        className={"block bg-blue-500 hover:bg-blue-700 text-white font-bold mx-auto mt-12 py-2 px-4 rounded"}>
                        Log in
                    </button>
                    <button
                        className={"font-medium text-blue-600 dark:text-blue-500 hover:underline mt-3"}
                        onClick={()=>setFocusOnLogin(false)}>
                        Need Registration? Click here!
                    </button>
                </div>
            </div>
        </motion.div>
    )
}