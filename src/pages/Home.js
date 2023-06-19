import React, {useContext} from "react";
import {Link} from "react-router-dom";
import {AppContext} from "../context/appContext";
import { motion } from "framer-motion"
import bgImage from '../assets/images/background/bg.png';

export default function Home() {
  const {hasLoggedIn} = useContext(AppContext);
  return (
      <>
        <div style={{ backgroundImage: `url(${bgImage})` }}>
          <motion.div
            className="flex flex-col px-16 h-screen"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
              <div className={"flex-grow"} /> {/* This is a spacer */}
              <h1 className={"text-white text-6xl py-3"}>WELIGHT TECH</h1>
              <p className={"text-white pl-2"}>WeLight 留学申请的夜路上多一盏灯</p>
              <p className={"text-white pl-2 pb-3"}>We light the future.</p>
              <Link
                // variant="outlined"
                className={"w-36 mt-3 mb-24 ml-2 py-2 px-4 font-sans block my-1 bg-transparent hover:bg-blue-500 text-blue-500 text-center border border-blue-500 rounded hover:text-white hover:border-transparent rounded"}
                to={hasLoggedIn ? "/Profile" : "/login"}
              >
                {hasLoggedIn ? "Go to My Profile" : "Login"}
              </Link>
          </motion.div>
        </div>
      </>
  );
}
