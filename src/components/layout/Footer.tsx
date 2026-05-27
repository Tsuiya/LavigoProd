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
          <p>Produtora boutique premium de fotografia e filmes de casamento, maternidade e família. Ibitinga, SP.</p>
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

        <div>
          <h3 className="footer-col-title">Contato</h3>
          <div className="footer-info-item">
            Whatsapp:{" "}
            <a 
              href="https://wa.me/5516991609339" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="cursor-interactive"
            >
              16 99160-9339
            </a>
          </div>
          <div className="footer-info-item">
            Redes:{" "}
            <a 
              href="https://instagram.com/lavigoprod" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="cursor-interactive"
            >
              @lavigoprod
            </a>
          </div>
          <div className="footer-info-item">Ibitinga, SP - Brasil</div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>&copy; {new Date().getFullYear()} Lavigo Produções · Todos os direitos reservados.</span>
        <span>Orgulhosamente boutique.</span>
      </div>
    </footer>
  );
}
