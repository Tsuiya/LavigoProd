import React from "react";
import type { Metadata } from "next";
import ContatoClientPage from "@/components/pages/ContatoClientPage";

export const metadata: Metadata = {
  title: "Contato | Agende seu Ensaio ou Filme | Lavigo Studios",
  description: "Entre em contato com a Lavigo Studios. Agende sessões fotográficas e produções de filmes de casamento, gestante ou newborn em Ibitinga, Araraquara, Bauru, Jaú e região.",
  keywords: "contato lavigo, agendar fotografo ibitinga, whatsapp fotografo ibitinga, ensaio gestante ibitinga, fotos newborn jau, orcamento casamento bauru",
  openGraph: {
    title: "Entre em contato | Lavigo Studios",
    description: "Agende sua sessão de fotos ou filme de casamento com Daniel & Jaiane no interior paulista.",
    url: "https://lavigo.com.br/contato",
    type: "website",
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": "https://lavigo.com.br/contato/#webpage",
    "url": "https://lavigo.com.br/contato",
    "name": "Contato | Lavigo Studios",
    "description": "Entre em contato com a equipe da Lavigo Studios para reservar seu ensaio fotográfico ou cobertura cinematográfica de casamento em Ibitinga e região.",
    "mainEntity": {
      "@type": "PhotographyBusiness",
      "name": "Lavigo Studios",
      "telephone": "+5516991609339",
      "email": "daniel@lavigo.com.br",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Ibitinga",
        "addressRegion": "SP",
        "addressCountry": "BR"
      }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ContatoClientPage />
    </>
  );
}
