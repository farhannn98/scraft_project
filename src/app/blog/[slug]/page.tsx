// src/app/blog/[slug]/page.tsx
import { notFound } from "next/navigation";
import Link from "next/link";
import { blogs } from "@/data/blogs";

interface BlogDetailProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogDetailPage({ params }: BlogDetailProps) {
  // Ambil data slug dengan melakukan await terlebih dahulu
  const resolvedParams = await params;
  const blog = blogs.find((b) => b.slug === resolvedParams.slug);

  if (!blog) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-stone-50 text-stone-900 pt-28 pb-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        {/* Tombol Back Minimalis */}
        <div className="mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400 hover:text-amber-800 transition-colors duration-300"
          >
            <span>←</span> Back to Journal
          </Link>
        </div>

        {/* Header Artikel */}
        <header className="space-y-4 mb-8">
          <div className="flex items-center gap-2">
            <span className="text-[9px] font-extrabold uppercase tracking-wider text-amber-800 bg-amber-900/5 px-2 py-0.5 rounded border border-amber-900/10">
              {blog.category}
            </span>
            <span className="text-[9px] font-bold uppercase tracking-widest text-stone-400">
              Published on {blog.date}
            </span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-black tracking-tight text-stone-950 leading-tight">
            {blog.title}
          </h1>
          <p className="text-xs sm:text-sm text-stone-500 font-medium leading-relaxed italic border-l-2 border-amber-800 pl-4 py-1">
            {blog.excerpt}
          </p>
        </header>

        {/* Foto Sampul Artikel */}
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-stone-100 border border-stone-200/60 shadow-sm mb-10">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Konten Utama Teks */}
        <div className="text-xs sm:text-sm text-stone-700 leading-relaxed font-medium space-y-5 border-b border-stone-200 pb-12">
          {blog.content.split("\n\n").map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        {/* CALL TO ACTION PRODUK */}
        <div className="mt-12 p-6 rounded-2xl bg-stone-100 border border-stone-200/80 backdrop-blur-sm shadow-sm text-center space-y-4">
          <span className="inline-block text-[8px] font-extrabold uppercase tracking-widest text-amber-800 bg-amber-900/5 px-2.5 py-1 rounded-full border border-amber-900/10">
            Eksklusif Jepara Heritage
          </span>
          <h3 className="text-sm font-bold tracking-tight text-stone-950">
            Ingin Memiliki Peralatan Makan Kayu Premium Seperti di Atas?
          </h3>
          <p className="text-xs text-stone-500 max-w-md mx-auto leading-relaxed">
            Dapatkan koleksi perangkat makan dan interior dapur berbahan kayu
            jati solid pilihan asli kerajinan tangan *The Scraft*.
          </p>
          <div className="pt-2">
            <Link
              href="/products"
              className="inline-block px-6 py-3 text-[10px] font-extrabold uppercase tracking-widest text-white bg-stone-950 hover:bg-amber-900 rounded-xl transition-all duration-300 shadow-md active:scale-95"
            >
              Jelajahi Katalog Koleksi ↗
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
