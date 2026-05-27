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
  return {
    title: `Galeria ${service.title} | Lavigo Studios`,
    description: `Amostra de registros fotográficos da categoria ${service.title} por Lavigo Studios.`,
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

  return (
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
  );
}
