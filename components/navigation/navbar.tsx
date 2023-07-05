"use client";
import Logo from "@components/svg/logo";
import Link from "next/link";
import React, { useState } from "react";
import { useSession } from "next-auth/react";

export const Navbar = ({ overlapsNot }: { overlapsNot?: boolean }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const session = useSession();

    function scroll(to: string) {
        setIsMobileMenuOpen(false);
        var element = document.getElementById(to);
        element?.scrollIntoView({
            behavior: "smooth",
            block: "end",
            inline: "nearest",
        });
    }

    return (
        <div className={overlapsNot ? `` : `navbar`}>
            <nav className="bg-background shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex-shrink-0">
                            <Link href="/" className="flex items-center">
                                <div className="h-6 w-6 text-wave-100 mr-2">
                                    <Logo />
                                </div>

                                <span className="font-medium text-wave-100 text-lg">
                                    tf.2x1.dev
                                </span>
                            </Link>
                        </div>
                        <div className="hidden lg:flex space-x-4 lg:items-center lg:justify-end lg:flex-1">
                            <button
                                onClick={() => {
                                    scroll("home");
                                }}
                                className="px-3 py-2 rounded-md text-sm font-medium hover:underline text-wave-100 hover:text-wave-400 focus:outline-none focus:text-wave-400"
                            >
                                Home
                            </button>
                            <button
                                onClick={() => {
                                    scroll("info");
                                }}
                                className="px-3 py-2 rounded-md text-sm font-medium hover:underline text-wave-100 hover:text-wave-400 focus:outline-none focus:text-wave-400"
                            >
                                About
                            </button>
                            <button
                                onClick={() => {
                                    window.location.replace("/forum");
                                }}
                                className="px-3 py-2 rounded-md text-sm font-medium hover:underline text-wave-100 hover:text-wave-400 focus:outline-none focus:text-wave-400"
                            >
                                Forums
                            </button>
                            {session.status === "authenticated" ? (
                                <button
                                    onClick={() => {
                                        window.location.replace("/profile");
                                    }}
                                    className=" px-3 py-2 bg-wave-300 hover:bg-wave-400 rounded-md text-white"
                                >
                                    Profile
                                </button>
                            ) : (
                                <>
                                    <button
                                        onClick={() => {
                                            window.location.replace(
                                                "/login?redirectPath=" +
                                                    window.location.pathname
                                            );
                                        }}
                                        className=" px-3 py-2 bg-wave-300 hover:bg-wave-400 rounded-md text-white"
                                    >
                                        Log In
                                    </button>
                                </>
                            )}
                        </div>
                        <div className="flex lg:hidden">
                            <button
                                type="button"
                                className="inline-flex items-center justify-center p-2 rounded-md text-wave-100 hover:text-wave-400 "
                                aria-expanded={isMobileMenuOpen}
                                aria-haspopup="true"
                                onClick={() => {
                                    setIsMobileMenuOpen(!isMobileMenuOpen);
                                }}
                            >
                                <span className="sr-only">Open main menu</span>
                                <svg
                                    className={`${
                                        isMobileMenuOpen ? "hidden" : "block"
                                    } h-6 w-6`}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M4 6H20M4 12H20M4 18H20"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                <svg
                                    className={`${
                                        isMobileMenuOpen ? "block" : "hidden"
                                    } h-6 w-6`}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M6 18L18 6M6 6L18 18"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile menu, toggle className based on menu state */}
                <div
                    className={`${
                        isMobileMenuOpen ? "block" : "hidden"
                    } lg:hidden`}
                >
                    <div className="px-2 pt-2 pb-3 space-y-2">
                        <button
                            onClick={() => {
                                scroll("home");
                            }}
                            className="block px-3 py-2 rounded-md text-base font-medium text-wave-100 hover:text-wave-400  focus:outline-none focus:text-wave-400"
                        >
                            Home
                        </button>
                        <button
                            onClick={() => {
                                scroll("info");
                            }}
                            className="block px-3 py-2 rounded-md text-base font-medium text-wave-100 hover:text-wave-400 focus:outline-none focus:text-wave-400"
                        >
                            About
                        </button>
                        <button
                            onClick={() => {
                                window.location.replace("/forum");
                            }}
                            className="block px-3 py-2 rounded-md text-base font-medium text-wave-100 hover:text-wave-400 focus:outline-none focus:text-wave-400"
                        >
                            Forum
                        </button>
                        {session.status === "authenticated" ? (
                            <button
                                onClick={() => {
                                    window.location.replace("/profile");
                                }}
                                className=" px-3 py-2 w-full bg-wave-300 hover:bg-wave-400 rounded-md text-white"
                            >
                                Profile
                            </button>
                        ) : (
                            <>
                                <button
                                    onClick={() => {
                                        window.location.replace(
                                            "/login?redirectPath=" +
                                                window.location.pathname
                                        );
                                    }}
                                    className=" px-3 py-2 w-full bg-wave-300 hover:bg-wave-400 rounded-md text-white"
                                >
                                    Log In
                                </button>
                            </>
                        )}
                    </div>
                </div>
            </nav>
        </div>
    );
};
