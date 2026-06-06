// src/data/blogs.ts
import { Blog } from "@/types/blog";

export const blogs: Blog[] = [
  {
    id: "blog-1",
    slug: "cara-merawat-piring-kayu-jati",
    date: "06 Juni 2026",
    image: "/blog/homeproduct6.jpg",
    category: { id: "Tips & Trik", en: "Tips & Tricks" },
    title: {
      id: "Cara Merawat Piring Kayu Jati Agar Tidak Berjamur",
      en: "How to Care for Teak Wood Plates to Prevent Mold",
    },
    excerpt: {
      id: "Tips mudah merawat peralatan dapur dari kayu jati pilihan agar tetap awet, bersih, dan bebas dari jamur.",
      en: "Easy tips for maintaining kitchenware made of selected teak wood to stay durable, clean, and mold-free.",
    },
    content: {
      id: "Piring kayu jati membutuhkan perawatan yang tepat agar seratnya tetap eksotis.",
      en: "Teak wood plates require proper maintenance to keep their fibers looking exotic.",
    },
  },
  {
    id: "blog-2",
    slug: "keunggulan-talenan-kayu-modern",
    date: "05 Juni 2026",
    image: "/blog/homeproduct5.jpg",
    category: { id: "Wawasan", en: "Insights" },
    title: {
      id: "5 Keunggulan Talenan Kayu untuk Dapur Modern",
      en: "5 Advantages of Wooden Cutting Boards for Modern Kitchens",
    },
    excerpt: {
      id: "Kenapa talenan kayu jati lebih baik daripada talenan plastik? Temukan rahasia higienisnya di sini.",
      en: "Why is a teak cutting board better than plastic? Discover its hygienic secrets here.",
    },
    content: {
      id: "Talenan kayu jati solid bukan cuma menang di estetika, tapi juga fungsionalitas dapur profesional.",
      en: "Solid teak wood cutting boards excel not only in aesthetics but also in professional kitchen functionality.",
    },
  },
  {
    id: "blog-3",
    slug: "inspirasi-penataan-meja-makan-estetik-minimalis",
    date: "04 Juni 2026",
    image: "/blog/meja2.jpg",
    category: { id: "Inspirasi", en: "Inspirations" },
    title: {
      id: "Inspirasi Penataan Meja Makan Estetik Minimalis",
      en: "Inspiration for Aesthetic Minimalist Dining Table Settings",
    },
    excerpt: {
      id: "Ubah suasana ruang makan rumah Kamu menjadi lebih hangat dan mewah dengan sentuhan elemen kayu alami.",
      en: "Transform your home dining room atmosphere to be warmer and more luxurious with a touch of natural wood elements.",
    },
    content: {
      id: "Penataan meja makan yang estetik berawal dari pemilihan material yang selaras.",
      en: "An aesthetic dining table setting starts with selecting harmonious materials.",
    },
  },
  {
    id: "blog-4",
    slug: "perbedaan-kayu-jati-dan-mahoni",
    date: "03 Juni 2026",
    image: "/blog/meja1.jpg",
    category: { id: "Wawasan", en: "Insights" },
    title: {
      id: "Mengenal Perbedaan Kayu Jati dan Mahoni untuk Alat Makan",
      en: "Understanding the Differences Between Teak and Mahogany for Tableware",
    },
    excerpt: {
      id: "Jangan salah pilih material! Kenali perbedaan karakteristik, ketahanan, dan tampilan visual kedua kayu ini.",
      en: "Do not choose the wrong material! Identify the differences in characteristics, durability, and visual appearance of these two woods.",
    },
    content: {
      id: "Dua jenis kayu yang paling sering digunakan untuk peralatan makan premium adalah kayu jati dan kayu mahoni.",
      en: "Two types of wood most commonly used for premium tableware are teak wood and mahogany wood.",
    },
  },
];
