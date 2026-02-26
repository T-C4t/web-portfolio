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
    id: 'web-portfolio',
    title: {
      en: 'Web Portfolio',
      cs: 'Webové portfolio',
    },
    description: {
      en: 'Personal portfolio website built with Astro featuring bilingual support (EN/CS), dark/light theme, and Apple-inspired design with pink/purple accent.',
      cs: 'Osobní webové portfolio postavené na Astro s dvojjazyčnou podporou (EN/CS), tmavým/světlým tématem a designem inspirovaným Apple s růžovo-fialovým akcentem.',
    },
    category: 'portfolio',
    tags: ['Astro', 'TypeScript', 'CSS', 'Bilingual', 'i18n'],
    liveUrl: 'https://t-c4t.github.io/web-portfolio/',
    repoUrl: 'https://github.com/T-C4t/web-portfolio',
  },
  {
    id: 'ibo-porg-cs',
    title: {
      en: 'IBO PORG CS',
      cs: 'IBO PORG CS',
    },
    description: {
      en: 'Interactive web-based game and educational platform built with HTML, CSS, and JavaScript.',
      cs: 'Interaktivní webová hra a vzdělávací platforma postavená s HTML, CSS a JavaScriptem.',
    },
    category: 'frontend',
    tags: ['HTML', 'JavaScript', 'Game', 'Education'],
    repoUrl: 'https://github.com/T-C4t/IBO-PORG-CS',
  },
  {
    id: 'speechless',
    title: {
      en: 'Speechless',
      cs: 'Speechless',
    },
    description: {
      en: 'Python automation tool for hands-free computer control. Enables voice-controlled interactions with system functions.',
      cs: 'Python nástroj pro automatizaci bez použití rukou. Umožňuje hlasové ovládání systémových funkcí.',
    },
    category: 'tools',
    tags: ['Python', 'Automation', 'Voice Control'],
    repoUrl: 'https://github.com/T-C4t/speechless',
  },
  // Mini Projects
  {
    id: 'tower-of-hanoi',
    title: {
      en: 'Tower of Hanoi',
      cs: 'Věže Hanoi',
    },
    description: {
      en: 'Classic puzzle game with interactive visualization. Solve the puzzle by moving all disks from one peg to another following the rules.',
      cs: 'Klasická logická hra s interaktivní vizualizací. Vyřešte puzzle přesunutím všech disků z jednoho kolíku na druhý podle pravidel.',
    },
    category: 'frontend',
    tags: ['p5.js', 'JavaScript', 'Game', 'Visualization'],
    repoUrl: 'https://github.com/T-C4t/mini-projects/tree/main/tower%20of%20hanoi',
    liveUrl: 'https://t-c4t.github.io/tower-of-hanoi/',
  },
  {
    id: 'semafor-demo',
    title: {
      en: 'Semafor Demo',
      cs: 'Semafor Demo',
    },
    description: {
      en: 'Interactive semaphore alphabet visualizer using hand gesture recognition with ML5. Draw letters in the air and see them converted to semaphore code.',
      cs: 'Interaktivní vizualizátor semaforové abecedy s rozpoznáváním gest rukou pomocí ML5. Kreslete písmena ve vzduchu a sledujte jejich převod do semaforového kódu.',
    },
    category: 'frontend',
    tags: ['p5.js', 'ml5.js', 'Machine Learning', 'Hand Gesture'],
    repoUrl: 'https://github.com/T-C4t/mini-projects/tree/main/semafor-demo',
    liveUrl: 'https://t-c4t.github.io/semafor-demo/',
  },
  {
    id: 'pathfinding-visualizer',
    title: {
      en: 'Pathfinding Visualizer',
      cs: 'Vizualizátor hledání cesty',
    },
    description: {
      en: 'Visualize pathfinding algorithms in action. Watch Dijkstra\'s algorithm find the shortest path in real-time.',
      cs: 'Vizualizace algoritmů hledání cesty v akci. Sledujte Dijkstrův algoritmus najít nejkratší cestu v reálném čase.',
    },
    category: 'frontend',
    tags: ['p5.js', 'JavaScript', 'Algorithm', 'Dijkstra'],
    repoUrl: 'https://github.com/T-C4t/mini-projects/tree/main/pathfinding',
    liveUrl: 'https://t-c4t.github.io/pathfinding-visualizer/',
  },
  {
    id: 'tetris',
    title: {
      en: 'Tetris',
      cs: 'Tetris',
    },
    description: {
      en: 'Classic block-stacking puzzle game. Rotate and place falling blocks to clear lines.',
      cs: 'Klasická hra s skládáním bloků. Otáčejte a umisťujte padající bloky pro vyčištění řádků.',
    },
    category: 'frontend',
    tags: ['JavaScript', 'Game', 'Classic'],
    repoUrl: 'https://github.com/T-C4t/mini-projects/tree/main/tetris',
    liveUrl: 'https://t-c4t.github.io/tetris-game/',
  },
];

export const categories: { id: ProjectCategory; label: { en: string; cs: string } }[] = [
  { id: 'portfolio', label: { en: 'Portfolio', cs: 'Portfolio' } },
  { id: 'frontend', label: { en: 'Frontend', cs: 'Frontend' } },
  { id: 'backend', label: { en: 'Backend', cs: 'Backend' } },
  { id: 'fullstack', label: { en: 'Full Stack', cs: 'Full Stack' } },
  { id: 'tools', label: { en: 'Tools', cs: 'Nástroje' } },
];
