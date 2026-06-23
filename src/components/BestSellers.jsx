import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Oversized Hoodie',
    price: '$185',
    image: '/oversizehoody.png',
    badge: 'Best Seller',
    subtitle: 'Ultra Soft. Maximum Comfort.',
    // hoodie fills frame perfectly — dead-center
    objectPosition: 'center center',
  },
  {
    id: 2,
    name: 'Relaxed Fit T-Shirt',
    price: '$85',
    image: '/relaxedfit.png',
    badge: 'New In',
    subtitle: 'Cotton Essential. Everyday Wear.',
    // anchor to top so collar stays visible, bottom fabric cropped
    objectPosition: 'center 15%',
  },
  {
    id: 3,
    name: 'Premium Denim',
    price: '$220',
    image: '/premiumdenim.png',
    badge: null,
    subtitle: 'Built To Last. Timeless Style.',
    // flat-lay denim — center fills perfectly
    objectPosition: 'center center',
  },
  {
    id: 4,
    name: 'Leather Jacket',
    price: '$850',
    image: '/leatherjacket.png',
    badge: null,
    subtitle: 'Premium Leather. Iconic Edge.',
    // jacket fills whole portrait frame — top anchors collar in view
    objectPosition: 'center 10%',
  },
  {
    id: 5,
    name: 'Cargo Pants',
    price: '$195',
    image: '/cargopants.png',
    badge: null,
    subtitle: 'Utility Meets Style.',
    // anchor top so waist/belt shows, legs crop at bottom
    objectPosition: 'center top',
  },
  {
    id: 6,
    name: 'Minimal Sneakers',
    price: '$310',
    image: '/minimalSneakers.png',
    badge: null,
    subtitle: 'Clean Design. All Day Comfort.',
    // sneakers sit in lower-half — shift down to fill card with the product
    objectPosition: 'center 70%',
  },
];

const GOLD = '#c8a97e';

function ProductCard({ product, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.25, 1, 0.5, 1] }}
      className="group cursor-pointer flex flex-col"
      style={{ borderRadius: '10px', overflow: 'hidden', background: '#111' }}
    >
      {/* ── Image Area ── */}
      <div
        className="relative overflow-hidden"
        style={{ aspectRatio: '4/5' }}
      >
        <img
          src={product.image}
          alt={product.name}
          className="absolute inset-0 w-full h-full transition-transform duration-700 ease-[0.25,1,0.5,1] group-hover:scale-105"
          style={{
            objectFit: 'cover',
            objectPosition: product.objectPosition,
          }}
        />

        {/* Editorial dark vignette — makes light-bg images feel at home on dark card */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.45) 100%)',
          }}
        />
        {/* Bottom gradient merging into the info row */}
        <div
          className="absolute inset-x-0 bottom-0 h-20 pointer-events-none"
          style={{
            background:
              'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 100%)',
          }}
        />

        {/* Badge */}
        {product.badge && (
          <span
            className="absolute top-3 left-3 font-inter uppercase font-semibold"
            style={{
              background: 'rgba(10,10,10,0.80)',
              color: '#fff',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
              borderRadius: '4px',
              border: '1px solid rgba(200,169,126,0.35)',
              fontSize: '9px',
              letterSpacing: '0.16em',
              padding: '4px 10px',
            }}
          >
            {product.badge}
          </span>
        )}
      </div>

      {/* ── Info Row ── */}
      <div
        className="flex items-center justify-between"
        style={{ background: '#161616', padding: '14px 16px', flexShrink: 0 }}
      >
        <div className="flex flex-col gap-[3px] min-w-0 pr-2">
          <span
            className="font-inter uppercase font-semibold text-white truncate"
            style={{ fontSize: '11px', letterSpacing: '0.12em' }}
          >
            {product.name}
          </span>
          <span
            className="font-inter uppercase truncate"
            style={{ fontSize: '9px', letterSpacing: '0.12em', color: '#777' }}
          >
            {product.subtitle}
          </span>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <span
            className="font-inter font-semibold"
            style={{ color: GOLD, fontSize: '13px' }}
          >
            {product.price}
          </span>

          {/* Arrow CTA */}
          <button
            aria-label={`View ${product.name}`}
            className="flex items-center justify-center transition-all duration-300"
            style={{
              width: '30px',
              height: '30px',
              borderRadius: '50%',
              border: `1px solid rgba(200,169,126,0.4)`,
              color: GOLD,
              background: 'transparent',
              flexShrink: 0,
              cursor: 'pointer',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = GOLD;
              e.currentTarget.style.color = '#000';
              e.currentTarget.style.borderColor = GOLD;
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = GOLD;
              e.currentTarget.style.borderColor = 'rgba(200,169,126,0.4)';
            }}
          >
            <ArrowRight size={13} strokeWidth={2} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default function BestSellers() {
  return (
    <section
      id="bestsellers"
      className="py-16 md:py-28 px-4 sm:px-8"
      style={{ background: '#0d0d0d' }}
    >
      <div className="max-w-7xl mx-auto">

        {/* ── Header ── */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 md:mb-14 gap-4">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.25, 1, 0.5, 1] }}
          >
            <p
              className="font-inter uppercase mb-1"
              style={{ color: GOLD, fontSize: '10px', letterSpacing: '0.3em' }}
            >
              Top Picks. Loved By All.
            </p>
            <h2
              className="font-playfair uppercase leading-none text-white"
              style={{
                fontSize: 'clamp(3rem, 8vw, 6.5rem)',
                fontWeight: 700,
                letterSpacing: '-0.02em',
              }}
            >
              Best Sellers
            </h2>
            {/* Gold ornament */}
            <div className="flex items-center gap-2 mt-3">
              <div
                style={{
                  height: '1px',
                  width: '60px',
                  background: `linear-gradient(to right, ${GOLD}, transparent)`,
                }}
              />
              <svg viewBox="0 0 24 24" fill={GOLD} width="10" height="10">
                <path d="M12 0l2.5 9.5L24 12l-9.5 2.5L12 24l-2.5-9.5L0 12l9.5-2.5z" />
              </svg>
              <div
                style={{
                  height: '1px',
                  width: '60px',
                  background: `linear-gradient(to left, ${GOLD}, transparent)`,
                }}
              />
            </div>
          </motion.div>

          {/* View All */}
          <motion.a
            href="#shop"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.25, 1, 0.5, 1] }}
            className="group flex items-center gap-3 font-inter uppercase tracking-widest shrink-0"
            style={{
              fontSize: '11px',
              color: '#fff',
              border: '1px solid rgba(255,255,255,0.2)',
              padding: '10px 20px',
              borderRadius: '30px',
              letterSpacing: '0.18em',
              transition: 'border-color 0.3s, color 0.3s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = GOLD;
              e.currentTarget.style.color = GOLD;
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)';
              e.currentTarget.style.color = '#fff';
            }}
          >
            View All
            <ArrowRight
              size={13}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </motion.a>
        </div>

        {/* ── Product Grid ── */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}
