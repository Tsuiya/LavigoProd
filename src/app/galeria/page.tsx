import React from "react";
import type { Metadata } from "next";
import GaleriaClientPage from "@/components/pages/GaleriaClientPage";

export const metadata: Metadata = {
  title: "Galeria & Portfólio de Histórias | Lavigo Studios",
  description: "Explore nosso portfólio real de ensaios e filmes de casamento, civil, gestante, newborn e família. Capturas sob luz natural em Ibitinga, Araraquara, Bauru, Jaú e região.",
  keywords: "portfolio fotografo ibitinga, fotos casamento civil ibitinga, ensaio gestante fotos sp, newborn fotos jau, aniversario infantil bauru, video casamento portfolio",
  openGraph: {
    title: "Galeria de Histórias Reais | Lavigo Studios",
    description: "Nossos trabalhos fotográficos e produções audiovisuais reais. Casamentos, maternidade e ensaios no interior paulista.",
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
