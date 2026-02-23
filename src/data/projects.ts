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
];

export const categories: { id: ProjectCategory; label: { en: string; cs: string } }[] = [
  { id: 'portfolio', label: { en: 'Portfolio', cs: 'Portfolio' } },
  { id: 'frontend', label: { en: 'Frontend', cs: 'Frontend' } },
  { id: 'backend', label: { en: 'Backend', cs: 'Backend' } },
  { id: 'fullstack', label: { en: 'Full Stack', cs: 'Full Stack' } },
  { id: 'tools', label: { en: 'Tools', cs: 'Nástroje' } },
];
