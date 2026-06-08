// src/components/ProductCard.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Product } from "@/types/product";
import { useLanguage } from "@/context/LanguageContext"; // FIX: Impor bahasa global

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { language } = useLanguage(); // FIX: Ambil status bahasa aktif
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // FIX: Kamus lokalisasi data kategori produk agar sinkron dua bahasa
  const categoryMap: Record<string, string> = {
    all: language === "en" ? "All Collection" : "Semua Koleksi",
    bathfloor: language === "en" ? "Bathfloor" : "Alas Lantai",
    bathroom: language === "en" ? "Bathroom" : "Perkakas Mandi",
    coaster: language === "en" ? "Coaster" : "Tatakan Gelas",
    "cutting board": language === "en" ? "Cutting Board" : "Talenan",
    mat: language === "en" ? "Mat" : "Keset",
    plate: language === "en" ? "Plate" : "Piring",
    tray: language === "en" ? "Tray" : "Nampan Saji",
    "wall decor": language === "en" ? "Wall Decor" : "Hiasan Dinding",
    "end-grain-cutting-board":
      language === "en" ? "End Grain" : "Talenan End Grain",
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        whileHover={{ y: -6 }}
        transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
        className="group relative flex flex-col overflow-hidden rounded-2xl bg-stone-100/40 border border-stone-200/80 backdrop-blur-sm transition-all duration-300 hover:border-amber-900/20 hover:bg-stone-100/90 hover:shadow-[0_20px_40px_rgba(139,92,26,0.06)]"
      >
        {/* Container Foto */}
        <div
          onClick={() => setIsLightboxOpen(true)}
          className="relative aspect-square w-full overflow-hidden bg-stone-200/50 cursor-zoom-in"
        >
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-stone-100/30 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <img
            src={product.image}
            alt={product.name[language]} // FIX: Nama dinamis untuk alternatif gambar
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          {/* FIX: Ambil nama kategori terjemahan dari kamus categoryMap */}
          <span className="absolute top-4 left-4 z-20 rounded-full bg-stone-100/90 backdrop-blur-md px-3 py-1 text-[9px] font-extrabold uppercase tracking-widest text-amber-800 border border-stone-200/60 shadow-sm">
            {categoryMap[product.category] || product.category}
          </span>
        </div>

        {/* Detail */}
        <div className="flex flex-1 flex-col p-5 bg-stone-100/20">
          <span className="text-[9px] font-extrabold uppercase tracking-widest text-stone-400 mb-1.5 block">
            {product.dimensions}
          </span>
          {/* FIX: Nama dinamis */}
          <h3 className="text-sm font-bold tracking-wide text-stone-950 group-hover:text-amber-800 transition-colors duration-300 line-clamp-1">
            {product.name[language]}
          </h3>
          {/* FIX: Deskripsi dinamis */}
          <p className="mt-2 text-xs text-stone-600 line-clamp-2 leading-relaxed font-medium">
            {product.description[language]}
          </p>
          <div className="mt-5 pt-4 border-t border-stone-200/60 flex items-center justify-between">
            <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800/70 bg-amber-900/5 px-2 py-0.5 rounded-md border border-amber-900/5">
              {product.finish}
            </span>
            <Link
              href={`/products/${product.slug}`}
              className="text-[10px] font-extrabold uppercase tracking-widest text-stone-950 hover:text-amber-800 flex items-center gap-1.5 transition-colors duration-300"
            >
              {language === "en" ? "Details" : "Detail"}
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>
      </motion.div>

      {/* LIGHTBOX MODAL */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsLightboxOpen(false)}
            className="fixed inset-0 z-50 flex flex-center justify-center bg-stone-950/85 backdrop-blur-md p-4 cursor-zoom-out items-center"
          >
            <button
              onClick={() => setIsLightboxOpen(false)}
              className="absolute top-6 right-6 z-50 p-2 rounded-full bg-stone-900/80 border border-stone-800 text-stone-400 hover:text-white transition-colors duration-200 shadow-xl cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", damping: 28, stiffness: 320 }}
              className="relative max-w-4xl max-h-[92vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={product.image}
                alt={product.name[language]} // FIX: Nama dinamis di dalam modal lightbox
                className="w-full h-auto max-h-[92vh] object-contain rounded-2xl shadow-2xl border border-stone-800/30"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
