"use client";

import React, { useEffect, useState, useCallback } from "react";
import { createPortal } from "react-dom";
import { trackViewPortfolioItem } from "@/lib/analytics";

interface LightboxImage {
  src: string;
  alt: string;
  tag?: string;
  category?: string;
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

  const handlePrev = useCallback(() => {
    if (transitioning) return;
    setTransitioning(true);
    setTimeout(() => {
      onIndexChange((currentIndex - 1 + images.length) % images.length);
      setTransitioning(false);
    }, 200);
  }, [transitioning, currentIndex, images.length, onIndexChange]);

  const handleNext = useCallback(() => {
    if (transitioning) return;
    setTransitioning(true);
    setTimeout(() => {
      onIndexChange((currentIndex + 1) % images.length);
      setTransitioning(false);
    }, 200);
  }, [transitioning, currentIndex, images.length, onIndexChange]);

  // Track photo views in analytics
  useEffect(() => {
    if (isOpen && images.length > 0 && currentIndex >= 0 && currentIndex < images.length) {
      const currentImage = images[currentIndex];
      trackViewPortfolioItem(
        currentImage.src, 
        currentImage.alt, 
        currentImage.category || "portfolio"
      );
    }
  }, [isOpen, currentIndex, images]);

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
  }, [isOpen, onClose, handleNext, handlePrev]);

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
        </div>
      </div>
    </div>,
    document.body
  );
}

