// src/app/blog/[slug]/page.tsx
"use client";

import React, { use } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { blogs } from "@/data/blogs";
import { useLanguage } from "@/context/LanguageContext"; // Impor pendeteksi bahasa

interface BlogDetailProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function BlogDetailPage({ params }: BlogDetailProps) {
  // Un-wrap params menggunakan React.use() karena ini Client Component
  const resolvedParams = use(params);
  const { language } = useLanguage();

  const blog = blogs.find((b) => b.slug === resolvedParams.slug);

  if (!blog) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-stone-50 text-stone-900 pt-28 pb-32 px-4 sm:px-6 lg:px-8 selection:bg-amber-900/10">
      <div className="max-w-2xl mx-auto">
        {/* Tombol Back Dinamis */}
        <div className="mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400 hover:text-amber-800 transition-colors duration-300"
          >
            <span>←</span>{" "}
            {language === "en" ? "Back to Journal" : "Kembali ke Jurnal"}
          </Link>
        </div>

        {/* Header Artikel */}
        <header className="space-y-4 mb-8">
          <div className="flex items-center gap-2">
            <span className="text-[9px] font-extrabold uppercase tracking-wider text-amber-800 bg-amber-900/5 px-2 py-0.5 rounded border border-amber-900/10">
              {blog.category[language]}
            </span>
            <span className="text-[9px] font-bold uppercase tracking-widest text-stone-400">
              {language === "en"
                ? `Published on ${blog.date}`
                : `Diterbitkan pada ${blog.date}`}
            </span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-black tracking-tight text-stone-950 leading-tight">
            {blog.title[language]}
          </h1>
          <p className="text-xs sm:text-sm text-stone-500 font-medium leading-relaxed italic border-l-2 border-amber-800 pl-4 py-1">
            {blog.excerpt[language]}
          </p>
        </header>

        {/* Foto Sampul Artikel */}
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-stone-100 border border-stone-200/60 shadow-sm mb-10">
          <img
            src={blog.image}
            alt={blog.title[language]}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Konten Utama Teks */}
        <div className="text-xs sm:text-sm text-stone-700 leading-relaxed font-medium space-y-5 border-b border-stone-200 pb-12">
          {blog.content[language].split("\n\n").map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        {/* CALL TO ACTION PRODUK */}
        <div className="mt-12 p-6 rounded-2xl bg-stone-100 border border-stone-200/80 backdrop-blur-sm shadow-sm text-center space-y-4">
          <span className="inline-block text-[8px] font-extrabold uppercase tracking-widest text-amber-800 bg-amber-900/5 px-2.5 py-1 rounded-full border border-amber-900/10">
            {language === "en"
              ? "Exclusive Jepara Heritage"
              : "Eksklusif Jepara Heritage"}
          </span>
          <h3 className="text-sm font-bold tracking-tight text-stone-950">
            {language === "en"
              ? "Want to Own Premium Wooden Kitchenware Like Above?"
              : "Ingin Memiliki Peralatan Makan Kayu Premium Seperti di Atas?"}
          </h3>
          <p className="text-xs text-stone-500 max-w-md mx-auto leading-relaxed">
            {language === "en"
              ? "Get the finest dining ware and kitchen interior collections made of selected solid teak wood directly from The Scraft craftsmen."
              : "Dapatkan koleksi perangkat makan dan interior dapur berbahan kayu jati solid pilihan asli kerajinan tangan The Scraft."}
          </p>
          <div className="pt-2">
            <Link
              href="/products"
              className="inline-block px-6 py-3 text-[10px] font-extrabold uppercase tracking-widest text-white bg-stone-950 hover:bg-amber-900 rounded-xl transition-all duration-300 shadow-md active:scale-95"
            >
              {language === "en"
                ? "Explore Catalog Collection ↗"
                : "Jelajahi Katalog Koleksi ↗"}
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
