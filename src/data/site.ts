// Date de contact & informații site — un singur loc de adevăr.
const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export const site = {
  name: 'Corina Ungureanu',
  role: 'Psihoterapeut relațional',
  tagline: 'Psihoterapie individuală, de cuplu și de familie — Iași & online',
  phone: '+40745188986',
  phoneDisplay: '0745 188 986',
  email: 'ungureanuioanacorina@gmail.com',
  whatsapp: '40745188986',
  location: 'Iași, România',
  city: 'Iași',
  region: 'Iași',
  country: 'RO',
  // Opțional: coordonate aproximative (centru Iași) pentru SEO local.
  // Poți pune coordonatele exacte ale cabinetului dacă dorești.
  geo: { lat: 47.1585, lng: 27.6014 },
  priceRange: '200–300 RON',
  reg: 'Colegiul Psihologilor din România · Cod RUP: 31423',
  // Opțional: adaugă linkurile reale de social media (apar în schema.org sameAs).
  social: [
    // 'https://www.facebook.com/...',
    // 'https://www.instagram.com/...',
  ] as string[],
};

// Cuvinte-cheie globale, aplicate pe toate paginile. Paginile pot adăuga propriile keywords.
export const globalKeywords = [
  'psihoterapeut Iași',
  'psiholog Iași',
  'psihoterapie Iași',
  'cabinet psihoterapie Iași',
  'terapie Iași',
  'terapie online',
  'Corina Ungureanu psihoterapeut',
  'ședințe psihoterapie Iași',
];

export const nav = {
  links: [
    { text: 'Acasă', href: `${base}/` },
    { text: 'Despre mine', href: `${base}/despre-mine/` },
    { text: 'Abordarea mea', href: `${base}/abordarea-mea/` },
    {
      text: 'Servicii',
      href: `${base}/servicii/`,
      children: [
        { text: 'Terapie individuală', href: `${base}/terapie-individuala/` },
        { text: 'Terapie de cuplu', href: `${base}/terapie-de-cuplu/` },
        { text: 'Terapie de familie', href: `${base}/terapie-de-familie/` },
        { text: 'Terapie online', href: `${base}/terapie-online/` },
      ],
    },
    { text: 'Blog', href: `${base}/blog/` },
    { text: 'Contact', href: `${base}/contact/` },
  ],
};
