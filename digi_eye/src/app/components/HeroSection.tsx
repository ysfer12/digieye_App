'use client';

import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-gray-800 text-white py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Revolutionize your IoT experience with DIGIEYE</h1>
        <p className="mb-8">Collecting and visualizing data is simple and scalable. Customize dashboards with built-in or custom widgets, and easily share insights with your customers.</p>
        <div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded mr-4">Get Started</button>
          <button className="bg-transparent border border-white text-white px-4 py-2 rounded">Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
