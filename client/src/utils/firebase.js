import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "login-7bc01.firebaseapp.com",
  projectId: "login-7bc01",
  storageBucket: "login-7bc01.firebasestorage.app",
  messagingSenderId: "451285101837",
  appId: "1:451285101837:web:77735fd42c4f9374c79444"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
