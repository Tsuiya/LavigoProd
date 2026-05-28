import React from "react";
import type { Metadata } from "next";
import ServicosClientPage from "@/components/pages/ServicosClientPage";
import { servicesData } from "@/lib/services";

export const metadata: Metadata = {
  title: "Nossos Serviços | Fotografia e Filmes | Lavigo Studios",
  description: "Explore nossos serviços premium de fotografia e filmes no interior paulista. Sessões de gestante, newborn lifestyle, ensaio de casal, aniversários e cobertura de casamentos em Ibitinga e região.",
  keywords: "servicos fotografia ibitinga, ensaio gestante ibitinga, newborn jau, ensaio casal araraquara, fotografo aniversario bauru, video casamento jau, filmagem casamento premium",
  openGraph: {
    title: "Nossos Serviços | Lavigo Studios",
    description: "Ensaios gestante, newborn, casais, famílias e coberturas completas de casamentos civis e religiosos por Daniel & Jaiane.",
    url: "https://lavigo.com.br/servicos",
    type: "website",
  }
};

export default function Page() {
  const services = Object.values(servicesData);
  
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Serviços de Fotografia e Vídeo | Lavigo Studios",
    "description": "Lista de serviços de fotografia afetiva e filmes de casamento oferecidos pela Lavigo Studios em Ibitinga, Araraquara, Bauru, Jaú e região.",
    "url": "https://lavigo.com.br/servicos",
    "itemListElement": services.map((service, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Service",
        "name": service.title,
        "description": service.description,
        "provider": {
          "@type": "PhotographyBusiness",
          "name": "Lavigo Studios",
          "url": "https://lavigo.com.br"
        },
        "offers": {
          "@type": "Offer",
          "price": service.price.replace(/[^0-9]/g, ""),
          "priceCurrency": "BRL"
        }
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServicosClientPage />
    </>
  );
}
