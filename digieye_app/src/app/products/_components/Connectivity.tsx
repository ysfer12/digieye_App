'use client';
import React from "react";
import Image from "next/image";

const Connectivity: React.FC = () => {
return(
    <section className="bg-gray-100 py-12">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 p-4 text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2 text-gray-900">Connectivity</h3>
            <p className="text-gray-700 mb-4">
            Facilitate seamless messaging between the cloud and connected devices with support for popular IoT protocols like MQTT and HTTP.                        </p>
          </div>
          <div className="md:w-1/2 p-4">
            <div className="bg-gray-300 rounded-lg shadow-md h-48 flex items-center justify-center">
              <span className="text-gray-700"></span>
            </div>
          </div>
        </div>
      </section>
);
};

export default Connectivity;