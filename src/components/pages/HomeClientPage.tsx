"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import JourneyTimeline from "@/components/sections/JourneyTimeline";
import GalleryPreview from "@/components/sections/GalleryPreview";

interface FAQItem {
  q: string;
  a: string;
}

const homeFaqs: FAQItem[] = [
  {
    q: "Onde encontrar um estúdio fotográfico ou fotógrafo em Ibitinga e Itápolis?",
    a: "Se você busca um estúdio fotográfico ou fotógrafo em Ibitinga, Itápolis e região, a Lavigo Studios oferece atendimento personalizado de forma externa ou lifestyle no aconchego do seu lar. Especializados em ensaios gestante, newborn e de família, levamos toda a sensibilidade e direção afetiva até você, sem a rigidez de um estúdio tradicional."
  },
  {
    q: "Vocês trabalham com vídeo de casamento, cinegrafista e videomaker na região?",
    a: "Sim! Além da fotografia, somos videomakers e cinegrafistas especializados em filmes de casamento em Ibitinga, Itápolis, Araraquara, Bauru, Jaú e demais cidades da região. Criamos documentários cinematográficos e teasers poéticos da sua cerimônia (seja civil ou religiosa) para que você possa reviver cada emoção."
  },
  {
    q: "Como funciona o ensaio gestante e newborn da Lavigo em Itápolis e Ibitinga?",
    a: "Nossos ensaios de maternidade são feitos com luz natural e foco no afeto real. O ensaio gestante pode ser realizado em locações externas incríveis na região de Ibitinga e Itápolis ou em estilo lifestyle na sua própria casa. Já a fotografia newborn é realizada exclusivamente de forma residencial (home lifestyle), respeitando o ritmo, o sono e a segurança do bebê."
  },
  {
    q: "Como solicitar um orçamento de fotografia e vídeo de casamento?",
    a: "Para receber uma proposta personalizada para seu casamento, ensaio de casal, gestante, newborn ou infantil, entre em contato conosco pelo WhatsApp ou através de nossa página de contato. Atendemos ativamente noivas, gestantes e famílias em todo o interior paulista, incluindo Borborema, Tabatinga, Matão e São Carlos."
  }
];

export default function HomeClientPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };
  
  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
          }
        });
      },
      {
        root: null,
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    document.querySelectorAll(".reveal").forEach((el) => {
      revealObserver.observe(el);
    });

    return () => {
      revealObserver.disconnect();
    };
  }, []);

  const openContact = (service = "Selecione") => {
    window.dispatchEvent(
      new CustomEvent("open-contact-modal", { detail: { service } })
    );
  };

  return (
    <main>
      <section id="hero" aria-label="Seção de Boas-vindas">
        <div className="hero-content reveal d1">
          <div className="hero-meta">
            <span>Ibitinga · São Paulo · Brasil</span>
          </div>
          <h1 className="hero-title">
            Histórias de<br />
            amor, maternidade<br />
            e família.
          </h1>
          <p className="hero-subtitle text-italic">Registros emocionais que atravessam gerações.</p>
          <div className="hero-divider"></div>
          <p className="hero-paragraph">
            A Lavigo é uma produtora boutique de fotografia e filmes no interior paulista. Especializada em capturar o que não pode ser esquecido — a primeira vez que você viu seu filho, o dia em que se tornaram família, os momentos que definem quem vocês são.
          </p>
          <div className="hero-buttons">
            <Link href="/galeria" className="btn btn-primary cursor-interactive" aria-label="Visualizar fotos do portfólio">
              Ver nossos trabalhos
            </Link>
            <button 
              onClick={() => openContact()} 
              className="btn btn-secondary cursor-interactive" 
              aria-label="Abrir formulário de contato"
            >
              Fale conosco →
            </button>
          </div>
        </div>

        <div className="hero-bg-char" aria-hidden="true">L</div>

        <div className="hero-scroll-indicator" aria-hidden="true">
          <span>Scroll</span>
          <div className="hero-scroll-line"></div>
        </div>
      </section>

      <section id="manifesto" aria-label="Nosso Manifesto">
        <div className="manifesto-container">
          <span className="section-label reveal d1">Nossa filosofia</span>
          <h2 className="manifesto-quote reveal d2">
            &ldquo;Não queremos apenas registrar momentos.<br />
            Queremos acompanhar histórias.&rdquo;
          </h2>
          
          <div className="pillars-grid">
            <div className="pillar-card reveal d1">
              <span className="pillar-num">01 /</span>
              <h3 className="pillar-title">Emoção</h3>
              <p className="pillar-desc">Cada entrega precisa ser sentida, não apenas vista. Buscamos a verdade no olhar, no abraço apertado e no riso espontâneo.</p>
            </div>
            <div className="pillar-card reveal d2">
              <span className="pillar-num">02 /</span>
              <h3 className="pillar-title">Presença</h3>
              <p className="pillar-desc">Desde o início com você. Queremos acompanhar cada novo capítulo, desde o sim no altar até os primeiros passos e o crescimento anual do seu filho.</p>
            </div>
            <div className="pillar-card reveal d3">
              <span className="pillar-num">03 /</span>
              <h3 className="pillar-title">Experiência</h3>
              <p className="pillar-desc">Do primeiro contato à entrega da caixa personalizada, cada detalhe importa. A fotografia é apenas parte de um dia inesquecível.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="servicos" aria-label="Nossos Serviços">
        <span className="section-label reveal d1">O que fazemos</span>
        <h2 className="section-title reveal d2">Registros de amor e família que atravessam gerações</h2>

        <div className="services-grid">
          <article className="service-card reveal d1">
            <div className="service-img-wrapper">
              <div className="service-img-placeholder">
                <Image
                  fill
                  src="https://res.cloudinary.com/drczznkji/image/upload/v1779989915/gestante_o03lkh.webp"
                  alt="Foto artística de gestante em luz natural"
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="service-img-overlay"></div>
              <span className="service-tag">Maternidade · Core</span>
            </div>
            <div className="service-info">
              <h3 className="service-card-title">Ensaio Gestante</h3>
              <p className="service-desc">O momento mais íntimo da transformação. Luz natural, foco no afeto real e memórias desenhadas para serem lembradas por toda a vida.</p>
              <div className="service-footer">
                <div>
                  <span className="service-price-label">Valor</span>
                  <div className="service-price">A partir de R$ 600</div>
                </div>
                <Link href="/servicos/gestante" className="btn-text cursor-interactive">
                  Saiba mais →
                </Link>
              </div>
            </div>
          </article>

          <article className="service-card reveal d2">
            <div className="service-img-wrapper">
              <div className="service-img-placeholder">
                <Image
                  fill
                  src="https://res.cloudinary.com/drczznkji/image/upload/v1779989914/newborn_cbzqrb.webp"
                  alt="Detalhe dos pés de um bebê recém-nascido"
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="service-img-overlay"></div>
              <span className="service-tag">Maternidade · Core</span>
            </div>
            <div className="service-info">
              <h3 className="service-card-title">Newborn</h3>
              <p className="service-desc">Os primeiros dias. A menor mão. O cheiro que não volta. Registrado no aconchego do seu lar com segurança, paciência e delicadeza absoluta.</p>
              <div className="service-footer">
                <div>
                  <span className="service-price-label">Valor</span>
                  <div className="service-price">A partir de R$ 700</div>
                </div>
                <Link href="/servicos/newborn" className="btn-text cursor-interactive">
                  Saiba mais →
                </Link>
              </div>
            </div>
          </article>

          <article className="service-card reveal d3">
            <div className="service-img-wrapper">
              <div className="service-img-placeholder">
                <Image
                  fill
                  src="https://res.cloudinary.com/drczznkji/image/upload/v1778605998/Luisa_2anos_jeblpm.jpg"
                  alt="Retrato de família sorrindo em um campo dourado"
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="service-img-overlay"></div>
              <span className="service-tag">Família · Core</span>
            </div>
            <div className="service-info">
              <h3 className="service-card-title">Casais & Família</h3>
              <p className="service-desc">Do ensaio de casal à família completa. Acompanhamos cada fase com a mesma dedicação.</p>
              <div className="service-footer">
                <div>
                  <span className="service-price-label">Valor</span>
                  <div className="service-price">A partir de R$ 500</div>
                </div>
                <Link href="/servicos/familia" className="btn-text cursor-interactive">
                  Saiba mais →
                </Link>
              </div>
            </div>
          </article>
        </div>
        <div style={{ textAlign: "center", marginTop: "4rem" }} className="reveal d1">
          <Link href="/servicos" className="btn btn-secondary cursor-interactive">
            Ver todos os serviços →
          </Link>
        </div>
      </section>

      <section id="jornada" aria-label="A Jornada da Família">
        <div className="jornada-intro reveal d1">
          <span className="section-label">Uma escolha para a vida</span>
          <h2 className="section-title">Desde o início, lado a lado com você</h2>
          <p>Mais do que registrar um dia especial, adoramos a ideia de crescer junto com você. Queremos ser a escolha natural para acompanhar cada nova fase da sua família, registrando a evolução das suas memórias no seu tempo, com total leveza.</p>
        </div>

        <JourneyTimeline />
      </section>

      <section id="galeria" aria-label="Portfólio de Imagens">
        <span className="section-label reveal d1">Nossos trabalhos</span>
        <h2 className="section-title reveal d2">Momentos que não voltam</h2>

        <GalleryPreview />
      </section>

      <section id="depoimentos" aria-label="Depoimentos de Clientes">
        <span className="section-label reveal d1">O que dizem nossos clientes</span>
        <h2 className="section-title reveal d2">Histórias que nos inspiram</h2>

        <div className="testimonials-grid">
          {/* Testimonial 1 */}
          <article className="testimonial-card reveal d1">
            <div className="testimonial-stars" aria-label="Avaliação 5 estrelas">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
              ))}
            </div>
            <blockquote className="testimonial-quote">
              &ldquo;O Daniel e a Jaiane não apenas registraram nosso casamento; eles guardaram a alma do dia. Cada vez que olhamos o filme, sentimos o mesmo frio na barriga. É indescritível.&rdquo;
            </blockquote>
            <div className="testimonial-quotes-decor" aria-hidden="true">“</div>
            <div className="testimonial-author">
              <h3 className="testimonial-name">Marina & Thiago</h3>
              <span className="testimonial-service">Casamento Documental</span>
            </div>
          </article>

          <article className="testimonial-card reveal d2">
            <div className="testimonial-stars" aria-label="Avaliação 5 estrelas">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
              ))}
            </div>
            <blockquote className="testimonial-quote">
              &ldquo;Fotografar a gestação com a Lavigo foi uma experiência de cura e amor. A Jaiane nos deixou tão confortáveis que executamos tudo com calma. Hoje, nossa pequena Helena ama ver o álbum dela Newborn.&rdquo;
            </blockquote>
            <div className="testimonial-quotes-decor" aria-hidden="true">“</div>
            <div className="testimonial-author">
              <h3 className="testimonial-name">Clara & Lucas</h3>
              <span className="testimonial-service">Gestante & Newborn</span>
            </div>
          </article>

          <article className="testimonial-card reveal d3">
            <div className="testimonial-stars" aria-label="Avaliação 5 estrelas">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
              ))}
            </div>
            <blockquote className="testimonial-quote">
              &ldquo;Começamos no ensaio de casal em Ibitinga, depois o pré-wedding, casamento, e agora o ensaio de família. Eles já fazem parte da nossa história. A dedicação e sensibilidade deles são incomparáveis.&rdquo;
            </blockquote>
            <div className="testimonial-quotes-decor" aria-hidden="true">“</div>
            <div className="testimonial-author">
              <h3 className="testimonial-name">Sofia & André</h3>
              <span className="testimonial-service">Jornada de Família (5 anos)</span>
            </div>
          </article>
        </div>
      </section>

      <section id="sobre" aria-label="Sobre os Fotógrafos">
        <div className="sobre-grid">
          <div className="sobre-text-wrapper reveal d1">
            <span className="section-label">Quem somos</span>
            <h2 className="sobre-title">Daniel & Jaiane</h2>
            <p className="sobre-paragraph">
              A Lavigo nasceu da crença de que fotografia vai além da técnica. Somos uma dupla de criadores visuais apaixonados por histórias reais — sediados em Ibitinga, SP, atendendo toda a região.
            </p>
            <p className="sobre-paragraph">
              Acreditamos que cada fase da vida merece ser registrada com cuidado, direção artística sutil e emoção genuína. Oferecemos fotografia e produção de vídeos em cidades vizinhas como Araraquara, Bauru, Jaú, São Carlos, Matão, Borborema, Itápolis, Tabatinga, Nova Europa e Gavião Peixoto.
            </p>
            <Link href="/sobre" className="btn-text cursor-interactive">
              Conheça nossa história →
            </Link>
          </div>

          <div className="sobre-img-container reveal d2">
            <Image
              className="sobre-img"
              src="https://res.cloudinary.com/drczznkji/image/upload/v1779989913/Daniel_Jaiane_ama6yy.webp"
              alt="Retrato artístico de Daniel e Jaiane, fundadores da Lavigo Studios"
              width={560}
              height={700}
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </section>

      <section className="faq-section" style={{ backgroundColor: "var(--bg-secondary)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
          <span className="section-label reveal d1">AEO & Dúvidas</span>
          <h2 className="section-title reveal d2" style={{ margin: "1rem auto 0 auto" }}>Perguntas Frequentes</h2>
          <p className="reveal d3" style={{ color: "var(--text-muted)", marginTop: "1rem" }}>
            Tudo o que você precisa saber sobre nossos serviços de fotografia, vídeo e atendimento em Ibitinga, Itápolis e região.
          </p>
        </div>

        <div className="faq-grid reveal d1" style={{ margin: "4rem auto 0 auto" }}>
          {homeFaqs.map((faq, idx) => (
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
                  maxHeight: openFaq === idx ? "300px" : "0px",
                  transition: "max-height 0.4s ease, padding 0.4s ease",
                  overflow: "hidden"
                }}
              >
                <p>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="cta-final" aria-label="Agende sua Sessão">
        <div className="cta-container reveal d1">
          <h2 className="cta-heading">
            &ldquo;Não queremos apenas fotografar fases da vida.<br />
            Queremos fazer parte delas.&rdquo;
          </h2>
          <p className="cta-sub">Agende uma conversa sobre fotografia e filmes na sua região. Sem compromisso, sem pressão.</p>
          
          <div className="cta-buttons">
            <a 
              href="https://wa.me/5516991609339" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary cursor-interactive" 
              aria-label="Conversar no WhatsApp"
            >
              Conversar no WhatsApp →
            </a>
            <button 
              onClick={() => openContact()} 
              className="btn btn-secondary cursor-interactive" 
              aria-label="Abrir formulário de contato"
            >
              Enviar mensagem
            </button>
          </div>

          <div className="cta-meta">
            <span className="cta-meta-item">
              Instagram:{" "}
              <a href="https://instagram.com/lavigoprod" target="_blank" rel="noopener noreferrer" className="cursor-interactive">
                @lavigoprod
              </a>
            </span>
            <span className="cta-meta-item">Localização: Ibitinga, SP (atendimento em toda a região)</span>
          </div>
        </div>
      </section>
    </main>
  );
}
