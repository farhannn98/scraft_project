// src/data/products.ts
import { Product } from "../types/product";

export const products: Product[] = [
  {
    id: "prod-1",
    name: "Premium Teak Wood Serving Tray",
    slug: "premium-teak-serving-tray",
    category: "tableware",
    description:
      "Nampan saji eksklusif yang dibuat langsung oleh pengrajin lokal Jepara dari potongan kayu jati solid pilihan. Memiliki serat kayu alami yang eksotis, kuat, dan dilapisi bahan aman untuk makanan.",
    material: "Solid Teak Wood (Kayu Jati Pilihan)",
    finish: "Food Grade Beeswax",
    dimensions: "40cm x 25cm x 3cm",
    image: "/images/products/tray-1.webp",
  },
  {
    id: "prod-2",
    name: "Minimalist Teak Salad Bowl",
    slug: "minimalist-teak-salad-bowl",
    category: "tableware",
    description:
      "Mangkuk kayu minimalis berdiameter lebar, sangat cocok untuk menyajikan salad, buah, atau sup kering. Desainnya yang lengkung halus memberikan kesan organik dan mewah di meja makan.",
    material: "Solid Teak Wood (Kayu Jati)",
    finish: "Natural Food-Safe Oil",
    dimensions: "Diameter 22cm, Tinggi 8cm",
    image: "/images/products/bowl-1.webp",
  },
  {
    id: "prod-3",
    name: "Ergonomic Wooden Spatula Set",
    slug: "ergonomic-wooden-spatula-set",
    category: "kitchenware",
    description:
      "Satu set alat masak kayu anti gores untuk wajan antilengket Anda. Pegangan ergonomis yang nyaman di tangan dan sangat tahan panas tanpa menghantarkan panas ke tangan.",
    material: "Premium Mahogany Wood",
    finish: "Food-Grade Bio Oil",
    dimensions: "Panjang 32cm - 35cm",
    image: "/images/products/spatula-set.webp",
  },
  {
    id: "prod-4",
    name: "Luxury Teak Coaster Set Set of 4",
    slug: "luxury-teak-coaster-set",
    category: "tableware",
    description:
      "Satu set tatakan gelas kayu jati premium pelindung meja makan Anda dari noda panas atau dingin. Dilengkapi dengan holder minimalis yang rapi untuk penyimpanan.",
    material: "Solid Teak Wood (Kayu Jati Pilihan)",
    finish: "Food Grade Beeswax",
    dimensions: "10cm x 10cm x 1cm",
    image: "/images/products/coaster.webp",
  },
];
