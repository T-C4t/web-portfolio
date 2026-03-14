# Neo-Brutalist Redesign - Learnings

## Session Started
- Date: 2026-03-06
- Branch: neo-brutalist (created from master)

## Progress
- T1: ✅ Create branch - COMPLETE
- T2-T4: In Progress (Wave 1)

## Key Design Requirements
- Base color: #D7D9D7 (light gray)
- Accent color: #FF6F61 (coral)
- Text color: #4A4E69 (dark slate)
- Monospace typography only
- Hard offset shadows (4-8px, no blur)
- Thick borders (3-4px solid)
- NO theme toggle
- NO gradient backgrounds
- NO smooth transitions

## Files to Update
1. src/layouts/Layout.astro - Base styles, CSS variables
2. src/components/Navigation.astro - Remove theme toggle, neo-brutalist styling
3. src/components/LanguagePicker.astro - Bold borders, brutalist style
4. src/components/ProjectCard.astro - Hard shadows, thick borders
5. EN pages (4): index, projects, resume, contact
6. CS pages (4): index, projects, resume, contact

## Wave Structure
- Wave 1: Layout, Navigation, LanguagePicker (T2-T4) - PARALLEL
- Wave 2: ProjectCard + verify data (T5-T7) - PARALLEL  
- Wave 3: EN + CS pages (T8-T10) - PARALLEL
- Wave 4: Build verification (T11-T12)

## LanguagePicker.astro Changes
- Applied 4px solid border (#4A4E69) to container
- Added monospace font (Courier New)
- Coral accent (#FF6F61) on active language
- Hard shadow (3px 3px 0 #FF6F61) on hover
- Removed all transitions and border-radius
- Active state: coral background with white text


## T2: Layout.astro Update - COMPLETE
- Removed inline theme script (lines 23-35)
- Removed theme toggle JS functionality (lines 43-59)
- Removed dark theme CSS (html.dark)
- Replaced CSS variables with neo-brutalist palette:
  - --bg-color: #D7D9D7
  - --text-color: #4A4E69
  - --accent-color: #FF6F61
  - --border-color: #4A4E69
- Applied monospace font: 'Courier New', 'IBM Plex Mono', 'Fira Code', monospace
- Removed ALL transition properties (no smooth transitions)
- Kept Navigation component import
- Page structure intact
- Build passes: 8 pages generated successfully