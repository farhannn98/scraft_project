// src/data/products.ts
import { Product } from "@/types/product";

export const products: Product[] = [
  // 1. KATEGORI: BATHFLOOR
  {
    id: "bf-1",
    name: "Alas Kaki Kayu Jati Kamar Mandi",
    slug: "alas-kaki-kayu-jati-kamar-mandi-1",
    category: "bathfloor",
    description:
      "Alas lantai kamar mandi anti slip terbuat dari kayu jati pilihan, dirancang dengan celah air optimal.",
    material: "Solid Teak Wood",
    finish: "Waterproof Natural Oil",
    dimensions: "60cm x 40cm x 2.5cm",
    image: "/bathfloor1/bathfloor2.jpg",
    gallery: [
      "/bathfloor1/bathfloor1.jpg", // Gambar Utama
      "/bathfloor1/bathfloor3.jpg", // Detail 1 (Ganti nama file jika ada)
      "/bathfloor1/bathfloor4.jpg", // Detail 2 (Ganti nama file jika ada)
    ],
  },

  {
    id: "bf-2",
    name: "Alas Kaki Kayu Jati Kamar Mandi",
    slug: "alas-kaki-kayu-jati-kamar-mandi-2",
    category: "bathfloor",
    description:
      "Alas lantai kamar mandi anti slip terbuat dari kayu jati pilihan, dirancang dengan celah air optimal.",
    material: "Solid Teak Wood",
    finish: "Waterproof Natural Oil",
    dimensions: "60cm x 40cm x 2.5cm",
    image: "/bathfloor2/bathfloor2.2.jpg",
    gallery: [
      "/bathfloor2/bathfloor2.1.jpg", // Gambar Utama
      "/bathfloor2/bathfloor2.3.jpg", // Detail 1 (Ganti nama file jika ada)
      "/bathfloor2/bathfloor2.4.jpg", // Detail 2 (Ganti nama file jika ada)
    ],
  },

  {
    id: "bf-3",
    name: "Alas Kaki Kayu Jati Kamar Mandi",
    slug: "alas-kaki-kayu-jati-kamar-mandi-3",
    category: "bathfloor",
    description:
      "Alas lantai kamar mandi anti slip terbuat dari kayu jati pilihan, dirancang dengan celah air optimal.",
    material: "Solid Teak Wood",
    finish: "Waterproof Natural Oil",
    dimensions: "60cm x 40cm x 2.5cm",
    image: "/bathfloor3/bathfloor3.3.jpg",
    gallery: [
      "/bathfloor3/bathfloor3.1.jpg", // Gambar Utama
      "/bathfloor3/bathfloor3.2.jpg", // Detail 1 (Ganti nama file jika ada)
      "/bathfloor3/bathfloor3.4.jpg", // Detail 2 (Ganti nama file jika ada)
    ],
  },

  // 2. KATEGORI: BATHROOM AMENITIES
  {
    id: "br-1",
    name: "Tempat Sabun Kayu Minimalis",
    slug: "tempat-sabun-kayu-minimalis",
    category: "bathroom",
    description:
      "Wadah sabun batang dekoratif dengan pelapis anti jamur, mempercantik estetika wastafel Anda.",
    material: "Mahogany Wood",
    finish: "Water-Resistant Coating",
    dimensions: "12cm x 8cm x 2cm",
    image: "/bathroom_amenities/bathroom_amenities1.jpg",
    gallery: [
      "/bathroom_amenities/bathroom_amenities4.jpg",
      "/bathroom_amenities/bathroom_amenities2.jpg",
      "/bathroom_amenities/bathroom_amenities3.jpg",
    ],
  },

  // 3. KATEGORI: COASTER
  {
    id: "cs-1",
    name: "Tatakan Gelas Jati Bulat",
    slug: "tatakan-gelas-jati-bulat",
    category: "coaster",
    description:
      "Tatakan gelas premium pelindung permukaan meja dari noda air panas maupun dingin.",
    material: "Premium Teak Wood",
    finish: "Food Grade Beeswax",
    dimensions: "10cm x 10cm x 1cm",
    image: "/coaster/coster4.jpg",
    gallery: [
      "/coaster/coster1.jpg",
      "/coaster/coster2.jpg",
      "/coaster/coster3.jpg",
    ],
  },

  // 4. KATEGORI: CUTTING BOARD
  {
    id: "cb-1",
    name: "Talenan Masak End-Grain",
    slug: "talenan-masak-end-grain",
    category: "cutting board",
    description:
      "Talenan potong tebal profesional yang ramah terhadap mata pisau dapur Anda.",
    material: "Teak Wood",
    finish: "Food Grade Mineral Oil",
    dimensions: "40cm x 25cm x 3cm",
    image: "/cuttingboard1/cuttingboard1.2.jpg",
    gallery: [
      "/cuttingboard1/cuttingboard1.1.jpg",
      "/cuttingboard1/cuttingboard1.3.jpg",
      "/cuttingboard1/cuttingboard1.4.jpg",
    ],
  },

  // 5. KATEGORI: KESET
  {
    id: "ks-1",
    name: "Keset Kayu Polos Modern",
    slug: "keset-kayu-polos-modern",
    category: "keset",
    description:
      "Keset anyaman kayu fleksibel yang memberikan sensasi relaksasi alami saat dipijak.",
    material: "Teak Wood",
    finish: "Natural Oil",
    dimensions: "50cm x 35cm x 1.5cm",
    image: "/keset/keset3.jpg",
    gallery: ["/keset/keset1.jpg", "/keset/keset2.jpg", "/keset/keset4.jpg"],
  },

  // 6. KATEGORI: PLATE
  {
    id: "pl-1",
    name: "Piring Makan Kayu Bulat",
    slug: "piring-makan-kayu-bulat",
    category: "plate",
    description:
      "Piring saji makanan organik, sangat cocok untuk presentasi menu hidangan kafe premium.",
    material: "Solid Teak Wood",
    finish: "Food Grade Beeswax",
    dimensions: "Diameter 22cm, Tinggi 2cm",
    image: "/plate/plate1.jpg",
    gallery: ["/plate/plate2.jpg", "/plate/plate3.jpg", "/plate/plate4.jpg"],
  },

  // 7. KATEGORI: TRAY
  {
    id: "tr-1",
    name: "Nampan Saji Jati Rectangular",
    slug: "nampan-saji-jati-rectangular",
    category: "tray",
    description:
      "Nampan saji dengan pegangan ergonomis untuk memudahkan penyajian minuman skala besar.",
    material: "Premium Teak Wood",
    finish: "Food Grade Beeswax",
    dimensions: "45cm x 30cm x 4cm",
    image: "/tray/tray1.jpg",
    gallery: ["/tray/tray2.jpg", "/tray/tray3.jpg", "/tray/tray4.jpg"],
  },

  {
    id: "tr-2",
    name: "Piring Saji Jati Rectangular",
    slug: "Piring-saji-jati-rectangular",
    category: "tray",
    description:
      "Nampan saji dengan pegangan ergonomis untuk memudahkan penyajian minuman skala besar.",
    material: "Premium Teak Wood",
    finish: "Food Grade Beeswax",
    dimensions: "45cm x 30cm x 4cm",
    image: "/tray1/tray1.1.jpg",
    gallery: ["/tray1/tray1.2.jpg", "/tray1/tray1.3.jpg", "/tray1/tray1.4.jpg"],
  },

  // 8. KATEGORI: WALL DECOR
  {
    id: "wd-1",
    name: "Hiasan Dinding Relief Kayu",
    slug: "hiasan-dinding-relief-kayu",
    category: "wall decor",
    description:
      "Dekorasi dinding estetik yang menonjolkan tekstur kasar and artistik asli kayu Jepara.",
    material: "Mahogany Wood",
    finish: "Clear Matte Finish",
    dimensions: "30cm x 30cm x 2cm",
    image: "/wall_decor1/wall_decor1.1.png",
    gallery: [
      "/wall_decor1/wall_decor1.2.jpg",
      "/wall_decor1/wall_decor1.3.jpg",
      "/wall_decor1/wall_decor1.4.jpg",
    ],
  },

  {
    id: "wd-2",
    name: "Hiasan Dinding Relief Kayu",
    slug: "hiasan-dinding-relief-kayu-2",
    category: "wall decor",
    description:
      "Dekorasi dinding estetik yang menonjolkan tekstur kasar and artistik asli kayu Jepara.",
    material: "Mahogany Wood",
    finish: "Clear Matte Finish",
    dimensions: "30cm x 30cm x 2cm",
    image: "/wall_decor2/wall_decor2.1.png",
    gallery: [
      "/wall_decor2/wall_decor2.2.jpg",
      "/wall_decor2/wall_decor2.3.png",
      "/wall_decor2/wall_decor2.4.png",
    ],
  },
  {
    id: "wd-3",
    name: "Hiasan Dinding Relief Kayu",
    slug: "hiasan-dinding-relief-kayu-3",
    category: "wall decor",
    description:
      "Dekorasi dinding estetik yang menonjolkan tekstur kasar and artistik asli kayu Jepara.",
    material: "Mahogany Wood",
    finish: "Clear Matte Finish",
    dimensions: "30cm x 30cm x 2cm",
    image: "/wall_decor3/wall_decor3.1.jpg",
    gallery: [
      "/wall_decor3/wall_decor3.2.jpg",
      "/wall_decor3/wall_decor3.3.jpg",
      "/wall_decor3/wall_decor3.4.jpg",
    ],
  },
];
