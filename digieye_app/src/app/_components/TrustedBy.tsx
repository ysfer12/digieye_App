'use client';

import React from 'react';

const TrustedBy: React.FC = () => {
  return (
<section className="bg-white py-20">
  <div className="container mx-auto text-center">
    <h2 className="text-3xl font-bold mb-10">They Trust Us</h2>
    <p className="mb-10">
      Lorem ipsum dolor sit amet consectetur. Leo dolor ut cursus auctor mauris ac mauris in.<br></br>
      Sed at nunc amet venenatis ornare id gravida id.
    </p>
    <div className="flex justify-center space-x-20">
      <img src="/images/clientLogo1.svg" alt="Company 1" className="h-12"/>
      <img src="/images/clientLogo2.svg" alt="Company 2" className="h-12"/>
      <img src="/images/clientLogo3.svg" alt="Company 3" className="h-12"/>
      <img src="/images/clientLogo4.svg" alt="Company 4" className="h-12"/>
      <img src="/images/clientLogo5.svg" alt="Company 5" className="h-12"/>
      <img src="/images/clientLogo6.svg" alt="Company 6" className="h-12"/>
      <img src="/images/clientLogo7.svg" alt="Company 7" className="h-12"/>
    </div>
  </div>
</section>
  );
};

export default TrustedBy;
