// src/types/blog.ts
export interface Blog {
  id: string;
  slug: string;
  date: string;
  image: string;

  // FIX: Mengubah tipe data menjadi objek multilingual (Indonesia & Inggris)
  category: { id: string; en: string };
  title: { id: string; en: string };
  excerpt: { id: string; en: string };
  content: { id: string; en: string };
}
