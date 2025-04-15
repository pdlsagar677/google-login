import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {  FaPhoneAlt, FaCalendarAlt, FaInfoCircle, FaConciergeBell, FaChevronDown, FaSignOutAlt } from "react-icons/fa";
import { FiHome } from "react-icons/fi";

const Navbar = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const navigate = useNavigate();

  // 👇 Replace this with actual auth check logic (e.g., from context or cookies)
  const isAuthenticated = true;

  const userData = isAuthenticated
    ? {
        name: "John Doe",
        avatar: "https://randomuser.me/api/portraits/men/1.jpg",
      }
    : null;

  const handleProfileClick = () => {
    navigate('/profile');
    setIsProfileOpen(false);
  };

  const handleLogout = () => {
    console.log("User logged out");
    setIsProfileOpen(false);
    navigate('/');
  };

  return (
    <nav className="bg-gradient-to-r from-cyan-600 to-blue-600 shadow-xl sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <Link to="/" className="text-white text-2xl font-bold tracking-wider">
            <span className="text-yellow-300">Wander</span>Lust
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-white hover:text-yellow-200 flex items-center text-lg">
              <FiHome className="mr-2" /> Home
            </Link>
            <Link to="/about" className="text-white hover:text-yellow-200 flex items-center text-lg">
              <FaInfoCircle className="mr-2" /> About
            </Link>
            <Link to="/services" className="text-white hover:text-yellow-200 flex items-center text-lg">
              <FaConciergeBell className="mr-2" /> Services
            </Link>
            <Link to="/booking" className="bg-yellow-400 hover:bg-yellow-300 text-cyan-800 px-4 py-2 rounded-md text-lg font-bold shadow-lg hover:shadow-xl flex items-center">
              <FaCalendarAlt className="mr-2" /> Book Now
            </Link>
            <Link to="/contact" className="text-white hover:text-yellow-200 flex items-center text-lg">
              <FaPhoneAlt className="mr-2" /> Contact
            </Link>

            {/* ✅ Profile Dropdown Only if Authenticated */}
            {isAuthenticated && userData && (
              <div className="relative ml-4">
                <button
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="flex items-center text-sm rounded-full focus:outline-none"
                >
                  <img
                    className="h-8 w-8 rounded-full border-2 border-white"
                    src={userData.avatar}
                    alt="User avatar"
                  />
                  <span className="ml-2 text-white">{userData.name}</span>
                  <FaChevronDown className={`ml-1 text-white text-xs transition-transform ${isProfileOpen ? 'rotate-180' : ''}`} />
                </button>

                {isProfileOpen && (
                  <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                    <button
                      onClick={handleProfileClick}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Your Profile
                    </button>
                    <button
                      onClick={handleLogout}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center"
                    >
                      <FaSignOutAlt className="mr-2" /> Sign out
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Mobile toggle button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="text-white hover:text-yellow-200"
            >
              {isProfileOpen ? (
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isProfileOpen && (
        <div className="md:hidden bg-cyan-700 px-4 pb-4 space-y-2">
          <Link to="/" className="text-white block" onClick={() => setIsProfileOpen(false)}>Home</Link>
          <Link to="/about" className="text-white block" onClick={() => setIsProfileOpen(false)}>About</Link>
          <Link to="/services" className="text-white block" onClick={() => setIsProfileOpen(false)}>Services</Link>
          <Link to="/booking" className="text-yellow-300 font-bold block" onClick={() => setIsProfileOpen(false)}>Book Now</Link>
          <Link to="/contact" className="text-white block" onClick={() => setIsProfileOpen(false)}>Contact</Link>

          {/* ✅ Profile in Mobile Menu if Authenticated */}
          {isAuthenticated && (
            <>
              <Link to="/profile" className="text-white block" onClick={() => setIsProfileOpen(false)}>Profile</Link>
              <button onClick={handleLogout} className="text-white block">Sign Out</button>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
