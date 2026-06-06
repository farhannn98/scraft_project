// src/app/products/page.tsx
"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { products } from "../../data/products";
import ProductCard from "../../components/ProductCard";
import { useLanguage } from "@/context/LanguageContext"; // FIX: Impor bahasa global

export default function ProductsPage() {
  const { language } = useLanguage(); // FIX: Ambil status bahasa aktif
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Kategori Dinamis
  const categories = [
    {
      id: "all",
      label: language === "en" ? "All Collection" : "Semua Koleksi",
    },
    {
      id: "bathfloor",
      label: language === "en" ? "Bathfloor" : "Alas Lantai Kamar Mandi",
    },
    {
      id: "bathroom",
      label: language === "en" ? "Bathroom Amenities" : "Perkakas Kamar Mandi",
    },
    {
      id: "coaster",
      label: language === "en" ? "Coaster" : "Tatakan Gelas",
    },
    {
      id: "cutting board",
      label: language === "en" ? "Cutting Board" : "Talenan",
    },
    {
      id: "mat",
      label: language === "en" ? "Mat" : "Keset",
    },
    {
      id: "plate",
      label: language === "en" ? "Plate" : "Piring",
    },
    {
      id: "tray",
      label: language === "en" ? "Tray" : "Nampan Saji",
    },
    {
      id: "wall decor",
      label: language === "en" ? "Wall Decor" : "Hiasan Dinding",
    },
  ];

  // Filter produk berdasarkan kategori dan teks pencarian dinamis
  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      activeCategory === "all" || product.category === activeCategory;
    console.log(
      "Tombol Aktif:",
      activeCategory,
      "Kategori Produk:",
      product.category,
    );

    // FIX: Ubah pencarian agar membaca properti objek bahasa baru kamu [language]
    const matchesSearch =
      product.name[language]
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      product.material.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-stone-50 text-stone-900 pt-12 pb-32 px-4 sm:px-6 lg:px-8 selection:bg-amber-900/10">
      <div className="max-w-7xl mx-auto">
        {/* HEADER HALAMAN */}
        <div className="text-center pt-16 max-w-2xl mx-auto mb-16">
          <span className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-amber-800 block mb-3">
            The Scraft Registry
          </span>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-stone-950 mb-4">
            {language === "en"
              ? "Our Complete Collection"
              : "Koleksi Lengkap Kami"}
          </h1>
          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-medium">
            {language === "en"
              ? "Explore the entire masterpiece collection of Jepara craftsmen. Each product is manually crafted with high precision to ensure perfect export quality."
              : "Jelajahi seluruh hasil karya terbaik pengrajin Jepara. Setiap produk dibuat secara manual dengan ketelitian tinggi untuk memastikan kualitas ekspor yang sempurna."}
          </p>
        </div>

        {/* BARIS PENCARIAN & FILTER */}
        <div className="flex flex-col gap-6 mb-12 pb-6 border-b border-stone-200/40">
          {/* Kelompok Filter Tombol Kategori */}
          <div className="flex flex-wrap gap-2">
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
                  {isSelected && (
                    <motion.div
                      layoutId="catalog-cat-bg"
                      className="absolute inset-0 bg-amber-800 rounded-full -z-10"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>

          {/* Kotak Pencarian Modern */}
          <div className="w-full md:w-72 self-end">
            <input
              type="text"
              placeholder={
                language === "en" ? "Search products..." : "Cari produk..."
              }
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 text-xs font-medium bg-stone-200/40 border border-stone-200/60 rounded-full focus:outline-none focus:border-amber-800/40 focus:bg-stone-100 transition-all duration-300 placeholder-stone-400"
            />
          </div>
        </div>

        {/* GRID UTAMA KATALOG */}
        {filteredProducts.length > 0 ? (
          <motion.div
            layout
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product) => (
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
        ) : (
          <div className="text-center py-20">
            <p className="text-sm font-semibold text-stone-400 italic">
              {language === "en"
                ? "No products found matching your criteria."
                : "Produk tidak ditemukan sesuai kriteria Anda."}
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
