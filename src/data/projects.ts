// Mini-projects hosted on Render - see render.yaml

export type ProjectCategory = 'frontend' | 'backend' | 'fullstack' | 'tools' | 'portfolio';

export interface Project {
  id: string;
  title: {
    en: string;
    cs: string;
  };
  description: {
    en: string;
    cs: string;
  };
  category: ProjectCategory;
  tags: string[];
  image?: string;
  liveUrl?: string;
  repoUrl?: string;
}

export const projects: Project[] = [
  {
    id: 'speechless',
    title: {
      en: 'Speechless',
      cs: 'Speechless',
    },
    description: {
      en: 'Hands-free computer control through air writing and voice commands. Uses machine learning to interpret gestures and spoken input in real time.',
      cs: 'Ovládání počítače bez rukou pomocí psaní ve vzduchu a hlasových příkazů. Využívá strojové učení k interpretaci gest a mluveného vstupu v reálném čase.',
    },
    category: 'tools',
    tags: ['Python', 'Machine Learning', 'Air Writing', 'Voice Control'],
    repoUrl: 'https://github.com/T-C4t/speechless',
  },
  {
    id: 'semafor-demo',
    title: {
      en: 'Semaphore',
      cs: 'Semafor',
    },
    description: {
      en: 'Real-time pose detection that translates semaphore flag signals into text. Built with ml5.js — stand in front of your webcam and use arm positions to spell letters.',
      cs: 'Detekce pozic těla v reálném čase, která překládá signály semaforové vlajkové abecedy do textu. Postavte se před webovou kameru a pomocí poloh rukou hláskujte písmena.',
    },
    category: 'frontend',
    tags: ['p5.js', 'ml5.js', 'Machine Learning', 'Hand Gesture'],
    repoUrl: 'https://github.com/T-C4t/mini-projects/tree/main/semafor-demo',
    liveUrl: 'https://web-portfolio-k3id.onrender.com/semafor-demo/',
  },
  {
    id: 'web-portfolio',
    title: {
      en: 'Web Portfolio',
      cs: 'Webové portfolio',
    },
    description: {
      en: 'This site. Bilingual portfolio built with Astro, featuring dark/light theme, animated gradient backgrounds, and an Apple-inspired monochrome design with pink-purple accents.',
      cs: 'Tento web. Dvojjazyčné portfolio postavené na Astro s tmavým/světlým tématem, animovanými gradientními pozadími a designem inspirovaným Apple s růžovo-fialovými akcenty.',
    },
    category: 'portfolio',
    tags: ['Astro', 'TypeScript', 'CSS', 'Bilingual', 'i18n'],
    liveUrl: 'https://web-portfolio-k3id.onrender.com/',
    repoUrl: 'https://github.com/T-C4t/web-portfolio',
  },
  {
    id: 'digiflow',
    title: {
      en: 'Digiflow',
      cs: 'Digiflow',
    },
    description: {
      en: 'Interactive web-based educational platform for MSVK (IBO/Digiflow) built as part of a programming seminar at Gymnázium PORG. Features HTML, CSS, and JavaScript-based interactive learning tools.',
      cs: 'Interaktivní webová vzdělávací platforma pro MSVK (IBO/Digiflow) vytvořená v rámci programovacího semináře na Gymnáziu PORG. Nabízí interaktivní výukové nástroje postavené na HTML, CSS a JavaScriptu.',
    },
    category: 'frontend',
    tags: ['HTML', 'JavaScript', 'Game', 'Education'],
    repoUrl: 'https://github.com/T-C4t/IBO-PORG-CS',
  },
  {
    id: 'tower-of-hanoi',
    title: {
      en: 'Tower of Hanoi',
      cs: 'Věže Hanoi',
    },
    description: {
      en: 'Classic mathematical puzzle — move an entire stack of disks between pegs, one disk at a time, never placing a larger disk on a smaller one. Click columns to select and transfer disks.',
      cs: 'Klasický matematický puzzle — přesuňte celou hromádku disků mezi kolíky, po jednom disku, aniž byste větší disk položili na menší. Kliknutím na sloupce vyberte a přeneste disky.',
    },
    category: 'frontend',
    tags: ['p5.js', 'JavaScript', 'Game', 'Visualization'],
    repoUrl: 'https://github.com/T-C4t/mini-projects/tree/main/tower%20of%20hanoi',
    liveUrl: 'https://web-portfolio-k3id.onrender.com/tower-of-hanoi/',
  },
  {
    id: 'pathfinding-visualizer',
    title: {
      en: 'Pathfinding Visualizer',
      cs: 'Vizualizátor hledání cesty',
    },
    description: {
      en: 'Interactive visualization of Dijkstra\'s algorithm. Click to place walls, press R for random obstacles, then watch the algorithm find the shortest path in real time.',
      cs: 'Interaktivní vizualizace Dijkstrova algoritmu. Klikáním umisťujte překážky, stiskněte R pro náhodné překážky a sledujte, jak algoritmus najde nejkratší cestu v reálném čase.',
    },
    category: 'frontend',
    tags: ['p5.js', 'JavaScript', 'Algorithm', 'Dijkstra'],
    repoUrl: 'https://github.com/T-C4t/mini-projects/tree/main/pathfinding',
    liveUrl: 'https://web-portfolio-k3id.onrender.com/pathfinding/',
  },
  {
    id: 'tetris',
    title: {
      en: 'Tetris',
      cs: 'Tetris',
    },
    description: {
      en: 'Classic Tetris clone with keyboard controls. Arrow keys to move and rotate, spacebar for hard drop. Tracks score, lines cleared, and level progression.',
      cs: 'Klasický klon Tetrisu s ovládáním klávesnicí. Šipkami posun a rotace, mezerník pro rychlý pád. Sleduje skóre, počet vyčištěných řádků a postup úrovněmi.',
    },
    category: 'frontend',
    tags: ['JavaScript', 'Game', 'Classic'],
    repoUrl: 'https://github.com/T-C4t/mini-projects/tree/main/tetris',
    liveUrl: 'https://web-portfolio-k3id.onrender.com/tetris/',
  }
];

export const categories: { id: ProjectCategory; label: { en: string; cs: string } }[] = [
  { id: 'portfolio', label: { en: 'Portfolio', cs: 'Portfolio' } },
  { id: 'frontend', label: { en: 'Frontend', cs: 'Frontend' } },
  { id: 'backend', label: { en: 'Backend', cs: 'Backend' } },
  { id: 'fullstack', label: { en: 'Full Stack', cs: 'Full Stack' } },
  { id: 'tools', label: { en: 'Tools', cs: 'Nástroje' } },
];
