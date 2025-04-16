import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landingpage from "./User-pages/LandingPage";
import UserProfile from "./User-pages/User-Profile";
import Navbar from "./layouts/Navbar";
import Homepage from "./User-pages/Home";
import AboutPage from "./User-pages/About";
import ServicesPage from "./User-pages/Serivce";
import Footer from "./layouts/Footer";
import BookingPage from "./User-pages/Booking";
import ContactPage from "./User-pages/Contact";

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
