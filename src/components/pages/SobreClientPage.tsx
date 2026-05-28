"use client";

import React, { useState, useEffect } from "react";

interface FAQItem {
  q: string;
  a: string;
}

const faqs: FAQItem[] = [
  {
    q: "Quais regiões vocês atendem com fotografia e vídeo?",
    a: "Nossa sede é em Ibitinga, SP, mas cobrimos ativamente toda a região do interior paulista (como Araraquara, Bauru, Jaú, Ribeirão Preto, São Carlos, Matão, Borborema, Itápolis, Tabatinga, Nova Europa e Gavião Peixoto). Também estamos disponíveis para viagens nacionais e casamentos fora do estado."
  },
  {
    q: "Qual é o prazo de entrega das fotos e filmes?",
    a: "Para ensaios de gestante, newborn e família, o prazo de entrega das fotos tratadas na galeria online é de até 15 dias úteis. Para casamentos e filmes cinematográficos, a entrega completa com o álbum encadernado em linho é feita em até 45 dias úteis."
  },
  {
    q: "Nós não sabemos posar para fotos. Como funciona?",
    a: "Não se preocupe! Nós não trabalhamos com poses rígidas ou sorrisos forçados. Praticamos a 'direção afetiva': guiamos interações leves, conversas e brincadeiras para que vocês esqueçam a câmera. O resultado são imagens dinâmicas e com sentimentos reais."
  },
  {
    q: "Vocês fornecem roupas para ensaio gestante?",
    a: "Acreditamos na autenticidade de cada mulher. Por isso, orientamos que você use roupas do seu próprio guarda-roupa que reflitam quem você realmente é. No briefing inicial, oferecemos assessoria completa sobre paletas de cores neutras e caimentos que valorizam a silhueta."
  },
  {
    q: "Quando devo agendar o ensaio Newborn?",
    a: "O ensaio newborn (lifestyle) deve ser reservado ainda na gestação. Nós fazemos um pré-cadastro com base na data prevista do parto e deixamos dias flexíveis em nossa agenda. A data oficial da sessão é confirmada logo após o nascimento do bebê."
  }
];

export default function SobreClientPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <main style={{ paddingTop: "8rem" }}>
      <section className="page-hero">
        <span className="section-label reveal d1">Quem somos</span>
        <h1 className="page-hero-title reveal d2">Daniel & Jaiane</h1>
        <p className="page-hero-desc reveal d3">
          Acreditamos que a fotografia não é sobre câmeras e lentes, mas sim sobre a sensibilidade de documentar conexões silenciosas.
        </p>
      </section>

      <section>
        <div className="sobre-grid">
          <div className="sobre-text-wrapper reveal d1">
            <span className="section-label">Nossa Alma</span>
            <h2 className="sobre-title" style={{ fontSize: "2.8rem" }}>Uma paixão por guardar legados familiares</h2>
            <p className="sobre-paragraph" style={{ marginTop: "1.5rem" }}>
              A Lavigo Studios nasceu do nosso amor compartilhado pela narrativa visual e pela continuidade de histórias. Daniel, com seu olhar afiado para a iluminação natural e enquadramentos cinematográficos, e Jaiane, com sua doçura na direção afetiva e cuidado na manipulação delicada de recém-nascidos, formam uma dupla complementar.
            </p>
            <p className="sobre-paragraph">
              Sediados em Ibitinga, SP, nos especializamos em criar registros elegantes e sem exageros artificiais. Não vendemos arquivos digitais frios ou álbuns cheios de efeitos especiais digitais. Vendemos a lembrança tangível do abraço do seu parceiro antes de subirem ao altar, do tamanho da mão do seu bebê nas primeiras duas semanas e da cumplicidade do seu lar.
            </p>
            <p className="sobre-paragraph">
              Seja para fotografia ou gravação de filmes no interior de São Paulo, estamos prontos para ir ao seu encontro nas cidades de Araraquara, Bauru, Jaú, Ribeirão Preto, São Carlos, Matão, Borborema, Itápolis e Tabatinga. Pensamos em cada clique como o dia em que seus netos vão folhear o álbum de vocês, sentindo a mesma emoção que foi vivida hoje.
            </p>
          </div>

          <div className="sobre-img-container reveal d2">
            <img className="sobre-img" src="https://res.cloudinary.com/drczznkji/image/upload/v1778903611/Daniel_Jaiane_lxw9w5.png" alt="Retrato artístico de Daniel e Jaiane" />
          </div>
        </div>
      </section>
      
      <section className="faq-section" style={{ backgroundColor: "var(--bg-secondary)", borderBottom: "1px solid var(--border)" }}>
        <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
          <span className="section-label reveal d1">FAQ</span>
          <h2 className="section-title reveal d2" style={{ margin: "1rem auto 0 auto" }}>Dúvidas frequentes</h2>
          <p className="reveal d3" style={{ color: "var(--text-muted)", marginTop: "1rem" }}>
            Respondemos a algumas das perguntas mais comuns de nossos clientes sobre o processo dos ensaios e entregas.
          </p>
        </div>

        <div className="faq-grid reveal d1" style={{ margin: "4rem auto 0 auto" }}>
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={`faq-item ${openFaq === idx ? "active" : ""}`}
            >
              <button 
                className="faq-question-btn cursor-interactive" 
                onClick={() => toggleFaq(idx)}
                aria-expanded={openFaq === idx}
              >
                {faq.q}
                <span>{openFaq === idx ? "−" : "+"}</span>
              </button>
              <div 
                className="faq-answer"
                style={{ 
                  maxHeight: openFaq === idx ? "200px" : "0px",
                  transition: "max-height 0.4s ease, padding 0.4s ease"
                }}
              >
                <p>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* final CTA */}
      <section id="cta-final" style={{ backgroundColor: "var(--bg)", borderTop: "none" }}>
        <div className="cta-container reveal">
          <h2 className="cta-heading">
            Gostaria de agendar um café para conversarmos?
          </h2>
          <p className="cta-sub">Sediados em Ibitinga, SP, mas cobrimos ensaios e eventos em todo o interior paulista.</p>
          <a href="https://wa.me/5516991609339" target="_blank" rel="noopener noreferrer" className="btn btn-primary cursor-interactive">
            Falar pelo WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}
