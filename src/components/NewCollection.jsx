import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function NewCollection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section ref={ref} className="relative h-[60vh] sm:h-[70vh] md:h-[80vh] w-full overflow-hidden flex items-center justify-center">
      <motion.div
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <img
          src="/collection_summer.png"
          alt="The Autumn Collection"
          className="w-full h-full object-cover filter brightness-50"
        />
      </motion.div>

      <div className="relative z-10 text-center px-5 sm:px-8 w-full max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-[10vw] sm:text-[7vw] md:text-[6.5vw] leading-[0.9] uppercase font-playfair font-bold tracking-tighter text-luxury-white mb-8 md:mb-10 text-balance mx-auto"
        >
          The Autumn Collection <br className="hidden sm:block" />Has Arrived
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <a href="#shop" className="group relative inline-block overflow-hidden bg-luxury-white text-luxury-black px-7 sm:px-10 py-3 sm:py-4 rounded-full font-inter tracking-widest uppercase text-xs sm:text-sm transition-transform hover:scale-105 duration-500">
            <span className="relative z-10">Discover Now</span>
            <div className="absolute inset-0 bg-gray-200 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.25,1,0.5,1]"></div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
