export interface ServiceStep {
  step: string;
  title: string;
  description: string;
}

export interface ServiceData {
  id: string;
  title: string;
  tag: string;
  price: string;
  description: string;
  detailDescription: string;
  coverImage: string;
  included: string[];
  process: ServiceStep[];
  gallery: { src: string; alt: string }[];
}

export const servicesData: Record<string, ServiceData> = {
  gestante: {
    id: "gestante",
    title: "Ensaio Gestante",
    tag: "Maternidade · Core",
    price: "A partir de R$ 600",
    description: "O momento mais íntimo da transformação. Luz natural, emoção real, memória para sempre.",
    detailDescription: "O ensaio de gestante na Lavigo é pensado como uma celebração íntima e poética da maternidade. Longe de poses artificiais ou estúdios frios, nós fotografamos na luz suave da tarde em um local externo que tenha significado para você, ou no aconchego do seu próprio lar (estilo lifestyle). Direcionamos você de forma afetiva para que se sinta inteiramente confortável, capturando a conexão pura, o toque sutil e o amor que transborda.",
    coverImage: "https://res.cloudinary.com/drczznkji/image/upload/v1779837828/gestante_w6tgwt.png", // Unsplash placeholder
    included: [
      "Sessão fotográfica de até 2 horas em local externo ou residencial",
      "Direção de poses leve, afetiva e natural por Daniel & Jaiane",
      "Disponibilização de 40 fotos digitais cuidadosamente tratadas em alta resolução",
      "Galeria online privativa para seleção e download, protegida por senha",
      "Estojo de linho premium personalizado com 10 impressões fine art 15x21cm"
    ],
    process: [
      { step: "01", title: "Briefing Afetivo", description: "Alinhamos a escolha do figurino, estilo e local que combinam com a personalidade da gestante." },
      { step: "02", title: "A Sessão", description: "Um dia leve e sem pressa, focado na luz natural e no ritmo e conforto da gestante." },
      { step: "03", title: "Curadoria & Entrega", description: "Edição autoral em tons quentes e entrega digital e física com acabamento fine art." }
    ],
    gallery: [
      { src: "https://res.cloudinary.com/drczznkji/image/upload/v1779842420/gestante2_wldhd6.png", alt: "Ensaio Gestante (Referência Visual)" },
      { src: "https://res.cloudinary.com/drczznkji/image/upload/v1779842420/gestante3_mbrsou.png", alt: "Ensaio Gestante (Referência Visual)" }
    ]
  },
  newborn: {
    id: "newborn",
    title: "Newborn",
    tag: "Maternidade · Core",
    price: "A partir de R$ 700",
    description: "Os primeiros dias. A menor mão. O cheiro que não volta. Registrado com delicadeza absoluta.",
    detailDescription: "Os primeiros dias de vida de um bebê são repletos de descobertas e mudanças velozes. Nosso registro Newborn é focado no conforto absoluto e na segurança do recém-nascido. Realizado preferencialmente nos primeiros 15 dias de vida, na própria casa da família (estilo home lifestyle), documentamos a rotina natural da chegada do bebê: o aconchego no colo dos pais, os pezinhos enrugados, o sono profundo e os olhares apaixonados da família, sem pressa, no tempo do bebê.",
    coverImage: "https://res.cloudinary.com/drczznkji/image/upload/v1779837582/newborn_f9lt9a.png", // Unsplash placeholder
    included: [
      "Sessão residencial (lifestyle) sem limite de tempo rígido (respeitando mamadas e sono)",
      "Fotografia do bebê individualmente e em interação com os pais e irmãos",
      "Disponibilização de 35 fotos tratadas digitalmente em alta definição",
      "Acesso à galeria online exclusiva por 1 ano",
      "Álbum fotográfico em papel fotográfico fosco premium de 20 páginas (15x15cm)"
    ],
    process: [
      { step: "01", title: "Reserva de Data", description: "Agendamos uma data flexível com base na previsão do parto, reajustando após o nascimento." },
      { step: "02", title: "Sessão Conforto", description: "Realizada no ritmo do bebê, com pausas necessárias para amamentação, troca e carinho." },
      { step: "03", title: "O Álbum", description: "Curadoria afetiva dos momentos mais doces montados em um livreto especial de memórias." }
    ],
    gallery: [
      { src: "https://res.cloudinary.com/drczznkji/image/upload/v1779842701/newborn2_gzdwvp.png", alt: "Ensaio Newborn (Referência Visual)" }
    ]
  },
  familia: {
    id: "familia",
    title: "Infantil, Aniversários & Família",
    tag: "Família · Core",
    price: "A partir de R$ 500",
    description: "Do ensaio infantil espontâneo à cobertura de aniversário. Guardamos o crescimento dos filhos.",
    detailDescription: "A infância passa rápido demais e cada fase tem suas particularidades. Nosso registro de Família engloba os ensaios infantis criativos (lifestyle ou temáticos) e as coberturas fotográficas afetivas de aniversários. Capturamos a espontaneidade pura das crianças, as descobertas de cada idade, os risos soltos e as brincadeiras em família de forma leve e natural.",
    coverImage: "https://res.cloudinary.com/drczznkji/image/upload/v1778605998/Luisa_2anos_jeblpm.jpg?_s=public-apps",
    included: [
      "Cobertura de aniversário ou ensaio infantil externo/residencial de até 2 horas",
      "Participação livre dos pais e irmãos nos registros do ensaio",
      "Disponibilização de 50 fotos digitais tratadas com cor e iluminação suave",
      "Galeria online exclusiva para download em alta resolução",
      "Estojo de linho personalizado com pendrive de madeira contendo os arquivos"
    ],
    process: [
      { step: "01", title: "Alinhamento", description: "Planejamento do ensaio infantil ou cronograma de fotos do aniversário para garantir conforto." },
      { step: "02", title: "O Dia", description: "Registros baseados em brincadeiras reais das crianças, sem forçar poses artificiais." },
      { step: "03", title: "Entrega Rápida", description: "Galeria digital no ar em até 10 dias úteis para compartilhar com toda a família." }
    ],
    gallery: [
      { src: "https://res.cloudinary.com/drczznkji/image/upload/v1778605998/Luisa_2anos_jeblpm.jpg?_s=public-apps", alt: "Aniversário Luisa 2 anos - Sorriso" },
      { src: "https://res.cloudinary.com/drczznkji/image/upload/v1778606157/Still_2026-05-12_141454_1.1.1_tavxdp.jpg?_s=public-apps", alt: "Aniversário Luisa 2 anos - Mesa do Bolo" },
      { src: "https://res.cloudinary.com/drczznkji/image/upload/v1778605672/agatha-66_iu4u8q.jpg?_s=public-apps", alt: "Ensaio Infantil Agatha - 6 meses" },
      { src: "https://res.cloudinary.com/drczznkji/image/upload/v1778606385/DSC03479_1_1_lubc7f.jpg?_s=public-apps", alt: "Ensaio Infantil Agatha - Natal" }
    ]
  },
  casais: {
    id: "casais",
    title: "Ensaio de Casal",
    tag: "Família · Core",
    price: "A partir de R$ 500",
    description: "Do ensaio íntimo ao pré-wedding. Capturamos a cumplicidade e a sintonia do casal.",
    detailDescription: "Celebrar a conexão entre duas pessoas é uma das nossas maiores inspirações. O Ensaio de Casal (seja para namorados, noivos ou pré-wedding) é conduzido de forma descontraída, como um passeio a dois onde nós registramos os olhares cúmplices, as risadas compartilhadas e os gestos de carinho silenciosos. O resultado é um acervo de imagens sinceras que mostram a essência da parceria de vocês em formato de arte visual.",
    coverImage: "https://res.cloudinary.com/drczznkji/image/upload/v1779843192/ensaio-casal2_vcear9.png", // Unsplash placeholder
    included: [
      "Sessão de fotos de 1h30 com troca de figurinos inclusa",
      "Locação externa exclusiva (campo, riacho ou ruínas históricas)",
      "Direção e roteiro de interação afetiva",
      "Disponibilização de 40 fotos digitais tratadas",
      "Galeria web privativa para seleção e download rápido"
    ],
    process: [
      { step: "01", title: "Briefing Criativo", description: "Descobrimos locais especiais e definimos paleta de cores para os figurinos do casal." },
      { step: "02", title: "O Ensaio", description: "Um passeio guiado regado a conversas, risadas e registros documentais autênticos." },
      { step: "03", title: "Revelação Digital", description: "Envio das fotos com tratamento de luz e cor cinematográfico quente." }
    ],
    gallery: [
      { src: "https://res.cloudinary.com/drczznkji/image/upload/v1779843192/ensaio-casal1_hlhude.png", alt: "Ensaio de Casal (Referência Visual)" }
    ]
  },
  casamentos: {
    id: "casamentos",
    title: "Casamentos Civis",
    tag: "Casamentos",
    price: "A partir de R$ 500",
    description: "Cobertura de casamentos civis intimistas, espontâneos e repletos de verdade.",
    detailDescription: "O casamento civil é cercado de intimidade e emoção genuína. Focamos em registrar a preparação, a cerimônia no cartório e a celebração íntima que se segue (almoço ou recepção familiar). Daniel & Jaiane capturam com naturalidade as trocas de olhares, o nervosismo feliz da assinatura e o abraço apertado das testemunhas de forma inteiramente documental.",
    coverImage: "https://res.cloudinary.com/drczznkji/image/upload/v1776972857/LR-1_schl7z.jpg?_s=public-apps",
    included: [
      "Cobertura fotográfica do cartório civil e celebração íntima subsequente",
      "Disponibilização de até 200 fotos curadas e tratadas de forma autoral",
      "Acesso à galeria online protegida por senha para download e compartilhamento familiar",
      "Estojo revestido em linho com ampliações fine art"
    ],
    process: [
      { step: "01", title: "Alinhamento", description: "Alinhamos os horários do cartório e a logística do local da recepção." },
      { step: "02", title: "O Registro", description: "Cobertura leve, discreta e focada nos sorrisos sinceros e emoções reais." },
      { step: "03", title: "Entrega Ágil", description: "Fotos tratadas disponibilizadas de forma digital e impressas no estojo." }
    ],
    gallery: [
      // Larissa e Rodolfo
      { src: "https://res.cloudinary.com/drczznkji/image/upload/v1776972857/LR-1_schl7z.jpg?_s=public-apps", alt: "Casamento Civil Larissa e Rodolfo - Assinatura" },
      { src: "https://res.cloudinary.com/drczznkji/image/upload/v1776972786/LR-3_yip935.jpg?_s=public-apps", alt: "Casamento Civil Larissa e Rodolfo - Cumplicidade" },
      { src: "https://res.cloudinary.com/drczznkji/image/upload/v1776972847/LR-19_uyyde1.jpg?_s=public-apps", alt: "Casamento Civil Larissa e Rodolfo - Abraço" },
      { src: "https://res.cloudinary.com/drczznkji/image/upload/v1776972786/LR-6_kdkf2b.jpg?_s=public-apps", alt: "Casamento Civil Larissa e Rodolfo - Brinde" },
      // Brenda e Danilo
      { src: "https://res.cloudinary.com/drczznkji/image/upload/v1778601027/B_D-41_ka3fy6.jpg?_s=public-apps", alt: "Casamento Civil Brenda e Danilo - Retrato" },
      { src: "https://res.cloudinary.com/drczznkji/image/upload/v1778601027/B_D-39_djwg3c.jpg?_s=public-apps", alt: "Casamento Civil Brenda e Danilo - Cartório" },
      { src: "https://res.cloudinary.com/drczznkji/image/upload/v1778601027/B_D-29_nfyw60.jpg?_s=public-apps", alt: "Casamento Civil Brenda e Danilo - Oração" }
    ]
  },
  "filmes-emocionais": {
    id: "filmes-emocionais",
    title: "Filmes Emocionais",
    tag: "Premium · Cinema",
    price: "A partir de R$ 2500",
    description: "Narrativa audiovisual de casamentos religiosos, editada com intenção cinematográfica.",
    detailDescription: "Não fazemos apenas vídeos, criamos documentários poéticos da sua união religiosa. Capturamos o som ambiente, os votos trêmulos, as risadas, a música e o silêncio respeitoso da igreja. Daniel & Jaiane utilizam câmeras de cinema para criar um filme que transporta você de volta para o altar toda vez que der o play.",
    coverImage: "https://res.cloudinary.com/drczznkji/image/upload/v1778602019/Still_2026-03-07_154153_2.4.1_qqlnxs.jpg?_s=public-apps",
    included: [
      "Cobertura completa do casamento religioso com câmeras de cinema",
      "Captação de áudio profissional dos votos e discursos do altar",
      "Teaser do casamento de 1 minuto para redes sociais",
      "Filme de casamento cinematográfico de 5 a 8 minutos",
      "Disponibilização do link digital em alta definição"
    ],
    process: [
      { step: "01", title: "Cronograma de Áudio", description: "Alinhamos os microfones com a equipe de som e assessoria do casamento." },
      { step: "02", title: "Captação Discreta", description: "Equipe reduzida se move de forma invisível para registrar os gestos autênticos." },
      { step: "03", title: "Edição e Cor", description: "Colorização e sincronização da trilha sonora para evocar a emoção vivida." }
    ],
    gallery: [
      { src: "https://res.cloudinary.com/drczznkji/image/upload/v1778602019/Still_2026-03-07_154153_2.2.2_pbxpfm.jpg?_s=public-apps", alt: "Filme Religioso Camila e Sidney - Preparação" },
      { src: "https://res.cloudinary.com/drczznkji/image/upload/v1778602019/Still_2026-03-07_154153_2.4.1_qqlnxs.jpg?_s=public-apps", alt: "Filme Religioso Camila e Sidney - Altar" },
      { src: "https://res.cloudinary.com/drczznkji/image/upload/v1778602020/Still_2026-03-07_154153_2.8.1_qvotkj.jpg?_s=public-apps", alt: "Filme Religioso Camila e Sidney - Aliança" },
      { src: "https://res.cloudinary.com/drczznkji/image/upload/v1778602021/Still_2026-03-07_154153_2.7.1_sxqsyv.jpg?_s=public-apps", alt: "Filme Religioso Camila e Sidney - O beijo" }
    ]
  }
};
export const getServiceById = (id: string) => {
  return servicesData[id];
};
export const allServices = Object.values(servicesData);
