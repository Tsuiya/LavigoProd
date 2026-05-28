import React from "react";
import type { Metadata } from "next";
import JornadaClientPage from "@/components/pages/JornadaClientPage";

export const metadata: Metadata = {
  title: "Jornada da Família | Acompanhamento Anual | Lavigo Studios",
  description: "Acompanhamos sua história de geração em geração. Conheça nossa proposta de jornada familiar, registrando desde o casamento até os aniversários e crescimento em Ibitinga e região.",
  keywords: "jornada familia lavigo, acompanhamento de bebe ibitinga, fotos acompanhamento infantil araraquara, fotografo acompanhamento jau, fotos crescimento infantil bauru",
  openGraph: {
    title: "Jornada da Família | Lavigo Studios",
    description: "Acompanhamento anual e registro continuado da sua história. Casamento, gestação, newborn e crescimento no interior paulista.",
    url: "https://lavigo.com.br/jornada",
    type: "website",
  }
};

export default function Page() {
  return <JornadaClientPage />;
}
