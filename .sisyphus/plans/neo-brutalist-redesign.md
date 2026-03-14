# Neo-Brutalist Portfolio Redesign

## TL;DR

> **Quick Summary**: Transform existing Astro portfolio from Apple-inspired design to neo-brutalist aesthetic - light gray base (#D7D9D7), coral accent (#FF6F61), dark slate text (#4A4E69), monospace typography throughout.
> 
> **Deliverables**: 
> - New branch `neo-brutalist` with complete redesign
> - 12 files updated: 1 layout, 3 components, 8 pages
> - Removed: theme toggle, gradient animations, soft shadows
> - Added: hard offset shadows, thick borders, bold monospace type
> 
> **Estimated Effort**: Short
> **Parallel Execution**: YES - 3 waves
> **Critical Path**: Layout → Components → Pages → Verification

---

## Context

### Original Request
Create a neo-brutalist redesign of existing web portfolio as a new branch.

### Interview Summary
**Key Discussions**:
- Keep bilingual support (EN + CS) - confirmed
- Single theme only (no dark/light toggle) - confirmed
- New branch from current master - confirmed
- Same page structure: Home, Projects, Resume, Contact - confirmed

**Design Requirements Confirmed**:
- Base color: #D7D9D7 (light gray)
- Accent color: #FF6F61 (coral/salmon)
- Text color: #4A4E69 (dark slate)
- Typography: Monospace only
- Style: Neo-brutalist with hard shadows, thick borders, bold type

### Current Stack
- Framework: Astro
- Styling: Pure CSS (no Tailwind)
- Current design: Apple-inspired with pink/purple (#cf03fc), gradient blobs, smooth animations

### Metis Review
**Identified Gaps** (addressed):
- Track all 12 files that need changes explicitly
- Verify no old colors (#cf03fc) remain in output
- Verify theme toggle code is removed
- Add build verification as acceptance criteria

---

## Work Objectives

### Core Objective
Transform the portfolio's visual identity from modern Apple-inspired to neo-brutalist while preserving all functionality (bilingual, projects data, page structure).

### Concrete Deliverables
- [x] New branch `neo-brutalist` created from master
- [x] Updated base layout with new color palette and typography
- [x] Navigation component styled in neo-brutalist style
- [x] All 8 pages (4 pages × 2 languages) restyled
- [x] Hard offset shadows (4-8px offset, no blur)
- [x] Thick borders (3-4px solid)
- [x] Monospace typography throughout
- [x] All gradient animations removed
- [x] Theme toggle removed (single theme)
- [ ] Updated base layout with new color palette and typography
- [ ] Navigation component styled in neo-brutalist style
- [ ] All 8 pages (4 pages × 2 languages) restyled
- [ ] Hard offset shadows (4-8px offset, no blur)
- [ ] Thick borders (3-4px solid)
- [ ] Monospace typography throughout
- [ ] All gradient animations removed
- [ ] Theme toggle removed (single theme)

### Definition of Done
- [x] `npm run build` succeeds
- [x] No occurrences of old accent color #cf03fc in built output
- [x] No theme toggle in navigation
- [x] All text renders in monospace font
- [ ] No occurrences of old accent color #cf03fc in built output
- [ ] No theme toggle in navigation
- [ ] All text renders in monospace font

### Must Have
- Bilingual support (EN/CS)
- All 4 page types (home, projects, resume, contact)
- Project data from existing files
- Responsive design (mobile-friendly)

### Must NOT Have (Guardrails)
- No soft shadows (only hard offset shadows)
- No gradient backgrounds
- No theme toggle
- No sans-serif typography
- No rounded corners > 0 (or very minimal)
- No smooth transitions/animations

---

## Verification Strategy

> **ZERO HUMAN INTERVENTION** — ALL verification is agent-executed.

### QA Policy
Every task includes agent-executed verification. The executing agent will:
- Run `npm run build` after changes
- Verify no old colors remain in output
- Verify layout renders correctly

### Evidence to Capture
- Build output showing success
- Browser screenshot of homepage (optional, if Playwright available)

---

## Execution Strategy

### Parallel Execution Waves

```
Wave 1 (Foundation - can run in parallel):
├── T1: Create new branch 'neo-brutalist' from master
├── T2: Update Layout.astro - base styles, CSS variables, remove theme
├── T3: Update Navigation.astro - neo-brutalist styling, remove theme toggle
└── T4: Update LanguagePicker.astro - bold borders, brutalist style

Wave 2 (Components & Data):
├── T5: Update ProjectCard.astro - hard shadows, thick borders
├── T6: Verify/preserve project data (projects.ts)
└── T7: Verify i18n files unchanged

Wave 3 (Pages - all can run in parallel once components ready):
├── T8: Update EN pages (index, projects, resume, contact)
├── T9: Update CS pages (index, projects, resume, contact)
└── T10: Update root index.astro redirect

Wave 4 (Verification):
├── T11: Run build and verify no old colors
└── T12: Final QA - verify all pages render, responsive check

Critical Path: T1 → T2 → T3 → T5 → T8 → T11
```

---

## TODOs

- [x] 1. **Create new branch 'neo-brutalist' from master**

  **What to do**:
  - Create new branch: `git checkout -b neo-brutalist`
  - Verify branch created successfully

  **Must NOT do**:
  - Don't delete any existing branches
  - Don't modify any files yet

  **Recommended Agent Profile**:
  - **Category**: `quick`
  - **Skills**: [`git-master`]

  **Parallelization**:
  - Can Run In Parallel: NO
  - Sequential (first task)
  - Blocks: All subsequent tasks
  - Blocked By: None

  **Acceptance Criteria**:
  - [ ] `git branch` shows 'neo-brutalist' created from master

  **Commit**: YES
  - Message: `feat(design): create neo-brutalist branch`

---

- [x] 2. **Update Layout.astro - base styles, CSS variables, remove theme**

  **What to do**:
  - Replace CSS variables:
    - `--bg-color: #D7D9D7` (light gray base)
    - `--text-color: #4A4E69` (dark slate)
    - `--accent-color: #FF6F61` (coral)
    - `--border-color: #4A4E69` (use text color for borders)
  - Remove theme toggle logic and CSS
  - Set monospace font family globally
  - Remove gradient background definitions

  **Must NOT do**:
  - Don't add soft shadows
  - Don't add rounded corners
  - Keep page structure intact

  **Recommended Agent Profile**:
  - **Category**: `visual-engineering`
  - **Skills**: []

  **Parallelization**:
  - Can Run In Parallel: YES (with T3, T4)
  - Parallel Group: Wave 1
  - Blocks: T8, T9 (pages depend on layout)
  - Blocked By: T1

  **References**:
  - `src/layouts/Layout.astro:1-50` - Current layout structure

  **Acceptance Criteria**:
  - [ ] CSS variables updated to new palette
  - [ ] Theme toggle code removed
  - [ ] Monospace font applied to body

  **Commit**: NO (will batch commit with T3-T4)

---

- [x] 3. **Update Navigation.astro - neo-brutalist styling, remove theme toggle**

  **What to do**:
  - Remove theme toggle button entirely
  - Add thick border (3-4px solid #4A4E69)
  - Add hard offset shadow on nav
  - Make navigation items bold with uppercase text
  - Style links with coral (#FF6F61) hover state

  **Must NOT do**:
  - No smooth transitions
  - No rounded corners

  **Recommended Agent Profile**:
  - **Category**: `visual-engineering`
  - **Skills**: []

  **Parallelization**:
  - Can Run In Parallel: YES (with T2, T4)
  - Parallel Group: Wave 1
  - Blocks: T8, T9
  - Blocked By: T1

  **References**:
  - `src/components/Navigation.astro` - Current navigation

  **Acceptance Criteria**:
  - [ ] Theme toggle removed from navigation
  - [ ] Hard shadow on nav container
  - [ ] Thick borders applied

  **Commit**: NO (will batch commit with T2, T4)

---

- [x] 4. **Update LanguagePicker.astro - bold borders, brutalist style**

  **What to do**:
  - Style language picker with thick border
  - Use coral accent for active language
  - Add hard shadow on hover
  - Monospace text

  **Must NOT do**:
  - No smooth transitions

  **Recommended Agent Profile**:
  - **Category**: `visual-engineering`
  - **Skills**: []

  **Parallelization**:
  - Can Run In Parallel: YES (with T2, T3)
  - Parallel Group: Wave 1
  - Blocks: T8, T9
  - Blocked By: T1

  **References**:
  - `src/components/LanguagePicker.astro` - Current picker

  **Acceptance Criteria**:
  - [ ] Thick borders applied
  - [ ] Coral accent on active language

  **Commit**: NO (will batch commit with T2, T3)

---

- [x] 5. **Update ProjectCard.astro - hard shadows, thick borders**

  **What to do**:
  - Add hard offset shadow (4-8px offset, no blur)
  - Add thick border (3-4px solid)
  - Style title with bold monospace
  - Add coral (#FF6F61) accent on hover
  - Remove any rounded corners

  **Must NOT do**:
  - No smooth transitions
  - No gradient backgrounds

  **Recommended Agent Profile**:
  - **Category**: `visual-engineering`
  - **Skills**: []

  **Parallelization**:
  - Can Run In Parallel: YES (with T6, T7)
  - Parallel Group: Wave 2
  - Blocks: T8, T9
  - Blocked By: T1, T2

  **References**:
  - `src/components/ProjectCard.astro` - Current project card

  **Acceptance Criteria**:
  - [ ] Hard shadow applied
  - [ ] Thick borders on card
  - [ ] Coral hover accent

  **Commit**: NO (will batch commit with T1)

---

- [x] 6. **Verify project data (projects.ts) unchanged**

  **What to do**:
  - Review `src/data/projects.ts` to confirm data is intact
  - No changes needed - just verify

  **Recommended Agent Profile**:
  - **Category**: `quick`
  - **Skills**: []

  **Parallelization**:
  - Can Run In Parallel: YES (with T5, T7)
  - Parallel Group: Wave 2
  - Blocks: None
  - Blocked By: T1

  **Acceptance Criteria**:
  - [ ] Project data file exists and intact

  **Commit**: NO

---

- [x] 7. **Verify i18n files unchanged**

  **What to do**:
  - Review `src/i18n/ui.ts` and `src/i18n/utils.ts`
  - Confirm bilingual support preserved
  - No changes needed

  **Recommended Agent Profile**:
  - **Category**: `quick`
  - **Skills**: []

  **Parallelization**:
  - Can Run In Parallel: YES (with T5, T6)
  - Parallel Group: Wave 2
  - Blocks: None
  - Blocked By: T1

  **Acceptance Criteria**:
  - [ ] i18n files exist and functional

  **Commit**: NO

---

- [x] 8. **Update EN pages (index, projects, resume, contact)**

  **What to do**:
  - Update `src/pages/en/index.astro`:
    - Remove gradient blob backgrounds
    - Remove scroll animations
    - Add hard shadows to sections
    - Apply thick borders
    - Use coral accent for links/buttons
    - Monospace typography throughout
  - Update `src/pages/en/projects/index.astro`
  - Update `src/pages/en/resume/index.astro`
  - Update `src/pages/en/contact/index.astro`

  **Must NOT do**:
  - No smooth animations
  - No gradient backgrounds
  - No rounded corners on buttons

  **Recommended Agent Profile**:
  - **Category**: `visual-engineering`
  - **Skills**: []

  **Parallelization**:
  - Can Run In Parallel: YES (with T9, T10)
  - Parallel Group: Wave 3
  - Blocks: T11
  - Blocked By: T1, T2, T3, T4, T5

  **References**:
  - `src/pages/en/index.astro` - Current EN home (reference for styles to remove)
  - `src/pages/cs/index.astro` - Will mirror EN changes

  **Acceptance Criteria**:
  - [ ] All 4 EN pages updated
  - [ ] No gradient backgrounds remain
  - [ ] Hard shadows on sections

  **Commit**: NO (will batch commit with T9)

---

- [x] 9. **Update CS pages (index, projects, resume, contact)**

  **What to do**:
  - Mirror EN page changes to CS pages
  - Same neo-brutalist styling applied
  - Update `src/pages/cs/index.astro`
  - Update `src/pages/cs/projects/index.astro`
  - Update `src/pages/cs/resume/index.astro`
  - Update `src/pages/cs/contact/index.astro`

  **Recommended Agent Profile**:
  - **Category**: `visual-engineering`
  - **Skills**: []

  **Parallelization**:
  - Can Run In Parallel: YES (with T8, T10)
  - Parallel Group: Wave 3
  - Blocks: T11
  - Blocked By: T1, T2, T3, T4, T5

  **Acceptance Criteria**:
  - [ ] All 4 CS pages updated
  - [ ] Consistent styling with EN pages

  **Commit**: NO (will batch commit with T8)

---

- [x] 10. **Update root index.astro redirect**

  **What to do**:
  - Review `src/pages/index.astro`
  - Should redirect to /en - verify this still works

  **Recommended Agent Profile**:
  - **Category**: `quick`
  - **Skills**: []

  **Parallelization**:
  - Can Run In Parallel: YES (with T8, T9)
  - Parallel Group: Wave 3
  - Blocks: T11
  - Blocked By: T1

  **Acceptance Criteria**:
  - [ ] Root redirect still functional

  **Commit**: NO

---

- [x] 11. **Run build and verify no old colors**

  **What to do**:
  - Run `npm run build`
  - Check for old accent color: `grep -r "cf03fc" dist/`
  - Verify build succeeds

  **Acceptance Criteria**:
  - [ ] Build succeeds
  - [ ] No old colors (#cf03fc) in output

  **Commit**: NO

---

- [x] 12. **Final QA - verify all pages render, responsive check**

  **What to do**:
  - Verify all 8 language pages exist in dist/
  - Quick responsive check (basic)
  - Verify monospace fonts applied

  **Acceptance Criteria**:
  - [x] All pages render
- [x] Bilingual navigation works
  - [ ] Bilingual navigation works

  **Commit**: NO

## Final Verification Wave

## Final Verification Wave

- [x] F1. **Build Verification** — Run `npm run build` and confirm success
- [x] F2. **Color Cleanup Check** — `grep -r "cf03fc" dist/` returns empty
- [x] F3. **Theme Toggle Removed** — Verify toggle not in navigation output
- [x] F4. **Typography Check** — Verify monospace font applied throughout
- [ ] F2. **Color Cleanup Check** — `grep -r "cf03fc" dist/` returns empty
- [ ] F3. **Theme Toggle Removed** — Verify toggle not in navigation output
- [ ] F4. **Typography Check** — Verify monospace font applied throughout

---

## Commit Strategy

- Batch 1 (Wave 1-2): `feat(design): add neo-brutalist base styles and components`
- Batch 2 (Wave 3): `feat(design): apply neo-brutalist styling to all pages`
- Batch 3 (Wave 4): `fix(verify): ensure clean build, remove legacy colors`

---

## Success Criteria

### Verification Commands
```bash
npm run build  # Must succeed
grep -r "cf03fc" dist/ || echo "CLEAN"  # Should print CLEAN
```

### Final Checklist
- [x] All 12 files updated
- [x] Bilingual support working
- [x] No theme toggle
- [x] Monospace typography applied
- [x] Hard shadows and thick borders present
- [x] No gradient animations
- [x] Build passes without errors
- [ ] Bilingual support working
- [ ] No theme toggle
- [ ] Monospace typography applied
- [ ] Hard shadows and thick borders present
- [ ] No gradient animations
- [ ] Build passes without errors
