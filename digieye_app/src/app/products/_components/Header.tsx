'use client';
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Header: React.FC = () => {
  return (
    <header className="bg-white text-customBlue">
      <div className="container mx-auto flex justify-between items-center py-4">
        
        {/* Logo Part */}
        <div className="flex items-center space-x-3 rtl:space-x-reverse">
          <a href="page">
            <Image src="/images/logo.svg" alt="Company Logo" width={120} height={120} />
          </a>
        </div>

        {/* Navbar Part */}
        <nav className="flex-1 flex justify-center space-x-4">
                    <Link href="products" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-700 hover:text-gray-900">Products</Link>
          <Link href="#services"className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-700 hover:text-gray-900">
Services</Link>
          <a href="#use-cases" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-700 hover:text-gray-900">Use Cases</a>
          <a href="#about" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-700 hover:text-gray-900">About</a>
          <a href="#contact" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-700 hover:text-gray-900">Contact</a>
        </nav>

        {/* Button Part */}
        <div className="flex items-center">
            <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.33333 12.6666C10.2789 12.6666 12.6667 10.2788 12.6667 7.33326C12.6667 4.38774 10.2789 1.99992 7.33333 1.99992C4.38781 1.99992 2 4.38774 2 7.33326C2 10.2788 4.38781 12.6666 7.33333 12.6666Z" stroke="#263238" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.9996 13.9999L11.0996 11.0999" stroke="#263238" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>            </button>
            <div className="ml-3 relative">
              <button className="relative inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700">
                EN
                <svg className="ml-2 -mr-0.5 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            <div className="ml-3">
              <button className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50">
                Sign In
              </button>
            </div>
          </div>
      </div>   
    </header>
  );
};

export default Header;
