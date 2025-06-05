import React from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import {useAuth} from "../store/Auth"
const LandingPage = () => {
  const navigate = useNavigate();
  const {storeUserInLS}= useAuth();

  const googleLogin = async () => {
    try {
      const response = await signInWithPopup(auth, provider);
      const user = response.user;
  
      const userData = {
        name: user.displayName,
        email: user.email,
        avatar: user.photoURL,
        phoneNumber: user.phoneNumber,
      };
  
      const apiResponse = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
  
      if (!apiResponse.ok) {
        throw new Error(`Failed to login: ${apiResponse.statusText}`);
      }
  
      const responseData = await apiResponse.json();
  
      // Save to local storage or global auth store
      storeUserInLS(responseData.user);
  
      // Navigate based on role
      if (responseData.user.role === "admin") {
        navigate("/admin/dashboard");
      } else {
        navigate("/home");
      }
    } catch (error) {
      console.error("Google login error:", error.message);
    }
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-cyan-100">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6">
        <div className="text-2xl font-bold text-cyan-700">Wanderlust</div>
        <button
          onClick={googleLogin}
          className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-gray-700 hover:bg-gray-50"
        >
          <img
            src="https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png"
            alt="Google logo"
            className="w-6 h-6"
          />
          Sign in with Google
        </button>
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-6 py-16 flex flex-col md:flex-row items-center">
        {/* Text Content */}
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-6">
            Discover Your Next <span className="text-cyan-600">Adventure</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Explore the world's most breathtaking destinations with our expert
            guides. Create memories that will last a lifetime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={googleLogin}
              className="flex items-center justify-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg shadow-md transition-all duration-300"
            >
              <img
                src="https://www.google.com/images/branding/googleg/1x/googleg_standard_color_128dp.png"
                alt="Google logo"
                className="w-5 h-5"
              />
              Get Started with Google
            </button>
            <button className="border-2 border-cyan-600 text-cyan-600 hover:bg-cyan-50 px-6 py-3 rounded-lg transition-all duration-300">
              Explore Tours
            </button>
          </div>
        </div>

        {/* Image Content */}
        <div className="md:w-1/2">
          <div className="relative rounded-xl overflow-hidden shadow-2xl">
           
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-sm">Featured Destination</p>
              <h3 className="text-2xl font-bold">Bali, Indonesia</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Why Choose Wanderlust
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🌍",
                title: "Global Destinations",
                description: "Access to 100+ countries and thousands of unique experiences",
              },
              {
                icon: "👍",
                title: "Verified Guides",
                description: "Only the most experienced and knowledgeable local guides",
              },
              {
                icon: "💲",
                title: "Best Prices",
                description: "We guarantee the best prices for your dream vacation",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-all duration-300"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>© 2023 Wanderlust. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;