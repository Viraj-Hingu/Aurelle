import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-luxury-black text-luxury-white pt-16 md:pt-32 pb-8 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 mb-14 md:mb-32">

          {/* Brand Info */}
          <div className="md:col-span-5">
            <h2 className="text-2xl md:text-4xl font-playfair tracking-widest uppercase mb-5 md:mb-8">AURELLE</h2>
            <p className="font-inter text-luxury-gray max-w-sm text-sm leading-relaxed mb-6 md:mb-8">
              Crafted for modern elegance. We believe in the power of minimal design, premium materials, and uncompromising quality.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <input
                type="email"
                placeholder="Email Address"
                className="bg-transparent border-b border-white/20 text-white placeholder:text-luxury-gray py-3 px-0 focus:outline-none focus:border-white transition-colors w-full sm:w-64 font-inter text-sm"
              />
              <button className="uppercase font-inter tracking-widest text-sm text-luxury-white hover:text-luxury-gray hover:translate-x-2 transition-all duration-300 text-left sm:text-center py-2 sm:py-0">
                Subscribe →
              </button>
            </div>
          </div>

          {/* Links: 2-col on mobile, 4-col on sm+ */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
            <div>
              <h4 className="font-playfair text-base sm:text-lg mb-4 sm:mb-6">Shop</h4>
              <ul className="flex flex-col gap-2 sm:gap-4 font-inter text-xs sm:text-sm text-luxury-gray">
                <li><a href="#" className="hover:text-white transition-colors">New Arrivals</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Best Sellers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Ready to Wear</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Accessories</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-playfair text-base sm:text-lg mb-4 sm:mb-6">Collections</h4>
              <ul className="flex flex-col gap-2 sm:gap-4 font-inter text-xs sm:text-sm text-luxury-gray">
                <li><a href="#" className="hover:text-white transition-colors">Summer Essentials</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Urban Movement</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Signature Series</a></li>
                <li><a href="#" className="hover:text-white transition-colors">The Lookbook</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-playfair text-base sm:text-lg mb-4 sm:mb-6">About</h4>
              <ul className="flex flex-col gap-2 sm:gap-4 font-inter text-xs sm:text-sm text-luxury-gray">
                <li><a href="#" className="hover:text-white transition-colors">Our Story</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Craftsmanship</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sustainability</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-playfair text-base sm:text-lg mb-4 sm:mb-6">Social</h4>
              <ul className="flex flex-col gap-2 sm:gap-4 font-inter text-xs sm:text-sm text-luxury-gray">
                <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pinterest</a></li>
                <li><a href="#" className="hover:text-white transition-colors">TikTok</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Twitter</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 md:pt-8 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-xs font-inter text-luxury-gray uppercase tracking-widest text-center sm:text-left">
          <p>© {new Date().getFullYear()} AURELLE STUDIO. All rights reserved.</p>
          <div className="flex gap-4 sm:gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
