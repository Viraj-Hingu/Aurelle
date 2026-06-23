import { motion } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';

const products = [
  { id: 1, name: 'Oversized Hoodie', price: '$185', image: '/oversizehoody.png' },
  { id: 2, name: 'Relaxed Fit T-Shirt', price: '$85', image: '/relaxedfit.png' },
  { id: 3, name: 'Premium Denim', price: '$220', image: '/premiumdenim.png' },
  { id: 4, name: 'Leather Jacket', price: '$850', image: '/leatherjacket.png' },
  { id: 5, name: 'Cargo Pants', price: '$195', image: '/cargopants.png' },
  { id: 6, name: 'Minimal Sneakers', price: '$310', image: '/minimalSneakers.png' },
];

function ProductCard({ product, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className="group cursor-pointer"
    >
      <div className="relative aspect-[4/5] overflow-hidden mb-3 sm:mb-6 rounded-lg">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-[center_top] transition-transform duration-700 ease-[0.25,1,0.5,1] group-hover:scale-105"
        />
        {/* Hover overlay actions — hidden on touch */}
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm opacity-0 transition-opacity duration-500 group-hover:opacity-100 flex items-end justify-center pb-6 sm:pb-8">
          <button className="translate-y-4 opacity-0 transition-all duration-700 ease-[0.25,1,0.5,1] group-hover:translate-y-0 group-hover:opacity-100 bg-luxury-white text-luxury-black px-4 sm:px-6 py-2 sm:py-3 rounded-full flex items-center gap-2 text-xs sm:text-sm font-inter uppercase tracking-widest hover:bg-black hover:text-white">
            <ShoppingBag size={14} />
            Quick Add
          </button>
        </div>
      </div>
      <div className="flex justify-between items-center text-luxury-black">
        <h3 className="font-inter text-xs sm:text-sm uppercase tracking-wider">{product.name}</h3>
        <span className="font-inter text-xs sm:text-sm text-luxury-gray">{product.price}</span>
      </div>
    </motion.div>
  );
}

export default function BestSellers() {
  return (
    <section className="py-16 md:py-32 px-4 sm:px-8 bg-luxury-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 md:mb-20 gap-3 sm:gap-4">
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-4xl sm:text-6xl md:text-8xl font-playfair font-bold uppercase tracking-tighter text-luxury-black text-balance"
          >
            Best Sellers
          </motion.h2>
          <motion.a
            href="#shop"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-luxury-gray hover:text-luxury-black uppercase tracking-widest text-sm font-inter transition-colors relative group shrink-0"
          >
            View All
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-luxury-black transition-all duration-300 group-hover:w-full"></span>
          </motion.a>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-4 sm:gap-x-8 gap-y-10 sm:gap-y-16">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
