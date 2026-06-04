// src/components/Navbar.tsx
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const navItems = [
  { path: "/", label: "Home" },
  { path: "/products", label: "Products" },
  { path: "/about", label: "About Us" },
  { path: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);

  return (
    <header className="fixed top-5 left-0 right-0 w-full z-50 px-4 sm:px-6 max-w-4xl mx-auto">
      {/* Container Kapsul: Warna krem gading cerah dengan efek blur halus dan border serat kayu jati */}
      <div className="w-full h-14 flex items-center justify-between px-6 bg-stone-100/90 backdrop-blur-md border border-amber-900/10 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.15)]">
        {/* Logo Brand: Cokelat tua arang mewah */}
        <Link
          href="/"
          className="font-bold tracking-widest text-sm text-stone-900 flex items-center gap-2 group"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-amber-700 shadow-[0_0_6px_rgba(180,83,9,0.5)] transition-transform group-hover:scale-125 duration-300" />
          THE SCRAFT
        </Link>

        {/* Menu Navigasi Tengah */}
        <nav className="hidden md:flex items-center space-x-1 relative">
          {navItems.map((item) => {
            const isActive = pathname === item.path;

            return (
              <Link
                key={item.path}
                href={item.path}
                className="relative px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider transition-colors duration-300 z-10 text-stone-500 hover:text-stone-900"
                onMouseEnter={() => setHoveredPath(item.path)}
                onMouseLeave={() => setHoveredPath(null)}
              >
                {/* Animasi Hover Kapsul: Sorot warna cokelat kayu muda transparan yang halus */}
                {hoveredPath === item.path && (
                  <motion.div
                    layoutId="navbar-hover-glow"
                    className="absolute inset-0 bg-amber-900/5 border border-amber-900/5 rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 28 }}
                  />
                )}

                {/* Teks menu aktif berwarna cokelat kayu hangat */}
                <span
                  className={isActive ? "text-amber-800 font-extrabold" : ""}
                >
                  {item.label}
                </span>

                {/* Titik Indikator Menu Aktif */}
                {isActive && (
                  <motion.div
                    layoutId="active-glowing-dot"
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-amber-800 rounded-full"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Tombol Aksi Kanan: Solid Cokelat Kayu Jati */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-stone-100 bg-amber-800 hover:bg-amber-900 rounded-full transition-all duration-300 shadow-sm active:scale-95"
          >
            Inquire
          </Link>
        </div>
      </div>
    </header>
  );
}
