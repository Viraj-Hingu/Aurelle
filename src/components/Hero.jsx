import { Suspense, useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, ContactShadows } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';

function FlowingSilk() {
  const meshRef = useRef(null);
  
  // Create a segmented plane to act as fabric - using 32x32 for high performance while maintaining smooth curves
  const geometry = useMemo(() => new THREE.PlaneGeometry(8, 6, 32, 32), []);
  const initialPositions = useMemo(() => new Float32Array(geometry.attributes.position.array), [geometry]);

  useFrame((state) => {
    const time = state.clock.elapsedTime;
    const positions = geometry.attributes.position;
    
    // Displace vertices to simulate wind blowing across silk
    for (let i = 0; i < positions.count; i++) {
      const ix = i * 3;
      const x = initialPositions[ix];
      const y = initialPositions[ix + 1];
      
      const z = 
        Math.sin(x * 1.2 + time * 1.5) * 0.5 +
        Math.cos(y * 1.5 + time * 1.2) * 0.4 +
        Math.sin(x * 2.0 - y * 1.0 + time) * 0.2;
        
      positions.setZ(i, z);
    }
    
    positions.needsUpdate = true;
    geometry.computeVertexNormals();

    if (meshRef.current) {
      // Gently rotate and float the fabric
      meshRef.current.rotation.x = -Math.PI / 3 + Math.sin(time * 0.2) * 0.1;
      meshRef.current.rotation.y = time * 0.15; // Slowly spin around
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
      <mesh ref={meshRef} geometry={geometry} scale={1.2}>
        <meshPhysicalMaterial 
          color="#151515"
          metalness={0.4}
          roughness={0.4}
          clearcoat={1.0}
          clearcoatRoughness={0.15}
          side={THREE.DoubleSide}
        />
      </mesh>
    </Float>
  );
}

export default function Hero() {
  return (
    <section className="relative h-screen w-full bg-luxury-black overflow-hidden flex items-center justify-center">
      {/* 3D Canvas Background */}
      <div className="absolute inset-0 z-0 opacity-80 mix-blend-screen pointer-events-none">
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1.5} />
          <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#444" />
          <Suspense fallback={null}>
            <FlowingSilk />
            <Environment preset="studio" />
            <ContactShadows position={[0, -2, 0]} opacity={0.5} scale={10} blur={2} far={4} />
          </Suspense>
        </Canvas>
      </div>

      {/* Typography Overlay */}
      <div className="relative z-10 text-center px-5 sm:px-8 flex flex-col items-center pointer-events-auto mt-20 w-full max-w-5xl mx-auto">
        <motion.h1
          className="text-[11vw] sm:text-[8vw] md:text-[7vw] lg:text-[6.5vw] leading-[0.85] uppercase font-playfair font-bold text-luxury-white tracking-tighter mb-6 md:mb-8 w-full text-balance"
          initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
        >
          Crafted For Modern Elegance
        </motion.h1>

        <motion.p
          className="text-luxury-gray text-sm sm:text-base md:text-lg font-inter max-w-xs sm:max-w-md md:max-w-xl mb-8 md:mb-10 text-balance"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        >
          Premium clothing designed for those who appreciate timeless style and exceptional quality.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 items-center w-full sm:w-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <a href="#collection" className="group relative overflow-hidden bg-luxury-white text-luxury-black px-8 py-3 rounded-full font-inter tracking-wide transition-transform hover:scale-105 duration-500 w-full sm:w-auto text-center">
            <span className="relative z-10">Shop Collection</span>
            <div className="absolute inset-0 bg-gray-200 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.25,1,0.5,1]"></div>
          </a>
          <a href="#lookbook" className="group relative px-8 py-3 rounded-full font-inter tracking-wide text-luxury-white border border-white/20 hover:border-white transition-all duration-500 w-full sm:w-auto text-center">
            <span className="relative z-10">Explore Lookbook</span>
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <span className="text-xs text-white/50 tracking-widest uppercase font-inter">Scroll</span>
        <div className="w-[1px] h-12 bg-white/20 overflow-hidden">
          <motion.div
            className="w-full h-1/2 bg-white"
            animate={{ y: ['-100%', '200%'] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
          />
        </div>
      </motion.div>
    </section>
  );
}
