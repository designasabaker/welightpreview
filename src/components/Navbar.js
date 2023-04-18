/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import WeLightLogo from "../assets/WeLightLogo.svg";
import { useState } from "react";

export default function Navbar() {
  const [hasLoggedIn, setHasLoggedIn] = useState(false);
  return (
    <div className="sticky top-0 left-0 w-full z-10 bg-white flex-row justify-between">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img src={WeLightLogo} alt="WeLight Logo" className="w-15 h-15 pr-4" />
            <span className="self-center text-xl font-bold">WeLight</span>
          </Link>
        </div>
        <div
          className="w-full md:block md:w-auto space-x-8"
          id="navbar-default"
        >
          <ul className="flex-row">
            <Link
              to="/pricing"
              className="btn btn-ghost normal-case pl-3 text-lg"
            >
              Plan
            </Link>
            {/* <Link
              to="/about"
              className="btn btn-ghost normal-case pl-3 text-lg"
            >
              About Us
            </Link> */}
            {hasLoggedIn ? (
              <Link
                to="/profile"
                className="btn btn-ghost normal-case pl-3 text-lg"
              >
                Account
              </Link>
            ) : (
              <Link
                to="/login"
                className="btn btn-ghost normal-case pl-3 text-lg"
              >
                Login
              </Link>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
