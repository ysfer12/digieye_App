import React from 'react';

const ContactForm: React.FC = () => {
  return (
    <section className="py-12" style={{ background: 'radial-gradient(circle, rgba(37,69,107,1) 0%, rgba(9,28,53,1) 35%)' }}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 p-8 text-white">
          <h2 className="text-3xl font-bold mb-4">Got questions or want a live demo?</h2>
          <p className="mb-6">
            Drop us a message using the contact form below. We’ll get back to you promptly to schedule a live demonstration.
          </p>
        </div>
        <div className="md:w-1/2 p-8 bg-white rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-4">Book a Live-Demo / Ask the Team</h3>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name*</label>
              <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:border-blue-500 focus:ring focus:ring-blue-200" placeholder="Your Name" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Company</label>
              <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:border-blue-500 focus:ring focus:ring-blue-200" placeholder="Company Name" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email Address*</label>
              <input type="email" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:border-blue-500 focus:ring focus:ring-blue-200" placeholder="Your email address" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Description</label>
              <textarea className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:border-blue-500 focus:ring focus:ring-blue-200" placeholder="Write your message here" />
            </div>
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input id="terms" name="terms" type="checkbox" className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded" />
              </div>
              <div className="ml-2 text-sm">
                <label htmlFor="terms" className="font-medium text-gray-700">I accept terms of service and privacy policy*</label>
              </div>
            </div>
            <div>
              <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Request a Live-Demo
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;