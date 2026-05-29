# @axevil/design-system

> ⚠️ **Generated artifact — do not edit by hand.**
> Built from `marketingwtf135/Axevil-New-Website` (axevil-website) by
> `scripts/build-ds-package.mjs` and synced here automatically.
> Edit the source there: tokens in `packages/tokens/`, components in `design-system/src/components/`.

## Install
```bash
npm i github:marketingwtf135/axevil-design-system
```

## Use
```ts
// tailwind.config.ts — design tokens
const { tokens } = require('@axevil/design-system')

// src/index.css — token CSS variables (instead of inlining :root)
@import '@axevil/design-system/css';

// components (peer deps: react, react-dom, framer-motion)
import { BtnOwn, Nav, IllCards } from '@axevil/design-system/components'
```

Add the package to your Tailwind `content` so component classes aren't purged:
```ts
content: ['./index.html', './src/**/*.{ts,tsx}', './node_modules/@axevil/design-system/dist/**/*.js']
```

> **Assets:** some components (`Nav`, `BtnOwn`, `Quiz`, `CtaFormNewsletter`) reference
> runtime asset paths like `/img/logos/footer-logo.svg` and `/icons/*.svg`. Consumers must
> serve those from their own `public/`. See `assets-manifest.json` for the required list.
