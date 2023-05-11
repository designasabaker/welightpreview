import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Pricing from './pages/Pricing';

import AppProvider from "./context/appContext";
import ProfileSharedLayout from "./pages/ProfileSharedLayout";
import SingleProfilePart from "./pages/SingleProfilePart";

function App() {

  return (
      <AppProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/profile" element={<ProfileSharedLayout/>} >
                <Route index element={<Profile/>} />
                <Route path=":singlePartId" element={<SingleProfilePart/>} />
            </Route>
            <Route path="/pricing" element={<Pricing/>} />
          </Routes>
        </BrowserRouter>
      </AppProvider>
  );
}

export default App;
