import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Pricing from './pages/Pricing';

import AppProvider from "./context/appContext";

function App() {

  return (
      <AppProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/login" element={<Login/>} />
            {/*<Route exact path="/profile" element={<Profile/>} />*/}
            <Route exact path="/profile/:part" element={<Profile/>} />
            <Route exact path="/pricing" element={<Pricing/>} />
          </Routes>
        </BrowserRouter>
      </AppProvider>
  );
}

export default App;
