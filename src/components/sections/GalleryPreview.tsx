"use client";

import React, { useState } from "react";
import Link from "next/link";
import Lightbox from "../ui/Lightbox";

interface PhotoItem {
  src: string;
  alt: string;
  tag: string;
  title: string;
  class: string;
}

const photoItems: PhotoItem[] = [
  {
    src: "https://res.cloudinary.com/drczznkji/image/upload/v1778602019/Still_2026-03-07_154153_2.4.1_qqlnxs.jpg",
    tag: "Casamento Religioso · Filme",
    title: "Camila & Sidney",
    alt: "Noivos no altar da cerimônia religiosa",
    class: "gi-1"
  },
  {
    src: "https://res.cloudinary.com/drczznkji/image/upload/v1778605672/agatha-66_iu4u8q.jpg",
    tag: "Ensaio Infantil",
    title: "Agatha · 6 Meses",
    alt: "Ensaio infantil de Agatha em contato com a natureza",
    class: "gi-2"
  },
  {
    src: "https://res.cloudinary.com/drczznkji/image/upload/v1778602019/Still_2026-03-07_154153_2.2.2_pbxpfm.jpg",
    tag: "Casamento Religioso · Filme",
    title: "Decoração",
    alt: "Decoração do casamento religioso de Camila e Sidney",
    class: "gi-3"
  },
  {
    src: "https://res.cloudinary.com/drczznkji/image/upload/v1778605998/Luisa_2anos_jeblpm.jpg",
    tag: "Aniversário",
    title: "Luisa · 2 Anos",
    alt: "Retrato alegre do aniversário de Luisa sorrindo",
    class: "gi-4"
  },
  {
    src: "https://res.cloudinary.com/drczznkji/image/upload/v1778606385/DSC03479_1_1_lubc7f.jpg",
    tag: "Ensaio Infantil",
    title: "Agatha · Natal",
    alt: "Ensaio do primeiro natal de Agatha",
    class: "gi-5"
  },
  {
    src: "https://res.cloudinary.com/drczznkji/image/upload/v1776972857/LR-1_schl7z.jpg",
    tag: "Casamento Civil",
    title: "Larissa & Rodolfo",
    alt: "Casamento civil de Larissa e Rodolfo - Assinatura",
    class: "gi-6"
  },
  {
    src: "https://res.cloudinary.com/drczznkji/image/upload/v1778601027/B_D-41_ka3fy6.jpg",
    tag: "Casamento Civil",
    title: "Brenda & Danilo",
    alt: "Retrato de casamento civil de Brenda e Danilo",
    class: "gi-7"
  },
  {
    src: "https://res.cloudinary.com/drczznkji/image/upload/v1776972786/LR-3_yip935.jpg",
    tag: "Casamento Civil",
    title: "O Sim de Larissa & Rodolfo",
    alt: "Noivos trocando olhares afetuosos",
    class: "gi-8"
  },
  {
    src: "https://res.cloudinary.com/drczznkji/image/upload/v1778601027/B_D-39_djwg3c.jpg",
    tag: "Casamento Civil",
    title: "Brenda & Danilo · Cartório",
    alt: "Assinatura do casamento civil de Brenda e Danilo",
    class: "gi-9"
  },
  {
    src: "https://res.cloudinary.com/drczznkji/image/upload/v1778606157/Still_2026-05-12_141454_1.1.1_tavxdp.jpg",
    tag: "Aniversário",
    title: "Luisa · Parabéns",
    alt: "Still de aniversário de Luisa apagando as velinhas",
    class: "gi-10"
  }
];

export default function GalleryPreview() {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const openLightbox = (index: number) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  return (
    <>
      <div className="gallery-grid">
        {photoItems.map((item, index) => (
          <div
            key={index}
            className={`gallery-item ${item.class} reveal`}
            onClick={() => openLightbox(index)}
          >
            <img className="gallery-item-img" src={item.src} alt={item.alt} />
            <div className="gallery-item-overlay">
              <span className="gallery-item-tag">{item.tag}</span>
              <h3 className="gallery-item-title">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="gallery-actions reveal d1">
        <Link href="/galeria" className="btn btn-secondary cursor-interactive">
          Ver galeria completa →
        </Link>
      </div>

      <Lightbox
        images={photoItems}
        currentIndex={photoIndex}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onIndexChange={setPhotoIndex}
      />
    </>
  );
}
