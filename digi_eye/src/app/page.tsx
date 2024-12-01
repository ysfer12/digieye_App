import type { NextPage } from 'next';
import Head from 'next/head';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Products from './components/Products';
import TrustedBy from './components/TrustedBy';
import Footer from './components/Footer';

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
      <Products />
      <TrustedBy />
      <Footer />
    </div>
  );
};

export default Home;
