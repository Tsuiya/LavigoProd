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
    "@graph": [
      {
        "@type": ["PhotographyBusiness", "LocalBusiness"],
        "@id": "https://lavigo.com.br/#organization",
        "name": "Lavigo Studios",
        "alternateName": "Lavigo Produções",
        "image": [
          "https://res.cloudinary.com/drczznkji/image/upload/v1779989913/Daniel_Jaiane_ama6yy.webp",
          "https://lavigo.com.br/icon.png"
        ],
        "logo": "https://lavigo.com.br/icon.png",
        "url": "https://lavigo.com.br",
        "telephone": "+5516991609339",
        "email": "daniel@lavigo.com.br",
        "priceRange": "$$$",
        "currenciesAccepted": "BRL",
        "paymentAccepted": "Pix, Cartão de Crédito, Transferência Bancária",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Rua José de Biazi, 893",
          "addressLocality": "Ibitinga",
          "addressRegion": "SP",
          "postalCode": "14945-132",
          "addressCountry": "BR"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": -21.7583,
          "longitude": -48.8292
        },
        "hasMap": "https://maps.app.goo.gl/lavigo",
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "09:00",
            "closes": "18:00"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": "Saturday",
            "opens": "09:00",
            "closes": "13:00"
          }
        ],
        "areaServed": [
          { "@type": "City", "name": "Ibitinga", "@id": "https://www.wikidata.org/wiki/Q1265395" },
          { "@type": "City", "name": "Araraquara" },
          { "@type": "City", "name": "Bauru" },
          { "@type": "City", "name": "Jaú" },
          { "@type": "City", "name": "São Carlos" },
          { "@type": "City", "name": "Ribeirão Preto" },
          { "@type": "City", "name": "Matão" },
          { "@type": "City", "name": "Borborema" },
          { "@type": "City", "name": "Itápolis" },
          { "@type": "City", "name": "Tabatinga" },
          { "@type": "City", "name": "Nova Europa" },
          { "@type": "City", "name": "Gavião Peixoto" }
        ],
        "description": "Produtora boutique premium de fotografia e filmes no interior paulista. Especializada em ensaio gestante, newborn, família e casamentos civis e religiosos em Ibitinga, Araraquara, Bauru, Jaú e região.",
        "knowsAbout": [
          "Fotografia de Casamento",
          "Filme de Casamento",
          "Ensaio Gestante",
          "Fotografia Newborn",
          "Ensaio de Família",
          "Fotografia Afetiva",
          "Produção Audiovisual"
        ],
        "founder": [
          { "@type": "Person", "name": "Daniel", "jobTitle": "Fotógrafo e Diretor" },
          { "@type": "Person", "name": "Jaiane", "jobTitle": "Fotógrafa" }
        ],
        "foundingDate": "2021",
        "numberOfEmployees": { "@type": "QuantitativeValue", "value": 2 },
        "sameAs": [
          "https://instagram.com/lavigoprod",
          "https://wa.me/5516991609339"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://lavigo.com.br/#website",
        "url": "https://lavigo.com.br",
        "name": "Lavigo Studios",
        "description": "Fotografia e filmes de casamento, maternidade e família no interior paulista",
        "publisher": { "@id": "https://lavigo.com.br/#organization" },
        "inLanguage": "pt-BR",
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://lavigo.com.br/servicos?q={search_term_string}"
          },
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://lavigo.com.br/#webpage",
        "url": "https://lavigo.com.br",
        "name": "Lavigo Studios | Fotógrafo em Ibitinga SP | Fotografia e Filmes de Família, Maternidade e Casamento",
        "isPartOf": { "@id": "https://lavigo.com.br/#website" },
        "about": { "@id": "https://lavigo.com.br/#organization" },
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": "https://res.cloudinary.com/drczznkji/image/upload/v1779989913/Daniel_Jaiane_ama6yy.webp"
        },
        "inLanguage": "pt-BR"
      }
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
