"use client";
import {useState} from "react";
import Link from "next/link";
import {FaApple} from "react-icons/fa";
import {FcGoogle} from "react-icons/fc";

function Signup() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        const response = await fetch("http://localhost:3000/api/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: formData.name,
                email: formData.email,
                password: formData.password,
            }),
        });

        const data = await response.json();
        if (!response.ok) {
            throw new Error(data.message || "Signup failed");
        }

        setFormData({
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
        });
    };

    const handleChange = (e: React.FormEvent) => {
        setFormData({
            ...formData,
            [(e.target as HTMLInputElement).name]: (
                e.target as HTMLInputElement
            ).value,
        });
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100 px-4">
            <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg border-4 border-white mt-14">
                <p className="text-center text-2xl font-extrabold">
                    Create Your Account
                </p>
                <form
                    className="flex flex-col mt-6 gap-4"
                    onSubmit={handleSubmit}
                >
                    <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-4 bg-white border-none rounded-xl shadow-orange-100 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Full Name"
                    />
                    <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-4 bg-white border-none rounded-xl shadow-orange-100 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Email"
                    />
                    <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        value={formData.password}
                        onChange={handleChange}
                        className="w-full p-4 bg-white border-none rounded-xl shadow-orange-100 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Create Password"
                    />
                    <input
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        required
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        className="w-full p-4 bg-white border-none rounded-xl shadow-orange-100 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Confirm Password"
                    />
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-br from-red-500 via-orange-400 to-yellow-500 text-white py-3 rounded-xl shadow-orange-100 shadow-lg font-bold hover:scale-105 transition"
                    >
                        Create Your Account
                    </button>
                </form>
                <p className="text-center text-sm text-gray-500 mt-6">
                    Already have an account?{" "}
                    <Link
                        href="/login"
                        className="text-orange-600 font-bold cursor-pointer underline"
                    >
                        Log in
                    </Link>
                </p>
                <div className="mt-6 text-center text-gray-500 text-sm">
                    Or Sign up with
                </div>
                <div className="flex justify-center gap-4 mt-4">
                    <button className="p-3 bg-black text-white rounded-full shadow-orange-100 shadow-md border-4 border-white hover:scale-110 transition">
                        <FaApple className="text-xl" />
                    </button>
                    <button className="p-3 bg-gray-100 text-gray-600 rounded-full shadow-orange-100 shadow-md border-4 border-white hover:scale-110 transition">
                        <FcGoogle className="text-xl" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Signup;
