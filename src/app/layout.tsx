import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import dynamic from "next/dynamic";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AnalyticsScripts from "@/components/analytics/AnalyticsScripts";
import RouteTracker from "@/components/analytics/RouteTracker";
import WhatsAppButton from "@/components/ui/WhatsappButton";
import { Analytics } from "@vercel/analytics/next"


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
  metadataBase: new URL("https://lavigo.com.br"),
  title: {
    default: "Lavigo Studios | Fotógrafo em Ibitinga SP | Fotografia e Filmes de Casamento, Maternidade e Família",
    template: "%s | Lavigo Studios",
  },
  description: "Estúdio fotográfico boutique premium de fotografia e filmes em Ibitinga e Itápolis, SP. Especializada em ensaio gestante, newborn, família e casamentos. Fotógrafo, videomaker e cinegrafista atendendo Araraquara, Bauru, Jaú, São Carlos, Ribeirão Preto, Matão, Borborema, Tabatinga e região. Registros que atravessam gerações.",
  keywords: "fotógrafo ibitinga, fotógrafo itápolis, fotógrafo em ibitinga, fotógrafo em itápolis, cinegrafista ibitinga, cinegrafista itápolis, cinegrafista em ibitinga, cinegrafista em itápolis, videomaker ibitinga, videomaker itápolis, estúdio fotográfico ibitinga, estúdio fotográfico itápolis, fotografia de casamento ibitinga, filmes de casamento itápolis, fotografia de familia, fotografo maternidade ibitinga, ensaio gestante sp, newborn premium, filmes de casamento, lavigo producoes, lavigo studios, fotografo de casamento ibitinga, video de casamento ibitinga, ensaio de casal, fotografia araraquara, fotografo bauru, fotografo jau, fotografo sao carlos, fotografia ribeirao preto, ensaio gestante jau, newborn bauru, video de casamento jau, produtor de video ibitinga, fotografo itapolis, ensaio gestante matao, fotografo tabatinga",
  authors: [{ name: "Lavigo Studios", url: "https://lavigo.com.br" }],
  creator: "Daniel & Jaiane — Lavigo Studios",
  publisher: "Lavigo Studios",
  category: "Fotografia e Audiovisual",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://lavigo.com.br",
    languages: {
      "pt-BR": "https://lavigo.com.br",
    },
  },
  openGraph: {
    title: "Lavigo Studios | Fotografia e Filmes de Casamento, Maternidade e Família",
    description: "Registros emocionais e cinematográficos que atravessam gerações. Maternidade, casais, família e casamentos em Ibitinga, Bauru, Jaú, Araraquara, São Carlos, Ribeirão Preto e região.",
    url: "https://lavigo.com.br",
    siteName: "Lavigo Studios",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/drczznkji/image/upload/v1779989913/Daniel_Jaiane_ama6yy.webp",
        width: 1200,
        height: 630,
        alt: "Daniel e Jaiane — Lavigo Studios | Fotografia e Filmes em Ibitinga, SP",
      },
    ],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lavigo Studios | Fotografia e Filmes de Casamento, Maternidade e Família",
    description: "Registros emocionais e cinematográficos que atravessam gerações. Maternidade, casais, família e casamentos no interior paulista.",
    images: ["https://res.cloudinary.com/drczznkji/image/upload/v1779989913/Daniel_Jaiane_ama6yy.webp"],
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
        <AnalyticsScripts />
        <Analytics />
        <RouteTracker />

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
        <WhatsAppButton
          phone="16991609339"
          message="Olá! Vim pelo site e gostaria de saber mais."
        />

        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
