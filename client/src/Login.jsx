import React from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "./utils/firebase";

const Login = () => {
  const googlelogin = async () => {
    try {
      const response = await signInWithPopup(auth, provider);
      const user = response.user;

      const userData = {
        name: user.displayName,
        email: user.email,
        avatar: user.photoURL,
        phoneNumber: user.phoneNumber,
      };

      const apiResponse = await fetch('http://localhost:5000/api/auth/google-login', {
        method: 'POST',
        credentials: "include",
        headers: {  // Fixed from 'header' to 'headers'
          'Content-Type': 'application/json'  // Fixed typo "josn" to "json"
        },
        body: JSON.stringify(userData)
      });

      if (!apiResponse.ok) {
        throw new Error(`Failed to login: ${apiResponse.statusText}`);
      }

      const responseData = await apiResponse.json();
      console.log(responseData);
    } catch (error) {
      console.error("Google login error:", error.message);
    }
  };

  return (
    <div>
      <h1>Google login integration</h1>
      <button onClick={googlelogin}>Sign in with Google</button>
    </div>
  );
};

export default Login;