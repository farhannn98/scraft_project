// src/app/products/[id]/page.tsx
"use client";

import React from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { products } from "@/data/products";

export default function ProductDetailPage() {
  const params = useParams();

  // Mencari data produk yang cocok berdasarkan ID di URL
  const product = products.find((p) => p.id === params.id);

  // Jika produk tidak ditemukan di data pusat
  if (!product) {
    return (
      <main className="min-h-screen bg-stone-50 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-xl font-bold text-stone-900 mb-2">
          Product Not Found
        </h1>
        <p className="text-xs text-stone-500 mb-6">
          Produk yang Anda cari tidak tersedia atau telah dihapus.
        </p>
        <Link
          href="/products"
          className="px-5 py-2.5 text-[10px] font-extrabold uppercase tracking-widest text-white bg-amber-800 rounded-full"
        >
          Back to Collection
        </Link>
      </main>
    );
  }

  // Membuat template pesan otomatis untuk order via WhatsApp ke Scraft Product
  const whatsappMessage = encodeURIComponent(
    `Halo Scraft Product, saya tertarik dan ingin bertanya lebih lanjut mengenai produk ini:\n\n` +
      `Nama Produk: ${product.name}\n` +
      `Bahan: ${product.material}\n` +
      `Ukuran: ${product.dimensions}\n\n` +
      `Apakah bisa dibantu untuk informasi ketersediaan atau kustomisasi ukurannya? Terima kasih.`,
  );

  return (
    <main className="min-h-screen bg-stone-50 text-stone-900 pt-20 pb-32 px-4 sm:px-6 lg:px-8 selection:bg-amber-900/10">
      <div className="max-w-6xl mx-auto">
        {/* Tombol Kembali yang Minimalis */}
        <div className="mb-10">
          <Link
            href="/products"
            className="text-[10px] font-extrabold uppercase tracking-widest text-stone-500 hover:text-amber-800 flex items-center gap-1 transition-colors duration-300"
          >
            ← Back to Collection
          </Link>
        </div>

        {/* LAYOUT UTAMA: FOTO & DETAIL SPESIFIKASI */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* SISI KIRI: Frame Foto Produk Besar Area */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative aspect-square w-full overflow-hidden rounded-3xl bg-stone-200/60 border border-stone-200/80 p-8 flex items-center justify-center"
          >
            <div className="text-center">
              <span className="block text-[11px] font-extrabold uppercase tracking-[0.2em] text-amber-800 mb-2">
                {product.material}
              </span>
              <span className="text-sm italic text-stone-500 font-medium block">
                [ Visual Placeholder: {product.name} ]
              </span>
            </div>
          </motion.div>

          {/* SISI KANAN: Deskripsi & Spesifikasi Teknis */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col"
          >
            {/* Kategori Tag */}
            <span className="text-[10px] font-extrabold uppercase tracking-[0.25em] text-amber-800 bg-amber-900/5 border border-amber-900/10 px-3 py-1 rounded-md self-start mb-4">
              {product.category}
            </span>

            {/* Nama Produk Akbar */}
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-stone-950 mb-4 leading-tight">
              {product.name}
            </h1>

            {/* Deskripsi Panjang */}
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-medium mb-8">
              {product.description}
            </p>

            {/* TABEL SPESIFIKASI TEKNIS PRODUK */}
            <div className="border-t border-stone-200/80 mb-8 pt-2">
              <div className="flex justify-between py-3.5 border-b border-stone-200/40 text-xs">
                <span className="font-extrabold uppercase tracking-wider text-stone-400 text-[10px]">
                  Material
                </span>
                <span className="font-bold text-stone-800 text-right">
                  {product.material}
                </span>
              </div>
              <div className="flex justify-between py-3.5 border-b border-stone-200/40 text-xs">
                <span className="font-extrabold uppercase tracking-wider text-stone-400 text-[10px]">
                  Dimensions
                </span>
                <span className="font-bold text-stone-800 text-right">
                  {product.dimensions}
                </span>
              </div>
              <div className="flex justify-between py-3.5 border-b border-stone-200/40 text-xs">
                <span className="font-extrabold uppercase tracking-wider text-stone-400 text-[10px]">
                  Finishing
                </span>
                <span className="font-bold text-amber-800 bg-amber-900/5 px-2 py-0.5 rounded border border-amber-900/5 text-right">
                  {product.finish}
                </span>
              </div>
            </div>

            {/* TOMBOL CALL TO ACTION (HUBUNGI VIA WHATSAPP) */}
            <a
              href={`https://wa.me/6281234567890?text=${whatsappMessage}`} // Ganti dengan nomor WhatsApp bisnis Anda nanti
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto text-center px-8 py-4 text-xs font-bold uppercase tracking-widest text-white bg-stone-950 hover:bg-amber-900 rounded-xl transition-all duration-300 shadow-md shadow-stone-950/10 active:scale-95"
            >
              Inquire via WhatsApp
            </a>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
