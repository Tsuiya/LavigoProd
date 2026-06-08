import React from "react";
import type { Metadata } from "next";
import HomeClientPage from "@/components/pages/HomeClientPage";

export const metadata: Metadata = {
  title: "Lavigo Studios | Fotógrafo e Cinegrafista em Ibitinga e Itápolis SP",
  description: "Estúdio fotográfico boutique especializado em fotografia e filmes de casamento, gestante, newborn e família. Fotógrafo, videomaker e cinegrafista em Ibitinga, Itápolis e região (Araraquara, Bauru, Jaú, São Carlos).",
  keywords: "fotógrafo ibitinga, fotógrafo itápolis, fotógrafo em ibitinga, fotógrafo em itápolis, cinegrafista ibitinga, cinegrafista itápolis, cinegrafista em ibitinga, cinegrafista em itápolis, videomaker ibitinga, videomaker itápolis, estúdio fotográfico ibitinga, estúdio fotográfico itápolis, fotógrafo de casamento ibitinga, cinegrafista de casamento itápolis, videomaker de casamento ibitinga, ensaio gestante ibitinga, newborn itápolis, fotografia de família, lavigo studios, lavigo produções",
  openGraph: {
    title: "Lavigo Studios | Fotografia e Filmes em Ibitinga, Itápolis e Região",
    description: "Registros poéticos sob luz natural. Maternidade, casais, família e casamentos no interior paulista (Ibitinga, Itápolis, Araraquara, Bauru, Jaú, São Carlos e Matão).",
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
        "name": "Lavigo Studios | Fotógrafo e Cinegrafista em Ibitinga e Itápolis SP",
        "isPartOf": { "@id": "https://lavigo.com.br/#website" },
        "about": { "@id": "https://lavigo.com.br/#organization" },
        "primaryImageOfPage": {
          "@type": "ImageObject",
          "url": "https://res.cloudinary.com/drczznkji/image/upload/v1779989913/Daniel_Jaiane_ama6yy.webp"
        },
        "inLanguage": "pt-BR"
      },
      {
        "@type": "FAQPage",
        "@id": "https://lavigo.com.br/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Onde encontrar um estúdio fotográfico ou fotógrafo em Ibitinga e Itápolis?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Se você busca um estúdio fotográfico ou fotógrafo em Ibitinga, Itápolis e região, a Lavigo Studios oferece atendimento personalizado de forma externa ou lifestyle no aconchego do seu lar. Especializados em ensaios gestante, newborn e de família, levamos toda a sensibilidade e direção afetiva até você."
            }
          },
          {
            "@type": "Question",
            "name": "Vocês trabalham com vídeo de casamento, cinegrafista e videomaker na região?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Sim! Além da fotografia, somos videomakers e cinegrafistas especializados em filmes de casamento em Ibitinga, Itápolis, Araraquara, Bauru, Jaú e demais cidades da região. Criamos documentários cinematográficos e teasers poéticos da sua cerimônia."
            }
          },
          {
            "@type": "Question",
            "name": "Como funciona o ensaio gestante e newborn da Lavigo em Itápolis e Ibitinga?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Nossos ensaios de maternidade são feitos com luz natural e foco no afeto real. O ensaio gestante pode ser realizado em locações externas na região de Ibitinga e Itápolis ou em estilo lifestyle na sua própria casa. Já a fotografia newborn é realizada exclusivamente de forma residencial (home lifestyle), respeitando o ritmo e a segurança do bebê."
            }
          },
          {
            "@type": "Question",
            "name": "Como solicitar um orçamento de fotografia e vídeo de casamento?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Para receber uma proposta personalizada para seu casamento, ensaio de casal, gestante, newborn ou infantil, entre em contato conosco pelo WhatsApp ou através de nossa página de contato. Atendemos ativamente noivas e famílias em todo o interior paulista, incluindo Borborema, Tabatinga, Matão e São Carlos."
            }
          }
        ]
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
