import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Products from './components/Products';
import JoinTeam from './components/JoinTeam';
import WhyChooseUs from './components/WhyChooseUs';
import SuccessStories from './components/SuccessStories';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Navigation />
      <Hero />
      <Products />
      <JoinTeam />
      <WhyChooseUs />
      <SuccessStories />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default App;