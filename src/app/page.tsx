// src/app/page.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

const categories = [
  { id: "all", label: "All Collection" },
  { id: "tableware", label: "Tableware" },
  { id: "kitchenware", label: "Kitchenware" },
];

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState("all");

  // Saring dulu dari seluruh data produk asli scraftproduct.com
  const filteredProducts = products.filter((product) => {
    if (activeCategory === "all") return true;
    return product.category === activeCategory;
  });

  // Setelah disaring, baru batasi maksimal 4 produk untuk kerapian grid halaman depan
  const displayedProducts = filteredProducts.slice(0, 4);

  return (
    <main className="min-h-screen bg-stone-50 text-stone-900 selection:bg-amber-900/10">
      {/* 1. HERO SECTION */}
      <section
        className="relative w-full min-h-[90vh] flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/bg1.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950/10 via-transparent to-stone-50 z-0" />

        <div className="relative z-10 max-w-5xl mx-auto pt-28 pb-16 flex flex-col items-center justify-center">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-amber-800 mb-5 bg-stone-100/90 backdrop-blur-md px-4 py-1.5 rounded-full border border-amber-900/10 shadow-sm"
          >
            Exquisite Craftsmanship from Jepara
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight max-w-3xl leading-[1.1] bg-gradient-to-r from-stone-950 via-stone-900 to-amber-700 bg-clip-text text-transparent drop-shadow-[0_2px_15px_rgba(255,255,255,0.5)]"
          >
            Premium Wooden Tableware & Kitchen Utilities
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-xs sm:text-sm text-stone-700/90 max-w-lg leading-relaxed font-medium tracking-wide drop-shadow-[0_1px_8px_rgba(255,255,255,0.6)]"
          >
            Eksplorasi keindahan alami serat kayu jati dan mahoni pilihan.
            Dirancang dengan pendekatan modern minimalis untuk menghadirkan
            kemewahan organik di meja makan Anda.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-wrap gap-4 justify-center"
          >
            <Link
              href="/products"
              className="px-6 py-3 text-xs font-bold uppercase tracking-widest text-stone-100 bg-amber-800 hover:bg-amber-900 rounded-full transition-all duration-300 shadow-md shadow-amber-900/20 active:scale-95"
            >
              Explore Collection
            </Link>
            <Link
              href="/about"
              className="px-6 py-3 text-xs font-bold uppercase tracking-widest text-stone-800 bg-stone-100/90 hover:bg-stone-200 border border-stone-300/80 backdrop-blur-sm rounded-full transition-all duration-300 shadow-sm active:scale-95"
            >
              Our Story
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 2. FEATURED PRODUCTS SECTION */}
      <section className="max-w-7xl mx-auto pb-32 px-4 sm:px-6 lg:px-8 bg-stone-50">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-amber-800 block mb-2">
              Selected Pieces
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-wide bg-gradient-to-r from-stone-950 to-stone-700 bg-clip-text text-transparent">
              Featured Collections
            </h2>
          </div>
        </div>

        {/* TOMBOL FILTER KATEGORI (BERSIH TANPA GLITCH BORDER) */}
        <div className="flex flex-wrap gap-2 mb-10 pb-4">
          {categories.map((cat) => {
            const isSelected = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`relative isolate px-4 py-2 text-[10px] font-extrabold uppercase tracking-widest rounded-full transition-colors duration-300 cursor-pointer ${
                  isSelected
                    ? "text-white"
                    : "text-stone-500 hover:text-stone-900 bg-stone-200/40"
                }`}
              >
                {/* Kendali penuh warna latar belakang aktif diserahkan ke komponen animasi */}
                {isSelected && (
                  <motion.div
                    layoutId="active-cat-bg"
                    className="absolute inset-0 bg-amber-800 rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* GRID KARTU PRODUK */}
        <motion.div
          layout
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {displayedProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>
    </main>
  );
}
