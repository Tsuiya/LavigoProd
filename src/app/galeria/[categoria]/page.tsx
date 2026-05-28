import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { servicesData } from "@/lib/services";
import ServiceGallery from "@/components/gallery/ServiceGallery";
import Link from "next/link";

interface RouteParams {
  params: Promise<{ categoria: string }>;
}

export async function generateMetadata({ params }: RouteParams): Promise<Metadata> {
  const { categoria } = await params;
  
  // Map custom category URL slugs to services database keys
  let serviceKey = categoria;
  if (categoria === "casamento-civil") serviceKey = "casamentos";
  if (categoria === "casamento-religioso") serviceKey = "filmes-emocionais";
  if (categoria === "infantil" || categoria === "aniversario") serviceKey = "familia";

  const service = servicesData[serviceKey];
  if (!service) return {};

  const formattedTitle = `Galeria ${service.title} | Lavigo Studios`;
  const formattedDesc = `Confira nosso portfólio real e fotos de ${service.title.toLowerCase()} em Ibitinga, Araraquara, Bauru, Jaú e região. Registros que atravessam gerações.`;
  const customKeywords = `fotos ${categoria} ibitinga, galeria ${service.id} jau, fotos ${service.id} bauru, ${service.id} araraquara, lavigo studios`;

  return {
    title: formattedTitle,
    description: formattedDesc,
    keywords: customKeywords,
    openGraph: {
      title: formattedTitle,
      description: formattedDesc,
      url: `https://lavigo.com.br/galeria/${categoria}`,
      type: "website",
    }
  };
}

export default async function CategoryGalleryPage({ params }: RouteParams) {
  const { categoria } = await params;

  // Map custom category URL slugs to services database keys
  let serviceKey = categoria;
  if (categoria === "casamento-civil") serviceKey = "casamentos";
  if (categoria === "casamento-religioso") serviceKey = "filmes-emocionais";
  if (categoria === "infantil" || categoria === "aniversario") serviceKey = "familia";

  const service = servicesData[serviceKey];

  if (!service) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": `Galeria de ${service.title} | Lavigo Studios`,
    "description": `Portfólio com mostras de ${service.title.toLowerCase()} registrados sob luz natural e com direção afetiva no interior paulista.`,
    "url": `https://lavigo.com.br/galeria/${categoria}`,
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
      <main style={{ paddingTop: "8rem" }}>
      {/* Page Hero */}
      <section className="page-hero">
        <span className="section-label">Galeria Privada</span>
        <h1 className="page-hero-title">Portfólio: {service.title}</h1>
        <p className="page-hero-desc">
          Explorando registros reais e cheios de sentimentos de {service.title.toLowerCase()}. 
          Tudo feito sob luz natural e com direção afetiva dedicada.
        </p>
      </section>

      {/* Gallery Section */}
      <section>
        <ServiceGallery 
          gallery={service.gallery} 
          title={service.title} 
          tag={service.tag} 
        />

        <div style={{ textAlign: "center", marginTop: "5rem" }}>
          <Link href="/galeria" className="btn btn-secondary cursor-interactive" style={{ marginRight: "1rem" }}>
            ← Voltar para Portfólio
          </Link>
          <Link href="/contato" className="btn btn-primary cursor-interactive">
            Agendar Sessão
          </Link>
        </div>
      </section>
    </main>
    </>
  );
}
