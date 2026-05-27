"use client";

import React, { useState } from "react";

interface Milestone {
  num: string;
  title: string;
  description: string;
}

const milestones: Milestone[] = [
  { num: "01", title: "Ensaio de Casal", description: "O começo de tudo. Capturando a química do início da história." },
  { num: "02", title: "Noivado", description: "O sim. Um registro intimista e espontâneo da promessa do futuro." },
  { num: "03", title: "Pré Wedding", description: "A expectativa do grande dia em um local que represente o casal." },
  { num: "04", title: "Casamento", description: "O ápice. Uma cobertura cinematográfica completa e poética." },
  { num: "05", title: "Gestante", description: "A transição mais marcante da vida. A expectativa do amor multiplicado." },
  { num: "06", title: "Newborn", description: "Os primeiros 15 dias do milagre. A fragilidade e beleza do começo." },
  { num: "07", title: "Família", description: "O crescimento contínuo. Acompanhamento anual de momentos reais." }
];

export default function JourneyTimeline() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleOpenContact = (service: string) => {
    window.dispatchEvent(
      new CustomEvent("open-contact-modal", { detail: { service } })
    );
  };

  return (
    <div className="reveal d1">
      <div className="timeline-wrapper">
        <div className="timeline-line" aria-hidden="true"></div>
        <div className="timeline-track">
          {milestones.map((milestone, idx) => (
            <div 
              key={milestone.num}
              className={`timeline-node ${activeIndex === idx ? "active" : ""}`}
              onMouseEnter={() => setActiveIndex(idx)}
              onClick={() => setActiveIndex(idx)}
            >
              <div className="timeline-dot-outer cursor-interactive">
                <div className="timeline-dot-inner"></div>
              </div>
              <div className="timeline-content">
                <span className="timeline-num">{milestone.num}</span>
                <h3 className="timeline-node-title">{milestone.title}</h3>
                <p className="timeline-node-desc">{milestone.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
