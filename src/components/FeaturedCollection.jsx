import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

function TiltCard({ title, image, height = 'normal' }) {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  // Height classes based on prop
  const heightClass =
    height === 'large'
      ? 'h-[300px] sm:h-[420px] md:h-[580px]'
      : 'h-[220px] sm:h-[300px] md:h-[280px]';

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={`relative w-full ${heightClass} rounded-xl overflow-hidden cursor-pointer perspective-1000 group`}
    >
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-[center_top] bg-no-repeat transition-transform duration-700 ease-out group-hover:scale-105"
        style={{ backgroundImage: `url(${image})`, transform: "translateZ(-50px)" }}
      />
      <div
        className="absolute inset-0 bg-black/20 transition-opacity duration-500 group-hover:bg-black/40"
        style={{ transform: "translateZ(0px)" }}
      />
      <div
        className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 text-luxury-white"
        style={{ transform: "translateZ(50px)" }}

      >
        <h3 className="text-xl sm:text-2xl md:text-3xl font-playfair mb-1 sm:mb-2">{title}</h3>
        <p className="text-xs sm:text-sm uppercase tracking-widest font-inter opacity-0 translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
          Explore Collection
        </p>
      </div>
    </motion.div>
  );
}

export default function FeaturedCollection() {
  return (
    <section id="collection" className="py-16 md:py-32 px-4 sm:px-8 bg-luxury-white text-luxury-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="mb-12 md:mb-20 text-center"
        >
          <h2 className="text-3xl sm:text-5xl md:text-7xl font-playfair font-bold uppercase tracking-tighter mb-3 md:mb-4 text-balance">Featured Collections</h2>
          <p className="text-luxury-gray font-inter max-w-xl mx-auto uppercase tracking-widest text-xs sm:text-sm">Curated selections that define modern luxury.</p>
        </motion.div>

        {/* Mobile: single column stack. Desktop: 3-col grid with spanning */}
        <div className="flex flex-col gap-6 md:hidden">
          <TiltCard title="Summer Essentials" image="/collection_summer.png" height="large" />
          <TiltCard title="Urban Movement" image="/collection_urban.png" height="normal" />
          <TiltCard title="Signature Series" image="/collection_signature.png" height="normal" />
          <TiltCard title="Winter Collection" image="/collection_winter.png" height="large" />
        </div>

        <div className="hidden md:grid md:grid-cols-3 gap-8 perspective-1000">
          {/* Left: large card spanning 2 cols */}
          <div className="md:col-span-2">
            <TiltCard title="Summer Essentials" image="/collection_summer.png" height="large" />
          </div>
          {/* Right: two stacked cards */}
          <div className="flex flex-col gap-8">
            <TiltCard title="Urban Movement" image="/collection_urban.png" height="normal" />
            <TiltCard title="Signature Series" image="/collection_signature.png" height="normal" />
          </div>
          {/* Bottom: large card spanning 2 cols (offset) */}
        </div>
      </div>
    </section>
  );
}
