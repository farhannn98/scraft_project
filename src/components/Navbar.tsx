// src/components/Navbar.tsx
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext"; // Impor provider bahasa

export default function Navbar() {
  const pathname = usePathname();
  const { language, setLanguage } = useLanguage(); // Gunakan fungsi bahasa global
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  // DAFTAR MENU DINAMIS BERDASARKAN BAHASA YANG AKTIF
  const navItems = [
    { path: "/", label: language === "en" ? "Home" : "Beranda" },
    { path: "/products", label: language === "en" ? "Products" : "Produk" },
    { path: "/blog", label: "Blog" },
    { path: "/about", label: language === "en" ? "About Us" : "Tentang Kami" },
    { path: "/contact", label: language === "en" ? "Contact" : "Kontak" },
  ];

  // Kunci scroll layar utama saat menu mobile terbuka
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Otomatis tutup menu mobile jika rute halaman berubah
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <header className="fixed top-5 left-0 right-0 w-full z-50 px-4 sm:px-6 max-w-5xl mx-auto">
        {/* CONTAINER KAPSUL UTAMA: GLASSMORPHISM GELAP PREMIUM */}
        <div className="w-full h-14 flex items-center justify-between px-6 bg-stone-900/80 backdrop-blur-xl border border-stone-800/60 rounded-full shadow-[0_12px_40px_rgba(0,0,0,0.16)] relative z-50">
          {/* LOGO BRAND */}
          <Link href="/" className="flex items-center group h-6 relative z-50">
            <img
              src="/logo/logoscraft.png"
              alt="The Scraft Logo"
              className="h-full w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <span className="font-light tracking-[0.2em] text-[15px] sm:text-sm text-stone-100 hidden sm:block ml-1">
              THE SCRAFT
            </span>
          </Link>

          {/* NAVIGASI DESKTOP */}
          <nav className="hidden md:flex items-center space-x-1 relative">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className="relative px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider transition-colors duration-300 z-10 text-stone-400 hover:text-stone-100"
                  onMouseEnter={() => setHoveredPath(item.path)}
                  onMouseLeave={() => setHoveredPath(null)}
                >
                  {hoveredPath === item.path && (
                    <motion.div
                      layoutId="navbar-hover-glow"
                      className="absolute inset-0 bg-stone-800/60 border border-stone-700/30 rounded-full -z-10"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 28,
                      }}
                    />
                  )}
                  <span
                    className={isActive ? "text-amber-500 font-extrabold" : ""}
                  >
                    {item.label}
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="active-glowing-dot"
                      className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-amber-500 rounded-full"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* TOMBOL AKSI KANAN & SAKELAR BAHASA (ID | EN) */}
          <div className="hidden md:flex items-center gap-4">
            {/* SAKELAR BAHASA MINIMALIS */}
            <div className="flex items-center gap-1.5 text-[9px] font-black tracking-widest text-stone-400 border-r border-stone-800 pr-4 h-4">
              <button
                onClick={() => setLanguage("id")}
                className={`cursor-pointer transition-colors duration-200 ${
                  language === "id"
                    ? "text-amber-500 font-black"
                    : "text-stone-500 hover:text-stone-300"
                }`}
              >
                ID
              </button>
              <span className="text-stone-700 font-normal">|</span>
              <button
                onClick={() => setLanguage("en")}
                className={`cursor-pointer transition-colors duration-200 ${
                  language === "en"
                    ? "text-amber-500 font-black"
                    : "text-stone-500 hover:text-stone-300"
                }`}
              >
                EN
              </button>
            </div>

            <a
              href="https://wa.me/6285600614431?text=Halo%20The%20Scraft,%20saya%20ingin%20bertanya%20seputar%20produk."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 py-2 text-[10px] font-extrabold uppercase tracking-widest text-stone-950 bg-stone-100 hover:bg-amber-600 hover:text-white rounded-full transition-all duration-300 shadow-md active:scale-95"
            >
              {language === "en" ? "Contact Us" : "Hubungi Kami"}
            </a>
          </div>

          {/* TOMBOL BURGER MOBILE INTERAKTIF */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex md:hidden flex-col items-center justify-center gap-1.5 w-8 h-8 rounded-full bg-stone-800/50 border border-stone-700/30 active:scale-90 transition-transform cursor-pointer relative z-50"
            aria-label="Toggle Menu"
          >
            <motion.span
              animate={isOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
              className="w-4 h-[1.5px] bg-stone-100 block rounded-full"
            />
            <motion.span
              animate={
                isOpen ? { opacity: 0, scale: 0.5 } : { opacity: 1, scale: 1 }
              }
              transition={{ duration: 0.2 }}
              className="w-4 h-[1.5px] bg-stone-100 block rounded-full"
            />
            <motion.span
              animate={isOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
              className="w-4 h-[1.5px] bg-stone-100 block rounded-full"
            />
          </button>
        </div>
      </header>

      {/* OVERLAY MENU MOBILE LUXURY */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-stone-950/95 backdrop-blur-xl z-40 md:hidden flex flex-col justify-center px-8"
          >
            <nav className="flex flex-col space-y-6">
              {navItems.map((item, idx) => {
                const isActive = pathname === item.path;
                return (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.3, delay: idx * 0.08 }}
                  >
                    <Link
                      href={item.path}
                      className="inline-flex items-center gap-4 group"
                    >
                      <span className="text-[10px] font-mono tracking-widest text-stone-600 font-bold mt-1">
                        0{idx + 1}
                      </span>
                      <span
                        className={`text-2xl font-black tracking-wide transition-colors ${
                          isActive
                            ? "text-amber-500 drop-shadow-[0_2px_10px_rgba(245,158,11,0.2)]"
                            : "text-stone-100 group-hover:text-amber-500"
                        }`}
                      >
                        {item.label}
                      </span>
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            {/* BAGIAN BAWAH MENU MOBILE (DITAMBAHKAN SAKELAR BAHASA) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="absolute bottom-12 left-8 right-8 pt-6 border-t border-stone-800 text-[10px] font-extrabold uppercase tracking-[0.2em] text-stone-500 flex justify-between items-center"
            >
              {/* Sakelar Bahasa Mobile */}
              <div className="flex items-center gap-3 text-xs">
                <button
                  onClick={() => setLanguage("id")}
                  className={`transition-colors ${language === "id" ? "text-amber-500 font-black" : "text-stone-600"}`}
                >
                  INDONESIA
                </button>
                <span className="text-stone-800">/</span>
                <button
                  onClick={() => setLanguage("en")}
                  className={`transition-colors ${language === "en" ? "text-amber-500 font-black" : "text-stone-600"}`}
                >
                  ENGLISH
                </button>
              </div>

              <a href="https://wa.me/6281234567890" className="text-amber-500">
                Contact Office ↗
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
