// src/types/blog.ts
export interface Blog {
  id: string;
  title: string;
  slug: string;
  date: string;
  category: string; // <-- Tambahkan ini
  excerpt: string;
  content: string;
  image: string;
}
