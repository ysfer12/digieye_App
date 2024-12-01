'use client';

import React from 'react';
import Image from 'next/image';

const MultiTenancy: React.FC = () => {
  return (
    <section className="bg-gray-200 py-12">
    <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center">
     
      <div className="md:w-1/2 p-4">
        <h3 className="text-2xl font-bold mb-2 text-gray-900">Multi-Tenancy</h3>
        <p className="text-gray-700 mb-4">
        Easily organize your IoT projects or clients with Digieye's multi-tenancy feature.
        </p>        <ul className="list-none">
          <li className="flex items-center mb-2">
            <svg
              className="h-5 w-5 text-green-500 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 10-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-gray-900">Create separate spaces whether it's a project or a customer.</span>
          </li>
          <li className="flex items-center mb-2">
            <svg
              className="h-5 w-5 text-green-500 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 10-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-gray-900">Manage users, assets, and devices efficiently.</span>
          </li>
          <li className="flex items-center">
            <svg
              className="h-5 w-5 text-green-500 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.707a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 10-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-gray-900">Effortlessly customize each tenant's settings and access controls.</span>
          </li>
        </ul>
        <button className="bg-customBlue text-white px-6 py-3 rounded">Read More</button>
      </div>
      <div className="md:w-1/2 p-4">
        <div className="bg-gray-300 rounded-lg shadow-md h-48 flex items-center justify-center">
          <span className="text-gray-700">Image Placeholder</span>
        </div>
      </div>
    </div>
  </section>

);
};

export default MultiTenancy;
