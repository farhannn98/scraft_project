// src/context/LanguageContext.tsx
"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "id" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("id");

  // Membaca preferensi bahasa yang disimpan di browser agar saat di-refresh tidak kembali ke awal
  useEffect(() => {
    const savedLang = localStorage.getItem("scraft_lang") as Language;
    if (savedLang === "id" || savedLang === "en") {
      setLanguage(savedLang);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("scraft_lang", lang);
  };

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage: handleSetLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
