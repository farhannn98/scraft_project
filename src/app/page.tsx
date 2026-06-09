// src/app/page.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { useLanguage } from "@/context/LanguageContext"; // FIX: Impor deteksi bahasa global

export default function HomePage() {
  const { language } = useLanguage(); // FIX: Ambil status bahasa aktif
  const [activeCategory, setActiveCategory] = useState("all");

  // Kategori Dinamis
  const categories = [
    {
      id: "all",
      label: language === "en" ? "All Collection" : "Semua Koleksi",
    },
    {
      id: "bathfloor",
      label: language === "en" ? "Bathfloor" : "Alas Lantai",
    },
    {
      id: "bathroom",
      label: language === "en" ? "Bathroom" : "Perkakas Mandi",
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
    {
      id: "end-grain-cutting-board",
      label: language === "en" ? "End Grain" : "Talenan End Grain",
    },
  ];

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
            {language === "en"
              ? "Exquisite Craftsmanship from Jepara"
              : "Karya Seni Kerajinan Tangan Eksklusif Jepara"}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight max-w-3xl leading-[1.1] bg-gradient-to-r from-stone-950 via-stone-900 to-amber-700 bg-clip-text text-transparent drop-shadow-[0_2px_15px_rgba(255,255,255,0.5)]"
          >
            {language === "en"
              ? "Premium Wooden Tableware & Kitchen Utilities"
              : "Peralatan Makan & Perkakas Dapur Kayu Premium"}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-xs sm:text-sm text-stone-700/90 max-w-lg leading-relaxed font-medium tracking-wide drop-shadow-[0_1px_8px_rgba(255,255,255,0.6)]"
          >
            {language === "en"
              ? "Exploration of the natural beauty of selected teak and mahogany wood grain. Designed with a modern minimalist approach to bring organic luxury to your dining table."
              : "Eksplorasi keindahan alami serat kayu jati dan mahoni pilihan. Dirancang dengan pendekatan modern minimalis untuk menghadirkan kemewahan organik di meja makan Anda."}
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
              {language === "en" ? "Explore Collection" : "Jelajahi Koleksi"}
            </Link>
            <Link
              href="/about"
              className="px-6 py-3 text-xs font-bold uppercase tracking-widest text-stone-800 bg-stone-100/90 hover:bg-stone-200 border border-stone-300/80 backdrop-blur-sm rounded-full transition-all duration-300 shadow-sm active:scale-95"
            >
              {language === "en" ? "Our Story" : "Cerita Kami"}
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 2. FEATURED PRODUCTS SECTION */}
      <section className="max-w-7xl mx-auto pb-16 px-4 sm:px-6 lg:px-8 bg-stone-50">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-amber-800 block mb-2">
              Selected Pieces
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-wide bg-gradient-to-r from-stone-950 to-stone-700 bg-clip-text text-transparent">
              {language === "en" ? "Featured Collections" : "Koleksi Unggulan"}
            </h2>
          </div>
        </div>

        {/* BARIS FILTER KATEGORI */}
        <div className="flex flex-wrap gap-2 mb-10 pb-4 border-b border-stone-200/40">
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

      {/* 3. BRAND STORY FOCUS */}
      <section className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 bg-stone-50">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-800 block">
              Behind The Craft
            </span>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-stone-950 leading-tight">
              {language === "en" ? (
                <>
                  Meticulously Crafted
                  <br />
                  Lasted For A Long Time
                </>
              ) : (
                <>
                  Dibuat dengan Ketelitian dan ,
                  <br />
                  Daya Tahan yang Prima
                </>
              )}
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 font-medium leading-relaxed">
              {language === "en"
                ? "We reject rushed mass production lines. Each The Scraft wooden utility is crafted individually to highlight the exotic natural grain and ensure optimal mechanical durability for daily use."
                : "Kami menolak proses produksi massal yang terburu-buru. Setiap perkakas kayu The Scraft dikerjakan secara individual guna menonjolkan alur serat natural yang eksotis serta ketahanan mekanis optimal untuk penggunaan harian."}
            </p>
            <div className="pt-2">
              <Link
                href="/about"
                className="text-xs font-extrabold uppercase tracking-widest text-stone-950 hover:text-amber-800 transition-colors duration-300 flex items-center gap-1.5"
              >
                {language === "en"
                  ? "Read Full Philosophy"
                  : "Baca Filosofi Lengkap"}{" "}
                <span>→</span>
              </Link>
            </div>
          </div>

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

      {/* 4. MASSIVE SHOWCASE GALLERY (BENTO GRID) */}
      <section className="bg-stone-50 py-16 px-4 sm:px-6 lg:px-8 border-t border-stone-200/60">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[9px] font-extrabold uppercase tracking-[0.3em] text-amber-800 block mb-3">
              Our Masterpieces
            </span>
            <h2 className="text-2xl sm:text-3xl font-black tracking-wide text-stone-950">
              {language === "en"
                ? "Jepara's Finest Collection"
                : "Koleksi Terbaik Jepara"}
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[160px] md:auto-rows-[220px] gap-4 sm:gap-6 grid-flow-row-dense">
            {/* Foto 1 */}
            <motion.div className="group col-span-2 row-span-2 h-full w-full">
              <div className="w-full h-full bg-stone-200/50 border border-stone-200/80 rounded-xl overflow-hidden relative flex items-center justify-center shadow-sm transition-all duration-500 group-hover:scale-[1.02] group-hover:border-amber-900/20 shadow-md">
                <img
                  src="/homeproduct/homeproduct4.jpg"
                  alt="Premium Woodcraft"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </motion.div>
            {/* Foto 2 */}
            <motion.div className="group col-span-1 row-span-2 h-full w-full">
              <div className="w-full h-full bg-stone-200/50 border border-stone-200/80 rounded-xl overflow-hidden relative flex items-center justify-center shadow-sm transition-all duration-500 group-hover:scale-[1.02] group-hover:border-amber-900/20 shadow-md">
                <img
                  src="/homeproduct/homeproduct2.jpg"
                  alt="Premium Woodcraft"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </motion.div>
            {/* Foto 3 */}
            <motion.div className="group col-span-1 row-span-1 h-full w-full">
              <div className="w-full h-full bg-stone-200/50 border border-stone-200/80 rounded-xl overflow-hidden relative flex items-center justify-center shadow-sm transition-all duration-500 group-hover:scale-[1.02] group-hover:border-amber-900/20 shadow-md">
                <img
                  src="/homeproduct/homeproduct6.jpg"
                  alt="Premium Woodcraft"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </motion.div>
            {/* Foto 4 */}
            <motion.div className="group col-span-1 row-span-1 h-full w-full">
              <div className="w-full h-full bg-stone-200/50 border border-stone-200/80 rounded-xl overflow-hidden relative flex items-center justify-center shadow-sm transition-all duration-500 group-hover:scale-[1.02] group-hover:border-amber-900/20 shadow-md">
                <img
                  src="/homeproduct/homeproduct7.jpg"
                  alt="Premium Woodcraft"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </motion.div>
            {/* Foto 5 */}
            <motion.div className="group col-span-1 row-span-2 h-full w-full">
              <div className="w-full h-full bg-stone-200/50 border border-stone-200/80 rounded-xl overflow-hidden relative flex items-center justify-center shadow-sm transition-all duration-500 group-hover:scale-[1.02] group-hover:border-amber-900/20 shadow-md">
                <img
                  src="/homeproduct/homeproduct8.jpg"
                  alt="Premium Woodcraft"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </motion.div>
            {/* Foto 6 */}
            <motion.div className="group col-span-1 md:col-span-2 row-span-1 h-full w-full">
              <div className="w-full h-full bg-stone-200/50 border border-stone-200/80 rounded-xl overflow-hidden relative flex items-center justify-center shadow-sm transition-all duration-500 group-hover:scale-[1.02] group-hover:border-amber-900/20 shadow-md">
                <img
                  src="/homeproduct/homeproduct9.jpg"
                  alt="Premium Woodcraft"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </motion.div>
            {/* Foto 7 */}
            <motion.div className="group col-span-1 row-span-2 h-full w-full">
              <div className="w-full h-full bg-stone-200/50 border border-stone-200/80 rounded-xl overflow-hidden relative flex items-center justify-center shadow-sm transition-all duration-500 group-hover:scale-[1.02] group-hover:border-amber-900/20 shadow-md">
                <img
                  src="/homeproduct/homeproduct11.jpg"
                  alt="Premium Woodcraft"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </motion.div>
            {/* Foto 8 */}
            <motion.div className="group col-span-2 row-span-1 h-full w-full">
              <div className="w-full h-full bg-stone-200/50 border border-stone-200/80 rounded-xl overflow-hidden relative flex items-center justify-center shadow-sm transition-all duration-500 group-hover:scale-[1.02] group-hover:border-amber-900/20 shadow-md">
                <img
                  src="/homeproduct/homeproduct12.jpg"
                  alt="Premium Woodcraft"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. FINAL CALL TO ACTION */}
      {/* <section className="bg-stone-50 py-20 px-4 sm:px-6 lg:px-8 border-t border-stone-200/60">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full bg-stone-900 rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden flex flex-col md:flex-row items-start md:items-center justify-between gap-8 shadow-xl"
          >
            <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-amber-800/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -top-24 -left-24 w-72 h-72 bg-stone-800/30 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-xl space-y-3">
              <span className="text-[9px] font-extrabold uppercase tracking-[0.25em] text-amber-500 block">
                Wholesale & Custom Projects
              </span>
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-stone-100 leading-tight">
                {language === "en" ? (
                  <>
                    Own Exclusive Wooden Utilities
                    <br />
                    for Your Business.
                  </>
                ) : (
                  <>
                    Miliki Perkakas Kayu Eksklusif
                    <br />
                    untuk Bisnis Anda.
                  </>
                )}
              </h3>
              <p className="text-xs sm:text-sm text-stone-400 font-medium leading-relaxed">
                {language === "en"
                  ? "We serve wholesale manufacturing with custom specifications for hotel interiors, modern cafe equipment, or export commodities. Free design discussion and wood type selection with our craft team."
                  : "Kami melayani pembuatan skala grosir dengan spesifikasi kustom untuk kebutuhan interior hotel, peralatan kafe modern, maupun komoditas ekspor. Diskusi desain dan pemilihan jenis kayu gratis bersama tim pengrajin kami."}
              </p>
            </div>

            <div className="relative z-10 flex flex-col sm:flex-row gap-4 w-full md:w-auto shrink-0">
              <Link
                href="/contact"
                className="px-6 py-3.5 text-center text-[10px] font-extrabold uppercase tracking-widest text-stone-950 bg-stone-100 hover:bg-amber-600 hover:text-white rounded-xl transition-all duration-300 shadow-md active:scale-95"
              >
                {language === "en" ? "Start Project ↗" : "Mulai Proyek ↗"}
              </Link>
            </div>
          </motion.div>
        </div>
      </section> */}

      {/* 6. MASSIVE INTERACTIVE GOOGLE MAPS SECTION (BENTO WORKSHOP) */}
      <section className="bg-stone-50 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full bg-stone-900 rounded-3xl p-4 sm:p-6 lg:p-8 border border-stone-800 relative overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 shadow-2xl group"
          >
            {/* Sisi Kiri: Informasi Peta Terstruktur */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-8 relative z-10 p-2">
              <div className="space-y-4">
                <span className="text-[9px] font-extrabold uppercase tracking-[0.25em] text-amber-500 block">
                  {language === "en"
                    ? "Global Operations"
                    : "Operasi Bisnis Global"}
                </span>
                <h3 className="text-xl sm:text-2xl font-black tracking-tight text-stone-100 leading-tight">
                  {language === "en" ? (
                    <>
                      Visit Our Office
                      <br />& Production Base.
                    </>
                  ) : (
                    <>
                      Kunjungi Kantor Resmi
                      <br />& Bengkel Produksi Kami.
                    </>
                  )}
                </h3>
                <p className="text-xs text-stone-400 font-medium leading-relaxed">
                  {language === "en"
                    ? "We strictly manage administration in our Semarang main headquarters and run high-standard woodprocessing crafts in our main Jepara workshop site."
                    : "Kami mengelola administrasi secara terpusat di kantor Semarang serta menjalankan proses produksi kerajinan standar tinggi langsung dari workshop kami di Jepara."}
                </p>
              </div>

              {/* Grid Mini Alamat */}
              <div className="space-y-4 border-t border-stone-800/80 pt-6">
                <div className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                  <div className="space-y-0.5">
                    <span className="text-[9px] font-bold uppercase tracking-wider text-stone-500">
                      {language === "en"
                        ? "Main Office (Semarang)"
                        : "Kantor Utama (PT Semarang)"}
                    </span>
                    <p className="text-[11px] font-medium text-stone-300 leading-relaxed">
                      Jl. Depok Dalam III No.9, Pedurungan Tengah, Kota Semarang
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-stone-500 mt-1.5 shrink-0" />
                  <div className="space-y-0.5">
                    <span className="text-[9px] font-bold uppercase tracking-wider text-stone-500">
                      {language === "en"
                        ? "Production Workshop (Jepara)"
                        : "Workshop Produksi (Jepara)"}
                    </span>
                    <p className="text-[11px] font-medium text-stone-400 leading-relaxed">
                      Kepuk Jangglengan Rt 04 Rw 08, Kec. Bangsri, Kab. Jepara
                    </p>
                  </div>
                </div>
              </div>

              {/* Tombol Aksi */}
              <div className="pt-2">
                <a
                  href="https://maps.app.goo.gl/gQkAz4QPoeMVLoDVA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 rounded-xl bg-stone-800 text-stone-200 text-[10px] font-extrabold uppercase tracking-widest hover:bg-amber-600 hover:text-white transition-all duration-300 active:scale-95"
                >
                  {language === "en"
                    ? "Open Google Maps ↗"
                    : "Buka Google Maps ↗"}
                </a>
              </div>
            </div>

            {/* Sisi Kanan: Kontainer Iframe Maps */}
            <div className="lg:col-span-7 h-64 sm:h-80 lg:h-full min-h-[260px] rounded-2xl overflow-hidden border border-stone-800/80 relative z-10 transition-all duration-700">
              <iframe
                src="https://maps.google.com/maps?q=Furniwell%20Indonesia,%20Jl.%20Depok%20Dalam%20III%20No.9,%20Semarang&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Furniwell Indonesia Maps Location"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
