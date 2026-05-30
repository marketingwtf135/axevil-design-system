/** @type {import('tailwindcss').Config} */
const tokens = {
  colors: {
    // ── White scale ──────────────────────────
    'white-100': '#ffffff',
    'white-200': '#e6e6e6',
    'white-300': '#bcbcbc',
    'white-400': '#9b9b9b',

    // ── Black scale ──────────────────────────
    'black-100': '#000000',
    'black-200': '#060606',
    'black-300': '#111111',
    'black-400': '#151515',
    'black-500': '#1a1a1a',
    'black-600': '#202020',
    'black-700': '#303030',
    'black-800': '#404040',
    'black-900': '#848484',

    // ── Background ───────────────────────────
    'bg-100': '#080808',

    // ── Outline ──────────────────────────────
    'outline-100': '#151515',

    // ── Semantic UI tokens ───────────────────
    'nav-bg':          '#0a0a0a',
    'section-border':  '#121212',
    'surface-edge':    '#0e0e0e',
    'surface-0':       '#141414',
    'surface-mid':     '#1d1f20',
    'surface-dark':    '#484b4e',
    'border-subtle':   '#1b1b1b',
    'nav-border':      '#171717',
    'btn-border':      '#c9c9c9',

    // ── Status ───────────────────────────────
    'status-open':   '#4dba79',
    'status-closed': '#d24346',
    'status-soon':   '#e0b13e',

    // ── Accents ──────────────────────────────
    'accent-teal':       '#175e6e',
    'accent-teal-light': '#d7ffff',
    'accent-blue':       '#546fef',
    'lime-accent':       '#F5FD5A',

    // ── Legacy aliases (backward compat) ─────
    'neutral-00':   '#ffffff',
    'neutral-30':   '#b7b7b7',
    'neutral-35':   '#8f8f8f',
    'neutral-40':   '#717171',
    'neutral-50':   '#797980',
    'page-bg':      '#080808',
    'surface-1':    '#151515',
    'surface-2':    '#1a1a1a',
    'surface-3':    '#2a2a2a',
    'surface-4':    '#2b2b2b',
    'tag-inactive': '#151515',
    'tag-active':   '#ffffff',
    /* 2026-05-29 audit: removed orphan tokens phone-bg, card-fill, btn-label,
       gradient-end — 0 usages site-wide. */
  },

  fontFamily: {
    'inter-tight': ['"Inter Tight"', 'sans-serif'],
  },

  fontSize: {
    // Keys carry NO `text-` prefix — Tailwind generates `text-<key>` (e.g. key `xs` → class `text-xs`).
    // (Renamed 2026-05-30: dropped the doubled `text-text-*` classes; usages migrated repo-wide.)
    'link':       ['0.8125rem', { lineHeight: 'normal', letterSpacing: '0' }],
    'link-block': ['0.875rem',  { lineHeight: 'normal', letterSpacing: '0' }],
    'xs':     ['var(--font-xs)', { lineHeight: '1.3',  letterSpacing: '0' }],
    's-med':  ['var(--font-s)',  { lineHeight: '1.3',  letterSpacing: '0' }],
    's-semi': ['var(--font-s)',  { lineHeight: '1.2',  letterSpacing: '-0.02em' }],
    'm':      ['var(--font-m)',  { lineHeight: '1.4',  letterSpacing: '-0.02em' }],
    'l':      ['var(--font-l)',  { lineHeight: '1.35', letterSpacing: '-0.02em' }],
    // Canonical body-text token. 18px desktop / 16px tablet / 14px mobile via --font-l. line-height 145%.
    'paragraph':   ['var(--font-l)', { lineHeight: '1.45', letterSpacing: '-0.02em' }],
    // Responsive via --font-btn: 1rem desktop/tablet → 0.875rem mobile (per 2026-05-28).
    'btn':         ['var(--font-btn)', { lineHeight: '1.1',  letterSpacing: '0' }],
    'xl':     ['var(--font-xl)', { lineHeight: '1.3',  letterSpacing: '-0.02em' }],
    // text-large — 24/22/20px (desktop/tablet/mobile), medium weight. Figma desktop-1920/text-large.
    'large':  ['var(--font-large)', { lineHeight: '1.3', letterSpacing: '-0.02em' }],
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
    'border-r-0.25':   '0.25rem',
    'border-r-0.75':   '0.75rem',
    'border-r-1':      '1rem',
    'border-r-2':      '2rem',
    'border-r-3':      '3rem',
    'border-r-4':      '4rem',
    'border-r-2.625':  '2.625rem',
    'border-r-1.9375': '1.9375rem',
    // legacy
    'dot':         '0.25rem',
    'card':        '2rem',
    'card-lg':     '3rem',
    'section':     '4rem',
    'phone':       '2.625rem',
    'phone-inner': '1.9375rem',
  },

  maxWidth: {
    'container-large':  '120rem',
    'container-medium': '90rem',
    // legacy
    'canvas':  '120rem',
    'content': '90rem',

    /* Inline copy / card widths — 2026-05-29 audit. Use these instead of
       inline maxWidth values so widths stay consistent across blocks. */
    'max-width-18':   '18.75rem',  /* 300px — card-narrow (AUStory · WMBuilt) */
    'max-width-30':   '30rem',     /* 480px — CTA button-row cap */
    'max-width-37':   '37.5rem',   /* 600px — paragraph copy */
    'max-width-40':   '40rem',     /* 640px — SNS hero copy */
    'max-width-50':   '50rem',     /* 800px — hero copy wide */
    'max-width-51':   '51.25rem',  /* 820px — Block09Slider heading row */
  },

  spacing: {
    'spacing-0.25': '0.25rem',
    'spacing-0.5':  '0.5rem',
    'spacing-0.75': '0.75rem',
    'spacing-1':    '1rem',
    'spacing-1.5':  '1.5rem',
    'spacing-2':    '2rem',
    'spacing-2.25': '2.25rem',
    'spacing-3':    '3rem',
    'spacing-4':    '4rem',
    'spacing-7.5':  '7.5rem',
    'spacing-15':   '15rem',
    // legacy
    'logo-gap':     '2.25rem',
    '13':           '3.25rem',
    '15':           '3.75rem',
    'section-y':    '7.5rem',
    'content-edge': '15rem',
  },

  borderWidth: {
    '3': '3px',
    '8': '8px',
  },
}

module.exports = { tokens }
