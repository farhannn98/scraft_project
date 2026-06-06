// src/types/product.ts
export interface Product {
  id: string;
  name: string;
  slug: string;
  category:
    | "bathfloor"
    | "bathroom"
    | "coaster"
    | "cutting board"
    | "keset"
    | "plate"
    | "tray"
    | "wall decor";
  description: string;
  material: string; // Contoh: Teak Wood (Kayu Jati), Mahogany, dll.
  finish: string; // Contoh: Food Grade Beeswax, Natural Oil
  dimensions: string; // Contoh: 25cm x 15cm x 2cm
  image: string; // Jalur file foto utama langsung mengarah ke sub-folder di public/

  // FIX TOTAL: Tambahkan baris ini agar array gambar pendukung legal di TypeScript
  gallery?: string[]; // Menggunakan tanda '?' artinya opsional, jadi kalau ada produk yang belum punya galeri tidak akan error
}
