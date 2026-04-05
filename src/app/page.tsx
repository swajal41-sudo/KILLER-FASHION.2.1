"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, User, ShoppingBag, ArrowRight } from "lucide-react";

// MOCK DATA
const PRODUCTS = [
  {
    id: "p1",
    name: "Oversized Heavyweight Hoodie",
    basePrice: 120,
    colors: [
      { name: "Matte Black", hexCode: "#111827", imageStr: "hoodie-black" },
      { name: "Sage Green", hexCode: "#273824", imageStr: "hoodie-sage" },
      { name: "Slate Grey", hexCode: "#475569", imageStr: "hoodie-grey" },
    ],
  },
  {
    id: "p2",
    name: "Techwear Cargo Pants",
    basePrice: 165,
    colors: [
      { name: "Obsidian", hexCode: "#0f172a", imageStr: "cargo-obsidian" },
      { name: "Olive Drab", hexCode: "#324016", imageStr: "cargo-olive" },
      { name: "Camo Dust", hexCode: "#6b5d49", imageStr: "cargo-dust" },
    ],
  },
  {
    id: "p3",
    name: "Boxy Graphic Tee",
    basePrice: 55,
    colors: [
      { name: "Pure Black", hexCode: "#000000", imageStr: "tee-black" },
      { name: "Vintage White", hexCode: "#e2e8f0", imageStr: "tee-white" },
      { name: "Crimson", hexCode: "#450a0a", imageStr: "tee-crimson" },
    ],
  },
  {
    id: "p4",
    name: "Tactical Utility Vest",
    basePrice: 140,
    colors: [
      { name: "Night Ops", hexCode: "#1c1917", imageStr: "vest-night" },
      { name: "Desert Sand", hexCode: "#a8a29e", imageStr: "vest-sand" },
      { name: "Gunmetal", hexCode: "#3f3f46", imageStr: "vest-gunmetal" },
    ],
  },
];

// NAV COMPONENT
function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-zinc-950/70 border-b border-zinc-800/80">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand */}
        <div className="text-3xl font-black tracking-tighter text-zinc-50 cursor-pointer">
          KILLER
        </div>
        
        {/* Center Links */}
        <nav className="hidden md:flex items-center gap-10 text-xs font-bold tracking-[0.2em] text-zinc-400">
          <a href="#" className="hover:text-cyan-400 transition-colors duration-300">NEW DROP</a>
          <a href="#" className="hover:text-cyan-400 transition-colors duration-300">OUTERWEAR</a>
          <a href="#" className="hover:text-cyan-400 transition-colors duration-300">CARGOS</a>
          <a href="#" className="hover:text-cyan-400 transition-colors duration-300">BASICS</a>
        </nav>

        {/* Icons Right */}
        <div className="flex items-center gap-6 text-zinc-300">
          <button className="relative hover:text-cyan-400 transition-colors font-bold text-xs tracking-widest" aria-label="Cart">
            BAG [0]
          </button>
        </div>
      </div>
    </header>
  );
}

// HERO COMPONENT
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-zinc-950">
      {/* Background Image (Moody Streetwear Focus) */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542385151-efd9000785a0?q=80&w=2000&auto=format&fit=crop')" }} 
      />
      
      {/* Gradient Overlay for bottom blend-in */}
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-black/30 w-full h-full" />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 mt-20">
        <motion.h1 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-8xl lg:text-[10rem] font-black uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-zinc-50 to-zinc-600 mb-8 max-w-6xl leading-[0.85]"
        >
          Define the culture
        </motion.h1>
        
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="group bg-cyan-500 text-zinc-950 px-10 py-5 font-black text-lg tracking-[0.15em] uppercase flex items-center gap-4 hover:bg-cyan-400 transition-all shadow-[0_0_40px_-10px_rgba(6,182,212,0.6)]"
        >
          Shop the Drop
          <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
        </motion.button>
      </div>
    </section>
  );
}

// PRODUCT CARD COMPONENT
function ProductCard({ product }: { product: typeof PRODUCTS[0] }) {
  const [activeColorIdx, setActiveColorIdx] = useState(0);
  const activeColor = product.colors[activeColorIdx];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex flex-col group bg-zinc-900 border border-zinc-800 hover:border-zinc-700 transition-colors cursor-pointer"
    >
      {/* Dynamic Image Area */}
      <div className="relative aspect-[4/5] bg-zinc-800 overflow-hidden">
        {/* Placeholder Color controlled by user state */}
        <div 
          className="absolute inset-0 transition-colors duration-700 ease-in-out"
          style={{ backgroundColor: activeColor.hexCode }}
        />
        {/* Aesthetic Gradients to simulate volume / texture */}
        <div className="absolute inset-0 bg-gradient-to-tr from-black/50 via-transparent to-white/10 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 to-transparent" />
        
        <div className="absolute top-4 left-4">
        </div>
      </div>

      {/* Details */}
      <div className="p-6 flex flex-col gap-6">
        <div className="flex justify-between items-start gap-4">
          <h3 className="font-black uppercase tracking-tight text-xl text-zinc-50 leading-none">
            {product.name}
          </h3>
          <span className="font-mono text-zinc-300 font-bold text-xl">
            ${product.basePrice}
          </span>
        </div>

        {/* Color Swatch State Switcher */}
        <div className="flex items-center gap-3">
          {product.colors.map((color, idx) => {
            const isActive = idx === activeColorIdx;
            return (
              <button
                key={color.name}
                onClick={(e) => {
                  e.stopPropagation(); // prevent product card click
                  setActiveColorIdx(idx);
                }}
                className="relative flex items-center justify-center w-7 h-7 rounded-full focus:outline-none"
                aria-label={`Select ${color.name}`}
                title={color.name}
              >
                {/* Core Color Dot */}
                <span 
                  className="w-full h-full rounded-full shadow-inner transition-transform duration-300 pointer-events-none"
                  style={{ 
                    backgroundColor: color.hexCode,
                    transform: isActive ? 'scale(0.6)' : 'scale(1)'
                  }} 
                />
                
                {/* Active Layout Animation Ring */}
                <AnimatePresence>
                  {isActive && (
                    <motion.span 
                      layoutId={`ring-${product.id}`}
                      className="absolute inset-0 rounded-full border-2 border-zinc-50 pointer-events-none"
                      initial={false}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    />
                  )}
                </AnimatePresence>
              </button>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}

// MAIN PAGE DEFINITION
export default function KillerFashionHome() {
  return (
    <main className="min-h-screen relative selection:bg-cyan-500/30">
      <Navbar />
      <HeroSection />

      {/* Product Bento Grid */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="mb-12 flex items-end justify-between border-b border-zinc-800 pb-6">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-zinc-50">
            Latest Arsenal
          </h2>
          <a href="#" className="hidden md:flex text-cyan-500 font-bold tracking-widest uppercase text-xs hover:text-cyan-400 items-center gap-2 transition-colors">
            View All <ArrowRight className="w-4 h-4" />
          </a>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
          {PRODUCTS.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-900 bg-zinc-950 pt-24 pb-12 mt-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-20">
          
          <div className="md:col-span-4">
            <div className="text-4xl font-black tracking-tighter text-zinc-50 mb-6">
              KILLER
            </div>
            <p className="text-zinc-500 font-medium max-w-sm text-sm leading-relaxed">
              Curating the modern aesthetic. Pure utility. Zero compromise.
            </p>
          </div>
          
          <div className="md:col-span-4 flex justify-between md:justify-around">
            <div className="flex flex-col gap-4">
              <h4 className="font-black tracking-[0.2em] text-zinc-50 uppercase text-xs mb-3">Support</h4>
              <a href="#" className="text-zinc-400 hover:text-cyan-400 text-sm font-medium transition-colors">FAQ</a>
              <a href="#" className="text-zinc-400 hover:text-cyan-400 text-sm font-medium transition-colors">Shipping & Returns</a>
              <a href="#" className="text-zinc-400 hover:text-cyan-400 text-sm font-medium transition-colors">Contact Us</a>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="font-black tracking-[0.2em] text-zinc-50 uppercase text-xs mb-3">Legal</h4>
              <a href="#" className="text-zinc-400 hover:text-cyan-400 text-sm font-medium transition-colors">Privacy Policy</a>
              <a href="#" className="text-zinc-400 hover:text-cyan-400 text-sm font-medium transition-colors">Terms of Service</a>
            </div>
          </div>

          <div className="md:col-span-4">
            <h4 className="font-black tracking-[0.2em] text-zinc-50 uppercase text-xs mb-6">Join the Ranks</h4>
            <form className="flex flex-col sm:flex-row gap-0 group" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="YOUR EMAIL" 
                className="w-full bg-zinc-900 border border-zinc-800 text-zinc-50 font-mono px-5 py-4 text-sm placeholder:text-zinc-600 focus:outline-none focus:border-cyan-500 focus:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all rounded-none"
                required
              />
              <button className="bg-zinc-50 text-zinc-950 font-black uppercase tracking-widest px-8 py-4 text-sm hover:bg-zinc-300 transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 border-t border-zinc-900 pt-8 flex flex-col md:flex-row items-center justify-between text-zinc-600 font-mono text-[10px] tracking-widest uppercase gap-4">
          <p>© {new Date().getFullYear()} KILLER FASHION. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-cyan-400 transition-colors">Instagram</a>
            <a href="#" className="hover:text-cyan-400 transition-colors">X / Twitter</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
