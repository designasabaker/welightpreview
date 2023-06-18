import React, {useContext} from "react";
import {Link} from "react-router-dom";
import {AppContext} from "../context/appContext";
import { motion } from "framer-motion"

export default function Home() {
  const {hasLoggedIn} = useContext(AppContext);
  return (
    <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col justify-center items-center h-[75vh]">
      <h1>WeLight, 留学申请的夜路上多一盏灯</h1>
      <h1>We light the future.</h1>
      <button
        // variant="outlined"
        className={"w-36 my-6 font-sans block my-1 bg-transparent hover:bg-blue-500 text-blue-500 " +
            "font-semibold hover:text-white py-2 px-4 " +
            "border border-blue-500 hover:border-transparent rounded"}
      >
        {hasLoggedIn ? <Link to="/Profile/basic-info">Go to My Profile</Link> : <Link to="/login">Login</Link>}
      </button>
    </motion.div>
  );
}
