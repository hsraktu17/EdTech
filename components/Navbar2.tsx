"use client"

import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <nav className="bg-transparent bg-gray-900 bg-opacity-50 backdrop-blur-lg fixed w-full z-10">
            <div className="flex justify-between items-center px-6 md:px-[10rem] py-4">
                <div className="text-3xl font-bold text-white">
                    EdTech
                </div>
                <div className="hidden md:flex space-x-8 text-white">
                    <button onClick={() => signIn()} className="hover:text-gray-400">Sign In</button>
                    <Link href="/signup" className="hover:text-gray-400">Get Started</Link>
                    <Link href="/contact" className="hover:text-gray-400">Contact Us</Link>
                </div>
                <div className="md:hidden">
                    <button
                        className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-gray-400 hover:border-gray-400"
                        onClick={handleToggle}
                    >
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>Menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                        </svg>
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden absolute top-16 left-0 w-full bg-black text-white shadow-lg rounded-lg py-4 px-6 space-y-4">
                    <button onClick={() => { signIn(); handleClose(); }} className="block w-full text-left hover:text-gray-400">
                        Sign In
                    </button>
                    <Link href="/signup">
                        <a onClick={handleClose} className="block w-full text-left hover:text-gray-400">
                            Get Started
                        </a>
                    </Link>
                    <Link href="/contact">
                        <a onClick={handleClose} className="block w-full text-left hover:text-gray-400">
                            Contact Us
                        </a>
                    </Link>
                </div>
            )}
        </nav>
    );
}
