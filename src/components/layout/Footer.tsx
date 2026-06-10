import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-brand">
          <Link href="/" className="logo cursor-interactive">
            Lavigo
          </Link>
          <p>Estúdio fotográfico e produtora de filmes de casamento, maternidade e família. Ibitinga, SP.</p>
        </div>

        <div>
          <h3 className="footer-col-title">Serviços</h3>
          <ul className="footer-links">
            <li>
              <Link href="/servicos/gestante" className="footer-link cursor-interactive">
                Gestante
              </Link>
            </li>
            <li>
              <Link href="/servicos/newborn" className="footer-link cursor-interactive">
                Newborn
              </Link>
            </li>
            <li>
              <Link href="/servicos/familia" className="footer-link cursor-interactive">
                Casais & Família
              </Link>
            </li>
            <li>
              <Link href="/servicos/filmes-emocionais" className="footer-link cursor-interactive">
                Filmes Emocionais
              </Link>
            </li>
            <li>
              <Link href="/servicos/casamentos" className="footer-link cursor-interactive">
                Casamentos
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="footer-col-title">Empresa</h3>
          <ul className="footer-links">
            <li>
              <Link href="/#manifesto" className="footer-link cursor-interactive">
                Manifesto
              </Link>
            </li>
            <li>
              <Link href="/sobre" className="footer-link cursor-interactive">
                Sobre Nós
              </Link>
            </li>
            <li>
              <Link href="/jornada" className="footer-link cursor-interactive">
                Jornada
              </Link>
            </li>
            <li>
              <a 
                href="https://instagram.com/lavigoprod" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-link cursor-interactive"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>

        <div itemScope itemType="https://schema.org/LocalBusiness">
          <meta itemProp="name" content="Lavigo Studios" />
          <meta itemProp="url" content="https://lavigo.com.br" />
          <h3 className="footer-col-title">Contato</h3>
          <address style={{ fontStyle: "normal" }}>
            <div className="footer-info-item" itemProp="telephone">
              Whatsapp:{" "}
              <a
                href="https://wa.me/5516991609339"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-interactive"
              >
                (16) 99160-9339
              </a>
            </div>
            <div className="footer-info-item" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
              <span itemProp="streetAddress">Rua José de Biazi, 893</span>{" — "}
              <span itemProp="addressLocality">Ibitinga</span>,{" "}
              <span itemProp="addressRegion">SP</span>{" "}
              <span itemProp="postalCode">14945-132</span>
            </div>
            <div className="footer-info-item">
              Redes:{" "}
              <a
                href="https://instagram.com/lavigoprod"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-interactive"
                itemProp="sameAs"
              >
                @lavigoprod
              </a>
            </div>
          </address>
        </div>
      </div>

      <div className="footer-bottom">
        <span>&copy; {new Date().getFullYear()} Lavigo Studios · Todos os direitos reservados.</span>
        <span>Feito com ❤️️ por Lavigo Studios.</span>
      </div>
    </footer>
  );
}
