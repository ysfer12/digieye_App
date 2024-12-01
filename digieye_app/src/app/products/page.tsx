'use client';
import type { NextPage } from 'next';
import Head from 'next/head';
import Header from './_components/Header';
import HeroSection from './_components/HeroSection';
import DeviceManagement from './_components/DeviceManagement';
import Connectivity from './_components/Connectivity';
import RealTime from './_components/RealTime';
import DataWorkflow from './_components/DataWorkflow';
import AssetTracking from './_components/AssetTracking';
import MultiTenancy from './_components/MultiTenancy';
import ContactForm from './_components/ContactForm';
import EmailAlerting from './_components/EmailAlerting';
import PayloadDecoders from './_components/PayloadDecoders';
import WhiteLabel from './_components/WhiteLabel';
const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>DIGIEYE</title>
        <meta name="description" content="Revolutionize your IoT experience with DIGIEYE" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <HeroSection />
      <DeviceManagement />
      <Connectivity />
      <RealTime />
      <DataWorkflow />
      <AssetTracking />
      <MultiTenancy />
      <EmailAlerting />
      <PayloadDecoders />
      <WhiteLabel />
      <ContactForm />

    </div>
  );
};

export default Home;