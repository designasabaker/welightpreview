import React, {useContext} from "react";
import {Link} from "react-router-dom";
import {AppContext} from "../context/appContext";
import { motion } from "framer-motion"
import bgImage from '../assets/images/background/bg.png';
import {useApp, LANG} from "../context/appContext";

const title ={
    [LANG.EN]: "WELIGHT TECH",
    [LANG.CN]: "微光科技",
}
const slogan ={
    [LANG.EN]: <>A guiding light on the path of overseas study application"<br />We light the future</>,
    [LANG.CN]: <>海外留学申请之路的指路明灯<br />我们点亮未来</>,
}
const loginBtnText ={
    [LANG.EN]: "Get Started",
    [LANG.CN]: "开始",
}
const profileBtnText ={
    [LANG.EN]: "Profile",
    [LANG.CN]: "账户",
}

export default function Home() {
  const {lang} = useApp();
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
              <h1 className={"text-white text-6xl py-3"}>{title[lang]}</h1>
              <p className={"text-white pl-2"}>{slogan[lang]}</p>
              <Link
                // variant="outlined"
                className={"w-36 mt-3 mb-24 ml-2 py-2 px-4 font-sans block my-1 bg-transparent hover:bg-blue-500 text-blue-500 text-center border border-blue-500 rounded hover:text-white hover:border-transparent rounded"}
                to={hasLoggedIn ? "/Profile" : "/login"}
              >
                {hasLoggedIn ? profileBtnText[lang] : loginBtnText[lang]}
              </Link>
          </motion.div>
        </div>
      </>
  );
}
