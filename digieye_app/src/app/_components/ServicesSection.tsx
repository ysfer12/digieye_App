'use client';

import React from 'react';
import Image from 'next/image';

const ServicesSection: React.FC = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Services</h2>
        <p className="mb-8 text-gray-700">Tailored Services to Drive Your Success with DIGIEYE</p>
        
        {/* Service Content */}
        <div className="flex justify-center">
          <div className="w-full max-w-4xl">
            <Image
              src="/images/services.svg" // Replace with your image path
              alt="Service"
              width={1200}
              height={600}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
