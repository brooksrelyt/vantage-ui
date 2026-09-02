# Vantage UI — Claude Notes

A Vue 3 + TypeScript component library and living style guide, built with Vite. No external UI libraries — pure Vue + CSS.

## Dev server

```bash
npm run dev
```

## Project structure

```
src/
├── assets/         # tokens.css (design tokens), base.css (resets)
├── components/
│   ├── ui/         # Reusable components (VtButton, VtModal, etc.)
│   ├── ui/grid/    # Grid system (VtContainer, VtRow, VtCol)
│   ├── layout/     # TheSidebar
│   └── docs/       # DocSection, CodeBlock (doc helpers)
├── views/          # One view per route (e.g. ModalView.vue)
├── router/         # index.ts — add new routes here
└── injectionKeys.ts
```

## Conventions

### Components
- **Prefix**: `Vt` (e.g. `VtButton`, `VtModal`)
- **Style**: Vue 3 Options API (`defineComponent`) — not Composition API / `<script setup>`
- **CSS**: `<style scoped>` for all component styles; unscoped only for Teleport'd elements that live in `<body>`
- **CSS classes**: BEM with `vt-` prefix (e.g. `.vt-modal`, `.vt-modal__header`, `.vt-modal--lg`)
- **Tokens**: Always use CSS custom properties from `tokens.css` — never hardcode colors, spacing, or radii
- **TypeScript**: Type all props with `PropType`, define union types at the top of `<script>` (e.g. `type Size = 'sm' | 'md' | 'lg'`)
- **Emits**: Always declare `emits` explicitly; use `update:modelValue` for v-model components
- **Teleport**: Use `<Teleport to="body">` for overlays (modals, tooltips, dropdowns) to escape stacking contexts

### Adding a new component
1. Create `src/components/ui/VtComponentName.vue`
2. Create `src/views/ComponentNameView.vue` using `DocSection` for demos + code snippets
3. Add a lazy-loaded route in `src/router/index.ts`
4. Add a sidebar link in `src/components/layout/TheSidebar.vue` (the `links` array in `data()`)

### Doc pages
Each view uses `<DocSection title="" description="" :code="codeString">` to wrap live demos alongside copyable code. Code strings are stored in `data()`.

## Design tokens (key ones)

| Token | Value |
|-------|-------|
| `--vt-color-primary` | `#4f46e5` |
| `--vt-color-danger` | `#dc2626` |
| `--vt-color-text` | `#1f2937` |
| `--vt-color-border` | `#e5e7eb` |
| `--vt-color-bg-soft` | `#f9fafb` |
| `--vt-space-{1,2,3,4,6,8,12}` | 0.25rem steps |
| `--vt-radius-{sm,md,lg}` | 4px / 8px / 12px |
| `--vt-shadow-{sm,md}` | subtle / moderate |

Dark mode is applied via `[data-theme='dark']` on the root element.

## Components built so far

- VtButton — variants: primary, secondary, danger, ghost; sizes: sm, md, lg
- VtInput, VtTextarea — form inputs with v-model, label, error
- VtCard — named slots: header, footer, default
- VtBadge — variants: neutral, primary, success, warning, danger; optional dot
- VtAlert — types: info, success, warning, danger
- VtSwitch — toggle with v-model; sizes: sm, md
- VtTooltip — positions: top, bottom, left, right; uses Teleport
- VtModal — sizes: sm, md, lg; v-model; named footer slot; Escape + backdrop close; uses Teleport
- VtContainer, VtRow, VtCol — 12-column responsive grid
