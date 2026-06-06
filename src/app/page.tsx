// src/app/page.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

const categories = [
  { id: "all", label: "All Collection" },
  { id: "tableware", label: "Tableware" },
  { id: "kitchenware", label: "Kitchenware" },
];

const advantages = [
  {
    num: "01",
    title: "Certified Solid Wood",
    desc: "Kami hanya menggunakan kayu jati dan mahoni pilihan berkualitas tinggi yang dikelola secara legal dan bertanggung jawab.",
  },
  {
    num: "02",
    title: "Artisanal Jepara Hands",
    desc: "Setiap produk dibentuk secara manual dengan ketelitian tinggi oleh pengrajin lokal berbakat dari tanah ukir legendaris.",
  },
  {
    num: "03",
    title: "100% Food-Safe Finish",
    desc: "Lapisan pengaman menggunakan natural beeswax dan bio-oil pilihan. Menjamin perlindungan total yang aman bagi kesehatan.",
  },
];

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const filteredProducts = products.filter((product) => {
    if (activeCategory === "all") return true;
    return product.category === activeCategory;
  });

  const displayedProducts = filteredProducts.slice(0, 8);

  return (
    <main className="min-h-screen bg-stone-50 text-stone-900 selection:bg-amber-900/10">
      {/* 1. HERO SECTION */}
      <section
        className="relative w-full min-h-[90vh] flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/bg1.jpg')" }}
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
      <section className="max-w-7xl mx-auto pb-24 px-4 sm:px-6 lg:px-8 bg-stone-50">
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

        {/* TOMBOL FILTER KATEGORI */}
        {/* BARIS FILTER KATEGORI BARU */}
        <div className="flex flex-wrap gap-2 mb-10 pb-4 border-b border-stone-200/40">
          {[
            { id: "all", label: "All Collection" },
            { id: "bathfloor", label: "Bathfloor" },
            { id: "bathroom", label: "Bathroom" },
            { id: "coaster", label: "Coaster" },
            { id: "cutting board", label: "Cutting Board" },
            { id: "keset", label: "Keset" },
            { id: "plate", label: "Plate" },
            { id: "tray", label: "Tray" },
            { id: "wall decor", label: "Wall Decor" },
          ].map((cat) => {
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
      {/* 4. BRAND STORY FOCUS & VIDEO CANVAS SPOTLIGHT (VERSI EMBED LANGSUNG) */}
      <section className="max-w-7xl mx-auto py-28 px-4 sm:px-6 lg:px-8 bg-stone-50">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-800 block">
              Behind The Craft
            </span>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-stone-950 leading-tight">
              Dibuat Lambat,
              <br />
              Dinikmati Selamanya.
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 font-medium leading-relaxed">
              Kami menolak proses produksi massal yang terburu-buru. Setiap
              perkakas kayu The Scraft dikerjakan secara individual guna
              menonjolkan alur serat natural yang eksotis serta ketahanan
              mekanis optimal untuk penggunaan harian.
            </p>
            <div className="pt-2">
              <Link
                href="/about"
                className="text-xs font-extrabold uppercase tracking-widest text-stone-950 hover:text-amber-800 transition-colors duration-300 flex items-center gap-1.5"
              >
                Read Full Philosophy <span>→</span>
              </Link>
            </div>
          </div>

          {/* Frame Video Langsung Muncul Tanpa Pop-up */}
          <div className="lg:col-span-7 aspect-[16/9] w-full overflow-hidden rounded-3xl bg-black shadow-md border border-stone-200/50">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/NvSPTleUyzc"
              title="The Scraft Cinematic Workshop"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </section>
      {/* 5. MASSIVE SHOWCASE GALLERY (BENTO GRID - LIGHT THEME) */}
      <section className="bg-stone-50 py-24 px-4 sm:px-6 lg:px-8 border-t border-stone-200/60">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[9px] font-extrabold uppercase tracking-[0.3em] text-amber-800 block mb-3">
              Our Masterpieces
            </span>
            <h2 className="text-2xl sm:text-3xl font-black tracking-wide text-stone-950">
              Jepara's Finest Collection
            </h2>
          </div>

          {/* Bento Grid Layout - Dikunci auto-rows biar presisi dan rata */}
          <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[160px] md:auto-rows-[220px] gap-4 sm:gap-6 grid-flow-row-dense">
            {/* Foto 1 (Besar Kiri Atas) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group col-span-2 row-span-2 cursor-pointer h-full w-full"
            >
              <div className="w-full h-full bg-stone-200/50 border border-stone-200/80 rounded-xl overflow-hidden relative flex items-center justify-center shadow-sm transition-all duration-500 group-hover:scale-[1.02] group-hover:border-amber-900/20 group-hover:shadow-md">
                <div className="absolute inset-0 bg-gradient-to-t from-stone-200/40 via-transparent to-transparent opacity-50 z-10" />

                {/* TAG GAMBAR ASLI KAMU */}
                <img
                  src="/homeproduct/homeproduct4.jpg" // <-- Ganti dengan nama file foto asli kamu di folder public/homeproduct/
                  alt="Premium Console Table"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </motion.div>

            {/* Foto 2 (Tinggi Menengah) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group col-span-1 row-span-2 cursor-pointer h-full w-full"
            >
              <div className="w-full h-full bg-stone-200/50 border border-stone-200/80 rounded-xl overflow-hidden relative flex items-center justify-center shadow-sm transition-all duration-500 group-hover:scale-[1.02] group-hover:border-amber-900/20 group-hover:shadow-md">
                <div className="absolute inset-0 bg-gradient-to-t from-stone-200/80 via-transparent to-transparent opacity-50 z-10" />
                <img
                  src="/homeproduct/homeproduct2.jpg" // <-- Ganti dengan nama file foto asli kamu di folder public/homeproduct/
                  alt="Premium Console Table"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </motion.div>

            {/* Foto 3 (Kecil Kanan Atas) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="group col-span-1 row-span-1 cursor-pointer h-full w-full"
            >
              <div className="w-full h-full bg-stone-200/50 border border-stone-200/80 rounded-xl overflow-hidden relative flex items-center justify-center shadow-sm transition-all duration-500 group-hover:scale-[1.02] group-hover:border-amber-900/20 group-hover:shadow-md">
                <div className="absolute inset-0 bg-gradient-to-t from-stone-200/80 via-transparent to-transparent opacity-50 z-10" />
                <img
                  src="/homeproduct/homeproduct6.jpg" // <-- Ganti dengan nama file foto asli kamu di folder public/homeproduct/
                  alt="Premium Console Table"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </motion.div>

            {/* Foto 4 (Kecil Kanan Bawahnya) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="group col-span-1 row-span-1 cursor-pointer h-full w-full"
            >
              <div className="w-full h-full bg-stone-200/50 border border-stone-200/80 rounded-xl overflow-hidden relative flex items-center justify-center shadow-sm transition-all duration-500 group-hover:scale-[1.02] group-hover:border-amber-900/20 group-hover:shadow-md">
                <div className="absolute inset-0 bg-gradient-to-t from-stone-200/80 via-transparent to-transparent opacity-50 z-10" />
                <img
                  src="/homeproduct/homeproduct7.jpg" // <-- Ganti dengan nama file foto asli kamu di folder public/homeproduct/
                  alt="Premium Console Table"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </motion.div>

            {/* Foto 5 (Tinggi Kiri Bawah) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="group col-span-1 row-span-2 cursor-pointer h-full w-full"
            >
              <div className="w-full h-full bg-stone-200/50 border border-stone-200/80 rounded-xl overflow-hidden relative flex items-center justify-center shadow-sm transition-all duration-500 group-hover:scale-[1.02] group-hover:border-amber-900/20 group-hover:shadow-md">
                <div className="absolute inset-0 bg-gradient-to-t from-stone-200/80 via-transparent to-transparent opacity-50 z-10" />
                <img
                  src="/homeproduct/homeproduct8.jpg" // <-- Ganti dengan nama file foto asli kamu di folder public/homeproduct/
                  alt="Premium Console Table"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </motion.div>

            {/* Foto 6 (Lebar Tengah Bawah) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="group col-span-1 md:col-span-2 row-span-1 cursor-pointer h-full w-full"
            >
              <div className="w-full h-full bg-stone-200/50 border border-stone-200/80 rounded-xl overflow-hidden relative flex items-center justify-center shadow-sm transition-all duration-500 group-hover:scale-[1.02] group-hover:border-amber-900/20 group-hover:shadow-md">
                <div className="absolute inset-0 bg-gradient-to-t from-stone-200/80 via-transparent to-transparent opacity-50 z-10" />
                <img
                  src="/homeproduct/homeproduct9.jpg" // <-- Ganti dengan nama file foto asli kamu di folder public/homeproduct/
                  alt="Premium Console Table"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </motion.div>

            {/* Foto 7 (Tinggi Kanan Bawah) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="group col-span-1 row-span-2 cursor-pointer h-full w-full"
            >
              <div className="w-full h-full bg-stone-200/50 border border-stone-200/80 rounded-xl overflow-hidden relative flex items-center justify-center shadow-sm transition-all duration-500 group-hover:scale-[1.02] group-hover:border-amber-900/20 group-hover:shadow-md">
                <div className="absolute inset-0 bg-gradient-to-t from-stone-200/80 via-transparent to-transparent opacity-50 z-10" />
                <img
                  src="/homeproduct/homeproduct11.jpg" // <-- Ganti dengan nama file foto asli kamu di folder public/homeproduct/
                  alt="Premium Console Table"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </motion.div>

            {/* Foto 8 (Lebar Paling Bawah) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="group col-span-2 row-span-1 cursor-pointer h-full w-full"
            >
              <div className="w-full h-full bg-stone-200/50 border border-stone-200/80 rounded-xl overflow-hidden relative flex items-center justify-center shadow-sm transition-all duration-500 group-hover:scale-[1.02] group-hover:border-amber-900/20 group-hover:shadow-md">
                <div className="absolute inset-0 bg-gradient-to-t from-stone-200/80 via-transparent to-transparent opacity-50 z-10" />
                <img
                  src="/homeproduct/homeproduct12.jpg" // <-- Ganti dengan nama file foto asli kamu di folder public/homeproduct/
                  alt="Premium Console Table"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* 3. BRAND VALUE ADVANTAGES SECTION */}
      {/* 6. FINAL CALL TO ACTION: B2B & CUSTOM PROJECT INVITATION */}
      <section className="bg-stone-50 py-20 px-4 sm:px-6 lg:px-8 border-t border-stone-200/60">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full bg-stone-900 rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-8 shadow-xl"
          >
            {/* Aksen Kilau Tekstur Kayu Madu di Dalam Kotak Gelap */}
            <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-amber-800/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -top-24 -left-24 w-72 h-72 bg-stone-800/30 rounded-full blur-3xl pointer-events-none" />

            {/* Bagian Kiri: Teks Ajakan */}
            <div className="relative z-10 max-w-xl space-y-3">
              <span className="text-[9px] font-extrabold uppercase tracking-[0.25em] text-amber-500 block">
                Wholesale & Custom Projects
              </span>
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-stone-100 leading-tight">
                Miliki Perkakas Kayu Eksklusif
                <br />
                untuk Bisnis Anda.
              </h3>
              <p className="text-xs sm:text-sm text-stone-400 font-medium leading-relaxed">
                Kami melayani pembuatan skala grosir dengan spesifikasi kustom
                untuk kebutuhan interior hotel, peralatan kafe modern, maupun
                komoditas ekspor. Diskusi desain dan pemilihan jenis kayu gratis
                bersama tim pengrajin kami.
              </p>
            </div>

            {/* Bagian Kanan: Tombol Aksi */}
            <div className="relative z-10 flex flex-col sm:flex-row gap-4 w-full md:w-auto shrink-0">
              <Link
                href="/contact"
                className="px-6 py-3.5 text-center text-[10px] font-extrabold uppercase tracking-widest text-stone-950 bg-stone-100 hover:bg-amber-600 hover:text-white rounded-xl transition-all duration-300 shadow-md active:scale-95"
              >
                Start Project ↗
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      {/* 6. MODAL POP-UP WINDOWS VIDEO YOUTUBE */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsVideoOpen(false)}
            className="fixed inset-0 bg-stone-950/90 backdrop-blur-md z-50 flex items-center justify-center p-4 sm:p-6 md:p-10"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ type: "spring", duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl aspect-video rounded-2xl overflow-hidden border border-stone-800 shadow-2xl bg-black"
            >
              <button
                onClick={() => setIsVideoOpen(false)}
                className="absolute -top-10 right-0 text-stone-400 hover:text-white text-xs font-bold uppercase tracking-widest flex items-center gap-1 cursor-pointer transition-colors"
              >
                Close ✕
              </button>

              {/* Catatan: Ganti ID_VIDEO_YOUTUBE di bawah dengan id unik video aslimu */}
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/NvSPTleUyzc?autoplay=1"
                title="The Scraft Cinematic Workshop"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
