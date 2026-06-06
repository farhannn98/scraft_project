// src/app/contact/page.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext"; // FIX: Hubungkan pengatur bahasa global

export default function ContactPage() {
  const { language } = useLanguage(); // FIX: Ambil status bahasa aktif

  // Pesan WhatsApp otomatis dinamis berdasarkan bahasa pilihan
  const quickInquiryMessage = encodeURIComponent(
    language === "en"
      ? "Hello Scraft Product, I would like to discuss custom production / ordering wooden products for my business needs."
      : "Halo Scraft Product, saya ingin berdiskusi mengenai kustomisasi / pemesanan produk kayu untuk kebutuhan bisnis saya.",
  );

  return (
    <main className="min-h-screen bg-stone-50 text-stone-900 pt-24 pb-32 px-4 sm:px-6 lg:px-8 selection:bg-amber-900/10 relative overflow-hidden">
      {/* Ornamen Latar Belakang */}
      <div className="absolute top-0 right-0 w-[30rem] h-[30rem] bg-amber-900/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* HEADER */}
        <div className="max-w-2xl mb-16">
          <span className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-amber-800 block mb-3">
            {language === "en" ? "Let's Collaborate" : "Mari Berkolaborasi"}
          </span>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-stone-950 mb-4 leading-tight">
            {language === "en" ? (
              <>
                Start a Conversation
                <br />
                with Us.
              </>
            ) : (
              <>
                Mulai Percakapan
                <br />
                dengan Kami.
              </>
            )}
          </h1>
          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-medium">
            {language === "en"
              ? "Have an idea for a custom wooden product or need premium tableware supply for your business? Our team in Jepara is ready to respond quickly."
              : "Punya ide produk kayu custom atau butuh suplai tableware premium untuk bisnis Kamu? Tim kami di Jepara siap merespons dengan cepat."}
          </p>
        </div>

        {/* BENTO GRID LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 auto-rows-[auto]">
          {/* KOTAK 1: WHATSAPP (DOMINAN - 2 KOLOM) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 bg-stone-950 rounded-3xl p-8 sm:p-10 relative overflow-hidden group flex flex-col justify-between shadow-lg"
          >
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-amber-800/20 rounded-full blur-3xl pointer-events-none transition-transform duration-700 group-hover:scale-110" />

            <div className="relative z-10 mb-10">
              <h2 className="text-2xl font-bold text-stone-100 mb-2">
                {language === "en"
                  ? "Fast Response Inquiry"
                  : "Respon Kueri Cepat"}
              </h2>
              <p className="text-xs sm:text-sm text-stone-400 max-w-md leading-relaxed">
                {language === "en"
                  ? "Send us the details of your project requirements. We will reply with a price estimation and material guide in no time."
                  : "Kirimkan detail kebutuhan proyek Kamu. Kami akan membalas dengan estimasi harga dan panduan material dalam waktu singkat."}
              </p>
            </div>

            <a
              href={`https://wa.me/6281234567890?text=${quickInquiryMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 inline-flex items-center justify-between w-full sm:w-auto px-8 py-4 bg-stone-100 hover:bg-amber-600 hover:text-white text-stone-950 rounded-2xl transition-all duration-300 font-extrabold text-[11px] uppercase tracking-widest shadow-md active:scale-95"
            >
              <span>
                {language === "en"
                  ? "Chat via WhatsApp"
                  : "Hubungi via WhatsApp"}
              </span>
              <span className="ml-4 text-lg leading-none">↗</span>
            </a>
          </motion.div>

          {/* KOTAK 2: LOKASI (1 KOLOM) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-stone-200/50 border border-stone-200/80 rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-stone-300/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative z-10">
              <h3 className="text-[10px] font-extrabold uppercase tracking-widest text-amber-800 mb-2">
                {language === "en" ? "Workshop Area" : "Area Workshop"}
              </h3>
              <p className="text-base font-bold text-stone-900 leading-snug">
                Jepara, Central Java
                <br />
                Indonesia
              </p>
            </div>
            <div className="relative z-10 mt-12 pt-6 border-t border-stone-300/50 text-[11px] font-semibold text-stone-600">
              {language === "en"
                ? "Direct visits are strictly by prior appointment only."
                : "Kunjungan langsung wajib dengan janji temu sebelumnya."}
            </div>
          </motion.div>

          {/* KOTAK 3: EMAIL (1 KOLOM) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-stone-100 border border-stone-200/60 rounded-3xl p-8 hover:border-amber-900/20 transition-colors duration-300 flex flex-col justify-center"
          >
            <h3 className="text-[10px] font-extrabold uppercase tracking-widest text-stone-400 mb-2">
              {language === "en" ? "Business Email" : "Email Bisnis"}
            </h3>
            <a
              href="mailto:hello@scraftproduct.com"
              className="text-sm font-bold text-stone-900 hover:text-amber-800 transition-colors break-all"
            >
              hello@scraftproduct.com
            </a>
          </motion.div>

          {/* KOTAK 4: JAM OPERASIONAL (1 KOLOM) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-amber-900/5 border border-amber-900/10 rounded-3xl p-8 flex flex-col justify-center"
          >
            <h3 className="text-[10px] font-extrabold uppercase tracking-widest text-amber-800 mb-3">
              {language === "en" ? "Operational Hours" : "Jam Operasional"}
            </h3>
            <div className="space-y-1">
              <p className="text-sm font-bold text-stone-900">
                {language === "en" ? "Monday - Saturday" : "Senin - Sabtu"}
              </p>
              <p className="text-xs font-semibold text-stone-600">
                08:00 - 17:00 WIB
              </p>
            </div>
          </motion.div>

          {/* KOTAK 5: SOSIAL MEDIA (1 KOLOM) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-stone-100 border border-stone-200/60 rounded-3xl p-8 hover:border-amber-900/20 transition-colors duration-300 flex flex-col justify-center"
          >
            <h3 className="text-[10px] font-extrabold uppercase tracking-widest text-stone-400 mb-4">
              {language === "en" ? "Connect Digitally" : "Hubungan Digital"}
            </h3>
            <div className="flex gap-3">
              <a
                href="#"
                className="px-5 py-2.5 rounded-xl bg-stone-200/80 flex items-center justify-center text-xs font-bold text-stone-600 hover:bg-amber-800 hover:text-white transition-colors duration-300"
              >
                Instagram
              </a>
              <a
                href="#"
                className="px-5 py-2.5 rounded-xl bg-stone-200/80 flex items-center justify-center text-xs font-bold text-stone-600 hover:bg-amber-800 hover:text-white transition-colors duration-300"
              >
                LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
