import { Routes, Route } from "react-router-dom";
import React from "react";
import Login from "./Login";
import Register from "./Register";
import Home from "../Home/Home";
import Details from "./Details";


export default function AllRoutes() {
  return (
    <Routes>

      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/details" element={<Details/>}/>

    </Routes>
  );
}
