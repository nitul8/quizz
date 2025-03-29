"use client";

import React, {useState} from "react";
import {
    signInWithPopup,
    createUserWithEmailAndPassword,
    updateProfile,
    GoogleAuthProvider,
    getAuth,
} from "firebase/auth";
import {initializeApp} from "firebase/app";
import Image from "next/image";

const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT.firebaseapp.com", // 🔹 Update this with your Firebase Auth Domain
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// 🔹 Ensure OAuth Domain is properly configured
provider.setCustomParameters({
    prompt: "select_account", // Forces account selection for security
});

const Signup = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    // 🔹 Handle Google Sign Up
    const handleGoogleSignUp = async () => {
        setError(null);
        setLoading(true);
        try {
            const result = await signInWithPopup(auth, provider);
            console.log("User Info:", result.user);
            alert(`Signed up as ${result.user.displayName}`);
        } catch (err) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError("An unknown error occurred.");
            }
        } finally {
            setLoading(false);
        }
    };

    // 🔹 Handle Email/Password Sign Up
    const handleEmailSignUp = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setLoading(true);
        try {
            // Create user with email & password
            const userCredential = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );
            const user = userCredential.user;

            // Update profile with the user's name
            await updateProfile(user, {
                displayName: name,
            });

            console.log("User created:", user);
            alert(`Account created for ${user.displayName}`);
        } catch (err) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError("An unknown error occurred.");
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="flex flex-col items-center bg-[#d1d0ce] p-12 border rounded-2xl shadow-md w-full max-w-[600px]">
                <h2 className="text-3xl font-bold mb-6 text-black">Sign Up</h2>

                {/* Google Sign-Up Button */}
                <button
                    className="flex items-center w-full px-8 py-4 rounded-2xl bg-[#e5e3db] border-b-[4px] 
          transition-all hover:brightness-110 active:border-b-[2px] active:brightness-90 relative"
                    onClick={handleGoogleSignUp}
                    disabled={loading}
                >
                    <Image
                        src="https://img.icons8.com/color/24/000000/google-logo.png"
                        alt="Google"
                        width={24}
                        height={24}
                        className="absolute left-6 w-6 h-6"
                    />
                    <span className="w-full text-center font-semibold text-black">
                        {loading ? "Signing up..." : "Sign Up with Google"}
                    </span>
                </button>
                <br></br>
                <br></br>
                {/* Sign-Up Form */}
                <form className="w-full space-y-5" onSubmit={handleEmailSignUp}>
                    {/* Full Name Field */}
                    <div className="flex flex-col w-full">
                        <label
                            className="font-semibold text-gray-700 text-lg mb-1"
                            htmlFor="name"
                        >
                            Username
                        </label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Username"
                            className="rounded-md p-4 focus:outline-none w-full bg-[#e5e3db] text-gray-500"
                            required
                        />
                    </div>

                    {/* Email Field */}
                    <div className="flex flex-col w-full">
                        <label
                            className="font-semibold text-gray-700 text-lg mb-1"
                            htmlFor="email"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="rounded-md p-4 focus:outline-none w-full bg-[#e5e3db] text-gray-500"
                            required
                        />
                    </div>

                    {/* Password Field */}
                    <div className="flex flex-col w-full">
                        <label
                            className="font-semibold text-gray-700 text-lg mb-1"
                            htmlFor="password"
                        >
                            Password
                        </label>
                        <input
                            type={showPassword ? "text" : "password"}
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            className="rounded-md p-4 focus:outline-none w-full bg-[#e5e3db] text-gray-500"
                            required
                        />
                        <div className="flex items-center mt-2">
                            <input
                                type="checkbox"
                                id="showPassword"
                                checked={showPassword}
                                onChange={() => setShowPassword(!showPassword)}
                                className="mr-2 w-4 h-4"
                            />
                            <label
                                htmlFor="showPassword"
                                className="text-sm text-gray-500"
                            >
                                Show Password
                            </label>
                        </div>
                    </div>

                    {/* Sign-Up Button */}
                    <button
                        type="submit"
                        className="flex justify-center items-center w-full px-8 py-4 rounded-2xl border-green-800 border-b-[4px] 
            bg-[#00a76d] transition-all text-white font-bold hover:bg-[#00a74a]"
                        disabled={loading}
                    >
                        {loading ? "Creating account..." : "Sign Up"}
                    </button>

                    {/* Error Message */}
                    {error && (
                        <p className="text-red-500 text-sm mt-2">{error}</p>
                    )}

                    <div className="flex justify-between text-center text-sm mt-4">
                        <p className="text-gray-500">
                            Already have an account?
                            <a
                                href="/signin"
                                className="text-blue-600 font-semibold"
                            >
                                {" "}
                                Sign in
                            </a>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signup;
