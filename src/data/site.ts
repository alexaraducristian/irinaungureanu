// Date de contact & informații site — un singur loc de adevăr.
const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export const site = {
  name: 'Corina Ungureanu',
  role: 'Psihoterapeut relațional',
  tagline: 'Psihoterapie individuală, de cuplu și de familie — Iași & online',
  phone: '+40745000000', // TODO: înlocuiește cu numărul real
  phoneDisplay: '0745 000 000',
  email: 'contact@psihoterapeutcorinaungureanu.ro', // TODO: email real
  whatsapp: '40745000000', // TODO: număr WhatsApp real
  location: 'Iași, România',
  reg: 'Colegiul Psihologilor din România · Cod RUP: 31423',
};

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
