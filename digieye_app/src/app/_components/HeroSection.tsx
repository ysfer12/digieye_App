'use client';

import React from 'react';
import Image from 'next/image';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-gray-900 text-white py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        
        {/* Text Content */}
        <div className="text-center md:text-left md:w-1/2 px-4">
          <h1 className="text-5xl font-bold mb-4">Revolutionize your IoT experience with <span className="text-customBlue">DIGIEYE</span></h1>
          <p className="mb-8 text-gray-300">
            Lorem ipsum dolor sit amet consectetur. Eu non amet felis et sed. Quam dictum scelerisque habitant amet nunc felis proin nisi vitae. Ultrices venenatis mi rhoncus praesent eget urna cursus felis. Ullamcorper ut vel sed purus dui scelerisque.
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <button className="bg-customBlue text-white px-6 py-3 rounded">Give us a try</button>
            <button className="bg-transparent border border-white text-white px-6 py-3 rounded">Learn More</button>
          </div>
        </div>

        {/* Image Content */}
        <div className="mt-10 md:mt-0 md:w-1/2 px-4">
          <Image
            src="/LAPTOP.png" // Replace with your image path
            alt="DIGIEYE Dashboard"
            width={800}
            height={500}
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
