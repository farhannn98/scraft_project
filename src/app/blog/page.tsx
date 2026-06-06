// src/app/blog/page.tsx
"use client";

import React from "react";
import Link from "next/link";
import { blogs } from "@/data/blogs";
import { useLanguage } from "@/context/LanguageContext";

export default function BlogPage() {
  const { language } = useLanguage();
  const featuredBlog = blogs[0];
  const regularBlogs = blogs.slice(1);

  return (
    <main className="min-h-screen bg-stone-50 text-stone-900 pt-28 pb-32 px-4 sm:px-6 lg:px-8 selection:bg-amber-900/10">
      <div className="max-w-5xl mx-auto">
        {/* Header Halaman Dinamis */}
        <div className="space-y-3 mb-12 text-center md:text-left">
          <span className="text-[9px] font-extrabold uppercase tracking-[0.3em] text-amber-800 bg-amber-900/5 px-3 py-1 rounded-full border border-amber-900/10">
            The Scraft Journal
          </span>
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-stone-950 leading-tight">
            {language === "en"
              ? "Latest Articles & Inspirations"
              : "Artikel & Inspirasi Terkini"}
          </h1>
          <p className="text-xs sm:text-sm text-stone-500 max-w-xl font-medium leading-relaxed">
            {language === "en"
              ? "Discover care tips, lifestyle guides, and stories behind premium wood crafts directly from Jepara craftsmen."
              : "Temukan tips perawatan, panduan gaya hidup, dan cerita di balik kerajinan kayu premium langsung dari pengrajin Jepara."}
          </p>
        </div>

        {/* 1. ARTIKEL UTAMA (FEATURED POST) */}
        {featuredBlog && (
          <div className="mb-12">
            <Link
              href={`/blog/${featuredBlog.slug}`}
              className="group block relative overflow-hidden rounded-[2rem] bg-stone-100 border border-stone-200/80 shadow-sm transition-all duration-300 hover:shadow-md"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 items-center">
                <div className="md:col-span-7 aspect-[16/10] w-full overflow-hidden bg-stone-200">
                  <img
                    src={featuredBlog.image}
                    alt={featuredBlog.title[language]}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
                  />
                </div>
                <div className="md:col-span-5 p-6 md:p-2 pr-6 flex flex-col gap-3">
                  <div className="flex items-center gap-2">
                    {/* REVISI: Memanggil objek category sesuai dengan bahasa yang aktif */}
                    <span className="text-[9px] font-extrabold uppercase tracking-wider text-amber-800 bg-amber-900/5 px-2 py-0.5 rounded border border-amber-900/10">
                      {featuredBlog.category[language]}
                    </span>
                    <span className="text-[9px] font-bold uppercase tracking-widest text-stone-400">
                      {featuredBlog.date}
                    </span>
                  </div>
                  {/* REVISI: Memanggil objek title sesuai bahasa */}
                  <h2 className="text-xl sm:text-2xl font-black tracking-tight text-stone-950 group-hover:text-amber-800 transition-colors duration-300 leading-snug">
                    {featuredBlog.title[language]}
                  </h2>
                  {/* REVISI: Memanggil objek excerpt sesuai bahasa */}
                  <p className="text-xs text-stone-600 leading-relaxed font-medium line-clamp-3">
                    {featuredBlog.excerpt[language]}
                  </p>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-800 mt-2 flex items-center gap-1">
                    {language === "en"
                      ? "Read Full Article"
                      : "Baca Selengkapnya"}{" "}
                    <span>→</span>
                  </span>
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* 2. DAFTAR ARTIKEL REGULER (GRID LAYOUT) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {regularBlogs.map((blog) => (
            <Link
              key={blog.id}
              href={`/blog/${blog.slug}`}
              className="group flex flex-col overflow-hidden rounded-2xl bg-stone-100/40 border border-stone-200/80 backdrop-blur-sm transition-all duration-300 hover:border-amber-900/20 hover:bg-stone-100/90 hover:shadow-sm"
            >
              <div className="aspect-[4/3] w-full overflow-hidden bg-stone-200">
                <img
                  src={blog.image}
                  alt={blog.title[language]}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                />
              </div>
              <div className="flex flex-1 flex-col p-5 space-y-2">
                <div className="flex items-center gap-2">
                  {/* REVISI: Kategori dinamis */}
                  <span className="text-[8px] font-extrabold uppercase tracking-wider text-amber-800 bg-amber-900/5 px-1.5 py-0.5 rounded border border-amber-900/10">
                    {blog.category[language]}
                  </span>
                  <span className="text-[9px] font-bold uppercase tracking-widest text-stone-400">
                    {blog.date}
                  </span>
                </div>
                {/* REVISI: Judul dinamis */}
                <h3 className="text-sm font-bold tracking-wide text-stone-950 group-hover:text-amber-800 transition-colors duration-300 line-clamp-2 leading-snug">
                  {blog.title[language]}
                </h3>
                {/* REVISI: Deskripsi singkat dinamis */}
                <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed font-medium">
                  {blog.excerpt[language]}
                </p>
                <div className="pt-3 border-t border-stone-200/60 text-[9px] font-extrabold uppercase tracking-widest text-amber-800 flex items-center gap-1 self-start">
                  {language === "en" ? "Read Article" : "Baca Artikel"}{" "}
                  <span>→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
