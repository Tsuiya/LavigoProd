import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/ui/CustomCursor";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lavigo Studios | Histórias de Amor, Maternidade e Família",
  description: "Produtora boutique premium em Ibitinga, SP. Especializada em fotografia e filmes emocionais de maternidade, casais e família. Registros que atravessam gerações.",
  keywords: "fotografia de familia, fotografo maternidade ibitinga, ensaio gestante sp, newborn premium, filmes de casamento, lavigo producoes, lavigo studios",
  authors: [{ name: "Lavigo Studios" }],
  openGraph: {
    title: "Lavigo Studios | Histórias de Amor, Maternidade e Família",
    description: "Registros emocionais e cinematográficos que atravessam gerações. Maternidade, casais e família em Ibitinga, SP.",
    url: "https://lavigo.com.br",
    siteName: "Lavigo Studios",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${outfit.variable}`}>
      <body>

        {/* SVG film grain overlay filter */}
        <svg 
          style={{ position: "fixed", top: 0, left: 0, width: 0, height: 0, pointerEvents: "none", opacity: 0 }} 
          aria-hidden="true"
        >
          <filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" />
            <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.035 0" />
          </filter>
        </svg>

        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
