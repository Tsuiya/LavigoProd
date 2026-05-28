import React from "react";
import type { Metadata } from "next";
import HomeClientPage from "@/components/pages/HomeClientPage";

export const metadata: Metadata = {
  title: "Lavigo Studios | Fotógrafo em Ibitinga SP | Fotografia e Filmes de Família, Maternidade e Casamento",
  description: "Produtora boutique premium de fotografia e filmes artísticos em Ibitinga, SP. Especializada em ensaio gestante, newborn, casais, aniversários e casamentos. Atendendo Bauru, Jaú, Araraquara, São Carlos e região.",
  keywords: "fotografo ibitinga, fotografia de familia ibitinga, ensaio gestante ibitinga, newborn ibitinga, filmes de casamento ibitinga, fotografo araraquara, fotografo bauru, fotografo jau, fotografo sao carlos, ensaio gestante jau, newborn bauru, video de casamento jau, produtor de video ibitinga, ensaio de casal sp",
  openGraph: {
    title: "Lavigo Studios | Fotografia e Filmes de Casamento, Maternidade e Família em Ibitinga e Região",
    description: "Registros poéticos sob luz natural. Maternidade, casais, família e casamentos no interior paulista (Ibitinga, Araraquara, Bauru, Jaú, São Carlos e Matão).",
    url: "https://lavigo.com.br",
    type: "website",
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "PhotographyBusiness",
    "name": "Lavigo Studios",
    "image": "https://res.cloudinary.com/drczznkji/image/upload/v1778903611/Daniel_Jaiane_lxw9w5.png",
    "@id": "https://lavigo.com.br/#organization",
    "url": "https://lavigo.com.br",
    "telephone": "+5516991609339",
    "priceRange": "$$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Estúdio Residencial com agendamento",
      "addressLocality": "Ibitinga",
      "addressRegion": "SP",
      "postalCode": "14940-000",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -21.7583,
      "longitude": -48.8292
    },
    "areaServed": [
      { "@type": "AdministrativeArea", "name": "Ibitinga" },
      { "@type": "AdministrativeArea", "name": "Araraquara" },
      { "@type": "AdministrativeArea", "name": "Bauru" },
      { "@type": "AdministrativeArea", "name": "Jaú" },
      { "@type": "AdministrativeArea", "name": "São Carlos" },
      { "@type": "AdministrativeArea", "name": "Ribeirão Preto" },
      { "@type": "AdministrativeArea", "name": "Matão" },
      { "@type": "AdministrativeArea", "name": "Borborema" },
      { "@type": "AdministrativeArea", "name": "Itápolis" },
      { "@type": "AdministrativeArea", "name": "Tabatinga" },
      { "@type": "AdministrativeArea", "name": "Nova Europa" },
      { "@type": "AdministrativeArea", "name": "Gavião Peixoto" }
    ],
    "description": "Produtora boutique premium de fotografia e filmes no interior paulista. Especializada em ensaio gestante, newborn, família e casamentos civis e religiosos.",
    "founder": [
      {
        "@type": "Person",
        "name": "Daniel"
      },
      {
        "@type": "Person",
        "name": "Jaiane"
      }
    ],
    "foundingDate": "2021",
    "sameAs": [
      "https://instagram.com/lavigoprod"
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomeClientPage />
    </>
  );
}
