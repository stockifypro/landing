import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import AICalls from './components/AICalls';
import Pricing from './components/Pricing';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';

function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-surface text-white">
      <Navbar onContactOpen={() => setIsContactOpen(true)} />
      <main>
        <Hero onContactOpen={() => setIsContactOpen(true)} />
        <Features />
        <AICalls />
        <Pricing onContactOpen={() => setIsContactOpen(true)} />
      </main>
      <Footer />
      <ContactForm
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
}

export default App;