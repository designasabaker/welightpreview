/* eslint-disable no-unused-vars */
import React, {useContext} from "react";
import { Link } from "react-router-dom";
import WeLightLogo from "../assets/WeLightLogo.svg";
import { useState } from "react";
import {AppContext, useApp, LANG} from "../context/appContext";
import { motion } from "framer-motion"

const transitionStyles = "transition-all ease-in-out duration-300";
const planText = {
    [LANG.EN]: "Plan",
    [LANG.CN]: "套餐计划",
}
const loginText = {
    [LANG.EN]: "Login",
    [LANG.CN]: "登录",
}
const accountText = {
    [LANG.EN]: "Account",
    [LANG.CN]: "账户",
}

export default function Navbar() {
  const {lang, setLang} = useApp();
  const {hasLoggedIn, setHasLoggedIn} = useContext(AppContext);
  return (
    <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 w-full z-10 bg-transparent flex-row justify-between">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img src={WeLightLogo} alt="WeLight Logo" className="w-15 pr-4" />
            <span className="self-center text-xl font-bold text-white">WeLight</span>
          </Link>
        </div>
        <div
          className="w-full md:block md:w-auto space-x-8"
          id="navbar-default"
        >
          <ul className="flex-row text-sky-600">
              <Link
                  to="/profile"
                  className={`btn btn-ghost normal-case px-3 text-lg rounded hover:bg-sky-300 ${transitionStyles}}`}
              >
                  (Profile)
              </Link>
            <Link
              to="/pricing"
              className={`btn btn-ghost normal-case px-3 text-lg rounded hover:bg-sky-300 ${transitionStyles}}`}
            >
              {planText[lang]}
            </Link>
            {hasLoggedIn ? (
              <Link
                to="/profile"
                className={`btn btn-ghost normal-case px-3 text-lg rounded hover:bg-sky-300 ${transitionStyles}}`}
              >
                {accountText[lang]}
              </Link>
            ) : (
              <Link
                to="/login"
                className={`btn btn-ghost normal-case px-3 text-lg rounded hover:bg-sky-300 ${transitionStyles}}`}
              >
                {loginText[lang]}
              </Link>
            )}
            <select
                className={`btn btn-ghost normal-case mx-1 px-1 text-lg rounded hover:bg-sky-300 ${transitionStyles}}`}
                onChange={(e) => {
                  e.preventDefault();
                  setLang(e.currentTarget.value);
                }}
            >
                <option value={LANG.EN}>English</option>
                <option value={LANG.CN}>中文</option>
            </select>
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
