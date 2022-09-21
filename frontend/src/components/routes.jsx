import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "../pages/home";
import Profil from "../pages/profil";
import Login from "../pages/log";
import SignUp from "../components/Log/signUpForm"

const index = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/profil" element={<Profil />} exact />
        <Route path="/auth" element={<Login />} exact />
        <Route path="/auth/signup" element={<SignUp />} exact />
        <Route path="*" element={<Navigate to ="/" />}/>
      </Routes>
    </Router>
  );
};

export default index;