/** @type {import('tailwindcss').Config} */

// Shared primitive values — referenced by their aliases below so each colour has
// ONE source of truth (collapsing the former #151515×N / #1a1a1a×N / #fff×N dupes).
const WHITE = '#ffffff'
const BLACK_400 = '#151515'
const BLACK_500 = '#1a1a1a'
const BG_100 = '#080808'

const tokens = {
  colors: {
    // ── White scale ──────────────────────────
    'white-100': WHITE,
    'white-200': '#e6e6e6',
    'white-300': '#bcbcbc',
    'white-400': '#8a8f98',

    // ── Black scale ──────────────────────────
    'black-100': '#000000',
    'black-200': '#060606',
    'black-300': '#111111',
    'black-400': BLACK_400,
    'black-500': BLACK_500,
    'black-600': '#202020',
    'black-700': '#303030',
    'black-800': '#404040',
    'black-900': '#848484',

    // ── Background ───────────────────────────
    'bg-100': BG_100,

    // ── Outline (= black-400) ────────────────
    'outline-100': BLACK_400,

    // ── Semantic UI tokens ───────────────────
    'nav-bg':        '#0a0a0a',
    'surface-edge':  '#0e0e0e',
    'surface-0':     '#141414',
    'surface-mid':   '#1d1f20',
    'surface-dark':  '#484b4e',
    'border-subtle': '#1b1b1b',

    // ── Status ───────────────────────────────
    'status-open':   '#4dba79',
    'status-closed': '#d24346',
    'status-soon':   '#e0b13e',

    // ── Accents ──────────────────────────────
    'accent-teal': '#175e6e',
    'accent-blue': '#546fef',

    // ── Legacy aliases (backward compat; values collapsed to primitives) ─────
    'page-bg':    BG_100,
    'surface-1':  BLACK_400,
    'surface-2':  BLACK_500,
    'surface-3':  '#2a2a2a',
    'surface-4':  '#2b2b2b',
    /* Orphan tokens removed 2026-06-29 (0 usages): accent-teal-light, lime-accent,
       neutral-50, tag-active, tag-inactive, section-border, nav-border, btn-border,
       border-card, phone-bg, card-fill, btn-label, gradient-end.
       neutral-00/-30/-35/-40 removed 2026-07-06 — entire scale collapsed into white-400
       per client feedback (single grey token instead of 4 near-duplicate neutral shades). */
  },

  fontFamily: {
    'inter-tight': ['"Inter Tight"', 'sans-serif'],
  },

  fontSize: {
    // Keys carry NO `text-` prefix — Tailwind generates `text-<key>`.
    'link':       ['0.8125rem', { lineHeight: 'normal', letterSpacing: '0' }],
    'link-block': ['0.875rem',  { lineHeight: 'normal', letterSpacing: '0' }],
    'xs':     ['var(--font-xs)', { lineHeight: '1.3',  letterSpacing: '0' }],
    's-med':  ['var(--font-s)',  { lineHeight: '1.3',  letterSpacing: '0' }],
    's-semi': ['var(--font-s)',  { lineHeight: '1.2',  letterSpacing: '-0.02em' }],
    'm':      ['var(--font-m)',  { lineHeight: '1.4',  letterSpacing: '-0.02em' }],
    'l':      ['var(--font-l)',  { lineHeight: '1.35', letterSpacing: '-0.02em' }],
    'large':  ['var(--font-large)', { lineHeight: '1.3', letterSpacing: '-0.02em' }],
    'paragraph':   ['var(--font-l)', { lineHeight: 'var(--lh-paragraph)', letterSpacing: '-0.01em', fontWeight: '400' }],
    'btn':         ['var(--font-btn)', { lineHeight: '1.1',  letterSpacing: '0' }],
    'xl':     ['var(--font-xl)', { lineHeight: '1.3',  letterSpacing: '-0.02em' }],
    'h4':          ['var(--font-h4)', { lineHeight: '1.2',  letterSpacing: '-0.02em' }],
    'h3':          ['var(--font-h3)', { lineHeight: '1.2',  letterSpacing: '-0.02em' }],
    'h2':          ['var(--font-h2)', { lineHeight: '1',    letterSpacing: '-0.02em' }],
    'h1-med':      ['var(--font-h1)', { lineHeight: '1',    letterSpacing: '-0.02em' }],
    'h1-semi':     ['var(--font-h1-semi)', { lineHeight: '0.95', letterSpacing: '-0.02em' }],
  },

  fontWeight: {
    'medium':   '500',
    'semibold': '600',
  },

  borderRadius: {
    // Figma `border-radius` collection — key = rem (1 = 16px).
    '0.5':  '0.5rem',   // 8px
    '0.75': '0.75rem',  // 12px
    '1':    '1rem',     // 16px
    '1.5':  '1.5rem',   // 24px
    '2':    '2rem',     // 32px
    '3':    '3rem',     // 48px
    'full': '9999px',   // pill
  },

  maxWidth: {
    'container-medium': '90rem',
    // legacy
    'canvas':  '120rem',
    'content': '90rem',
    /* Inline copy / card widths. */
    'max-width-30': '30rem',     /* 480px — CTA button-row cap */
    'max-width-37': '37.5rem',   /* 600px — paragraph copy */
  },

  spacing: {
    // Figma `gap` + `paddings` — one shared rem scale (1 = 16px).
    'spacing-0':     '0',
    'spacing-0.25':  '0.25rem',  // 4px
    'spacing-0.5':   '0.5rem',   // 8px
    'spacing-0.75':  '0.75rem',  // 12px
    'spacing-1':     '1rem',     // 16px
    'spacing-1.25':  '1.25rem',  // 20px
    'spacing-1.5':   '1.5rem',   // 24px
    'spacing-2':     '2rem',     // 32px
    'spacing-2.25':  '2.25rem',  // 36px
    'spacing-2.5':   '2.5rem',   // 40px
    'spacing-3':     '3rem',     // 48px
    'spacing-4':     '4rem',     // 64px
    'spacing-5':     '5rem',     // 80px
    'spacing-6.25':  '6.25rem',  // 100px
    'spacing-7.5':   '7.5rem',   // 120px
    // legacy
    'logo-gap':     '2.25rem',
    '13':           '3.25rem',
    '15':           '3.75rem',
    'section-y':    '7.5rem',
    'content-edge': '15rem',
  },

  borderWidth: {
    // Figma `stroke-width` (stroke-1…3 → border-1…3). px allowed for borders.
    '1': '1px',
    '2': '2px',
    '3': '3px',
    '8': '8px',  // legacy
  },
}

module.exports = { tokens }
