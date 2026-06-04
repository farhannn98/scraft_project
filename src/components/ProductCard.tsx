// src/components/ProductCard.tsx
"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
      className="group relative flex flex-col overflow-hidden rounded-2xl bg-stone-100/40 border border-stone-200/80 backdrop-blur-sm transition-all duration-300 hover:border-amber-900/20 hover:bg-stone-100/90 hover:shadow-[0_20px_40px_rgba(139,92,26,0.06)]"
    >
      {/* Container Foto Produk dengan Rasio Kotak Bersih (1:1) */}
      <div className="relative aspect-square w-full overflow-hidden bg-stone-200/50">
        {/* Efek Sorot Cahaya Lembut Putih saat Kartu Di-hover */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-stone-100/30 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        {/* Wadah Visual Gambar (Nanti otomatis menampilkan aset foto dari folder public) */}
        <div className="flex h-full w-full items-center justify-between text-stone-800 bg-stone-200/40 group-hover:scale-105 transition-transform duration-700 ease-out">
          <div className="w-full text-center p-4">
            <span className="block text-[10px] font-extrabold uppercase tracking-widest text-amber-800/80 mb-1">
              {product.material}
            </span>
            <span className="text-xs italic text-stone-500 font-medium">
              [ {product.name} ]
            </span>
          </div>
        </div>

        {/* Badge Kategori Minimalis di Pojok Kiri Atas */}
        <span className="absolute top-4 left-4 z-20 rounded-full bg-stone-100/90 backdrop-blur-md px-3 py-1 text-[9px] font-extrabold uppercase tracking-widest text-amber-800 border border-stone-200/60 shadow-sm">
          {product.category}
        </span>
      </div>

      {/* Detail Informasi Spesifikasi Produk */}
      <div className="flex flex-1 flex-col p-5 bg-stone-100/20">
        {/* Dimensi/Ukuran Produk */}
        <span className="text-[9px] font-extrabold uppercase tracking-widest text-stone-400 mb-1.5 block">
          {product.dimensions}
        </span>

        {/* Nama Produk dengan Efek Transisi Warna ke Cokelat Kayu Jati */}
        <h3 className="text-sm font-bold tracking-wide text-stone-950 group-hover:text-amber-800 transition-colors duration-300 line-clamp-1">
          {product.name}
        </h3>

        {/* Deskripsi Singkat Produk */}
        <p className="mt-2 text-xs text-stone-600 line-clamp-2 leading-relaxed font-medium">
          {product.description}
        </p>

        {/* Garis Pembatas Tipis Halus */}
        <div className="mt-5 pt-4 border-t border-stone-200/60 flex items-center justify-between">
          {/* Jenis Finishing / Lapisan Pengaman Kayu */}
          <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800/70 bg-amber-900/5 px-2 py-0.5 rounded-md border border-amber-900/5">
            {product.finish}
          </span>

          {/* Tombol Tautan Teks Menuju Halaman Detail */}
          <Link
            href={`/products/${product.id}`}
            className="text-[10px] font-extrabold uppercase tracking-widest text-stone-950 hover:text-amber-800 flex items-center gap-1.5 transition-colors duration-300"
          >
            Details
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
