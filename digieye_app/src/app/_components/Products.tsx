// components/ProductsSection.tsx
import React from 'react';

const ProductsSection = () => {
  return (
    <div className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Products</h2>
        <p className="text-center text-gray-400 mb-12">
          Risus egestas morbi amet sed scelerisque sociis nunc felis. Laoreet tortor placerat ac est in ultricies.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div className="bg-gray-800 p-8 rounded-lg text-center">
            <div className="mb-4">
              <img src="/images/digiForges.svg" alt="DIGI FORGE" className="mx-auto h-12 w-12" />
            </div>
            <h3 className="text-lg font-semibold">DIGI FORGE</h3>
          </div>
          <div className="bg-gray-800 p-8 rounded-lg text-center">
            <div className="mb-4">
              <img src="/images/digiEdge.svg" alt="DIGI EDGE" className="mx-auto h-12 w-12" />
            </div>
            <h3 className="text-lg font-semibold">DIGI EDGE</h3>
          </div>
          <div className="bg-gray-800 p-8 rounded-lg text-center">
            <div className="mb-4">
              <img src="/images/cloudInfrastructure.svg" alt="Cloud Infrastructure" className="mx-auto h-12 w-12" />
            </div>
            <h3 className="text-lg font-semibold text-gray-500">Cloud Infrastructure</h3>
          </div>
          <div className="bg-gray-800 p-8 rounded-lg text-center">
            <div className="mb-4">
              <img src="/images/dakaAi.svg" alt="DakaAI" className="mx-auto h-12 w-12" />
            </div>
            <h3 className="text-lg font-semibold">DakaAI</h3>
            <p className="text-gray-500 text-xs">By Nextronic</p>
          </div>
        </div>
        <p className="text-center text-gray-400 mt-12">
          With DIGIEYE, enterprises can build, manage, and scale their IoT solutions with confidence, driving innovation and success in their industries. Experience the power of DigiEye for your enterprise IoT projects today.
        </p>
      </div>
    </div>
  );
};

export default ProductsSection;
