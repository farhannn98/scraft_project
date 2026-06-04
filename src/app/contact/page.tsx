// src/app/contact/page.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ContactPage() {
  // Template chat otomatis untuk tombol kirim pesan kilat
  const quickInquiryMessage = encodeURIComponent(
    "Halo Scraft Product, saya ingin berdiskusi mengenai kustomisasi / pemesanan produk kayu untuk kebutuhan bisnis saya.",
  );

  return (
    <main className="min-h-screen bg-stone-50 text-stone-900 pt-24 pb-32 px-4 sm:px-6 lg:px-8 selection:bg-amber-900/10">
      <div className="max-w-5xl mx-auto">
        {/* HEADER SECTION */}
        <div className="max-w-2xl mb-20">
          <span className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-amber-800 block mb-3">
            Get In Touch
          </span>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-stone-950 mb-4">
            Connect With Us
          </h1>
          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-medium">
            Ada pertanyaan tentang katalog kami, pemesanan kustom, atau
            kolaborasi B2B? Tim kami di Jepara siap membantu merealisasikan
            kebutuhan peralatan kayu premium Anda.
          </p>
        </div>

        {/* LAYOUT UTAMA: DETAIL KONTAK & KARTU LAYANAN */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* SISI KIRI: Informasi Saluran Kontak Resmi */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-[10px] font-extrabold uppercase tracking-widest text-stone-400 mb-2">
                Workshop & Office
              </h3>
              <p className="text-xs sm:text-sm font-semibold text-stone-800 leading-relaxed">
                Jepara, Jawa Tengah,
                <br />
                Indonesia
              </p>
            </div>

            <div>
              <h3 className="text-[10px] font-extrabold uppercase tracking-widest text-stone-400 mb-2">
                Business Inquiries
              </h3>
              <p className="text-xs sm:text-sm font-semibold text-stone-800">
                hello@scraftproduct.com
              </p>
              <p className="text-xs sm:text-sm font-semibold text-amber-800 mt-1">
                +62 812-3456-7890
              </p>
            </div>

            <div>
              <h3 className="text-[10px] font-extrabold uppercase tracking-widest text-stone-400 mb-2">
                Social Presence
              </h3>
              <div className="flex gap-4 text-xs font-bold uppercase tracking-wider text-stone-600">
                <a href="#" className="hover:text-amber-800 transition-colors">
                  Instagram
                </a>
                <a href="#" className="hover:text-amber-800 transition-colors">
                  LinkedIn
                </a>
              </div>
            </div>
          </motion.div>

          {/* SISI KANAN: Kotak Aksi Respon Cepat */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-8 bg-stone-100/60 border border-stone-200/80 rounded-3xl backdrop-blur-sm shadow-sm"
          >
            <h2 className="text-base font-bold text-stone-950 mb-2">
              Fast Response Inquiry
            </h2>
            <p className="text-xs text-stone-500 font-medium mb-6 leading-relaxed">
              Butuh kalkulasi harga cepat atau konsultasi jenis kayu? Ketuk
              tombol di bawah untuk langsung terhubung ke WhatsApp representatif
              kami.
            </p>

            <a
              href={`https://wa.me/6281234567890?text=${quickInquiryMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full text-center px-6 py-3.5 text-[10px] font-extrabold uppercase tracking-widest text-white bg-stone-950 hover:bg-amber-900 rounded-xl transition-all duration-300 shadow-sm active:scale-95"
            >
              Start Chat Conversation
            </a>

            <div className="mt-6 pt-6 border-t border-stone-200/60 text-[10px] font-medium text-stone-400 text-center">
              Waktu operasional: Senin — Sabtu, 08:00 - 17:00 WIB
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
