# Richard Matečka - Personal Portfolio

A bilingual personal portfolio website built with Astro, featuring a modern Apple-inspired design with pink/purple accent colors.

## What It Does

This is a personal portfolio website that showcases:

- **Personal branding** with an offset name layout design
- **Project showcase** with GitHub integration
- **Bilingual support** (English and Czech)
- **Dark/Light theme** toggle
- **Responsive design** for all devices
- **Animated backgrounds** with floating gradient blobs

### Features

| Feature | Description |
|---------|-------------|
| Landing Page | Hero section with offset name, project previews, about section |
| Projects Page | Full project listing with technology tags and links |
| Contact Page | Contact form and social links |
| Resume Page | CV/resume display |
| Theme Toggle | Dark and light mode support |
| i18n | Full English/Czech translation |

## How It Works

### Technology Stack

- **Framework**: [Astro](https://astro.build/) - Static site generator
- **Styling**: CSS with CSS Variables for theming
- **Internationalization**: Custom i18n implementation
- **Deployment**: Static HTML (GitHub Pages ready)

### Design Philosophy

The design follows Apple-like aesthetics:
- **Monochromatic** base with pink/purple accent (#cf03fc)
- **Large typography** with tight letter-spacing
- **Subtle animations** and hover effects
- **Section numbering** (01, 02, 03) for visual hierarchy
- **Offset name layout** - first name prominent, last name offset with reduced opacity

### Theming

The site uses CSS custom properties for dynamic theming:

```css
:root {
  --bg-color: #ffffff;
  --text-color: #000000;
  --border-color: rgba(0, 0, 0, 0.1);
  --hover-bg: rgba(0, 0, 0, 0.05);
}

html.dark {
  --bg-color: #0a0a0a;
  --text-color: #ffffff;
  --border-color: rgba(255, 255, 255, 0.1);
  --hover-bg: rgba(255, 255, 255, 0.05);
}
```

## Project Structure

```
/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable Astro components
│   │   ├── LanguagePicker.astro   # EN/CS language switcher
│   │   ├── Navigation.astro       # Site navigation with theme toggle
│   │   └── ProjectCard.astro      # Project card component
│   │
│   ├── data/               # Data files
│   │   └── projects.ts     # Project definitions with bilingual content
│   │
│   ├── i18n/               # Internationalization
│   │   ├── ui.ts           # Translation strings
│   │   └── utils.ts        # i18n helper functions
│   │
│   ├── layouts/            # Page layouts
│   │   └── Layout.astro    # Base layout with meta, styles, theme
│   │
│   └── pages/              # Route pages
│       ├── index.astro     # Root redirect (→ /en)
│       ├── en/             # English pages
│       │   ├── index.astro         # Landing page
│       │   ├── projects/index.astro
│       │   ├── contact/index.astro
│       │   └── resume/index.astro
│       └── cs/             # Czech pages (same structure)
│
├── astro.config.mjs        # Astro configuration
├── package.json
└── tsconfig.json
```

### Key Files Explained

#### `src/i18n/ui.ts`
Contains all translation strings for both languages:
```typescript
export const ui = {
  en: { /* English strings */ },
  cs: { /* Czech strings */ }
} as const;
```

#### `src/data/projects.ts`
Project data with bilingual fields:
```typescript
export const projects: Project[] = [
  {
    title: { en: "...", cs: "..." },
    description: { en: "...", cs: "..." },
    tags: ["TypeScript", "Astro", ...],
    repoUrl: "https://github.com/...",
    liveUrl: "https://...",
    category: "Web App"
  }
];
```

#### `src/i18n/utils.ts`
Helper functions for translation and routing:
- `useTranslations(lang)` - Get translation function
- `useTranslatedPath(lang)` - Generate language-aware paths

## Commands

| Command | Action |
|---------|--------|
| `npm install` | Install dependencies |
| `npm run dev` | Start dev server at `localhost:4321` |
| `npm run build` | Build for production to `./dist/` |
| `npm run preview` | Preview production build locally |

## Deployment

The site builds to static HTML and can be deployed to any static hosting:

1. Run `npm run build`
2. Deploy the `dist/` folder to GitHub Pages, Netlify, Vercel, etc.

### GitHub Pages

```bash
npm run build
# Copy dist/ contents to gh-pages branch or configure GitHub Actions
```

## Customization

### Adding a New Project

Edit `src/data/projects.ts`:

```typescript
{
  title: { en: "Project Name", cs: "Název projektu" },
  description: { 
    en: "Project description", 
    cs: "Popis projektu" 
  },
  tags: ["Tech1", "Tech2"],
  repoUrl: "https://github.com/...",
  liveUrl: "https://...",  // optional
  category: "Web App"
}
```

### Changing the Accent Color

Update the pink/purple accent (#cf03fc) in:
- `src/pages/en/index.astro` (styles)
- `src/pages/cs/index.astro` (styles)
- Any component using the accent color

### Adding a New Language

1. Add language to `src/i18n/ui.ts`
2. Create new page directory (e.g., `src/pages/de/`)
3. Update `LanguagePicker.astro` component

## License

MIT
