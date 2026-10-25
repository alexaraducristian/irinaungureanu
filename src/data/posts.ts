// Articole de blog — titluri și imagini preluate din site-ul original.
// Textul integral poate fi completat ulterior din panoul de conținut.
import blogAlegere from '../assets/images/blog-alegere-psihoterapeut.jpg';
import blogCerturi from '../assets/images/blog-certuri-cuplu.webp';
import blogRusine from '../assets/images/blog-rusine.jpg';
import blogIubireNevoie from '../assets/images/blog-iubire-nevoie.jpg';
import blogEficienta from '../assets/images/blog-eficienta-psihoterapie.jpg';
import blogVocea from '../assets/images/blog-vocea-critica.jpg';
import blogIubireaDoare from '../assets/images/blog-cand-iubirea-doare.jpg';
import blogPrietenBland from '../assets/images/blog-prieten-bland.jpeg';

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO
  category: string;
  cover: ImageMetadata;
  body: string[]; // paragrafe
}

export const posts: Post[] = [
  {
    slug: 'este-eficienta-psihoterapia',
    title: 'Este eficientă psihoterapia? Ce spune știința și ce spune experiența personală',
    excerpt:
      'O privire onestă asupra dovezilor și a ceea ce se întâmplă, de fapt, în relația terapeutică.',
    date: '2025-11-14',
    category: 'Psihoterapie',
    cover: blogEficienta,
    body: [
      'Una dintre cele mai frecvente întrebări pe care le aud este dacă psihoterapia „chiar funcționează”. Este o întrebare firească — investim timp, energie și emoție, și e normal să ne dorim să știm că merită.',
      'Cercetările din ultimele decenii arată constant că psihoterapia produce schimbări reale: reducerea simptomelor de anxietate și depresie, relații mai sănătoase și o relație mai blândă cu propria persoană. Dar cifrele nu spun toată povestea.',
      'Din experiența mea, ceea ce vindecă cel mai profund este relația terapeutică în sine — spațiul sigur în care poți fi ascultat cu adevărat, fără grabă și fără judecată. Acolo începe schimbarea care durează.',
    ],
  },
  {
    slug: 'de-ce-iubirea-nu-e-o-alegere',
    title: 'De ce iubirea nu e o alegere, ci o nevoie profundă',
    excerpt:
      'Despre atașament, siguranță emoțională și de ce avem nevoie unii de alții.',
    date: '2025-09-30',
    category: 'Relații',
    cover: blogIubireNevoie,
    body: [
      'Suntem ființe profund relaționale. Nevoia de conectare nu este un semn de slăbiciune, ci parte din însăși structura noastră emoțională.',
      'Teoria atașamentului ne arată că siguranța în relații ne modelează felul în care ne raportăm la noi înșine și la ceilalți. Când aceste nevoi sunt împlinite, înflorim; când nu sunt, apar frica, retragerea sau conflictul.',
      'A înțelege iubirea ca nevoie, nu ca simplă alegere, ne ajută să fim mai blânzi cu noi și cu cei dragi.',
    ],
  },
  {
    slug: 'cum-imi-aleg-psihoterapeutul',
    title: 'Cum îmi aleg psihoterapeutul',
    excerpt:
      'Câteva repere care te pot ajuta să găsești persoana și spațiul potrivit pentru tine.',
    date: '2025-09-15',
    category: 'Ghid',
    cover: blogAlegere,
    body: [
      'Alegerea unui psihoterapeut este un pas important, iar relația de încredere contează enorm. Nu există un „cel mai bun” terapeut în general — există cel potrivit pentru tine.',
      'Uită-te la formarea profesională și la atestarea în Colegiul Psihologilor, dar ascultă și cum te simți în prezența persoanei respective: te simți ascultat, în siguranță, fără judecată?',
      'E în regulă să ai o primă ședință de cunoaștere înainte de a te angaja într-un proces. Ritmul potrivit se construiește împreună.',
    ],
  },
  {
    slug: 'rusinea-nu-e-o-sentinta',
    title: 'Rușinea nu e o sentință, e un semnal',
    excerpt:
      'Ce ne spune rușinea despre nevoile noastre neîmplinite și cum îi putem răspunde cu blândețe.',
    date: '2025-08-15',
    category: 'Emoții',
    cover: blogRusine,
    body: [
      'Rușinea este una dintre cele mai dificile emoții — ne face să ne dorim să dispărem, să ne ascundem, să credem că e ceva în neregală cu noi.',
      'Dar rușinea nu este un adevăr despre valoarea noastră. Este un semnal, adesea învățat devreme, care ne arată unde avem nevoie de compasiune și înțelegere.',
      'În terapie, învățăm să privim rușinea cu blândețe, nu cu mai multă critică — și, treptat, să ne reconectăm cu părțile din noi care au nevoie de acceptare.',
    ],
  },
  {
    slug: 'cand-iubirea-doare',
    title: 'Când iubirea doare: ce ne spune relația de cuplu despre nevoile noastre',
    excerpt:
      'Conflictele din cuplu ascund adesea întrebări profunde despre siguranță și apropiere.',
    date: '2025-08-30',
    category: 'Cuplu',
    cover: blogIubireaDoare,
    body: [
      'În spatele certurilor repetate se află, de obicei, întrebări foarte simple și foarte vulnerabile: „Pot conta pe tine?”, „Mă vezi?”, „Ești acolo când am nevoie?”.',
      'Când aceste nevoi de conectare nu sunt împlinite, apar critica, retragerea sau frustrarea. Nu pentru că nu ne mai iubim, ci pentru că ne e teamă să nu pierdem legătura.',
      'Terapia de cuplu ne ajută să aducem aceste nevoi la suprafață și să le transformăm într-un dialog care reconstruiește siguranța emoțională.',
    ],
  },
  {
    slug: 'vocea-critica-din-interior',
    title: 'Vocea critică din interior: ce ascunde și cum să-i răspunzi altfel',
    excerpt:
      'Despre criticul interior, originile lui și cum putem cultiva o voce mai blândă.',
    date: '2025-07-30',
    category: 'Dezvoltare personală',
    cover: blogVocea,
    body: [
      'Mulți dintre noi purtăm o voce interioară aspră, care ne judecă și ne spune că nu suntem suficienți. De multe ori, această voce a fost cândva o formă de protecție.',
      'A înțelege de unde vine criticul interior ne ajută să nu ne mai identificăm complet cu el. Nu trebuie să îl combatem cu forță — ci să îi răspundem cu mai multă înțelegere.',
      'Compasiunea de sine este o abilitate care se poate învăța. Cu timpul, vocea blândă poate deveni la fel de familiară ca cea critică.',
    ],
  },
  {
    slug: 'de-ce-certurile-repetate-cu-partenerul',
    title: 'De ce certurile repetate cu partenerul nu sunt doar „chestii de cuplu”',
    excerpt:
      'Când tăcerea devine mai periculoasă decât conflictul — și ce putem face.',
    date: '2025-07-30',
    category: 'Cuplu',
    cover: blogCerturi,
    body: [
      'Certurile repetate pot părea despre lucruri mărunte — vase nespălate, planuri, bani. Dar, de cele mai multe ori, sunt despre altceva: despre nevoia de a ne simți văzuți și importanți pentru celălalt.',
      'Mai periculoasă decât conflictul este, adesea, tăcerea — distanța emoțională care se instalează când renunțăm să ne mai căutăm unul pe celălalt.',
      'Recunoașterea tiparului este primul pas. În terapie, învățăm să ieșim din ciclul atac–retragere și să ne reconectăm.',
    ],
  },
  {
    slug: 'cum-sa-fii-un-prieten-bland-pentru-tine',
    title: 'Cum să fii un prieten blând pentru tine în momentele de durere emoțională',
    excerpt:
      'Practici simple de compasiune de sine pentru momentele grele.',
    date: '2025-07-30',
    category: 'Compasiune de sine',
    cover: blogPrietenBland,
    body: [
      'În momentele de durere, instinctul nostru este adesea să ne criticăm sau să ne cerem să „trecem peste” mai repede. Dar cel mai mult avem nevoie, atunci, de blândețe.',
      'Compasiunea de sine înseamnă să ne tratăm pe noi așa cum am trata un prieten drag aflat în suferință: cu căldură, răbdare și fără judecată.',
      'Cercetările arată că persoanele cu mai multă compasiune de sine sunt mai reziliente, mai fericite și mai capabile să îi susțină pe ceilalți. Hai să creștem împreună această abilitate.',
    ],
  },
];

export function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('ro-RO', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
