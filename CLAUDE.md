# Greatify Website — Design & Coding Rules

These rules apply to every component and page built in this project. Follow them strictly.

## Rule 1: Always Follow Figma

- All typography (font-size, weight, line-height, letter-spacing), colors, spacing, and layout must come from the Figma design provided via `get_design_context`
- Never guess values. Extract exact values from Figma
- If no Figma design is shared for a task, ask the user before building

## Rule 2: Percentage-Based Sizing for Responsiveness

- Use percentage-based widths (`w-[50%]`, `w-full`, `flex-1`) instead of fixed pixel widths (`w-[500px]`) wherever possible
- Use `max-w-[Xpx]` to cap maximum size while allowing percentage shrinkage
- Same for positioning — use percentage (`left-[50%]`, `top-[30%]`) instead of fixed pixels so elements scale with viewport
- Fixed pixel values are only acceptable for small UI elements (icons, badges, borders) that shouldn't scale

## Rule 3: Think in Parent-Child Hierarchy

Bad pattern — flat scattered divs:

```jsx
// BAD: border, card, and elements as siblings with absolute positioning
<div className="border ...">
<div className="card absolute left-[100px] ...">
<div className="icon absolute top-[50px] ...">
```

Good pattern — nested parent-child:

```jsx
// GOOD: main parent wraps children naturally
<div className="card border ...">
  <div className="card-content">
    <Icon />
    <Title />
    <Description />
  </div>
</div>
```

- Every visual group should have ONE parent container
- Children should be arranged with flexbox/grid inside that parent, not positioned absolutely relative to a distant ancestor
- Only use `absolute` positioning for decorative overlays, floating badges, or elements that genuinely layer on top

## Rule 4: Always Build Responsive

- Never build desktop-only and "fix responsive later". Build responsive as you go
- Every component must work at mobile (< 768px), tablet (768-1024px), and desktop (1200px+)
- Use the project breakpoints: `md:` (768px), `lg:` (1024px), xl 
- Test mental model: "if I shrink this to 375px wide, does it still work?"
- Stack layouts vertically on mobile: `flex-col lg:flex-row`
- Grid columns should reduce: `grid-cols-1 md:grid-cols-2 xlgrid-cols-3`

## Rule 5: Section Layout Convention

- Every section wraps content in: `<div className="mx-auto max-w-[1200px]">`
- Section horizontal padding: `px-6 md:px-12 xl:px-[100px]`
- Sections with decorative backgrounds: `relative overflow-hidden`

## Rule 6: Component Architecture

- Default to server components (no `"use client"`)
- Only add `"use client"` when the component needs state, effects, or browser APIs
- Extract static data (arrays of items, links, icon paths) as `const` above the component export
- Keep components focused — one section = one component file

## Rule 7: Image & SVG Handling

- Use `next/image` `<Image>` with explicit `width` and `height` for raster images (PNG, JPG) and static SVGs
- Use raw `<img>` only for SVGs that need pure CSS sizing control
- For inline SVGs that need dynamic color/stroke changes, use the `SvgIcon` component (`@/components/common/SvgIcon`) — pass `paths`, `viewBox`, `color`, `width`, `height`, and optional `strokeWidth`. Define icon path data as `const` objects above the component (see `BuiltForOrgs.tsx` for examples)
- Decorative images: `alt=""`
- Above-fold images: add `priority`
- Asset organization: `/images/common/` (shared), `/images/[page-name]/` (page-specific)

## Rule 8: Color & Gradient Rules

- Use Tailwind color tokens for solid colors: `text-chalk-green-500`, `bg-green-500`
- Decorative elements: `pointer-events-none` to prevent blocking interactions

## Rule 9: Reuse Before Rebuilding

- **When receiving a Figma design, always scan existing components first.** Before building anything new, check if the codebase already has a component with a similar visual structure (same card shape, same section layout, same UI pattern). If it does, make the existing component reusable with props instead of creating a duplicate.
- If the structure is the same and only data, colors, spacing, or positioning differ, extract a shared reusable component in `src/components/common/` with props for the varying parts — don't duplicate the markup
- Examples of what should be reused:
  - Stat cards that appear on multiple pages (same card shape, different numbers/labels) → shared `StatCard` component with props for `stats`, `columns`, `showConnectors`, etc.
  - Section wrappers with the same padding/max-width → shared layout component
  - Icon + text patterns that repeat → shared `IconLabel` component
  - Feature cards, testimonial cards, CTA banners — if the Figma design looks like something already built, refactor to share
- Only create a page-specific component when the layout, structure, or behavior is genuinely unique to that page

## Rule 10: File Organization

```
src/components/
├── common/          (shared: Navbar, Footer, SvgIcon)
├── [page-name]/     (page-specific sections)
│   ├── benefits/    (sub-components)
│   └── helperComps/ (reusable pieces)
public/images/
├── common/          (shared assets)
└── [page-name]/     (page-specific assets)
```
