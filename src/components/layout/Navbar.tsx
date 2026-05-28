"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";

// Only rendered inside a modal after user interaction
const ContactForm = dynamic(() => import("../ui/ContactForm"), { ssr: false });

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("Selecione");
  
  const pathname = usePathname();

  useEffect(() => {
    let rafId: number | null = null;

    const handleScroll = () => {
      if (rafId !== null) return; // already scheduled
      rafId = requestAnimationFrame(() => {
        rafId = null;
        // Nav scroll blur state
        if (window.scrollY > 60) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }

        // Reading progress bar (read scrollHeight once per frame)
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        if (docHeight > 0) {
          setScrollProgress((window.scrollY / docHeight) * 100);
        }
      });
    };

    // Listen to global open contact modal event
    const handleOpenContact = (e: Event) => {
      const customEvent = e as CustomEvent<{ service?: string }>;
      if (customEvent.detail && customEvent.detail.service) {
        setSelectedService(customEvent.detail.service);
      } else {
        setSelectedService("Selecione");
      }
      setIsContactOpen(true);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("open-contact-modal", handleOpenContact);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("open-contact-modal", handleOpenContact);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const openContact = (serviceName = "Selecione") => {
    setSelectedService(serviceName);
    setIsContactOpen(true);
    closeMenu();
  };

  const closeContact = () => {
    setIsContactOpen(false);
  };

  return (
    <>
      <header id="mainHeader" className={`${isScrolled ? "nav-scrolled" : ""} ${isMenuOpen ? "menu-open-header" : ""}`}>
        {/* Progress bar */}
        <div 
          className="nav-progress-bar" 
          style={{ width: `${scrollProgress}%` }}
          aria-hidden="true"
        ></div>

        <div className="nav-container">
          <Link href="/" className="logo cursor-interactive" onClick={closeMenu}>
            Lavigo
          </Link>
          
          <nav className="nav-links">
            <Link 
              href="/servicos" 
              className={`nav-link cursor-interactive ${pathname === "/servicos" ? "active" : ""}`}
            >
              Serviços
            </Link>
            <Link 
              href="/galeria" 
              className={`nav-link cursor-interactive ${pathname === "/galeria" ? "active" : ""}`}
            >
              Galeria
            </Link>
            <Link 
              href="/jornada" 
              className={`nav-link cursor-interactive ${pathname === "/jornada" ? "active" : ""}`}
            >
              Jornada
            </Link>
            <Link 
              href="/sobre" 
              className={`nav-link cursor-interactive ${pathname === "/sobre" ? "active" : ""}`}
            >
              Sobre
            </Link>
            <Link 
              href="/contato" 
              className={`nav-link cursor-interactive ${pathname === "/contato" ? "active" : ""}`}
            >
              Contato
            </Link>
          </nav>

          <div className="nav-actions">
            <button 
              className="btn btn-secondary cursor-interactive" 
              onClick={() => openContact()}
              aria-label="Abrir formulário de contato"
            >
              Fale conosco →
            </button>
            
            {/* Hamburger for mobile */}
            <button 
              className={`hamburger-btn cursor-interactive ${isMenuOpen ? "menu-open" : ""}`}
              onClick={toggleMenu} 
              aria-label="Abrir menu de navegação"
              aria-expanded={isMenuOpen}
            >
              <span className="hamburger-line hamburger-line-1"></span>
              <span className="hamburger-line hamburger-line-2"></span>
              <span className="hamburger-line hamburger-line-3"></span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-menu-drawer ${isMenuOpen ? "active" : ""}`}>
        <div className="mobile-menu-links">
          <Link 
            href="/servicos" 
            className={`mobile-menu-link cursor-interactive ${pathname === "/servicos" ? "active" : ""}`}
            onClick={closeMenu}
          >
            Serviços
          </Link>
          <Link 
            href="/galeria" 
            className={`mobile-menu-link cursor-interactive ${pathname === "/galeria" ? "active" : ""}`}
            onClick={closeMenu}
          >
            Galeria
          </Link>
          <Link 
            href="/jornada" 
            className={`mobile-menu-link cursor-interactive ${pathname === "/jornada" ? "active" : ""}`}
            onClick={closeMenu}
          >
            Jornada
          </Link>
          <Link 
            href="/sobre" 
            className={`mobile-menu-link cursor-interactive ${pathname === "/sobre" ? "active" : ""}`}
            onClick={closeMenu}
          >
            Sobre
          </Link>
          <Link 
            href="/contato" 
            className={`mobile-menu-link cursor-interactive ${pathname === "/contato" ? "active" : ""}`}
            onClick={closeMenu}
          >
            Contato
          </Link>
        </div>
        <button 
          className="btn btn-primary cursor-interactive" 
          onClick={() => openContact()}
          aria-label="Fale conosco"
        >
          Fale conosco →
        </button>
      </div>

      {/* Contact Form Modal */}
      <div 
        className={`modal ${isContactOpen ? "active" : ""}`} 
        role="dialog" 
        aria-modal="true" 
        onClick={(e) => e.target === e.currentTarget && closeContact()}
      >
        <button 
          className="modal-close-btn cursor-interactive" 
          onClick={closeContact} 
          aria-label="Fechar formulário"
        >
          &times;
        </button>
        
        <div className="contact-modal-card">
          <h2 className="contact-modal-title">Vamos conversar?</h2>
          <p className="contact-modal-sub">Conte-nos sobre a história que você quer guardar.</p>
          
          <ContactForm initialService={selectedService} onSuccess={closeContact} />
        </div>
      </div>
    </>
  );
}
