// Bamberg Gisler Empreendimentos - Data

export interface Development {
  id: string;
  name: string;
  slug: string;
  location: string;
  address?: string;
  partner?: string;
  status: 'delivered' | 'construction' | 'planning' | 'available';
  category: 'residential' | 'commercial' | 'mixed';
  description: string;
  details: {
    units?: number;
    unitSize?: string;
    penthouseSize?: string;
    penthouseCount?: number;
    totalUnits?: number;
    investment?: string;
  };
  amenities?: string[];
  images?: string[];
  featured?: boolean;
}

export interface CompanyStats {
  delivered: number;
  construction: number;
  planning: number;
  totalInvestment?: string;
}

export interface Partner {
  id: string;
  name: string;
  logo?: string;
  description?: string;
}

// Company Statistics
export const companyStats: CompanyStats = {
  delivered: 760,
  construction: 629,
  planning: 1400,
  totalInvestment: "R$ 100 milhões"
};

// Partner Companies
export const partners: Partner[] = [
  {
    id: "casa-da-arvore",
    name: "Casa da Arvore",
    description: "Parceiro estratégico em desenvolvimento"
  },
  {
    id: "stiler-engenharia", 
    name: "Stiler Engenharia",
    description: "Parceiro em engenharia e construção"
  },
  {
    id: "constelar",
    name: "Constelar", 
    description: "Parceiro em desenvolvimento de projetos"
  }
];

// Development Projects
export const developments: Development[] = [
  {
    id: "bosque-das-araceas",
    name: "Bosque das Aráceas",
    slug: "bosque-das-araceas",
    location: "Itajaí",
    status: "available",
    category: "residential",
    description: "Designed to provide maximum convenience for you and your family",
    details: {},
    featured: false
  },
  {
    id: "andron",
    name: "Andron", 
    slug: "andron",
    location: "Região",
    status: "available",
    category: "residential",
    description: "Designed to generate quality of life. All details are to bring comfort, leisure and safety",
    details: {},
    featured: false
  },
  {
    id: "bg-way",
    name: "BG Way",
    slug: "bg-way", 
    location: "Santo Ângelo, RS",
    status: "planning",
    category: "commercial",
    description: "Empreendimento comercial inovador em desenvolvimento pela Bamberg Gisler Empreendimentos. Em breve mais informações. Aguarde!",
    details: {},
    images: [
      "/images/IMG-20221122-WA0008.jpg",
      "/images/IMG-20221122-WA0009.jpg"
    ],
    featured: true
  },
  {
    id: "residencial-sirius",
    name: "Residencial Sírius",
    slug: "residencial-sirius",
    location: "Santo Ângelo, RS",
    address: "Bairro Pippi, Santo Ângelo (RS)",
    partner: "Stiler Engenharia", 
    status: "delivered",
    category: "residential",
    description: "Desenvolvido em parceria com a Stiler Engenharia, o Residencial Sírius é composto por 3 torres, com 132 apartamentos no total. São 54,45m² de área privativa, com sacada, churrasqueira, piscina, salão de festas, jardins internos, áreas de lazer e playground, tudo isso com a segurança de um condomínio murado.",
    details: {
      units: 132,
      unitSize: "54,45 m²",
      totalUnits: 132
    },
    amenities: [
      "Sacada",
      "Churrasqueira",
      "Piscina", 
      "Salão de festas",
      "Jardins internos",
      "Áreas de lazer",
      "Playground",
      "Condomínio murado"
    ],
    images: [
      "/images/Sirius_fachada-2.png",
      "/images/Sirius_fachada-3.png"
    ],
    featured: true
  },
  {
    id: "residencial-timbauva",
    name: "Residencial Timbaúva",
    slug: "residencial-timbauva",
    location: "Santo Ângelo, RS",
    address: "Avenida Sagrada Família, Bairro Pippi, Santo Ângelo (RS)",
    partner: "Zanetti Empreendimentos", 
    status: "delivered",
    category: "residential",
    description: "Loteamento residencial premium desenvolvido em parceria com a Zanetti Empreendimentos, oferecendo 68 lotes com infraestrutura completa e acabamentos de alta qualidade. Localizado estrategicamente na Avenida Sagrada Família, no bairro Pippi, proporciona excelente acessibilidade e valorização imobiliária garantida.",
    details: {
      units: 68,
      totalUnits: 68
    },
    amenities: [
      "Pórtico de entrada",
      "Paisagismo nas vias",
      "Iluminação LED",
      "Pavimentação com piso intertravado",
      "Passeios em piso intertravado",
      "Rede elétrica completa",
      "Rede de água e esgoto",
      "Rede pluvial"
    ],
    images: [
      "/images/Residencial-timbauva-santo-angelo-bamberg-gisler-portico.png",
      "/images/Timbauva.png"
    ],
    featured: true
  },
  {
    id: "residencial-itacuru",
    name: "Residencial Itacuru",
    slug: "residencial-itacuru",
    location: "Entre-Ijuís, RS",
    address: "Avenida Valério Emilio Ribas, Entre-Ijuís (RS)",
    partner: "Stiler Engenharia", 
    status: "construction",
    category: "residential",
    description: "Empreendimento residencial moderno desenvolvido em parceria com a Stiler Engenharia, localizado estrategicamente na Avenida Valério Emilio Ribas em Entre-Ijuís. Oferece 44 apartamentos de 54,45m² com acabamentos de qualidade, proporcionando conforto e bem-estar para toda a família em uma das regiões de maior crescimento do interior gaúcho.",
    details: {
      units: 44,
      unitSize: "54,45 m²",
      totalUnits: 44
    },
    amenities: [
      "Sacada",
      "Elevador",
      "Salão de festas",
      "Playground",
      "Ampla pista de caminhada"
    ],
    images: [
      "/images/ITACURU-2.png",
      "/images/ITACURU-3.png"
    ],
    featured: true
  },
  {
    id: "residencial-araucarias",
    name: "Residencial Araucárias",
    slug: "residencial-araucarias",
    location: "Santo Ângelo, RS",
    address: "Rua Tiradentes, próximo ao Alibem, Santo Ângelo (RS)",
    partner: "Stiler Engenharia", 
    status: "delivered",
    category: "residential",
    description: "Complexo residencial completo desenvolvido em parceria com a Stiler Engenharia, estrategicamente localizado na Rua Tiradentes, próximo ao Alibem. Oferece 108 apartamentos de 52,90m² em condomínio fechado com guarita e infraestrutura completa de lazer para toda a família.",
    details: {
      units: 108,
      unitSize: "52,90 m²"
    },
    amenities: [
      "Sacada",
      "Elevador",
      "Salão de festas com deck elevado",
      "Condomínio fechado com guarita",
      "Quiosques com churrasqueira",
      "Playground com brinquedos",
      "Wi-Fi no salão de festas",
      "Wi-Fi nos quiosques"
    ],
    images: [
      "/images/WhatsApp-Image-2023-02-28-at-16.11.17.jpeg",
      "/images/WhatsApp-Image-2023-02-28-at-16.11.17-1.jpeg"
    ],
    featured: true
  },
  {
    id: "residencial-pinheiros",
    name: "Residencial Pinheiros",
    slug: "residencial-pinheiros",
    location: "Santo Ângelo, RS", 
    address: "Rua Amália Vier, 81, Centro, próximo ao Alibem, Santo Ângelo (RS)",
    partner: "Stiler Engenharia",
    status: "delivered",
    category: "residential", 
    description: "Residencial moderno desenvolvido em parceria com a Stiler Engenharia, estrategicamente localizado no centro de Santo Ângelo, próximo ao Alibem. Oferece apartamentos de 54,45m² com acabamentos de qualidade e infraestrutura completa de lazer, proporcionando conforto e conveniência em uma das áreas mais valorizadas da cidade.",
    details: {
      unitSize: "54,45 m²"
    },
    amenities: [
      "Sacada",
      "Elevador",
      "Salão de festas",
      "Quiosques com churrasqueira",
      "Wi-Fi no salão de festas",
      "Wi-Fi nos quiosques"
    ],
    images: [
      "/images/Pinheiros-Bamberg-Gisler-2.png",
      "/images/Pinheiros-Bamberg-Gisler-1.png"
    ],
    featured: true
  },
  {
    id: "residencial-garden",
    name: "Residencial Garden",
    slug: "residencial-garden",
    location: "Santo Ângelo, RS",
    address: "Bairro Jardim das Palmeiras, Santo Ângelo (RS)",
    partner: "Stiler Engenharia",
    status: "delivered", 
    category: "mixed",
    description: "Condomínio residencial premium desenvolvido em parceria com a Stiler Engenharia, localizado no bairro Jardim das Palmeiras com visão privilegiada da natureza. Destaca-se pela sustentabilidade com geração de energia fotovoltaica e ampla área de lazer completa.",
    details: {
      totalUnits: 34,
      units: 32,
      unitSize: "74,05 m²",
      penthouseCount: 2,
      penthouseSize: "150 m²"
    },
    amenities: [
      "Garagem coberta",
      "Elevador",
      "Jardins nos acessos",
      "Salão de festas mobiliado com acesso independente",
      "2 dormitórios, sendo 1 suíte",
      "Sacada com churrasqueira",
      "Geração de energia fotovoltaica",
      "Playground",
      "Área para descanso",
      "Vista privilegiada da natureza"
    ],
    images: [
      "/images/garden_.png",
      "/images/garden_1.png"
    ],
    featured: true
  },
  {
    id: "shopping-entre-ijuis",
    name: "Shopping Entre-Ijuís", 
    slug: "shopping-entre-ijuis",
    location: "Entre-Ijuís",
    status: "planning",
    category: "commercial",
    description: "Mall project in the heart of Entre-Ijuís focused on bringing growth and modernity to the region",
    details: {},
    featured: true
  },
  {
    id: "santo-angelo-development",
    name: "Santo Ângelo Development",
    slug: "santo-angelo-development", 
    location: "Santo Ângelo",
    status: "planning",
    category: "mixed",
    description: "Mixed-use project with luxury amenities including infinity pool, cinema, and business office",
    details: {
      investment: "R$ 100 milhões",
      units: 93,
      totalUnits: 93
    },
    amenities: [
      "Infinity pool",
      "Cinema",
      "Business office", 
      "Luxury amenities"
    ],
    featured: true
  }
];

// Key Messages
export const keyMessages = {
  hero: "Empreendimentos únicos e planejados para lhe surpreender",
  subhero: "Nossos sonhos se encontram logo ali!",
  partnership: "Juntos transformamos sonhos em realidade!",
  main: "Empreendimentos únicos e planejados para lhe surpreender e atender as suas necessidades."
};

// Contact Information
export const contactInfo = {
  phone: "+55 (XX) XXXX-XXXX",
  email: "contato@bamberggisler.com.br",
  whatsapp: "+55 (XX) XXXXX-XXXX",
  address: "Endereço da empresa",
  businessHours: "Segunda a Sexta: 8h às 18h"
};

// Navigation Menu
export const navigationMenu = [
  {
    label: "Início",
    href: "/",
  },
  {
    label: "Empreendimentos", 
    href: "/empreendimentos",
    submenu: [
      { label: "Todos", href: "/empreendimentos" },
      { label: "Residencial", href: "/empreendimentos?category=residential" },
      { label: "Comercial", href: "/empreendimentos?category=commercial" },
      { label: "Entregues", href: "/empreendimentos?status=delivered" },
      { label: "Em Construção", href: "/empreendimentos?status=construction" },
      { label: "Em Projeção", href: "/empreendimentos?status=planning" },
    ]
  },
  {
    label: "Sobre Nós",
    href: "/sobre-nos",
  },
  {
    label: "Contato", 
    href: "/contato",
  }
];

// Helper functions
export const getDevelopmentsByStatus = (status: Development['status']) => {
  return developments.filter(dev => dev.status === status);
};

export const getDevelopmentsByCategory = (category: Development['category']) => {
  return developments.filter(dev => dev.category === category);
};

export const getFeaturedDevelopments = () => {
  return developments.filter(dev => dev.featured);
};

export const getDevelopmentBySlug = (slug: string) => {
  return developments.find(dev => dev.slug === slug);
};

export const getStatusLabel = (status: Development['status']) => {
  const labels = {
    delivered: 'Entregue',
    construction: 'Em Construção', 
    planning: 'Em Projeção',
    available: 'Disponível'
  };
  return labels[status];
};

export const getCategoryLabel = (category: Development['category']) => {
  const labels = {
    residential: 'Residencial',
    commercial: 'Comercial',
    mixed: 'Misto'
  };
  return labels[category];
};