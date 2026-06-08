// src/components/Footer.tsx
"use client";

import React from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext"; // FIX: Hubungkan pengatur bahasa global

export default function Footer() {
  const { language } = useLanguage(); // FIX: Ambil status bahasa aktif

  return (
    <footer className="bg-gradient-to-br from-stone-900 via-amber-950 to-stone-950 pt-20 pb-8 px-4 sm:px-6 lg:px-8 border-t border-amber-900/30 text-stone-300">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* KOLOM 1: BRAND LOGO & DESKRIPSI */}
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="font-black tracking-widest text-sm text-stone-100 flex items-center gap-2 mb-6 group"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shadow-[0_0_6px_rgba(245,158,11,0.5)] transition-transform group-hover:scale-125 duration-300" />
              THE SCRAFT
            </Link>
            <p className="text-xs text-stone-400 leading-relaxed font-medium mb-6 pe-4">
              {language === "en"
                ? "Bringing the organic beauty of authentic Jepara wood grain into your modern dining room and kitchen spaces. Crafted slowly, enjoyed forever."
                : "Menghadirkan keindahan organik serat kayu asli Jepara ke dalam ruang makan dan dapur modern Anda. Dibuat lambat, dinikmati selamanya."}
            </p>
            <div className="flex gap-4 text-[10px] font-extrabold uppercase tracking-widest text-stone-500">
              <a
                href="#"
                className="hover:text-amber-500 transition-colors duration-300"
              >
                Instagram
              </a>
              <a
                href="#"
                className="hover:text-amber-500 transition-colors duration-300"
              >
                Pinterest
              </a>
            </div>
          </div>

          {/* KOLOM 2: NAVIGASI DINAMIS */}
          <div>
            <h3 className="text-[10px] font-extrabold uppercase tracking-widest text-amber-500 mb-6">
              {language === "en" ? "Navigation" : "Navigasi Menu"}
            </h3>
            <ul className="space-y-4 text-xs font-medium text-stone-400">
              <li>
                <Link
                  href="/"
                  className="hover:text-amber-400 flex items-center gap-2 group transition-colors"
                >
                  <span className="w-0 h-[1px] bg-amber-400 transition-all duration-300 group-hover:w-2" />
                  {language === "en" ? "Home" : "Beranda"}
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="hover:text-amber-400 flex items-center gap-2 group transition-colors"
                >
                  <span className="w-0 h-[1px] bg-amber-400 transition-all duration-300 group-hover:w-2" />
                  {language === "en" ? "Products" : "Katalog Produk"}
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-amber-400 flex items-center gap-2 group transition-colors"
                >
                  <span className="w-0 h-[1px] bg-amber-400 transition-all duration-300 group-hover:w-2" />
                  {language === "en" ? "Our Story" : "Cerita Kami"}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-amber-400 flex items-center gap-2 group transition-colors"
                >
                  <span className="w-0 h-[1px] bg-amber-400 transition-all duration-300 group-hover:w-2" />
                  {language === "en" ? "Contact Us" : "Hubungi Kami"}
                </Link>
              </li>
            </ul>
          </div>

          {/* KOLOM 3: INFORMASI ALAMAT & UTALITAS BARU */}
          <div>
            <h3 className="text-[10px] font-extrabold uppercase tracking-widest text-amber-500 mb-6">
              {language === "en"
                ? "Inquiries & Addresses"
                : "Kontak & Alamat Kantor"}
            </h3>
            <ul className="space-y-4 text-xs font-medium text-stone-400">
              <li className="flex flex-col gap-0.5">
                <span className="text-[9px] uppercase tracking-wider text-stone-500">
                  Email Business
                </span>
                <a
                  href="mailto:hello@scraftproduct.com"
                  className="hover:text-amber-400 transition-colors"
                >
                  @scraft.ina@gmail.com
                </a>
              </li>
              <li className="flex flex-col gap-0.5">
                <span className="text-[9px] uppercase tracking-wider text-stone-500">
                  WhatsApp Business
                </span>
                <a
                  href="https://wa.me/6285600614431"
                  className="hover:text-amber-400 transition-colors"
                >
                  +62 856-0061-4431
                </a>
              </li>
              {/* FIX: Alamat Kantor PT Semarang */}
              <li className="flex flex-col gap-0.5">
                <span className="text-[9px] uppercase tracking-wider text-stone-500">
                  {language === "en"
                    ? "Office Location (PT)"
                    : "Lokasi Kantor (PT)"}
                </span>
                <span className="leading-relaxed text-stone-400 text-[11px]">
                  Jl. Depok Dalam III No.9, Pedurungan Tengah, Kec. Pedurungan,
                  Kota Semarang, Jawa Tengah 50269
                </span>
              </li>
              {/* FIX: Alamat Bengkel Produksi Jepara */}
              <li className="flex flex-col gap-0.5">
                <span className="text-[9px] uppercase tracking-wider text-stone-500">
                  {language === "en"
                    ? "Production Workshop"
                    : "Workshop Produksi"}
                </span>
                <span className="leading-relaxed text-stone-400 text-[11px]">
                  Kepuk Jangglengan Rt 04 Rw 08, Kec. Bangsri, Kab. Jepara, Jawa
                  Tengah
                </span>
              </li>
            </ul>
          </div>

          {/* KOLOM 4: NEWSLETTER */}
          <div>
            <h3 className="text-[10px] font-extrabold uppercase tracking-widest text-amber-500 mb-6">
              {language === "en" ? "Join Our Circle" : "Berlangganan Info"}
            </h3>
            <p className="text-xs text-stone-400 leading-relaxed font-medium mb-4">
              {language === "en"
                ? "Get updates about the latest wooden collections and our exclusive offers."
                : "Dapatkan pembaruan tentang koleksi kayu terbaru dan penawaran eksklusif kami."}
            </p>
            <form className="relative flex items-center">
              <input
                type="email"
                placeholder={
                  language === "en" ? "Email address" : "Alamat email Anda"
                }
                className="w-full bg-stone-900/50 border border-stone-700/80 rounded-full px-4 py-2.5 text-xs font-medium text-stone-200 focus:outline-none focus:border-amber-500/50 focus:bg-stone-800 transition-all duration-300 placeholder-stone-500"
                required
              />
              <button
                type="submit"
                className="absolute right-1 w-7 h-7 bg-amber-600 text-white rounded-full flex items-center justify-center hover:bg-amber-500 transition-colors duration-300 shadow-sm"
              >
                <span className="text-[10px]">→</span>
              </button>
            </form>
          </div>
        </div>

        {/* FOOTER BAR BAWAH */}
        <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[10px] font-bold tracking-wider text-stone-500 uppercase">
            © 2026 THE SCRAFT. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-[10px] font-bold uppercase tracking-wider text-stone-500">
            <a href="#" className="hover:text-amber-500 transition-colors">
              {language === "en" ? "Privacy Policy" : "Kebijakan Privasi"}
            </a>
            <a href="#" className="hover:text-amber-500 transition-colors">
              {language === "en" ? "Terms of Service" : "Syarat & Ketentuan"}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
