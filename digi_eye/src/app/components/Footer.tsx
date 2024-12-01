'use client';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto text-center md:text-left">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Our Vision</h3>
            <p>With DIGIEYE, enterprises can build, manage, and scale their IoT solutions with confidence.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Products</h3>
            <ul>
              <li>DIGI PLATFORM</li>
              <li>DIGI EDGE</li>
              <li>CLOUD INFRASTRUCTURE</li>
              <li>DakaAI</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Use Cases</h3>
            <ul>
              <li>Smart Energy</li>
              <li>Smart Farming</li>
              <li>Fleet Tracking</li>
              <li>Environmental Monitoring</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Support</h3>
            <ul>
              <li>Help Center</li>
              <li>FAQs</li>
              <li>Contact Us</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 text-center">
          <p>&copy; 2024 DIGIEYE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
