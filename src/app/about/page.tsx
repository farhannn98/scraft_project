// src/app/about/page.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="relative min-h-screen bg-stone-50 text-stone-900 pt-24 pb-32 px-4 sm:px-6 lg:px-8 selection:bg-amber-900/10 overflow-hidden">
      {/* Elemen Dekoratif Seni - Angka Tahun Samar di Background agar Tidak Polos */}
      <div className="absolute top-[10%] left-4 text-[12rem] sm:text-[18rem] font-black text-stone-200/30 select-none pointer-events-none tracking-tighter leading-none z-0">
        EST.
      </div>

      {/* Efek Ornamen Glow Mewah di Latar Belakang */}
      <div className="absolute top-[15%] -right-40 w-[30rem] h-[30rem] bg-amber-900/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-[25%] -left-40 w-[30rem] h-[30rem] bg-stone-200/80 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* 1. HEADER SECTION */}
        <div className="max-w-3xl mb-24 relative pl-6 border-l-2 border-amber-800">
          <span className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-amber-800 block mb-3">
            Honoring The Roots
          </span>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-stone-950 leading-none">
            Our Story &<br />
            Philosophy
          </h1>
        </div>

        {/* 2. LAYOUT GRID ASIMETRIS BERLAPIS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-32">
          {/* SISI KIRI: Narasi Cerita dan Pernyataan Filosofi (7 Kolom) */}
          <div className="lg:col-span-7 space-y-16">
            {/* Sorotan Utama / Kutipan Besar */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <span className="text-4xl sm:text-5xl font-serif text-amber-800/20 absolute -top-6 -left-4 select-none">
                “
              </span>
              <p className="text-stone-950 font-bold text-lg sm:text-xl leading-relaxed tracking-wide relative z-10 pl-4">
                Lahir dari tanah legendaris ukir kayu, Scraft Product membawa
                dedikasi pengrajin lokal Jepara ke level yang lebih modern. Kami
                percaya bahwa setiap potong kayu memiliki jiwa dan cerita
                uniknya sendiri.
              </p>
            </motion.div>

            {/* Detail Cerita Konseptual */}
            <div className="space-y-12 text-sm text-stone-600 leading-relaxed font-medium pl-4">
              <motion.section
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="space-y-3"
              >
                <h2 className="text-xs font-extrabold uppercase tracking-widest text-amber-800">
                  01 / The Heritage
                </h2>
                <p className="text-xs sm:text-sm">
                  Setiap guratan serat pada produk kami mencerminkan keahlian
                  turun-temurun yang diwariskan dari generasi ke generasi di
                  Jepara. Kami mengawinkan seni pahat tradisional tersebut
                  dengan estetika fungsional abad modern.
                </p>
              </motion.section>

              <div className="w-full h-[1px] bg-stone-200/80" />

              <motion.section
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="space-y-3"
              >
                <h2 className="text-xs font-extrabold uppercase tracking-widest text-amber-800">
                  02 / Sustainability
                </h2>
                <p className="text-xs sm:text-sm">
                  Kami sangat menjaga kelestarian alam. Seluruh bahan baku utama
                  kami diambil dari kayu jati dan mahoni pilihan yang dikelola
                  secara legal dan bertanggung jawab melalui sertifikasi resmi.
                  Sisa potongan produksi diolah kembali secara kreatif menjadi
                  produk utilitas kecil yang fungsional demi meminimalkan
                  limbah.
                </p>
              </motion.section>

              <div className="w-full h-[1px] bg-stone-200/80" />

              <motion.section
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="space-y-3"
              >
                <h2 className="text-xs font-extrabold uppercase tracking-widest text-amber-800">
                  03 / Food-Grade Craftsmanship
                </h2>
                <p className="text-xs sm:text-sm">
                  Setiap produk *tableware* dan alat dapur kami melewati proses
                  pengerjaan manual yang presisi. Tahap akhir *finishing*
                  menggunakan bahan alami pilihan (seperti *beeswax* dan minyak
                  nabati) yang menjamin keamanan 100% saat bersentuhan langsung
                  dengan makanan Anda.
                </p>
              </motion.section>
            </div>
          </div>

          {/* SISI KANAN: Susunan Bingkai Foto Berlapis / Overlapping Collage (5 Kolom) */}
          <div className="lg:col-span-5 w-full relative pt-8 lg:pt-0 min-h-[500px] sm:min-h-[600px]">
            {/* Foto Utama (Bingkai Besar di Belakang) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-[3/4] w-[85%] overflow-hidden rounded-3xl bg-stone-200/60 border border-stone-200/80 p-6 flex flex-col justify-between shadow-md z-10 group"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/20 via-transparent to-transparent z-10" />
              <div className="absolute inset-0 flex items-center justify-center text-stone-400 font-medium text-xs italic bg-stone-200/30 group-hover:scale-105 transition-transform duration-700">
                [ Photo Placeholder: Teak Serving Board ]
              </div>
              <span className="relative z-20 text-[8px] font-extrabold uppercase tracking-widest text-amber-800 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full self-start shadow-sm border border-stone-200/20">
                Teak Collection
              </span>
              <div className="relative z-20 text-white drop-shadow-sm">
                <p className="text-[9px] font-bold uppercase tracking-wider opacity-80">
                  Premium Quality
                </p>
                <h3 className="text-xs font-bold tracking-wide">
                  Solid Teak Wood Tray
                </h3>
              </div>
            </motion.div>

            {/* Foto Kedua (Bingkai Kecil Berlapis di Depan Kanan Bawah) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="absolute bottom-0 right-0 w-[55%] aspect-square overflow-hidden rounded-2xl bg-stone-100 backdrop-blur-md border border-stone-300/80 p-4 flex flex-col justify-end shadow-xl z-20 group"
            >
              <div className="absolute inset-0 flex items-center justify-center text-stone-400 font-medium text-[10px] italic bg-stone-200/50 group-hover:scale-105 transition-transform duration-700">
                [ Photo Placeholder: Detail Texture ]
              </div>
              <div className="relative z-20">
                <span className="text-[7px] font-extrabold uppercase tracking-widest text-stone-100 bg-stone-950 px-2 py-0.5 rounded shadow-sm">
                  Close Up
                </span>
                <h4 className="text-[10px] font-bold text-stone-900 mt-2 tracking-wide">
                  Natural Exotic Fiber
                </h4>
              </div>
            </motion.div>
          </div>
        </div>

        {/* 3. FOOTER CALL TO ACTION */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="p-10 bg-stone-950 border border-stone-800 rounded-3xl text-center relative overflow-hidden shadow-lg"
        >
          {/* Aksen Kilau Mewah di Dalam Kotak Gelap */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-amber-800/10 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 max-w-xl mx-auto">
            <h3 className="text-base font-bold text-stone-100 mb-2 tracking-wide">
              Tertarik Bekerjasama atau Custom Order?
            </h3>
            <p className="text-xs text-stone-400 mb-8 font-medium leading-relaxed">
              Kami melayani pesanan skala grosir untuk pemenuhan dekorasi
              interior hotel, kebutuhan peralatan kafe modern, maupun komoditas
              ekspor.
            </p>
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3.5 text-[10px] font-extrabold uppercase tracking-widest text-stone-950 bg-stone-100 hover:bg-amber-700 hover:text-white rounded-xl transition-all duration-300 shadow-md active:scale-95 cursor-pointer"
            >
              Contact Our Team
            </a>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
