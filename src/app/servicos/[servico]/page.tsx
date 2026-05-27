import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { servicesData } from "@/lib/services";
import ServiceGallery from "@/components/gallery/ServiceGallery";
import BookServiceButton from "@/components/ui/BookServiceButton";
import Link from "next/link";

interface RouteParams {
  params: Promise<{ servico: string }>;
}

export async function generateMetadata({ params }: RouteParams): Promise<Metadata> {
  const { servico } = await params;
  const service = servicesData[servico];
  if (!service) return {};
  return {
    title: `${service.title} | Serviços | Lavigo Studios`,
    description: service.description,
  };
}

export default async function ServicePage({ params }: RouteParams) {
  const { servico } = await params;
  const service = servicesData[servico];

  if (!service) {
    notFound();
  }

  return (
    <main style={{ paddingTop: "8rem" }}>
      {/* Editorial Page Hero */}
      <section className="page-hero">
        <span className="section-label">{service.tag}</span>
        <h1 className="page-hero-title">{service.title}</h1>
        <p className="page-hero-desc">{service.description}</p>
      </section>

      {/* Detail Grid */}
      <section>
        <div className="sobre-grid">
          {/* Bio Description / Deliverables */}
          <div className="sobre-text-wrapper">
            <span className="section-label">Detalhes da Experiência</span>
            <h2 className="sobre-title" style={{ fontSize: "2.8rem" }}>Direção afetiva e sensibilidade</h2>
            <p className="sobre-paragraph" style={{ marginTop: "1.5rem" }}>
              {service.detailDescription}
            </p>
            
            <div style={{ margin: "3rem 0" }}>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.8rem", marginBottom: "1.5rem", color: "var(--text)" }}>
                O que está incluso no pacote:
              </h3>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "1rem" }}>
                {service.included.map((item, index) => (
                  <li key={index} style={{ display: "flex", gap: "0.8rem", alignItems: "flex-start", fontSize: "1.05rem", color: "var(--text-muted)" }}>
                    <span style={{ color: "var(--gold)", fontSize: "1.2rem", lineHeight: "1" }}>✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ display: "flex", gap: "2rem", alignItems: "center", flexWrap: "wrap", marginTop: "2rem" }}>
              <div>
                <span className="service-price-label" style={{ display: "block" }}>Investimento</span>
                <span className="service-price" style={{ fontSize: "1.8rem", fontWeight: "500" }}>{service.price}</span>
              </div>
              <BookServiceButton serviceId={service.id} />
            </div>
          </div>

          {/* Large cover image */}
          <div className="sobre-img-container" style={{ paddingTop: "120%" }}>
            <img className="sobre-img" src={service.coverImage} alt={service.title} />
          </div>
        </div>
      </section>

      {/* How it works (Process Steps) */}
      <section style={{ backgroundColor: "var(--bg-secondary)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 5rem auto" }}>
          <span className="section-label">Nosso fluxo de trabalho</span>
          <h2 className="section-title" style={{ margin: "1rem auto 0 auto" }}>Como funciona a experiência</h2>
        </div>

        <div className="pillars-grid" style={{ maxWidth: "1200px", margin: "0 auto" }}>
          {service.process.map((stepItem, index) => (
            <div key={index} className="pillar-card" style={{ borderLeftColor: "var(--gold)" }}>
              <span className="pillar-num">{stepItem.step} /</span>
              <h3 className="pillar-title">{stepItem.title}</h3>
              <p className="pillar-desc" style={{ fontSize: "1rem" }}>{stepItem.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Category Gallery Preview */}
      <section>
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
          <span className="section-label">Amostras de Ensaio</span>
          <h2 className="section-title" style={{ margin: "1rem auto 0 auto" }}>Visualizando a Entrega</h2>
        </div>

        <ServiceGallery 
          gallery={service.gallery} 
          title={service.title} 
          tag={service.tag} 
        />

        <div style={{ textAlign: "center", marginTop: "5rem" }}>
          <Link href="/servicos" className="btn btn-secondary cursor-interactive" style={{ marginRight: "1rem" }}>
            ← Voltar para Serviços
          </Link>
          <BookServiceButton serviceId={service.id} label="Reservar este Ensaio" />
        </div>
      </section>
    </main>
  );
}
