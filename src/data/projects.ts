export type ProjectCategory = 'frontend' | 'backend' | 'fullstack' | 'tools';

export interface Project {
  id: string;
  title: {
    en: string;
    cz: string;
  };
  description: {
    en: string;
    cz: string;
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
      cz: 'Osobní portfolio v1',
    },
    description: {
      en: 'My first portfolio website built with vanilla HTML, CSS, and JavaScript. Features responsive design and smooth animations.',
      cz: 'Moje první portfolio postavené s vanilla HTML, CSS a JavaScriptem. Nabízí responzivní design a plynulé animace.',
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
      cz: 'API správce úkolů',
    },
    description: {
      en: 'RESTful API for task management with authentication, authorization, and CRUD operations. Built with Node.js and Express.',
      cz: 'RESTful API pro správu úkolů s autentifikací, autorizací a CRUD operacemi. Postaveno s Node.js a Express.',
    },
    category: 'backend',
    tags: ['Node.js', 'Express', 'MongoDB', 'JWT'],
    repoUrl: '#',
  },
  {
    id: 'ecommerce-platform',
    title: {
      en: 'E-commerce Platform',
      cz: 'E-commerce platforma',
    },
    description: {
      en: 'Full-stack e-commerce solution with shopping cart, payment integration, and admin dashboard. Built with React and Node.js.',
      cz: 'Kompletní e-commerce řešení s nákupním košíkem, platební integrací a administrátorským panelem. Postaveno s React a Node.js.',
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
      cz: 'CLI nástroj pro organizaci souborů',
    },
    description: {
      en: 'Command-line tool to automatically organize files in directories based on file type, date, or custom rules.',
      cz: 'Příkazový nástroj pro automatickou organizaci souborů do adresářů podle typu, data nebo vlastních pravidel.',
    },
    category: 'tools',
    tags: ['Python', 'CLI', 'Automation'],
    repoUrl: '#',
  },
  {
    id: 'weather-dashboard',
    title: {
      en: 'Weather Dashboard',
      cz: 'Dashboard počasí',
    },
    description: {
      en: 'Interactive weather dashboard with location search, 7-day forecast, and beautiful visualizations using weather API.',
      cz: 'Interaktivní dashboard počasí s vyhledáváním lokací, 7denní předpovědí a krásnými vizualizacemi pomocí weather API.',
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
      cz: 'Aplikace pro聊天 v reálném čase',
    },
    description: {
      en: 'Full-stack chat application with real-time messaging, rooms, and user authentication using WebSocket.',
      cz: 'Kompletní chatovací aplikace se zasíláním zpráv v reálném čase, místnostmi a autentifikací uživatelů pomocí WebSocket.',
    },
    category: 'fullstack',
    tags: ['Socket.io', 'React', 'Redis', 'Express'],
    liveUrl: '#',
    repoUrl: '#',
  },
];

export const categories: { id: ProjectCategory; label: { en: string; cz: string } }[] = [
  { id: 'frontend', label: { en: 'Frontend', cz: 'Frontend' } },
  { id: 'backend', label: { en: 'Backend', cz: 'Backend' } },
  { id: 'fullstack', label: { en: 'Full Stack', cz: 'Full Stack' } },
  { id: 'tools', label: { en: 'Tools', cz: 'Nástroje' } },
];
