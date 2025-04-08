import React from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "./utils/firebase";

const App = () => {
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

      console.log("User Data:", userData); // ✅ use it however you like
    } catch (error) {
      console.error("Google login error:", error);
    }
  };

  return (
    <div>
      <h1>Google login integration</h1>
      <button onClick={googlelogin}>Sign in with Google</button>
    </div>
  );
};

export default App;
