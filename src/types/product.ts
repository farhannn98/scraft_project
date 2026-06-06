// src/types/product.ts
export interface Product {
  id: string;
  name: { id: string; en: string }; // FIX: Objek bahasa
  slug: string;
  category:
    | "bathfloor"
    | "bathroom"
    | "coaster"
    | "cutting board"
    | "mat"
    | "plate"
    | "tray"
    | "wall decor"; // Tetap string literal sebagai ID filter sistem
  description: { id: string; en: string }; // FIX: Objek bahasa
  material: string;
  finish: string;
  dimensions: string;
  image: string;
  gallery?: string[];
}
