"use client";

import React, { useEffect } from "react";
import ContactForm from "@/components/ui/ContactForm";

export default function ContactPage() {
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

  return (
    <main style={{ paddingTop: "8rem" }}>
      {/* Page Hero */}
      <section className="page-hero">
        <span className="section-label reveal d1">Fale Conosco</span>
        <h1 className="page-hero-title reveal d2">Vamos conversar?</h1>
        <p className="page-hero-desc reveal d3">
          Estamos ansiosos para ouvir sua história e planejar os registros afetivos da sua família. 
          Preencha o formulário abaixo ou fale diretamente via WhatsApp.
        </p>
      </section>

      {/* Main split grid */}
      <section style={{ borderBottom: "1px solid var(--border)" }}>
        <div className="sobre-grid">
          {/* Contact Details */}
          <div className="sobre-text-wrapper reveal d1">
            <span className="section-label">Informações de Contato</span>
            <h2 className="sobre-title" style={{ fontSize: "2.8rem" }}>Daniel & Jaiane</h2>
            <p className="sobre-paragraph" style={{ marginTop: "1.5rem" }}>
              Nossos encontros de planejamento e cafés presenciais são agendados previamente. 
              Fique à vontade para nos mandar uma mensagem. Respondemos em até 24 horas.
            </p>

            <div style={{ marginTop: "3rem", display: "flex", flexDirection: "column", gap: "2rem" }}>
              <div>
                <h4 style={{ fontFamily: "var(--font-body)", color: "var(--accent)", fontWeight: "600", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                  WhatsApp & Telefone
                </h4>
                <a 
                  href="https://wa.me/5516991609339" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="cursor-interactive" 
                  style={{ fontSize: "1.2rem", color: "var(--text)", fontWeight: "400", textDecoration: "underline" }}
                >
                  16 99160-9339
                </a>
              </div>

              <div>
                <h4 style={{ fontFamily: "var(--font-body)", color: "var(--accent)", fontWeight: "600", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                  E-mail
                </h4>
                <a 
                  href="mailto:contato@lavigo.com.br" 
                  className="cursor-interactive" 
                  style={{ fontSize: "1.2rem", color: "var(--text)", fontWeight: "400", textDecoration: "underline" }}
                >
                  contato@lavigo.com.br
                </a>
              </div>

              <div>
                <h4 style={{ fontFamily: "var(--font-body)", color: "var(--accent)", fontWeight: "600", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                  Redes Sociais
                </h4>
                <a 
                  href="https://instagram.com/lavigoprod" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="cursor-interactive" 
                  style={{ fontSize: "1.2rem", color: "var(--text)", fontWeight: "400", textDecoration: "underline" }}
                >
                  @lavigoprod
                </a>
              </div>

              <div>
                <h4 style={{ fontFamily: "var(--font-body)", color: "var(--accent)", fontWeight: "600", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                  Localização
                </h4>
                <p style={{ fontSize: "1.1rem", color: "var(--text-muted)" }}>
                  Ibitinga, SP · Brasil <br />
                  Atendimento em estúdio residencial com agendamento prévio.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form card */}
          <div className="reveal d2" style={{ backgroundColor: "var(--bg-secondary)", padding: "3rem 2.5rem", border: "1px solid var(--border)", borderRadius: "2px" }}>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "2rem", marginBottom: "0.5rem" }}>
              Envie sua mensagem
            </h3>
            <p style={{ fontSize: "0.95rem", color: "var(--text-muted)", marginBottom: "2rem" }}>
              Diga-nos que tipo de registro você deseja e as datas de preferência.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
