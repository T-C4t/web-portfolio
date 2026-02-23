export type ProjectCategory = 'frontend' | 'backend' | 'fullstack' | 'tools';

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
    id: 'tower-of-hanoi',
    title: {
      en: 'Tower of Hanoi',
      cs: 'Hanojské věže',
    },
    description: {
      en: 'Classic puzzle game implementation with interactive p5.js visualization. Features adjustable disk count and move tracking.',
      cs: 'Klasická hračková implementace s interaktivní p5.js vizualizací. Nabízí nastavitelný počet disků a sledování tahů.',
    },
    category: 'frontend',
    tags: ['p5.js', 'JavaScript', 'Game', 'Algorithm'],
  },
  {
    id: 'semafor-demo',
    title: {
      en: 'Semafor Demo',
      cs: 'Semafor Demo',
    },
    description: {
      en: 'Interactive semaphore alphabet visualizer using hand gesture recognition with ML5. Demonstrates letter communication through hand signs.',
      cs: 'Interaktivní vizualizátor semaforové abecedy s rozpoznáváním gest rukou pomocí ML5. Demonstruje komunikaci písmen prostřednictvím znaků rukou.',
    },
    category: 'frontend',
    tags: ['ML5', 'p5.js', 'Hand Gesture', 'Machine Learning'],
  },
  {
    id: 'pathfinding',
    title: {
      en: 'Pathfinding Visualizer',
      cs: 'Vizualizátor hledání cest',
    },
    description: {
      en: 'Interactive pathfinding algorithm visualizer built with p5.js. Supports multiple algorithms for exploring navigation solutions.',
      cs: 'Interaktivní vizualizátor algoritmů hledání cest postavený s p5.js. Podporuje více algoritmů pro prozkoumání řešení navigace.',
    },
    category: 'frontend',
    tags: ['p5.js', 'JavaScript', 'Algorithm', 'Visualization'],
  },
  {
    id: 'tetris',
    title: {
      en: 'Tetris',
      cs: 'Tetris',
    },
    description: {
      en: 'Classic block-stacking puzzle game with score tracking, line clearing, and smooth controls. Pure JavaScript implementation.',
      cs: 'Klasická skládačková hra s bodováním, mazáním řádků a plynulým ovládáním. Čistá JavaScript implementace.',
    },
    category: 'frontend',
    tags: ['JavaScript', 'Game', 'HTML', 'CSS'],
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
    liveUrl: 'https://github.com/T-C4t/IBO-PORG-CS',
    repoUrl: 'https://github.com/T-C4t/IBO-PORG-CS',
  },
];

export const categories: { id: ProjectCategory; label: { en: string; cs: string } }[] = [
  { id: 'frontend', label: { en: 'Frontend', cs: 'Frontend' } },
  { id: 'backend', label: { en: 'Backend', cs: 'Backend' } },
  { id: 'fullstack', label: { en: 'Full Stack', cs: 'Full Stack' } },
  { id: 'tools', label: { en: 'Tools', cs: 'Nástroje' } },
];
