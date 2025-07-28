import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";
import ResetPassword from "../Pages/Login/ResetPassword";
import About from "../Pages/About";
import Services from "../Pages/Services/Services";
import ServiceDetails from "../Pages/Services/ServiceDetails";
import Contact from "../components/Home/Contact";
import Booking from "../Pages/Booking";
import NotFound from "../Pages/NotFound";
import RequireAuth from "../Pages/Login/RequireAuth";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services" element={<Services />} />
      <Route
        path="/services/:id"
        element={
          <RequireAuth>
            <ServiceDetails />
          </RequireAuth>
        }
      />
      <Route
        path="/booking"
        element={
          <RequireAuth>
            <Booking />
          </RequireAuth>
        }
      />

      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
};

export default Routers;
