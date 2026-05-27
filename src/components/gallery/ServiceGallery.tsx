"use client";

import React, { useState } from "react";
import Lightbox from "../ui/Lightbox";

interface Photo {
  src: string;
  alt: string;
}

interface ServiceGalleryProps {
  gallery: Photo[];
  title: string;
  tag: string;
}

export default function ServiceGallery({ gallery, title, tag }: ServiceGalleryProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const openLightbox = (index: number) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  const lightboxImages = gallery.map(photo => ({
    src: photo.src,
    alt: photo.alt,
    tag: tag,
    title: title
  }));

  return (
    <>
      <div className="services-grid" style={{ marginTop: "3rem" }}>
        {gallery.map((photo, index) => (
          <div 
            key={index} 
            className="gallery-item cursor-interactive"
            onClick={() => openLightbox(index)}
            style={{ height: "300px" }}
          >
            <img 
              className="gallery-item-img" 
              src={photo.src} 
              alt={photo.alt} 
            />
            <div className="gallery-item-overlay">
              <span className="gallery-item-tag">{tag}</span>
              <h3 className="gallery-item-title">{title}</h3>
            </div>
          </div>
        ))}
      </div>

      <Lightbox 
        images={lightboxImages}
        currentIndex={photoIndex}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onIndexChange={setPhotoIndex}
      />
    </>
  );
}
