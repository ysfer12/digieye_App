'use client';
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from 'next/router';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-900 text-white">
      <div className="container mx-auto flex justify-between items-center py-4">
      <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image src="/images/logo.svg" alt="F" width={100} height={100}></Image>
        </a>
  
        <nav className="space-x-4">
          <a href="#products" className="hover:underline">Products</a>
          <a href="#services" className="hover:underline">Services</a>
          <a href="#use-cases" className="hover:underline">Use Cases</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
