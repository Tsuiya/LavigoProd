"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { servicesData } from "@/lib/services";

export default function ServicosClientPage() {
  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
          }
        });
      },
      { root: null, threshold: 0.1 }
    );

    document.querySelectorAll(".reveal").forEach((el) => {
      revealObserver.observe(el);
    });

    return () => revealObserver.disconnect();
  }, []);

  const openContact = (service?: string) => {
    window.dispatchEvent(
      new CustomEvent("open-contact-modal", { detail: { service } })
    );
  };

  const services = Object.values(servicesData);

  return (
    <main style={{ paddingTop: "8rem" }}>
      <section className="page-hero">
        <span className="section-label reveal d1">O que fazemos</span>
        <h1 className="page-hero-title reveal d2">Registros de Amor & Continuidade</h1>
        <p className="page-hero-desc reveal d3">
          Acompanhamos sua história familiar em cada etapa. Da cumplicidade do casal ao primeiro filho, do nascimento ao crescimento anual, registramos memórias reais com sensibilidade documental em Ibitinga, Araraquara, Bauru, Jaú, São Carlos, Matão e região.
        </p>
      </section>

      <section>
        <div style={{ display: "flex", flexDirection: "column", gap: "6rem" }}>
          {services.map((service, idx) => (
            <div 
              key={service.id} 
              className={`sobre-grid reveal`}
              style={{ 
                gridTemplateColumns: idx % 2 === 0 ? "1fr 1fr" : "1.1fr 0.9fr",
                direction: idx % 2 === 0 ? "ltr" : "rtl"
              }}
            >
              {/* Text area */}
              <div 
                className="sobre-text-wrapper" 
                style={{ 
                  direction: "ltr", 
                  textAlign: idx % 2 === 0 ? "left" : "right",
                  marginLeft: idx % 2 !== 0 ? "auto" : "0"
                }}
              >
                <span className="section-label" style={{ color: "var(--gold)" }}>{service.tag}</span>
                <h2 className="sobre-title" style={{ fontSize: "3rem", marginBottom: "1rem" }}>{service.title}</h2>
                <p className="sobre-paragraph" style={{ fontSize: "1.1rem" }}>{service.description}</p>
                <p className="sobre-paragraph">{service.detailDescription}</p>
                
                <div style={{ margin: "2rem 0", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <h4 style={{ fontFamily: "var(--font-body)", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: "600", color: "var(--accent)" }}>
                    O que está incluso:
                  </h4>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem", marginTop: "0.5rem", fontSize: "0.95rem", color: "var(--text-muted)", textAlign: "left", width: "fit-content", marginLeft: idx % 2 !== 0 ? "auto" : "0" }}>
                    {service.included.slice(0, 3).map((inc, i) => (
                      <li key={i} style={{ display: "flex", gap: "0.5rem", alignItems: "flex-start" }}>
                        <span style={{ color: "var(--gold)" }}>✓</span>
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div style={{ display: "flex", gap: "1.5rem", justifyContent: idx % 2 === 0 ? "flex-start" : "flex-end", flexWrap: "wrap", alignItems: "center" }}>
                  <div>
                    <span className="service-price-label" style={{ display: "block" }}>Valor base</span>
                    <span className="service-price" style={{ fontSize: "1.5rem", fontWeight: "500" }}>{service.price}</span>
                  </div>
                  <div style={{ display: "flex", gap: "1rem" }}>
                    <Link href={`/servicos/${service.id}`} className="btn btn-secondary cursor-interactive">
                      Ver detalhes
                    </Link>
                    <button 
                      onClick={() => openContact(service.id)} 
                      className="btn btn-primary cursor-interactive"
                    >
                      Reservar
                    </button>
                  </div>
                </div>
              </div>

              {/* Photo Area */}
              <div 
                className="sobre-img-container" 
                style={{ 
                  direction: "ltr",
                  paddingTop: "75%" /* 4:3 Aspect */
                }}
              >
                <img 
                  className="sobre-img" 
                  src={service.coverImage} 
                  alt={`Amostra de portfólio para ${service.title}`} 
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Booking Invite CTA */}
      <section id="cta-final" style={{ backgroundColor: "var(--bg-secondary)", borderTop: "none" }}>
        <div className="cta-container reveal">
          <h2 className="cta-heading" style={{ fontSize: "3rem" }}>
            &ldquo;Registrar o presente é desenhar a ponte para a saudade do futuro.&rdquo;
          </h2>
          <p className="cta-sub">Tem um projeto em mente? Entre em contato e monte um pacote personalizado para a sua cidade.</p>
          <button onClick={() => openContact()} className="btn btn-primary cursor-interactive">
            Iniciar Conversa →
          </button>
        </div>
      </section>
    </main>
  );
}
