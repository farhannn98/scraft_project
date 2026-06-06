"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { products } from "@/data/products";
import { useLanguage } from "@/context/LanguageContext"; // FIX: Hubungkan pengatur bahasa global

export default function ProductDetailPage() {
  const params = useParams();
  const { language } = useLanguage(); // FIX: Ambil status bahasa aktif ("id" / "en")

  const product = products.find(
    (p) => p.slug === params.id || p.id === params.id,
  );

  const [mainImage, setMainImage] = useState(product?.image || "");
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  useEffect(() => {
    if (product) {
      setMainImage(product.image);
    }
  }, [product]);

  if (!product) {
    return (
      <main className="min-h-screen bg-stone-50 flex flex-col items-center justify-center text-center px-4 pt-20">
        <h1 className="text-xl font-bold text-stone-900 mb-2">
          {language === "en" ? "Product Not Found" : "Produk Tidak Ditemukan"}
        </h1>
        <p className="text-xs text-stone-500 mb-6">
          {language === "en"
            ? "The product is unavailable or has been removed."
            : "Produk tidak tersedia atau telah dihapus."}
        </p>
        <Link
          href="/products"
          className="px-5 py-2.5 text-[10px] font-extrabold uppercase tracking-widest text-white bg-amber-800 rounded-full hover:bg-amber-900 transition-colors"
        >
          {language === "en" ? "Back to Collection" : "Kembali ke Koleksi"}
        </Link>
      </main>
    );
  }

  const productGallery =
    product.gallery && product.gallery.length > 0
      ? product.gallery
      : [product.image, product.image, product.image];

  // FIX: Mengonversi pesan teks otomatis WhatsApp agar membaca properti bahasa yang aktif [language]
  const whatsappMessage = encodeURIComponent(
    `Halo Scraft Product, saya ingin berdiskusi atau memesan produk kustom berikut:\n\n` +
      `Nama Produk: ${product.name[language]}\n` +
      `Material: ${product.material}\n` +
      `Dimensi: ${product.dimensions}\n\n` +
      `Bisa tolong infokan ketersediaan bahan baku atau estimasi waktu produksinya? Terima kasih.`,
  );

  return (
    <main className="min-h-screen bg-stone-50 text-stone-900 pt-28 pb-32 px-4 sm:px-6 lg:px-8 selection:bg-amber-900/10">
      <div className="max-w-5xl mx-auto">
        {/* Tombol Back Minimalis */}
        <div className="mb-8">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400 hover:text-amber-800 transition-colors duration-300"
          >
            <span>←</span>{" "}
            {language === "en" ? "Back to Collection" : "Kembali ke Koleksi"}
          </Link>
        </div>

        {/* PARALLEL STUDIO GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* SISI KIRI: AREA GALERI FOTO */}
          <div className="lg:col-span-5 flex flex-col md:flex-row gap-4">
            {/* 1. Gambar Besar Utama */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              onClick={() => setIsLightboxOpen(true)}
              className="flex-1 relative aspect-square w-full overflow-hidden rounded-[1.5rem] bg-stone-100 border border-stone-200/60 shadow-sm cursor-zoom-in group"
            >
              <div className="absolute inset-0 z-10 bg-stone-950/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <AnimatePresence mode="wait">
                <motion.img
                  key={mainImage}
                  src={mainImage}
                  alt={product.name[language]} // FIX: Pembacaan bahasa
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
            </motion.div>

            {/* 2. Tiga Gambar Thumbnail */}
            <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-visible w-full md:w-20 lg:w-24 shrink-0 scrollbar-hide pt-2 md:pt-0">
              {productGallery.slice(0, 3).map((img, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setMainImage(img)}
                  className={`relative aspect-square w-20 md:w-full shrink-0 rounded-xl overflow-hidden cursor-pointer border transition-all duration-200 shadow-sm ${
                    mainImage === img
                      ? "border-amber-800 opacity-100 shadow-md ring-1 ring-amber-800"
                      : "border-stone-200/60 opacity-60 hover:opacity-100"
                  }`}
                >
                  <img
                    src={img}
                    alt={`${product.name[language]} thumbnail ${idx}`} // FIX: Pembacaan bahasa
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </div>

          {/* SISI KANAN: AREA DETAIL INFORMASI RAPAT SEJAJAR */}
          <motion.div
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            {/* Blok Judul & Deskripsi */}
            <div className="space-y-3">
              <span className="inline-block text-[9px] font-extrabold uppercase tracking-[0.3em] text-amber-800 bg-amber-900/5 px-3 py-1 rounded-full border border-amber-900/10">
                {product.category}
              </span>
              {/* FIX: Judul dinamis objek bahasa */}
              <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-stone-950 leading-tight">
                {product.name[language]}
              </h1>
              {/* FIX: Deskripsi dinamis objek bahasa */}
              <p className="text-xs text-stone-600 leading-relaxed font-medium">
                {product.description[language]}
              </p>
            </div>

            {/* Blok Kartu Spesifikasi Minimalis */}
            <div className="bg-stone-100/60 border border-stone-200/80 rounded-2xl p-5 space-y-3 shadow-sm backdrop-blur-sm">
              <h3 className="text-[9px] font-extrabold uppercase tracking-widest text-stone-400 border-b border-stone-200/60 pb-1.5">
                {language === "en"
                  ? "Craftsmanship Details"
                  : "Detail Kerajinan Tangan"}
              </h3>
              <div className="space-y-2.5">
                <div className="flex justify-between items-baseline text-xs">
                  <span className="font-semibold text-stone-400">Material</span>
                  <span className="font-bold text-stone-900 text-right">
                    {product.material}
                  </span>
                </div>
                <div className="flex justify-between items-baseline text-xs">
                  <span className="font-semibold text-stone-400">
                    {language === "en" ? "Dimensions" : "Dimensi"}
                  </span>
                  <span className="font-bold text-stone-900 text-right">
                    {product.dimensions}
                  </span>
                </div>
                <div className="flex justify-between items-baseline text-xs">
                  <span className="font-semibold text-stone-400">
                    Finishing
                  </span>
                  <span className="font-extrabold text-amber-800 text-right uppercase tracking-wider text-[10px]">
                    {product.finish}
                  </span>
                </div>
              </div>
            </div>

            {/* Blok Tombol Transaksi WhatsApp */}
            <div className="space-y-3 pt-2">
              <a
                href={`https://wa.me/6281234567890?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full px-6 py-3.5 text-[10px] font-extrabold uppercase tracking-widest text-white bg-stone-950 hover:bg-amber-900 rounded-xl transition-all duration-300 shadow-md shadow-stone-950/10 active:scale-95 text-center cursor-pointer"
              >
                {language === "en"
                  ? "Inquire & Order Custom ↗"
                  : "Tanyakan & Pesan Kustom ↗"}
              </a>
              <p className="text-[9px] font-medium text-stone-400 text-center tracking-wide">
                {language === "en"
                  ? "*Products are handmade by professional craftsmen in Jepara, Central Java."
                  : "*Produk dibuat handmade oleh pengrajin profesional di Jepara, Jawa Tengah."}
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* LIGHTBOX MODAL */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsLightboxOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-stone-950/90 backdrop-blur-md p-4 cursor-zoom-out"
          >
            <button
              onClick={() => setIsLightboxOpen(false)}
              className="absolute top-6 right-6 z-50 p-2.5 rounded-full bg-stone-900/80 border border-stone-800 text-stone-400 hover:text-white transition-colors duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.8}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ type: "spring", damping: 30, stiffness: 350 }}
              className="relative max-w-4xl max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={mainImage}
                alt={product.name[language]} // FIX: Nama dinamis pada lightbox modal
                className="w-full h-auto max-h-[90vh] object-contain rounded-2xl border border-stone-800/20 shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
