// src/types/product.ts
export interface Product {
  id: string;
  name: string;
  slug: string;
  category: "tableware" | "kitchenware" | "utilities";
  description: string;
  material: string; // Contoh: Teak Wood (Kayu Jati), Mahogany, dll.
  finish: string; // Contoh: Food Grade Beeswax, Natural Oil
  dimensions: string; // Contoh: 25cm x 15cm x 2cm
  image: string; // Jalur file foto di folder public/images/products/
}
