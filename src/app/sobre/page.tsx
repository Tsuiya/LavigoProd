import React from "react";
import type { Metadata } from "next";
import SobreClientPage from "@/components/pages/SobreClientPage";

export const metadata: Metadata = {
  title: "Sobre Nós | Daniel & Jaiane | Lavigo Studios",
  description: "Conheça a história de Daniel & Jaiane, fundadores da Lavigo Studios. Dedicados à fotografia e filmes de casamento, gestante e newborn na região de Ibitinga, Araraquara, Bauru e Jaú.",
  keywords: "quem somos lavigo, fotografo daniel jaiane, historia lavigo studios, fotografia afetiva ibitinga, fotografo profissional sp, ensaio newborn jau, fotos gestante bauru",
  openGraph: {
    title: "Quem Somos | Daniel & Jaiane | Lavigo Studios",
    description: "Nossa história e filosofia. Documentamos legados familiares com direção afetiva sob luz natural no interior de São Paulo.",
    url: "https://lavigo.com.br/sobre",
    type: "profile",
  }
};

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": "https://lavigo.com.br/sobre/#webpage",
        "url": "https://lavigo.com.br/sobre",
        "name": "Sobre Nós | Daniel & Jaiane | Lavigo Studios",
        "description": "Conheça a história dos fundadores da Lavigo Studios, Daniel e Jaiane, produtores de fotografia e filmes de casamentos e família em Ibitinga e região."
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Quais regiões vocês atendem com fotografia e vídeo?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Nossa sede é em Ibitinga, SP, mas cobrimos ativamente toda a região do interior paulista (como Araraquara, Bauru, Jaú, Ribeirão Preto, São Carlos, Matão, Borborema, Itápolis, Tabatinga, Nova Europa e Gavião Peixoto). Também estamos disponíveis para viagens nacionais e casamentos fora do estado."
            }
          },
          {
            "@type": "Question",
            "name": "Qual é o prazo de entrega das fotos e filmes?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Para ensaios de gestante, newborn e família, o prazo de entrega das fotos tratadas na galeria online é de até 15 dias úteis. Para casamentos e filmes cinematográficos, a entrega completa com o álbum encadernado em linho é feita em até 45 dias úteis."
            }
          },
          {
            "@type": "Question",
            "name": "Nós não sabemos posar para fotos. Como funciona?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Não se preocupe! Nós não trabalhamos com poses rígidas ou sorrisos forçados. Praticamos a 'direção afetiva': guiamos interações leves, conversas e brincadeiras para que vocês esqueçam a câmera. O resultado são imagens dinâmicas e com sentimentos reais."
            }
          },
          {
            "@type": "Question",
            "name": "Vocês fornecem roupas para ensaio gestante?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Acreditamos na autenticidade de cada mulher. Por isso, orientamos que você use roupas do seu próprio guarda-roupa que reflitam quem você realmente é. No briefing inicial, oferecemos assessoria completa sobre paletas de cores neutras e caimentos que valorizam a silhueta."
            }
          },
          {
            "@type": "Question",
            "name": "Quando devo agendar o ensaio Newborn?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "O ensaio newborn (lifestyle) deve ser reservado ainda na gestação. Nós fazemos um pré-cadastro com base na data prevista do parto e deixamos dias flexíveis em nossa agenda. A data oficial da sessão é confirmada logo após o nascimento do bebê."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SobreClientPage />
    </>
  );
}
