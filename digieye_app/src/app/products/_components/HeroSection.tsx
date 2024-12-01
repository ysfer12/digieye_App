'use client';

import React from 'react';
import Image from 'next/image';

const HeroSection: React.FC = () => {
  return (
 <div className="flex flex-col md:flex-row items-center justify-between p-8" style={{ background: 'radial-gradient(circle, rgba(37,69,107,1) 0%, rgba(9,28,53,1) 35%)' }}>
      <div className="md:w-1\2 p-4">
        <img
          src="/images/herosection2.svg" 
          alt="Digi Forge"
          className="w-full h-auto"
        />
      </div>
      <div className="flex-1 text-white text-center md:text-left md:ml-8">
        <div className="flex items-center justify-center md:justify-start mb-4">
          <img
            src="/images/digiForges.svg" 
            alt="Digi Forge Logo"
            className="w-16 h-auto"
          />
          <h2 className="text-2xl font-bold ml-4">DIGI FORGE</h2>
        </div>
        <p className="mb-4">
          Your gateway to streamlined IoT operations and enhanced business efficiency. Our platform offers a range of powerful features designed to simplify device management, ensure seamless connectivity, and unlock valuable insights from your IoT data.
        </p>
        <div className="flex justify-center md:justify-start space-x-4">
          <button className="bg-white text-blue-600 px-4 py-2 rounded-md">Start Now</button>
          <button className="bg-transparent border border-white text-white px-4 py-2 rounded-md">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
