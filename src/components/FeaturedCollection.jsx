import { motion } from 'framer-motion';

export default function FeaturedCollection() {
  return (
    <section id="collection" className="py-8 md:py-10 px-4 sm:px-8 bg-luxury-black text-luxury-white">
      <div className="max-w-[1400px] mx-auto w-full">

        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center text-center mb-6 md:mb-8"
        >
          <p className="text-[#c8a97e] text-[10px] md:text-xs uppercase tracking-[0.3em] mb-2 font-inter font-medium">
            Curated selections that define modern luxury.
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-6xl leading-[1] font-playfair uppercase tracking-tight mb-4 text-luxury-white">
            Featured Collections
          </h2>
          {/* Decorative Divider */}
          <div className="flex items-center justify-center w-full max-w-[280px] opacity-80">
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent to-[#c8a97e]/60"></div>
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mx-3 text-[#c8a97e] flex-shrink-0">
              <path d="M12 0l2.5 9.5L24 12l-9.5 2.5L12 24l-2.5-9.5L0 12l9.5-2.5z" />
            </svg>
            <div className="h-[1px] w-full bg-gradient-to-l from-transparent to-[#c8a97e]/60"></div>
          </div>
        </motion.div>

        {/* ---- MOBILE LAYOUT: stacked cards ---- */}
        <div className="flex flex-col gap-4 md:hidden">
          {[
            { num: '01', src: '/collection_summer.png', title: 'Summer\nEssentials', sub: 'Lightweight. Refined. Timeless.' },
            { num: '02', src: '/rightModel.png', title: 'Urban\nMovement', sub: 'Minimal. Modern. Essential.' },
            { num: '03', src: '/collection_signature.png', title: 'Signature\nSeries', sub: 'Tailored. Elevated. Iconic.' },
          ].map(({ num, src, title, sub }) => (
            <div key={num} className="relative h-[55vw] min-h-[200px] rounded-md overflow-hidden group">
              <img src={src} alt={title} className="absolute inset-0 w-full h-full object-contain transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              <div className="absolute bottom-5 left-5 z-10">
                <span className="text-[#c8a97e] font-playfair text-base mb-1 block">{num}</span>
                <div className="w-6 h-[1px] bg-[#c8a97e]/60 mb-2" />
                <h3 className="text-2xl font-playfair uppercase leading-none mb-1 text-white whitespace-pre-line">{title}</h3>
                <p className="font-inter text-[9px] tracking-[0.15em] uppercase text-[#e0e0e0] mb-3">{sub}</p>
                <button className="flex items-center gap-2 text-[9px] font-inter uppercase tracking-[0.15em] text-white hover:text-[#c8a97e] transition-colors pb-1 border-b border-white/30 hover:border-[#c8a97e]">
                  Explore Collection →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* ---- DESKTOP LAYOUT: fixed-height grid ---- */}
        <div className="hidden md:grid md:grid-cols-12 gap-4 lg:gap-6" style={{ height: 'calc(100vh - 220px)', maxHeight: '720px', minHeight: '480px' }}>

          {/* Left Large Card (01) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="md:col-span-7 relative group rounded-lg overflow-hidden border border-white/5 h-full"
          >
            <img
              src="/collection_summer.png"
              alt="Summer Essentials"
              className="absolute inset-0 w-full h-full object-contain transition-transform duration-[1.5s] ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" />

            <div className="absolute bottom-8 left-8 xl:bottom-10 xl:left-12 z-10">
              <span className="text-[#c8a97e] font-playfair text-xl mb-1 block">01</span>
              <div className="w-10 h-[1px] bg-[#c8a97e]/60 mb-4" />
              <h3 className="text-4xl xl:text-[3.2rem] font-playfair uppercase leading-[0.9] mb-3 text-white">
                Summer<br />Essentials
              </h3>
              <p className="font-inter text-[10px] tracking-[0.2em] uppercase text-[#e0e0e0] mb-5">
                Lightweight. Refined. Timeless.
              </p>
              <button className="flex items-center gap-4 border border-white/30 hover:border-[#c8a97e] hover:text-[#c8a97e] px-5 py-2.5 text-[10px] font-inter uppercase tracking-[0.2em] transition-colors duration-300">
                Explore Collection <span>→</span>
              </button>
            </div>
          </motion.div>

          {/* Right Column */}
          <div className="md:col-span-5 flex flex-col gap-4 lg:gap-6 h-full">

            {/* Card 02 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
              className="flex-1 relative group rounded-lg overflow-hidden border border-white/5"
            >
              <img
                src="/rightModel.png"
                alt="Urban Movement"
                className="absolute inset-0 w-full h-full object-contain object-top transition-transform duration-[1.5s] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/30 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              <div className="absolute bottom-5 left-6 xl:bottom-7 xl:left-8 z-10">
                <span className="text-[#c8a97e] font-playfair text-base mb-1 block">02</span>
                <div className="w-8 h-[1px] bg-[#c8a97e]/60 mb-3" />
                <h3 className="text-2xl xl:text-3xl font-playfair uppercase leading-none mb-2 text-white">
                  Urban<br />Movement
                </h3>
                <p className="font-inter text-[9px] tracking-[0.15em] uppercase text-[#e0e0e0] mb-4">
                  Minimal. Modern. Essential.
                </p>
                <button className="group/btn flex items-center gap-2 text-[9px] font-inter uppercase tracking-[0.15em] text-white hover:text-[#c8a97e] transition-colors pb-1 border-b border-white/30 hover:border-[#c8a97e]">
                  Explore Collection <span className="group-hover/btn:translate-x-1 transition-transform duration-300">→</span>
                </button>
              </div>
            </motion.div>

            {/* Card 03 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.6 }}
              className="flex-1 relative group rounded-lg overflow-hidden border border-white/5"
            >
              <img
                src="/collection_signature.png"
                alt="Signature Series"
                className="absolute inset-0 w-full h-full object-contain transition-transform duration-[1.5s] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/30 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              <div className="absolute bottom-5 left-6 xl:bottom-7 xl:left-8 z-10">
                <span className="text-[#c8a97e] font-playfair text-base mb-1 block">03</span>
                <div className="w-8 h-[1px] bg-[#c8a97e]/60 mb-3" />
                <h3 className="text-2xl xl:text-3xl font-playfair uppercase leading-none mb-2 text-white">
                  Signature<br />Series
                </h3>
                <p className="font-inter text-[9px] tracking-[0.15em] uppercase text-[#e0e0e0] mb-4">
                  Tailored. Elevated. Iconic.
                </p>
                <button className="group/btn flex items-center gap-2 text-[9px] font-inter uppercase tracking-[0.15em] text-white hover:text-[#c8a97e] transition-colors pb-1 border-b border-white/30 hover:border-[#c8a97e]">
                  Explore Collection <span className="group-hover/btn:translate-x-1 transition-transform duration-300">→</span>
                </button>
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
}
