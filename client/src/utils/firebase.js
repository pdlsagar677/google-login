import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA96K7SiT64K36PW7rHCVMq5hvxwHE-Vyc",
  authDomain: "booking-system-6d659.firebaseapp.com",
  projectId: "booking-system-6d659",
  storageBucket: "booking-system-6d659.firebasestorage.app",
  messagingSenderId: "1022588559752",
  appId: "1:1022588559752:web:4e02f88fb428896e239a3d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);  // Only initialize once

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
