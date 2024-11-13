"use client"
import React, { useState } from 'react';




export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="container mx-auto md:mt-5" style={{backgroundColor: "#e6f6fe"}}>
        <nav className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-3">
                <div className="flex justify-start items-center">
                    <img src="https://images.unsplash.com/photo-1709884735017-114f4a31f944?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D" alt="Logo" className="h-10 mr-3 rounded-full" />
                    <span className="text-xl font-semibold">Uifry</span>
                </div>
                <div className="hidden md:flex space-x-8">
                    <a href="#" className="text-gray-600 font-semibold hover:text-blue-500">Home</a>
                    <a href="#" className="text-gray-600 font-semibold hover:text-blue-500">Services</a>
                    <a href="#" className="text-gray-600 font-semibold hover:text-blue-500">Blogs</a>
                    <a href="#" className="text-gray-600 font-semibold hover:text-blue-500">About</a>
                    <a href="#" className="text-gray-600 font-semibold hover:text-blue-500">Contact</a>
                </div>
                <div className="hidden md:flex items-center space-x-4">
                <img src="https://images.unsplash.com/photo-1709884735017-114f4a31f944?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZnJlZSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D" alt="Logo" className="h-10 mr-3 rounded-full" />
                    <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-700">Book Now</button>
                </div>
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-gray-900 focus:outline-none">
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
                        </svg>
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden">
                    <div className="flex flex-col space-y-4 pb-5">
                        <a href="#" className="text-gray-600 font-semibold hover:text-blue-500">Home</a>
                        <a href="#" className="text-gray-600 font-semibold hover:text-blue-500">Services</a>
                        <a href="#" className="text-gray-600 font-semibold hover:text-blue-500">Blogs</a>
                        <a href="#" className="text-gray-600 font-semibold hover:text-blue-500">About</a>
                        <a href="#" className="text-gray-600 font-semibold hover:text-blue-500">Contact</a>
                    </div>
                </div>
            )}
        </nav>
    </header>
    )
}