import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PrintService } from './components/PrintService';
import { ComboSets } from './components/ComboSets';
import { Products } from './components/Products';
import { Features } from './components/Features';
import { Gallery } from './components/Gallery';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <PrintService />
      <ComboSets />
      <Products />
      <Features />
      <Gallery />
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
}