import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[100vh] sm:min-h-screen w-full bg-luxury-black text-luxury-white overflow-hidden flex flex-col justify-center pt-20 pb-10 mb-20">

      {/* Huge Faded Background Typography */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none flex items-center justify-center opacity-5 select-none">
        <div className="text-[25vw] font-playfair font-bold uppercase leading-none whitespace-nowrap outline-text text-transparent" style={{ WebkitTextStroke: '2px white' }}>
          AURELLE
        </div>
      </div>

      {/* Right Side Image with Gradient Fade */}
      <div className="absolute top-0 right-0 w-full sm:w-[65%] h-full z-0 pointer-events-none opacity-60 sm:opacity-100">
        <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-luxury-black via-luxury-black/60 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-luxury-black/30 via-transparent to-luxury-black z-10" />
        <img
          src="/Represent Clo_.webp"
          alt="Luxury Fashion Model"
          className="w-full h-full object-cover object-[center_top]"
        />
      </div>

      {/* Main Content Container */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-5 sm:px-8 flex flex-col justify-center h-full">

        {/* Left Typography Block */}
        <div className="max-w-2xl mt-10 sm:mt-0">
          <motion.h1
            className="text-[14vw] sm:text-[9vw] md:text-[7.5vw] leading-[0.85] font-playfair font-bold uppercase tracking-tighter text-luxury-white"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
          >
            <span className="block">Timeless</span>
            <span className="block">Style For</span>
            <span className="relative inline-block">
              Modern
              {/* Hand-drawn SVG Circle Highlight */}
              <motion.svg
                className="absolute -inset-x-6 sm:-inset-x-8 -inset-y-2 sm:-inset-y-4 w-[120%] h-[130%] pointer-events-none"
                viewBox="0 0 200 60"
                preserveAspectRatio="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.8, ease: "easeInOut" }}
              >
                <motion.ellipse
                  cx="100"
                  cy="30"
                  rx="95"
                  ry="25"
                  fill="transparent"
                  stroke="#ffffff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  transform="rotate(-2 100 30)"
                />
              </motion.svg>
            </span>
            <span className="block">Living</span>
          </motion.h1>

          <motion.p
            className="mt-6 sm:mt-8 text-luxury-gray text-xs sm:text-sm md:text-base font-inter max-w-xs sm:max-w-sm leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Be the first to know about fresh drops, and news.<br />
            Level up your style with AURELLE.
          </motion.p>
        </div>

      </div>

    </section>
  );
}
