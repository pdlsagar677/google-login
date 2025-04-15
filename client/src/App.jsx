import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landingpage from "./components/LandingPage";
import UserProfile from "./components/User-Profile";
import Navbar from "./layouts/Navbar";
import Homepage from "./components/Home";
import AboutPage from "./components/About";
import ServicesPage from "./components/Serivce";
import Footer from "./layouts/Footer";
import BookingPage from "./components/Booking";
import ContactPage from "./components/Contact";

const App = () => {
  return (
    <BrowserRouter>
      {/* Navbar shown on all pages */}
      <Navbar />

      {/* Page Content */}
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/contact" element={<ContactPage />} />

      </Routes>
      {/* universal footer */}
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
