import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Lookbook() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-60, 60]);
  const y3 = useTransform(scrollYProgress, [0, 1], [120, -120]);

  return (
    <section id="lookbook" ref={containerRef} className="py-16 md:py-32 px-4 sm:px-8 bg-luxury-black text-luxury-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-32">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-4xl sm:text-6xl md:text-[7vw] leading-none uppercase font-playfair font-bold tracking-tighter mb-4 md:mb-6 text-balance"
          >
            Editorial Lookbook
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-inter text-luxury-gray max-w-lg mx-auto text-sm sm:text-base"
          >
            Discover the narrative behind our latest collection.
          </motion.p>
        </div>

        {/* Mobile layout: stack top-to-bottom */}
        <div className="flex flex-col gap-10 md:hidden">
          {/* Center image */}
          <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="/lookbook_placeholder.png"
              alt="Editorial"
              className="w-full h-full object-cover object-[center_top] filter brightness-[0.85] contrast-125"
            />
          </div>
          {/* Text */}
          <div>
            <h3 className="text-2xl font-playfair mb-4 text-balance">The Art of Subtlety</h3>
            <p className="font-inter text-luxury-gray leading-relaxed mb-6 text-sm">
              True luxury doesn't scream; it whispers. Our editorial approach embraces the spaces in between, focusing on the way fabric drapes, the precision of a seam, and the quiet confidence of the wearer.
            </p>
            <a href="#discover" className="uppercase tracking-widest text-xs font-inter hover:text-gray-300 transition-colors inline-block pb-1 border-b border-white/30 hover:border-white w-fit">
              Read the Story
            </a>
          </div>
          {/* Right image + caption */}
          <div className="flex flex-col gap-4">
            <div className="w-full aspect-square overflow-hidden rounded-lg">
              <img
                src="/rightModel.png"
                alt="Detail"
                className="w-full h-full object-cover object-[center_top] filter brightness-75"
              />
            </div>
            <p className="font-inter text-luxury-gray text-sm leading-relaxed">
              Every piece is a study in form and function, designed to move seamlessly from day to night.
            </p>
          </div>
        </div>

        {/* Desktop layout: 12-column grid with parallax */}
        <div className="hidden md:grid md:grid-cols-12 gap-8 items-center">
          {/* Left Text Block */}
          <motion.div
            style={{ y: y1 }}
            className="md:col-span-4 flex flex-col justify-center order-2 md:order-1"
          >
            <h3 className="text-2xl md:text-3xl font-playfair mb-6 text-balance">The Art of Subtlety</h3>
            <p className="font-inter text-luxury-gray leading-relaxed mb-8">
              True luxury doesn't scream; it whispers. Our editorial approach embraces the spaces in between, focusing on the way fabric drapes, the precision of a seam, and the quiet confidence of the wearer.
            </p>
            <a href="#discover" className="uppercase tracking-widest text-sm font-inter hover:text-gray-300 transition-colors inline-block pb-1 border-b border-white/30 hover:border-white w-fit">
              Read the Story
            </a>
          </motion.div>

          {/* Center Main Image */}
          <motion.div
            style={{ y: y2 }}
            className="md:col-span-5 relative aspect-[4/5] order-1 md:order-2 rounded-2xl overflow-hidden shadow-2xl"
          >
            <div className="absolute inset-0 bg-luxury-white/5" />
            <img
              src="/lookbook_placeholder.png"
              alt="Editorial"
              className="w-full h-full object-cover object-[center_top] filter brightness-[0.85] contrast-125"
            />
            {/* Parallax floating element */}
            <motion.div
              style={{ y: y3 }}
              className="absolute -bottom-10 -right-10 bg-luxury-white text-luxury-black p-6 md:p-8 max-w-[200px] md:max-w-[250px] shadow-2xl hidden md:block"
            >
              <p className="font-playfair text-lg md:text-xl italic leading-tight">
                "Fashion is architecture: it is a matter of proportions."
              </p>
            </motion.div>
          </motion.div>

          {/* Right Image Block */}
          <motion.div
            style={{ y: y1 }}
            className="md:col-span-3 order-3 flex flex-col gap-10"
          >
            <div className="aspect-square overflow-hidden rounded-lg">
              <img
                src="/rightModel.png"
                alt="Detail"
                className="w-full h-full object-cover object-[center_top] filter brightness-75 transition-transform duration-1000"
              />
            </div>
            <p className="font-inter text-luxury-gray text-sm leading-relaxed">
              Every piece is a study in form and function, designed to move seamlessly from day to night.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Decorative background typography — hidden on mobile */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 text-[15vw] font-playfair text-white/[0.02] whitespace-nowrap pointer-events-none select-none hidden md:block overflow-hidden">
        AURELLE STUDIO
      </div>
    </section>
  );
}
