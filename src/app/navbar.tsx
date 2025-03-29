"use client";
import React, {useState} from "react";
import Link from "next/link";
import {IoMdSearch} from "react-icons/io";
import Image from "next/image";

const Topics = [
    {id: 1, logo: "/Nav/start.svg", name: "Start", link: "/"},
    {id: 2, logo: "/Nav/sports.svg", name: "Sports", link: "/"},
    {id: 3, logo: "/Nav/entertainment.svg", name: "Mythology", link: "/"},
    {id: 4, logo: "/Nav/art.svg", name: "Art & Literature", link: "/"},
    {id: 5, logo: "/Nav/geography.svg", name: "Geography", link: "/"},
    {id: 6, logo: "/Nav/history.svg", name: "History", link: "/"},
    {id: 7, logo: "/Nav/languages.svg", name: "Languages", link: "/"},
    {id: 8, logo: "/Nav/trivia.svg", name: "Trivia", link: "/"},
    {id: 9, logo: "/Nav/science.svg", name: "Science & Nature", link: "/"},
];

const Navbar = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleSearch = () => {
        setIsVisible((prev) => !prev);
    };

    return (
        <>
            <nav className="w-full flex justify-center items-center fixed z-10 ">
                <div className="w-full md:w-4/5 flex justify-between items-center border-b border-gray-200">
                    {/* Logo Section */}
                    <Link href="/" className="flex items-center">
                        <p className="text-red-400 outlined-text">Q</p>
                        <p className="text-blue-400 outlined-text">u</p>
                        <p className="text-pink-400 outlined-text">i</p>
                        <p className="text-yellow-400 outlined-text">z</p>
                        <p className="text-green-400 outlined-text">z</p>
                    </Link>

                    {/* Navigation Links */}
                    <div className="flex items-center space-x-3">
                        {/* Search Box */}
                        <div className="flex items-center justify-end relative">
                            <input
                                type="text"
                                className={`border rounded-full pl-4 pr-10 transition-all duration-300 ease-in-out ${
                                    isVisible
                                        ? "w-60 h-10 placeholder-opacity-100"
                                        : "w-10 h-10 opacity-0"
                                }`}
                                placeholder="Search..."
                            />
                            <IoMdSearch
                                className="absolute right-3 text-2xl cursor-pointer hover:scale-110 transition-transform duration-200"
                                onClick={toggleSearch}
                            />
                        </div>

                        {/* Sign-in Button */}
                        <Link
                            href="/signup"
                            className="cursor-pointer transition-all bg-lime-400 px-6 py-2 rounded-2xl border-lime-600 border-b-[4px] 
                        hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px] 
                        active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
                        >
                            Sign in
                        </Link>
                    </div>
                </div>
            </nav>
            <nav className="w-full flex justify-center items-center fixed mt-24 z-10 ">
                <div className="hidden md:w-4/5 md:flex justify-between items-center py-2 ">
                    {Topics.map((props) => (
                        <Link
                            key={props.id}
                            href={props.link}
                            className="flex items-center flex-col m-1 "
                        >
                            <Image
                                src={props.logo}
                                alt={props.name}
                                height={32}
                                width={32}
                            />
                            <p className="font-bold text-xs">{props.name}</p>
                        </Link>
                    ))}
                </div>
            </nav>
        </>
    );
};

export default Navbar;
