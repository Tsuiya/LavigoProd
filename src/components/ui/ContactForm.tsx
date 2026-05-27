"use client";

import React, { useState, useEffect } from "react";

interface ContactFormProps {
  initialService?: string;
  onSuccess?: () => void;
}

export default function ContactForm({ initialService = "Selecione", onSuccess }: ContactFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState(initialService);
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (initialService) {
      setService(initialService);
    }
  }, [initialService]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Format date nicely (DD/MM/YYYY)
    let formattedDate = "Não informada";
    if (date) {
      const parts = date.split("-");
      formattedDate = `${parts[2]}/${parts[1]}/${parts[0]}`;
    }

    // Construct emotional custom WhatsApp message
    const messageText = `Olá Daniel & Jaiane,
Gostaria de agendar uma conversa sobre nossos registros emocionais na Lavigo Studios!

*Meus dados:*
· Nome: ${name}
· WhatsApp: ${phone}
· E-mail: ${email}

*Detalhes do Registro:*
· Categoria: ${service}
· Data de Interesse: ${formattedDate}

*Nossa história:*
"${message}"`;

    const encodedMsg = encodeURIComponent(messageText);
    const whatsappURL = `https://wa.me/5516991609339?text=${encodedMsg}`;

    // Open WA window
    window.open(whatsappURL, "_blank");

    // Clear state
    setName("");
    setEmail("");
    setPhone("");
    setService("Selecione");
    setDate("");
    setMessage("");

    if (onSuccess) {
      onSuccess();
    }
  };

  return (
    <form id="contactForm" onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="form-label" htmlFor="clientName">Seu Nome *</label>
        <input
          type="text"
          id="clientName"
          className="form-control"
          placeholder="Como podemos te chamar?"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div className="form-row">
        <div className="form-group">
          <label className="form-label" htmlFor="clientEmail">Seu E-mail *</label>
          <input
            type="email"
            id="clientEmail"
            className="form-control"
            placeholder="exemplo@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="clientPhone">Seu Telefone / WhatsApp *</label>
          <input
            type="tel"
            id="clientPhone"
            className="form-control"
            placeholder="(16) 99999-9999"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label className="form-label" htmlFor="serviceSelect">Registro Desejado</label>
          <select
            id="serviceSelect"
            className="form-control cursor-interactive"
            value={service}
            onChange={(e) => setService(e.target.value)}
          >
            <option value="Selecione">Selecione uma opção</option>
            <option value="gestante">Ensaio Gestante</option>
            <option value="newborn">Newborn</option>
            <option value="familia">Casais & Família</option>
            <option value="casais">Ensaio de Casal</option>
            <option value="casamentos">Casamento Documental</option>
            <option value="Outro">Outra História</option>
          </select>
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="eventDate">Data de Preferência (Opcional)</label>
          <input
            type="date"
            id="eventDate"
            className="form-control cursor-interactive"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor="clientMsg">Sua História *</label>
        <textarea
          id="clientMsg"
          className="form-control"
          placeholder="Fale-nos um pouco sobre você, sua família ou seus planos..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
      </div>

      <button type="submit" className="btn btn-primary contact-form-btn cursor-interactive" aria-label="Enviar mensagem de contato">
        Enviar via WhatsApp →
      </button>
    </form>
  );
}
