import { motion } from 'framer-motion';

function Craftsmanship() {
  return (
    <section className="py-16 md:py-32 px-4 sm:px-8 bg-luxury-white text-luxury-black">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">
        <div className="w-full md:w-1/2">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.25, 1, 0.5, 1] }}
            className="aspect-[4/5] bg-luxury-gray/10 overflow-hidden rounded-lg"
          >
            <img src="/craftsmanship_fabric.png" alt="Premium Fabric" className="w-full h-full object-cover filter contrast-125" />
          </motion.div>
        </div>
        <div className="w-full md:w-1/2">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-playfair font-bold uppercase tracking-tighter mb-6 md:mb-8 text-balance"
          >
            Uncompromising Craftsmanship
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-inter text-luxury-gray mb-8 md:mb-12 leading-relaxed text-sm sm:text-base md:text-lg"
          >
            We source only the finest materials from heritage mills across Italy and Japan. Every garment is a testament to precision tailoring, handcrafted details, and sustainable production methods that respect both the wearer and the environment.
          </motion.p>
          <div className="grid grid-cols-2 gap-4 md:gap-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.4 }}>
              <h4 className="font-playfair text-base md:text-xl mb-1 md:mb-2">Premium Fabrics</h4>
              <p className="font-inter text-xs sm:text-sm text-luxury-gray">Sourced globally for exceptional feel.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.5 }}>
              <h4 className="font-playfair text-base md:text-xl mb-1 md:mb-2">Precision Tailoring</h4>
              <p className="font-inter text-xs sm:text-sm text-luxury-gray">Engineered for the perfect drape.</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BrandStory() {
  return (
    <section className="py-20 md:py-40 px-4 sm:px-8 bg-luxury-black text-luxury-white text-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="max-w-5xl mx-auto"
      >
        <p className="font-playfair text-2xl sm:text-4xl md:text-6xl lg:text-7xl uppercase tracking-tighter leading-[0.9] font-bold mb-10 md:mb-12 text-balance">
          "Designed with intention.<br />Crafted without compromise."
        </p>
        <div className="w-16 h-[1px] bg-white/30 mx-auto"></div>
      </motion.div>
    </section>
  );
}

function Testimonials() {
  const testimonials = [
    { quote: "The attention to detail is unparalleled. AURELLE has completely redefined my wardrobe.", name: "Eleanor V.", role: "Fashion Editor" },
    { quote: "Pieces that feel both timeless and incredibly modern. The quality speaks for itself.", name: "James C.", role: "Creative Director" },
    { quote: "An absolute masterclass in minimalist luxury. Every garment feels custom-made.", name: "Sophia M.", role: "Architect" },
  ];

  return (
    <section className="py-16 md:py-32 bg-luxury-white text-luxury-black overflow-hidden relative">
      <div className="max-w-7xl mx-auto text-center mb-10 md:mb-20 px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-playfair">Voices of Elegance</h2>
      </div>

      {/* Auto-sliding carousel — fully contained */}
      <div className="w-full overflow-hidden">
        <motion.div
          className="flex gap-4 sm:gap-6 md:gap-8 w-max px-4 sm:px-8"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 30, repeat: Infinity }}
        >
          {/* Double the list for seamless loop */}
          {[...testimonials, ...testimonials].map((item, i) => (
            <div key={i} className="w-[260px] sm:w-[360px] md:w-[480px] shrink-0 bg-luxury-white border border-luxury-gray/20 p-6 sm:p-8 md:p-12 hover:border-luxury-black transition-colors duration-500 cursor-none">
              <p className="font-playfair text-base sm:text-lg md:text-xl italic mb-6 sm:mb-8 leading-relaxed">"{item.quote}"</p>
              <div>
                <p className="font-inter font-medium tracking-wide uppercase text-xs sm:text-sm mb-1">{item.name}</p>
                <p className="font-inter text-luxury-gray text-xs uppercase tracking-widest">{item.role}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default function Story() {
  return (
    <div id="story">
      <Craftsmanship />
      <BrandStory />
      <Testimonials />
    </div>
  );
}
