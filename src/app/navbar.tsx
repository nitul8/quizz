"use client";
import React, {useState} from "react";
import Link from "next/link";
import {IoMdSearch} from "react-icons/io";
import Image from "next/image";

const Navbar = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleSearch = () => {
        setIsVisible((prev) => !prev);
    };

    return (
        <>
            <nav className="w-full flex justify-center items-center fixed z-10 ">
                <div className="w-full md:w-4/5 flex justify-between items-center border-b py-2">
                    {/* Logo Section */}
                    <Link href="/" className="flex items-center">
                        <p className="font-extrabold text-6xl text-red-400 outlined-text font-[family-name:var(--font-chewy)]">
                            Q
                        </p>
                        <p className="font-extrabold text-7xl text-blue-400 outlined-text font-[family-name:var(--font-chewy)]">
                            u
                        </p>
                        <p className="font-extrabold text-7xl text-pink-400 outlined-text font-[family-name:var(--font-chewy)]">
                            i
                        </p>
                        <p className="font-extrabold text-7xl text-yellow-400 outlined-text font-[family-name:var(--font-chewy)]">
                            z
                        </p>
                        <p className="font-extrabold text-7xl text-green-400 outlined-text font-[family-name:var(--font-chewy)]">
                            z
                        </p>
                        <p className="font-extrabold text-6xl text-white outlined-text font-[family-name:var(--font-chewy)]">
                            y
                        </p>
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
                            href="/signin"
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
                <div className="hidden md:block"></div>
                <div className="md:w-4/5 flex justify-between items-center py-2 ">
                    <Link href="/" className="flex items-center flex-col m-1 ">
                        <Image
                            src="/Nav/start.svg"
                            alt="start"
                            height={32}
                            width={32}
                            className="h-8 w-8"
                        />
                        <p className="font-bold text-xs">Start</p>
                    </Link>
                    <Link href="/" className="flex items-center flex-col m-1">
                        <Image
                            src="/Nav/sports.svg"
                            alt="sports"
                            height={32}
                            width={32}
                            className="h-8 w-8"
                        />
                        <p className="font-bold text-xs">Sports</p>
                    </Link>
                    <Link href="/" className="flex items-center flex-col m-1">
                        <Image
                            src="/Nav/entertainment.svg"
                            alt="mythology"
                            height={32}
                            width={32}
                            className="h-8 w-8"
                        />
                        <p className="font-bold text-xs">Mythology</p>
                    </Link>
                    <Link href="/" className="flex items-center flex-col m-1">
                        <Image
                            src="/Nav/art-and-literature.svg"
                            alt="art"
                            height={32}
                            width={32}
                            className="h-8 w-8"
                        />
                        <p className="font-bold text-xs">Art & Literature</p>
                    </Link>
                    <Link href="/" className="flex items-center flex-col m-1">
                        <Image
                            src="/Nav/geography.svg"
                            alt="geography"
                            height={32}
                            width={32}
                            className="h-8 w-8"
                        />
                        <p className="font-bold text-xs">Geography</p>
                    </Link>
                    <Link href="/" className="flex items-center flex-col m-1">
                        <Image
                            src="/Nav/history.svg"
                            alt="history"
                            height={32}
                            width={32}
                            className="h-8 w-8"
                        />
                        <p className="font-bold text-xs">History</p>
                    </Link>
                    <Link href="/" className="flex items-center flex-col m-1">
                        <Image
                            src="/Nav/languages.svg"
                            alt="languages"
                            height={32}
                            width={32}
                            className="h-8 w-8"
                        />
                        <p className="font-bold text-xs">Languages</p>
                    </Link>
                    <Link href="/" className="flex items-center flex-col m-1">
                        <Image
                            src="/Nav/trivia.svg"
                            alt="trivia"
                            height={32}
                            width={32}
                            className="h-8 w-8"
                        />
                        <p className="font-bold text-xs">Trivia</p>
                    </Link>
                    <Link href="/" className="flex items-center flex-col m-1">
                        <Image
                            src="/Nav/science-and-nature.svg"
                            alt="science"
                            height={32}
                            width={32}
                            className="h-8 w-8"
                        />
                        <p className="font-bold text-xs">Science & Nature</p>
                    </Link>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
