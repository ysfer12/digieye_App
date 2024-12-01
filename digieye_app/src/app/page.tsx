import type { NextPage } from 'next';
import Head from 'next/head';
import Header from './_components/Header';
import HeroSection from './_components/HeroSection';
import Products from './_components/Products';
import TrustedBy from './_components/TrustedBy';
import Footer from './_components/Footer';
import VideoSection from './_components/VideoSection';
import ServicesSection from './_components/ServicesSection';
import ElevateSection from './_components/ElevateSection';
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
      <VideoSection />
      <ServicesSection />
      <ElevateSection />
      <Products />
      <TrustedBy />
      <Footer />
    </div>
  );
};

export default Home;
