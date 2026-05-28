"use client";

import React, { useState, useEffect } from "react";
import Lightbox from "@/components/ui/Lightbox";

interface PortfolioPhoto {
  src: string;
  alt: string;
  category: string;
  tag: string;
  title: string;
}

const portfolioPhotos: PortfolioPhoto[] = [
  // Casamento Civil - Larissa e Rodolfo
  {
    src: "https://res.cloudinary.com/drczznkji/image/upload/v1776972786/LR-3_yip935.jpg",
    category: "casamento-civil",
    tag: "Larissa & Rodolfo · Civil",
    title: "Cumplicidade",
    alt: "Noivos trocando olhares afetuosos no casamento civil em Ibitinga SP"
  },
  {
    src: "https://res.cloudinary.com/drczznkji/image/upload/v1776972847/LR-19_uyyde1.jpg",
    category: "casamento-civil",
    tag: "Larissa & Rodolfo · Civil",
    title: "Abraço de amor",
    alt: "Abraço sincero dos noivos Larissa e Rodolfo no casamento civil"
  },
  {
    src: "https://res.cloudinary.com/drczznkji/image/upload/v1776972857/LR-1_schl7z.jpg",
    category: "casamento-civil",
    tag: "Larissa & Rodolfo · Civil",
    title: "Assinatura do Sim",
    alt: "Noiva assinando a certidão de casamento civil no cartório de Ibitinga"
  },
  {
    src: "https://res.cloudinary.com/drczznkji/image/upload/v1776972786/LR-6_kdkf2b.jpg",
    category: "casamento-civil",
    tag: "Larissa & Rodolfo · Civil",
    title: "Brinde de celebração",
    alt: "Noivos brindando o casamento civil com champagne na recepção"
  },
  
  // Casamento Civil - Brenda e Danilo
  {
    src: "https://res.cloudinary.com/drczznkji/image/upload/v1778601027/B_D-41_ka3fy6.jpg",
    category: "casamento-civil",
    tag: "Brenda & Danilo · Civil",
    title: "Retrato Oficial",
    alt: "Retrato romântico do casamento civil de Brenda e Danilo"
  },
  {
    src: "https://res.cloudinary.com/drczznkji/image/upload/v1778601027/B_D-39_djwg3c.jpg",
    category: "casamento-civil",
    tag: "Brenda & Danilo · Civil",
    title: "Assinatura no Cartório",
    alt: "Noivos assinando papéis do casamento civil em cartório da região"
  },
  {
    src: "https://res.cloudinary.com/drczznkji/image/upload/v1778601027/B_D-29_nfyw60.jpg",
    category: "casamento-civil",
    tag: "Brenda & Danilo · Civil",
    title: "Benção e Oração",
    alt: "Noivos de mãos dadas em prece durante casamento civil"
  },

  // Casamento Religioso - Camila e Sidney
  {
    src: "https://res.cloudinary.com/drczznkji/image/upload/v1779990403/Still_2026-03-07_154153_2.2.2_iabvav.webp",
    category: "casamento-religioso",
    tag: "Camila & Sidney · Religioso",
    title: "Olhar do Altar",
    alt: "Still de filme do casamento de Camila e Sidney no altar de igreja"
  },
  {
    src: "https://res.cloudinary.com/drczznkji/image/upload/v1779990404/Still_2026-03-07_154153_2.4.1_kwtaxz.webp",
    category: "casamento-religioso",
    tag: "Camila & Sidney · Religioso",
    title: "O Sim",
    alt: "Still cinematográfico de Camila e Sidney se unindo no altar em cerimônia premium"
  },
  {
    src: "https://res.cloudinary.com/drczznkji/image/upload/v1779990403/Still_2026-03-07_154153_2.8.1_b5otza.webp",
    category: "casamento-religioso",
    tag: "Camila & Sidney · Religioso",
    title: "As Alianças",
    alt: "Troca de alianças sob luz poética da igreja no interior de SP"
  },
  {
    src: "https://res.cloudinary.com/drczznkji/image/upload/v1779990404/Still_2026-03-07_154153_2.7.1_bwdgoj.webp",
    category: "casamento-religioso",
    tag: "Camila & Sidney · Religioso",
    title: "A Saída dos Noivos",
    alt: "Saída dos noivos Camila e Sidney celebrando o beijo no casamento"
  },

  // Ensaio Infantil - Agatha
  {
    src: "https://res.cloudinary.com/drczznkji/image/upload/v1778606385/DSC03479_1_1_lubc7f.jpg",
    category: "infantil",
    tag: "Agatha · Ensaio Natal",
    title: "Especial de Natal",
    alt: "Ensaio infantil temático de natal de Agatha em estúdio lifestyle"
  },
  {
    src: "https://res.cloudinary.com/drczznkji/image/upload/v1778605672/agatha-66_iu4u8q.jpg",
    category: "infantil",
    tag: "Agatha · Ensaio 6 Meses",
    title: "Descobertas na natureza",
    alt: "Ensaio infantil de Agatha com 6 meses de idade na região de Araraquara"
  },

  // Aniversário - Luisa
  {
    src: "https://res.cloudinary.com/drczznkji/image/upload/v1778605998/Luisa_2anos_jeblpm.jpg",
    category: "aniversario",
    tag: "Luisa · Aniversário",
    title: "Luisa · 2 Anos",
    alt: "Retrato do aniversário de 2 anos da pequena Luisa em Ibitinga"
  },
  {
    src: "https://res.cloudinary.com/drczznkji/image/upload/v1778606157/Still_2026-05-12_141454_1.1.1_tavxdp.jpg",
    category: "aniversario",
    tag: "Luisa · Aniversário",
    title: "Apagando as Velinhas",
    alt: "Momento dos parabéns de Luisa em sua festa infantil no interior de SP"
  }
];

export default function GaleriaClientPage() {
  const [filter, setFilter] = useState("todos");
  const [filteredPhotos, setFilteredPhotos] = useState<PortfolioPhoto[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  useEffect(() => {
    if (filter === "todos") {
      setFilteredPhotos(portfolioPhotos);
    } else {
      setFilteredPhotos(portfolioPhotos.filter(photo => photo.category === filter));
    }
  }, [filter]);

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
  }, [filteredPhotos]);

  const openLightbox = (index: number) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  const categories = [
    { id: "todos", name: "Todos" },
    { id: "casamento-civil", name: "Casamento Civil" },
    { id: "casamento-religioso", name: "Casamento Religioso" },
    { id: "infantil", name: "Ensaio Infantil" },
    { id: "aniversario", name: "Aniversário" }
  ];

  return (
    <main style={{ paddingTop: "8rem" }}>
      <section className="page-hero">
        <span className="section-label reveal d1">Portfólio Real</span>
        <h1 className="page-hero-title reveal d2">Momentos que não voltam</h1>
        <p className="page-hero-desc reveal d3">
          Veja nossa coleção de memórias reais capturadas com amor e atenção sutil. Realizamos ensaios e filmagens em Ibitinga, Araraquara, Bauru, Jaú, São Carlos, Ribeirão Preto e Matão. Filtre pelas categorias para explorar nosso acervo.
        </p>
      </section>

      <section>
        {/* Category filters */}
        <div className="category-filter-nav reveal d1">
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`category-filter-btn cursor-interactive ${filter === cat.id ? "active" : ""}`}
              onClick={() => setFilter(cat.id)}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Gallery grid */}
        <div className="gallery-grid" style={{ minHeight: "400px" }}>
          {filteredPhotos.map((item, index) => (
            <div
              key={index}
              className="gallery-item reveal cursor-interactive"
              onClick={() => openLightbox(index)}
              style={{ 
                gridColumn: index % 5 === 0 ? "span 2" : "span 1",
                gridRow: index % 4 === 1 ? "span 2" : "span 1",
                height: "100%"
              }}
            >
              <img className="gallery-item-img" src={item.src} alt={item.alt} />
              <div className="gallery-item-overlay">
                <span className="gallery-item-tag">{item.tag}</span>
                <h3 className="gallery-item-title">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Lightbox
        images={filteredPhotos}
        currentIndex={photoIndex}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onIndexChange={setPhotoIndex}
      />
    </main>
  );
}
