"use client";

import React from "react";
import { trackBookServiceClick } from "@/lib/analytics";

interface BookServiceButtonProps {
  serviceId: string;
  className?: string;
  label?: string;
}

export default function BookServiceButton({ 
  serviceId, 
  className = "btn btn-primary cursor-interactive", 
  label = "Reservar Ensaio" 
}: BookServiceButtonProps) {
  
  const handleOpenContact = () => {
    trackBookServiceClick(serviceId, label);
    window.dispatchEvent(
      new CustomEvent("open-contact-modal", { detail: { service: serviceId } })
    );
  };

  return (
    <button className={className} onClick={handleOpenContact}>
      {label}
    </button>
  );
}
