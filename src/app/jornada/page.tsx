import React from "react";
import type { Metadata } from "next";
import JornadaClientPage from "@/components/pages/JornadaClientPage";

export const metadata: Metadata = {
  title: "Jornada da Família | Acompanhamento Anual | Lavigo Studios",
  description: "Acompanhamos sua história de geração em geração. Conheça nossa proposta de jornada de família, registrando desde o casamento até os aniversários e crescimento em Ibitinga, Itápolis e região.",
  keywords: "jornada familia lavigo, acompanhamento de bebe ibitinga, acompanhamento de bebê itápolis, fotógrafo itápolis, fotógrafo ibitinga, cinegrafista ibitinga, cinegrafista itápolis, estúdio fotográfico ibitinga, estúdio fotográfico itápolis, fotos crescimento infantil",
  openGraph: {
    title: "Jornada da Família | Lavigo Studios",
    description: "Acompanhamento anual e registro continuado da sua história. Casamento, gestação, newborn e crescimento em Ibitinga, Itápolis e toda a região.",
    url: "https://lavigo.com.br/jornada",
    type: "website",
  }
};

export default function Page() {
  return <JornadaClientPage />;
}
