"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import JourneyTimeline from "@/components/sections/JourneyTimeline";
import GalleryPreview from "@/components/sections/GalleryPreview";

export default function HomeClientPage() {
  
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
              <div 
                className="service-img-placeholder" 
                style={{ backgroundImage: "url('https://res.cloudinary.com/drczznkji/image/upload/v1779837828/gestante_w6tgwt.png')" }} 
                role="img" 
                aria-label="Foto artística de gestante em luz natural"
              ></div>
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
              <div 
                className="service-img-placeholder" 
                style={{ backgroundImage: "url('https://res.cloudinary.com/drczznkji/image/upload/v1779837582/newborn_f9lt9a.png')" }} 
                role="img" 
                aria-label="Detalhe dos pés de um bebê recém-nascido"
              ></div>
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
              <div 
                className="service-img-placeholder" 
                style={{ backgroundImage: "url('https://res.cloudinary.com/drczznkji/image/upload/v1778605998/Luisa_2anos_jeblpm.jpg?_s=public-apps')" }} 
                role="img" 
                aria-label="Retrato de família sorrindo em um campo dourado"
              ></div>
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
            <img className="sobre-img" src="https://res.cloudinary.com/drczznkji/image/upload/v1778903611/Daniel_Jaiane_lxw9w5.png" alt="Retrato artístico de Daniel e Jaiane, fundadores da Lavigo Studios" />
          </div>
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
