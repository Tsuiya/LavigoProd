"use client";

import React, { useEffect } from "react";
import JourneyTimeline from "@/components/sections/JourneyTimeline";

export default function JornadaClientPage() {
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

  const openContact = (service = "Selecione") => {
    window.dispatchEvent(
      new CustomEvent("open-contact-modal", { detail: { service } })
    );
  };

  return (
    <main style={{ paddingTop: "8rem" }}>
      {/* Page Hero */}
      <section className="page-hero">
        <span className="section-label reveal d1">Tempo e Afeto</span>
        <h1 className="page-hero-title reveal d2">Desde o início, lado a lado com você</h1>
        <p className="page-hero-desc reveal d3">
          Acreditamos que as fotos mais bonitas são aquelas que contam uma história inteira.
          Estamos aqui para acompanhar a trajetória da sua família no seu próprio ritmo, sendo uma alternativa afetiva em Ibitinga, Araraquara, Bauru, Jaú, São Carlos e região para guardar cada um dos seus melhores momentos.
        </p>
      </section>

      {/* Main Timeline Section */}
      <section style={{ borderBottom: "1px solid var(--border)" }}>
        <JourneyTimeline />
      </section>

      {/* Physical Materials / High-end Delivery section */}
      <section>
        <div className="sobre-grid">
          <div className="sobre-img-container" style={{ paddingTop: "100%" }}>
            <img 
              className="sobre-img" 
              src="https://res.cloudinary.com/drczznkji/image/upload/v1778606157/Still_2026-05-12_141454_1.1.1_tavxdp.jpg?_s=public-apps" 
              alt="Caixas e impressões de fotos em madeira e linho" 
            />
          </div>

          <div className="sobre-text-wrapper reveal">
            <span className="section-label">A Entrega Física</span>
            <h2 className="sobre-title" style={{ fontSize: "2.8rem" }}>Arte para ser tocada, não apenas clicada</h2>
            <p className="sobre-paragraph" style={{ marginTop: "1.5rem" }}>
              Acreditamos que uma foto só ganha corpo quando impressa. Por isso, todos os nossos pacotes principais incluem entregas físicas de alto padrão, selecionadas em ateliês especializados em linho de alta costura e marcenaria artesanal.
            </p>
            <p className="sobre-paragraph">
              Não entregamos apenas um link de download. Entregamos uma caixa de linho com ampliações em papel algodão fine art, e pendrives de madeira esculpida. Produtos desenhados para durar séculos e resistir ao tempo digital.
            </p>

            <div style={{ marginTop: "2rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
              <div>
                <h4 style={{ fontFamily: "var(--font-body)", color: "var(--accent)", fontWeight: "600", fontSize: "0.9rem", textTransform: "uppercase" }}>
                  Papel de Algodão
                </h4>
                <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginTop: "0.2rem" }}>
                  Impressões Fine Art que mantém cores fiéis por mais de 100 anos.
                </p>
              </div>
              <div>
                <h4 style={{ fontFamily: "var(--font-body)", color: "var(--accent)", fontWeight: "600", fontSize: "0.9rem", textTransform: "uppercase" }}>
                  Estojos em Linho
                </h4>
                <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginTop: "0.2rem" }}>
                  Caixas revestidas à mão com fechamento magnético e gravação.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Booking Invite */}
      <section id="cta-final" style={{ backgroundColor: "var(--bg-secondary)", borderTop: "none" }}>
        <div className="cta-container reveal">
          <h2 className="cta-heading" style={{ fontSize: "3rem" }}>
            &ldquo;Os momentos que definem quem você é merecem um registro físico de respeito.&rdquo;
          </h2>
          <p className="cta-sub">Escolha ter um registro completo da sua trajetória familiar com toda a leveza e cuidado que sua história merece no interior de São Paulo.</p>
          <button onClick={() => openContact()} className="btn btn-primary cursor-interactive">
            Vamos conversar?
          </button>
        </div>
      </section>
    </main>
  );
}
