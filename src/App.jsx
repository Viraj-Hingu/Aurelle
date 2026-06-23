import { useEffect, useState } from 'react';
import Lenis from 'lenis';
import Hero from './components/Hero';
import FeaturedCollection from './components/FeaturedCollection';
import BestSellers from './components/BestSellers';
import Lookbook from './components/Lookbook';
import Story from './components/Story';
import NewCollection from './components/NewCollection';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: '#collection', label: 'Collection' },
    { href: '#lookbook', label: 'Lookbook' },
    { href: '#story', label: 'Story' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50">
      {/* Main bar */}
      <div className="flex justify-between items-center px-5 sm:px-8 py-4 md:py-6 text-luxury-white mix-blend-difference">
        <div className="text-lg md:text-xl font-playfair font-semibold tracking-widest uppercase cursor-pointer">
          AURELLE
        </div>

        {/* Desktop links */}
        <div className="hidden sm:flex gap-6 md:gap-8 text-xs md:text-sm uppercase tracking-widest">
          {links.map(({ href, label }) => (
            <a key={href} href={href} className="relative group">
              <span className="hover:opacity-70 transition-opacity">{label}</span>
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="sm:hidden flex flex-col justify-center gap-[5px] p-1 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-[1.5px] bg-white transition-all duration-300 origin-center ${isOpen ? 'rotate-45 translate-y-[3.5px]' : ''}`} />
          <span className={`block w-6 h-[1.5px] bg-white transition-all duration-300 ${isOpen ? 'opacity-0 scale-x-0' : ''}`} />
          <span className={`block w-6 h-[1.5px] bg-white transition-all duration-300 origin-center ${isOpen ? '-rotate-45 -translate-y-[3.5px]' : ''}`} />
        </button>
      </div>

      {/* Mobile menu drawer — not mix-blend-difference so it's readable */}
      <div
        style={{ mixBlendMode: 'normal' }}
        className={`sm:hidden overflow-hidden transition-all duration-500 ease-[0.25,1,0.5,1] ${
          isOpen ? 'max-h-56 opacity-100' : 'max-h-0 opacity-0'
        } bg-black/90 backdrop-blur-md`}
      >
        <div className="flex flex-col items-start px-6 py-6 gap-5">
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="text-white uppercase tracking-widest text-sm font-inter hover:opacity-60 transition-opacity"
              onClick={() => setIsOpen(false)}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-luxury-white text-luxury-black font-inter min-h-screen selection:bg-luxury-black selection:text-luxury-white overflow-x-hidden w-full relative">
      <CustomCursor />
      <Navbar />

      {/* Main Sections */}
      <main className="overflow-x-hidden w-full">
        <Hero />
        <FeaturedCollection />
        <BestSellers />
        <Lookbook />
        <Story />
        <NewCollection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
