'use client';

import React from 'react';

const Products: React.FC = () => {
  return (
    <section id="products" className="bg-gray-100 py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-xl font-bold mb-2">DIGI FORGE</h3>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-xl font-bold mb-2">DIGI EDGE</h3>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-xl font-bold mb-2">Cloud Infrastructure</h3>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <h3 className="text-xl font-bold mb-2">DakaAI</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
