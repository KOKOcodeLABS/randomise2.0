"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    const [top, setTop] = useState(false);

    useEffect(() => {
        const scrollHandler = () => {
            setTop(window.pageYOffset <= 20);

            if (window.scrollY >= 20) {
                setTop(true);
            } else {
                setTop(false);
            }
        };

        window.addEventListener("scroll", scrollHandler);

        scrollHandler();

        return () => {
            window.removeEventListener("scroll", scrollHandler);
        };
    }, []);

    const navactive =
        "fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#0d0618]/95 via-[#1a0b3d]/95 to-[#0d0618]/95 text-white font-sans sm:px-4 sm:py-3 md:px-4 md:py-6 p-5 opacity-100 backdrop-blur border-b border-[#A10FF2]/20 ";

    const nav =
        " fixed top-0 left-0 right-0 z-50 text-white font-sans sm:px-4 sm:py-3 md:px-4 md:py-6 p-5 bg-gradient-to-r from-[#0d0618]/90 via-[#1a0b3d]/90 to-[#0d0618]/90 backdrop-blur border-b border-[#A10FF2]/10 ";

    return (
        <>
            <nav className={top ? nav : navactive}>
                <div className="flex items-center justify-between ">
                    <div className="flex items-center">
                        <ul>
                            <li>
                                <Link href="/" className="flex items-center space-x-1">
                                    <div className="relative h-16 w-16 mr-3">
                                        <Image
                                            src="/nav_logo.avif"
                                            alt="Randomize"
                                            fill
                                            className="object-contain"
                                            sizes="32px"
                                            priority
                                        />
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="hidden lg:block">
                        <Link
                            href="/"
                            className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-xl"
                        >
                            Home
                        </Link>
                        <span className="px-1.5"></span>

                        <Link
                            href="/projects"
                            className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-xl"
                        >
                            Projects
                        </Link>
                        <Link
                            href="/events"
                            className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-xl"
                        >
                            Events
                        </Link>
                        <Link
                            href="/gallery"
                            className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-xl"
                        >
                            Gallery
                        </Link>

                        <Link
                            href="/hackathon"
                            className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-xl"
                        >
                            Hackathon
                        </Link>
                        <Link
                            href="/teams"
                            className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-xl"
                        >
                            Team
                        </Link>
                    </div>
                    <button
                        type="button"
                        className="lg:hidden text-white hover:text-gray-300"
                        onClick={() => setShowMobileMenu(!showMobileMenu)}
                    >
                        <svg
                            className="h-6 w-6"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            ></path>
                        </svg>
                    </button>
                </div>
                <div
                    className={`lg:hidden opacity-100 backdrop-blur-none bg-black	 ${showMobileMenu ? "" : "hidden"}`}
                >
                    <div className=" pt-2 pb-3 space-y-1">
                        <span className="px-1.5"></span>
                        <Link
                            href="/"
                            className="block text-white hover:text-gray-300 px-3 py-2 rounded-md"
                        >
                            Home
                        </Link>

                        <Link
                            href="/projects"
                            className="block text-white hover:text-gray-300 px-3 py-2 rounded-md"
                        >
                            Projects
                        </Link>
                        <Link
                            href="/events"
                            className="block text-white hover:text-gray-300 px-3 py-2 rounded-md"
                        >
                            Events
                        </Link>
                        <Link
                            href="/gallery"
                            className="block text-white hover:text-gray-300 px-3 py-2 rounded-md"
                        >
                            Gallery
                        </Link>
                        <Link
                            href="/hackathon"
                            className="block text-white hover:text-gray-300 px-3 py-2 rounded-md"
                        >
                            Hackathon
                        </Link>

                        <Link
                            href="/teams"
                            className="block text-white hover:text-gray-300 px-3 py-2 rounded-md"
                        >
                            Teams
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;