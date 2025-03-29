'use client';
import React, { useState } from "react";
import { signInWithPopup, GoogleAuthProvider, getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const Form = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("User Info:", result.user);
      alert(`Signed in as ${result.user.displayName}`);
    } catch (error) {
      console.error("Google Sign-In Error:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
  <div className="flex flex-col items-center bg-[#d1d0ce] p-12 border rounded-2xl shadow-md w-full max-w-[600px]">
    
    <h2 className="text-3xl font-bold mb-6 text-black">Sign in</h2>

    {/* Google Sign-In Button */}
    <button 
      className="flex items-center w-full px-8 py-4 rounded-2xl bg-[#e5e3db] border-b-[4px] 
      bg-[#e5e3db] transition-all hover:brightness-110 active:border-b-[2px] active:brightness-90 relative"
      onClick={handleGoogleSignIn}
    >
      {/* Google Icon - Positioned on the Left */}
      <img src="https://img.icons8.com/color/24/000000/google-logo.png" alt="Google" 
        className="absolute left-6 w-6 h-6" />
      
      {/* Button Text - Centered */}
      <span className="w-full text-center font-semibold text-black">Continue with Google</span>
    </button>

    <p className="text-gray-600 mb-4 mt-6">Or sign in with email</p>

    {/* Sign-In Form */}
    <form className="w-full space-y-5">
      <div className="flex flex-col w-full">
        <label className="font-semibold text-gray-700 text-lg " htmlFor="email"></label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          className=" rounded-md p-4 focus:outline-none w-full bg-[#e5e3db] text-gray-500"
        />
      </div>
      <div className="flex flex-col w-full">
        <label className="font-semibold text-gray-700 text-lg" htmlFor="password"></label>
        <input
          type={showPassword ? "text" : "password"}
          id="password"
          placeholder="Enter your password"
          className=" rounded-md p-4 focus:outline-none w-full bg-[#e5e3db] text-gray-500"
        />
        <div className="flex items-center mt-2">
          <input 
            type="checkbox" 
            id="showPassword" 
            checked={showPassword} 
            onChange={() => setShowPassword(!showPassword)} 
            className="mr-2 w-4 h-4"
          />
          <label htmlFor="showPassword" className="text-sm  text-gray-500" >Show</label>
        </div>
      </div>

      {/* Sign-In Button - Same Width as Google Button */}
      <button className="flex justify-center items-center w-full px-8 py-4 rounded-2xl border-green-800 border-b-[4px] 
        bg-[#00a76d] transition-all text-white font-bold hover:bg-[#00a74a]">
        Sign in
      </button>

      <div className="flex justify-between text-center text-sm mt-4">
        <p className=" text-gray-500">No account? <a href="#" className="text-blue-600 font-semibold  text-gray-500">Create here</a></p>
        <p><a href="#" className="text-blue-600 font-semibold  text-gray-500" >Forgot password?</a></p>
      </div>
    </form>
  </div>
</div>


  );
};

export default Form;