import React from 'react';

const ElevateSection: React.FC = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between p-8">
      <div className="flex-1 mb-8 md:mb-0">
        <h1 className="text-3xl font-bold text-gray-800">
          Elevate <span className="text-blue-600">Quality</span>,
          <br />
          Enhance <span className="text-blue-600">Safety</span>
          <br />
          & Master Your <span className="text-blue-600">Workspace</span>
        </h1>
        <p className="text-gray-600 mt-4">
          Strategic Solutions for Seamless Operations and Peak Performance
        </p>
      </div>
      <div className="flex-1 flex flex-wrap justify-center md:justify-start space-y-4 md:space-y-0 md:space-x-4">
        <div className="flex items-center space-x-2">
          <img src="/images/audits-controls.svg" alt="Digital Audits & Controls" className="w-6 h-6" />
          <span className="text-gray-800">Digital Audits & Controls</span>
        </div>
        <div className="flex items-center space-x-2">
          <img src="/images/ai-powered.svg" alt="AI-Powered Decision Support" className="w-6 h-6" />
          <span className="text-gray-800">AI-Powered Decision Support</span>
        </div>
        <div className="flex items-center space-x-2">
          <img src="/images/incident-management.svg" alt="Incident Management" className="w-6 h-6" />
          <span className="text-gray-800">Incident Management</span>
        </div>
        <div className="flex items-center space-x-2">
          <img src="/images/client-satisfaction.svg" alt="Client Satisfaction & Claims" className="w-6 h-6" />
          <span className="text-gray-800">Client Satisfaction & Claims</span>
        </div>
      </div>
    </section>
  );
};

export default ElevateSection;