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
    id: 'portfolio-v1',
    title: {
      en: 'Personal Portfolio v1',
      cs: 'Osobní portfolio v1',
    },
    description: {
      en: 'My first portfolio website built with vanilla HTML, CSS, and JavaScript. Features responsive design and smooth animations.',
      cs: 'Moje první portfolio postavené s vanilla HTML, CSS a JavaScriptem. Nabízí responzivní design a plynulé animace.',
    },
    category: 'frontend',
    tags: ['HTML', 'CSS', 'JavaScript', 'Responsive'],
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    id: 'task-manager',
    title: {
      en: 'Task Manager API',
      cs: 'API správce úkolů',
    },
    description: {
      en: 'RESTful API for task management with authentication, authorization, and CRUD operations. Built with Node.js and Express.',
      cs: 'RESTful API pro správu úkolů s autentifikací, autorizací a CRUD operacemi. Postaveno s Node.js a Express.',
    },
    category: 'backend',
    tags: ['Node.js', 'Express', 'MongoDB', 'JWT'],
    repoUrl: '#',
  },
  {
    id: 'ecommerce-platform',
    title: {
      en: 'E-commerce Platform',
      cs: 'E-commerce platforma',
    },
    description: {
      en: 'Full-stack e-commerce solution with shopping cart, payment integration, and admin dashboard. Built with React and Node.js.',
      cs: 'Kompletní e-commerce řešení s nákupním košíkem, platební integrací a administrátorským panelem. Postaveno s React a Node.js.',
    },
    category: 'fullstack',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    id: 'cli-tool',
    title: {
      en: 'File Organizer CLI',
      cs: 'CLI nástroj pro organizaci souborů',
    },
    description: {
      en: 'Command-line tool to automatically organize files in directories based on file type, date, or custom rules.',
      cs: 'Příkazový nástroj pro automatickou organizaci souborů do adresářů podle typu, data nebo vlastních pravidel.',
    },
    category: 'tools',
    tags: ['Python', 'CLI', 'Automation'],
    repoUrl: '#',
  },
  {
    id: 'weather-dashboard',
    title: {
      en: 'Weather Dashboard',
      cs: 'Dashboard počasí',
    },
    description: {
      en: 'Interactive weather dashboard with location search, 7-day forecast, and beautiful visualizations using weather API.',
      cs: 'Interaktivní dashboard počasí s vyhledáváním lokací, 7denní předpovědí a krásnými vizualizacemi pomocí weather API.',
    },
    category: 'frontend',
    tags: ['React', 'Weather API', 'Charts', 'Tailwind'],
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    id: 'chat-application',
    title: {
      en: 'Real-time Chat App',
      cs: 'Aplikace pro聊天 v reálném čase',
    },
    description: {
      en: 'Full-stack chat application with real-time messaging, rooms, and user authentication using WebSocket.',
      cs: 'Kompletní chatovací aplikace se zasíláním zpráv v reálném čase, místnostmi a autentifikací uživatelů pomocí WebSocket.',
    },
    category: 'fullstack',
    tags: ['Socket.io', 'React', 'Redis', 'Express'],
    liveUrl: '#',
    repoUrl: '#',
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
