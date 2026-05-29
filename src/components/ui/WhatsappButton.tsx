"use client";

import { useState, useEffect, useCallback } from "react";

// ─── Tipos ───────────────────────────────────────────────────────────────────

interface WhatsAppButtonProps {
  phone: string;           // Número com DDD, sem +55: "16991609339"
  message?: string;        // Mensagem pré-preenchida (opcional)
  position?: "bottom-right" | "bottom-left";
  tooltipText?: string;
  showTooltip?: boolean;
  // Contexto para os eventos de analytics
  eventLabel?: string;     // Ex: "hero", "footer", "produto-x"
}

// ─── Utilitários de tracking ──────────────────────────────────────────────────

/** Google Analytics 4 */
function trackGA4(eventName: string, params: Record<string, string>) {
  if (typeof window === "undefined") return;
  const gtag = (window as any).gtag;
  if (typeof gtag === "function") {
    gtag("event", eventName, params);
  }
}

/** Meta Pixel */
function trackMetaPixel(eventName: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  const fbq = (window as any).fbq;
  if (typeof fbq === "function") {
    fbq("track", eventName, params);
  }
}

/** Google Tag Manager (dataLayer) */
function trackGTM(event: string, data: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  const dataLayer = (window as any).dataLayer;
  if (Array.isArray(dataLayer)) {
    dataLayer.push({ event, ...data });
  }
}

/** Dispara todos os trackers ao mesmo tempo */
function trackWhatsAppClick(label: string) {
  // GA4 — evento de conversão padrão
  trackGA4("generate_lead", {
    event_category: "whatsapp",
    event_label: label,
    value: "1",
  });

  // GA4 — evento customizado mais descritivo
  trackGA4("whatsapp_click", {
    channel: "whatsapp",
    label,
  });

  // Meta Pixel — Lead (mapeado como evento padrão de conversão)
  trackMetaPixel("Lead", {
    content_name: "whatsapp_button",
    content_category: label,
  });

  // Meta Pixel — evento customizado
  trackMetaPixel("WhatsAppClick", { label });

  // GTM dataLayer — para quem usa via GTM
  trackGTM("whatsapp_click", {
    whatsapp_label: label,
    whatsapp_phone: "16991609339",
  });
}

/** Rastreia quando o botão entra no viewport pela primeira vez */
function trackWhatsAppView(label: string) {
  trackGA4("whatsapp_button_view", { label });
  trackGTM("whatsapp_button_view", { whatsapp_label: label });
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function buildWhatsAppUrl(phone: string, message?: string): string {
  const cleaned = phone.replace(/\D/g, "");
  const intl = cleaned.startsWith("55") ? cleaned : `55${cleaned}`;
  const base = `https://wa.me/${intl}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

// ─── Componente ───────────────────────────────────────────────────────────────

export default function WhatsAppButton({
  phone = "16991609339",
  message,
  position = "bottom-right",
  tooltipText = "Fale conosco no WhatsApp!",
  showTooltip = true,
  eventLabel = "floating_button",
}: WhatsAppButtonProps) {
  const [visible, setVisible] = useState(false);
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [hasTrackedView, setHasTrackedView] = useState(false);

  // Aparece com delay suave após mount
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 800);
    return () => clearTimeout(t);
  }, []);

  // Exibe tooltip automaticamente após aparecer
  useEffect(() => {
    if (!visible || !showTooltip) return;
    const t = setTimeout(() => {
      setTooltipVisible(true);
      // Esconde após 4s
      setTimeout(() => setTooltipVisible(false), 4000);
    }, 1500);
    return () => clearTimeout(t);
  }, [visible, showTooltip]);

  // Impression tracking via IntersectionObserver
  const refCallback = useCallback(
    (node: HTMLAnchorElement | null) => {
      if (!node || hasTrackedView) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            trackWhatsAppView(eventLabel);
            setHasTrackedView(true);
            observer.disconnect();
          }
        },
        { threshold: 0.5 }
      );
      observer.observe(node);
    },
    [eventLabel, hasTrackedView]
  );

  const handleClick = () => {
    trackWhatsAppClick(eventLabel);
  };

  const positionClass =
    position === "bottom-left"
      ? "wa-btn--left"
      : "wa-btn--right";

  return (
    <>

      {/* ── Markup ── */}
      <div
        className={`wa-btn-wrapper ${positionClass} ${visible ? "wa-btn--visible" : ""}`}
        role="region"
        aria-label="Contato via WhatsApp"
      >
        {/* Tooltip */}
        {showTooltip && (
          <div
            className={`wa-tooltip ${tooltipVisible ? "wa-tooltip--visible" : ""}`}
            aria-hidden="true"
          >
            {tooltipText}
          </div>
        )}

        {/* Link / botão */}
        <a
          ref={refCallback}
          href={buildWhatsAppUrl(phone, message)}
          target="_blank"
          rel="noopener noreferrer"
          className="wa-btn"
          onClick={handleClick}
          aria-label="Abrir conversa no WhatsApp"
          title="Fale conosco no WhatsApp"
        >
          {/* Ícone oficial do WhatsApp */}
          <svg
            className="wa-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </a>
      </div>
    </>
  );
}
