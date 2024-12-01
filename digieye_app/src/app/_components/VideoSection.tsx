'use client';

import React from 'react';
import Image from 'next/image';

const HeroSection: React.FC = () => {
  return (

    <section className="bg-white py-20">

      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Text Content */}
        <div className="text-center md:text-left md:w-1/2 px-4">
          <h1 className="text-4xl font-bold mb-4">
            Collect and Visualize Data with <span className="text-customBlue">DIGIEYE</span>
          </h1>
          <p className="mb-4 text-gray-700">
            Collecting and visualizing data is simple and scalable. Store your telemetry data securely and access it anytime. Customize dashboards with built-in or custom widgets, and easily share insights with your customers.
          </p>
        </div>

        {/* Video Placeholder */}
        <div className="mt-10 md:mt-0 md:w-1/2 px-4 flex justify-center " >
          <div className="w-full max-w-md bg-gray-200 border border-gray-300 rounded-lg">
            <div className="relative h-0" style={{ paddingBottom: '56.25%' }}>
              <Image
                src="/images/video-placeholder.svg" // Replace with your image path
                alt="Video Placeholder"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <svg
                  className="w-16 h-16 text-gray-500"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
