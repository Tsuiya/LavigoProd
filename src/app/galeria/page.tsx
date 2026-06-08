import React from "react";
import type { Metadata } from "next";
import GaleriaClientPage from "@/components/pages/GaleriaClientPage";

export const metadata: Metadata = {
  title: "Galeria & Portfólio de Histórias | Lavigo Studios",
  description: "Explore nosso portfólio real de ensaios e filmes de casamento, civil, gestante, newborn e família. Fotografia e vídeo profissional em Ibitinga, Itápolis e região.",
  keywords: "portfolio fotografo ibitinga, fotógrafo itápolis, cinegrafista ibitinga, cinegrafista itápolis, videomaker ibitinga, videomaker itápolis, estúdio fotográfico ibitinga, estúdio fotográfico itápolis, fotos casamento civil ibitinga, fotos gestante itápolis, newborn fotos ibitinga",
  openGraph: {
    title: "Galeria de Histórias Reais | Lavigo Studios",
    description: "Nossos trabalhos fotográficos e produções audiovisuais reais em Ibitinga, Itápolis e toda a região.",
    url: "https://lavigo.com.br/galeria",
    type: "website",
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": "https://lavigo.com.br/galeria/#webpage",
    "url": "https://lavigo.com.br/galeria",
    "name": "Galeria & Portfólio de Histórias | Lavigo Studios",
    "description": "Portfólio com mostras de casamentos civis, religiosos, ensaios de gestante, newborn e família realizados no interior paulista pela Lavigo Studios.",
    "provider": {
      "@type": "PhotographyBusiness",
      "name": "Lavigo Studios",
      "url": "https://lavigo.com.br"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <GaleriaClientPage />
    </>
  );
}
