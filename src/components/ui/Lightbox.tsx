"use client";

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface LightboxImage {
  src: string;
  alt: string;
  tag?: string;
  title?: string;
}

interface LightboxProps {
  images: LightboxImage[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onIndexChange: (index: number) => void;
}

export default function Lightbox({
  images,
  currentIndex,
  isOpen,
  onClose,
  onIndexChange,
}: LightboxProps) {
  const [transitioning, setTransitioning] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden"; // Lock background scroll

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, currentIndex, images]);

  const handlePrev = () => {
    if (transitioning) return;
    setTransitioning(true);
    setTimeout(() => {
      onIndexChange((currentIndex - 1 + images.length) % images.length);
      setTransitioning(false);
    }, 200);
  };

  const handleNext = () => {
    if (transitioning) return;
    setTransitioning(true);
    setTimeout(() => {
      onIndexChange((currentIndex + 1) % images.length);
      setTransitioning(false);
    }, 200);
  };

  if (!isOpen || !images.length || !mounted) return null;

  const currentImage = images[currentIndex];

  return createPortal(
    <div 
      className="modal active" 
      role="dialog" 
      aria-modal="true" 
      aria-label="Visualizador de fotos"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <button 
        className="modal-close-btn cursor-interactive" 
        onClick={onClose} 
        aria-label="Fechar visualizador"
      >
        &times;
      </button>

      <button 
        className="lightbox-nav-btn lnb-prev cursor-interactive" 
        onClick={handlePrev} 
        aria-label="Foto anterior"
      >
        &#10216;
      </button>
      <button 
        className="lightbox-nav-btn lnb-next cursor-interactive" 
        onClick={handleNext} 
        aria-label="Próxima foto"
      >
        &#10217;
      </button>

      <div className="lightbox-content">
        <img 
          className="lightbox-img" 
          src={currentImage.src} 
          alt={currentImage.alt} 
          style={{ opacity: transitioning ? 0.3 : 1, transition: "opacity 0.2s ease" }}
        />
        <div className="lightbox-caption">
          <div className="lightbox-tag">{currentImage.tag || "PORTFÓLIO"}</div>
          <h3 className="lightbox-title">{currentImage.title || currentImage.alt}</h3>
        </div>
      </div>
    </div>,
    document.body
  );
}

