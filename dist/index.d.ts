import * as react_jsx_runtime from 'react/jsx-runtime';
import * as react from 'react';
import { ReactNode, CSSProperties } from 'react';
import { MotionProps } from 'framer-motion';

interface FadeInProps {
    children: ReactNode;
    className?: string;
}
declare function FadeIn({ children, className }: FadeInProps): react_jsx_runtime.JSX.Element;

/** Footer — Figma 1121:4630 (desktop), 1121:4632 (tablet), 1121:4730 (mobile)
 *  Desktop: logo left + 5 nav columns right, justify-between (max-w 1440)
 *  Tablet:  logo top, 5 columns flex-row below (justify-between)
 *  Mobile:  logo top, 2-col grid below
 */
interface FooterLink {
    label: string;
    href: string;
}
interface FooterProps {
    /** Logo link target (default '/'). */
    logoHref?: string;
    /** Replace the 5 nav columns with a flat link row (standalone pages, e.g. axevil-about). */
    links?: FooterLink[];
    /** Optional compliance/legal line rendered under the logo. */
    compliance?: react.ReactNode;
}
declare function Footer({ logoHref, links, compliance }?: FooterProps): react_jsx_runtime.JSX.Element;

interface NavLinkItem {
    label: string;
    href: string;
}
interface NavProps {
    active?: string;
    /** Override the desktop + mobile link list. Each item is a plain link.
     *  When provided, dropdowns are disabled (simple anchor nav — used by standalone
     *  pages like axevil-about). Falls back to the canonical main-site nav. */
    links?: NavLinkItem[];
    /** Logo link target (default '/'). */
    logoHref?: string;
    /** CTA button label (default 'Request access'). */
    ctaLabel?: string;
    /** CTA click handler (default dispatches the 'open-quiz' event). */
    onCtaClick?: () => void;
}
declare function Nav({ links, logoHref, ctaLabel, onCtaClick }?: NavProps): react_jsx_runtime.JSX.Element;

interface QuizProps {
    onClose: () => void;
}
declare function Quiz({ onClose }: QuizProps): react_jsx_runtime.JSX.Element;

/**
 * BgFeatures — Resend-style hero background.
 * Uses the bg-features.png texture (downloaded from resend.com/static/product-pages/)
 * with cursor-tracked spotlight. No blend modes, no vignette — just opacity:
 *   - Ambient layer at 50% opacity (texture visible across the whole section)
 *   - Spotlight layer at 100% opacity, revealed by a radial mask anchored to the
 *     cursor, so the texture brightens locally under the mouse.
 *
 * Listens to `window.mousemove`; touch devices keep the default centered spotlight.
 */
interface BgFeaturesProps {
    /** Disable the cursor spotlight (texture only). Default true. */
    spotlight?: boolean;
    /** Radius of the cursor spotlight. Default 24rem. */
    spotlightSize?: string;
    /** Ambient texture opacity (0-1). Default 0.5. */
    ambientOpacity?: number;
    /** background-position CSS value matching Resend's `53% -7.5rem`. */
    backgroundPosition?: string;
    /** CSS mix-blend-mode value applied to both texture layers. Useful with
     *  ambientOpacity=1 to integrate the white-ish texture via blending instead
     *  of straight transparency. Common picks: 'screen', 'lighten', 'soft-light'. */
    blendMode?: string;
    /** Apply a slow drifting animation to the ambient texture (gentle pan loop).
     *  Useful for hero sections that need a "living" background. Default false. */
    animated?: boolean;
    /** Animation duration in seconds. Default 30s. Lower = faster pan. */
    animationDuration?: number;
}
declare function BgFeatures({ spotlight, spotlightSize, ambientOpacity, backgroundPosition, blendMode, animated, animationDuration, }?: BgFeaturesProps): react_jsx_runtime.JSX.Element;

type Variant = 'primary' | 'secondary';
interface BtnOwnProps {
    children: ReactNode;
    className?: string;
    style?: CSSProperties;
    type?: 'button' | 'submit';
    onClick?: () => void;
    hideIcon?: boolean;
    icon?: string;
    size?: 'L' | 'M' | 'S' | 'XS';
    /** primary: white bg + dark text · secondary: black-400 bg + white text, hover → black-600 */
    variant?: Variant;
    /** Legacy prop — no-op now (secondary is borderless by default). Kept so existing call-sites compile. */
    noBorder?: boolean;
}
declare function BtnOwn({ children, className, style, type, onClick, hideIcon, icon, size, variant, }: BtnOwnProps): react_jsx_runtime.JSX.Element;

/**
 * <CtaForm> — Section CTA block from Figma 1225:5717 (Wealth Managers final block).
 *
 * Composes: eyebrow (DescTag) + gradient h2 + paragraph + 2 BtnOwn buttons.
 * Used on Wealth Managers, can be reused on other pages as the closing CTA.
 *
 * Responsive: buttons stack on mobile (flex-col → flex-row on sm+).
 * All sizes in rem, fluid via html base + token clamp.
 */
interface CtaFormProps {
    /** Eyebrow number (e.g. "11.0") */
    number: string;
    /** Eyebrow label */
    label: string;
    /** Section h2 — can be string or JSX for <br/> support */
    title: ReactNode;
    /** Optional sub-paragraph below h2 */
    subtitle?: ReactNode;
    /** Primary CTA label (white bg) */
    primaryLabel: string;
    /** Secondary CTA label (black-400 bg) */
    secondaryLabel: string;
    /** Optional click handlers — both default to dispatching open-quiz */
    onPrimaryClick?: () => void;
    onSecondaryClick?: () => void;
    /** Extra className on section */
    className?: string;
}
declare function CtaForm({ number, label, title, subtitle, primaryLabel, secondaryLabel, onPrimaryClick, onSecondaryClick, className, }: CtaFormProps): react_jsx_runtime.JSX.Element;

interface CtaFormNewsletterProps {
    /** Submit button label. Default: "Subscribe" */
    buttonLabel?: string;
    /** Icon for the button (path to SVG in /icons/). Default: Email.svg */
    buttonIcon?: string;
    /** Placeholder for the email input. Default: yourmail@gmail.com */
    placeholder?: string;
    /** Custom success message. Default: "✓ You're subscribed!" */
    successMessage?: string;
    /** Called on valid submit with the entered email */
    onSubmit?: (email: string) => void;
    /** Extra class on the form/wrapper */
    className?: string;
}
/**
 * Newsletter signup form — email input + submit button.
 * Mobile (<sm):   stacked, w-full max-w 30rem
 * Tablet (sm-lg): side-by-side flex-1 split, max-w 30rem
 * Desktop (lg+):  input 22.5rem + gap 1rem + button 9.1875rem = 32.6875rem total
 *
 * Used on: CompanyStock "Get Updates" section.
 */
declare function CtaFormNewsletter({ buttonLabel, buttonIcon, placeholder, successMessage, onSubmit, className, }: CtaFormNewsletterProps): react_jsx_runtime.JSX.Element;

/**
 * Section eyebrow tag — the "1.0  Section Label" line that prefixes most section headings.
 * Used across Home blocks, Company Stock sections, and Retail Investors sections.
 *
 * Token-driven (text-l + text-neutral-30) so it scales with the responsive type system.
 */
interface DescTagProps {
    /** Numeric prefix like "1.0", "2.0" — rendered with reduced opacity */
    number: string | number;
    /** The label text — rendered with higher opacity */
    label: string;
    /** Optional alignment class override (e.g. "items-center" for centered headings) */
    className?: string;
}
declare function DescTag({ number, label, className }: DescTagProps): react_jsx_runtime.JSX.Element;

interface FAQItem {
    q: string;
    a: string;
}
interface FAQProps {
    items: FAQItem[];
    className?: string;
}
declare function FAQ({ items, className }: FAQProps): react_jsx_runtime.JSX.Element;

interface FormProps {
    number?: string;
    label?: string;
    title?: ReactNode;
    subtitle?: ReactNode;
    /** Email recipient for the mailto submit. Default: info@axevil.com */
    recipient?: string;
    paddingClass?: string;
}
declare function Form({ number, label, title, subtitle, recipient, paddingClass, }?: FormProps): react_jsx_runtime.JSX.Element;

/**
 * Hero eyebrow pill — status-open variant with pulsing online-dot.
 * Used by RIHero, WMHero, and any future hero needing the
 * "open for investors" status label.
 *
 * Visual depth: inset shadows on both pill and dot match the Figma
 * spec (946:9004) — see RIHero original implementation for reference.
 */
interface HeroEyebrowProps {
    children: ReactNode;
    className?: string;
}
declare function HeroEyebrow({ children, className }: HeroEyebrowProps): react_jsx_runtime.JSX.Element;

interface IllCard {
    num: string;
    img: string;
    /** Optional mobile-only illustration override (used <480px via <picture>) */
    imgMobile?: string;
    title: string;
    body: string;
    border?: CSSProperties;
    imgClassName?: string;
}
interface IllCardsProps {
    cards: IllCard[];
    className?: string;
    /** Default object-position for images on desktop (e.g. 'center', 'top'). On mobile (<480px)
     *  the global `.ill-card-img` rule forces `object-position: top` regardless. */
    objectPosition?: string;
    /** Card height (CSS string). Default: 20rem (round 11 — matches About Us layout). */
    cardHeight?: string;
    /** Heading size token. Default: "h4" */
    titleSize?: 'h3' | 'h4';
    /** Optional explicit height of the illustration area (CSS string).
     *  Use when the image should not fill the entire card (e.g. Block08Section
     *  requests 10rem so the illustration hugs the top edge). */
    imageHeight?: string;
}
declare function IllCards({ cards, className, objectPosition, cardHeight, titleSize, imageHeight, }: IllCardsProps): react_jsx_runtime.JSX.Element;

/**
 * Nav dropdown overlay — desktop-only. Hovers under the "Invest" or "Company"
 * nav links from the Nav bar. Per 2026-05-28 spec + visual alignment with the
 * "Invest" link as shown in the design screenshot:
 *   · absolute positioned 24.875rem from the left edge of the Nav container
 *     (anchors flush-left under "Invest" at the 1440rem container width)
 *   · slides in from below by 1rem over 300ms ease-in-out (opacity + y-translate)
 *   · two-column card grid based on Figma 1331:7708 (navbar-dropdown-open)
 *
 * Visual tokens:
 *   · outer card: --page-bg (#080808) with 1px --black-500 border, radius 1rem
 *   · inner wrapper: --black-500 (#1a1a1a), radius 0.75rem, padding 0.5rem,
 *     gap-6 between columns
 *   · per-link card: radius 0.5rem, padding 0.75rem, gap-2.5 inside
 *   · vertical divider: 1px white/10
 *   · label: text-xs white-400 (#9b9b9b)
 *   · description: text-s-med white-200 (#e6e6e6)
 */
interface DropdownItem {
    label: string;
    description: string;
    href: string;
}
interface NavDropdownProps {
    /** Up to 4 items — distributed 2 per column. */
    items: DropdownItem[];
    /** Controls AnimatePresence open/close. */
    open: boolean;
    onClose?: () => void;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
}
declare function NavDropdown({ items, open, onClose, onMouseEnter, onMouseLeave }: NavDropdownProps): react_jsx_runtime.JSX.Element;

/**
 * PageEntry — standard `<main>` wrapper with a 1.5s fade-in preload.
 * Drop-in replacement for `<main>` at the top of any page component.
 *
 * Default animation: opacity 0 → 1 over 1.5s easeOut. Override via the
 * standard motion props (`initial`, `animate`, `transition`).
 *
 * Hero-specific reveals (device illustrations, video backgrounds) live inside
 * their own components and stagger after this wrapper completes via their own
 * `transition.delay` values.
 */
interface PageEntryProps extends Omit<MotionProps, 'children'> {
    children: ReactNode;
    className?: string;
    style?: CSSProperties;
}
declare function PageEntry({ children, className, style, initial, animate, transition, ...rest }: PageEntryProps): react_jsx_runtime.JSX.Element;

interface SectionHeadingProps {
    /** Eyebrow number (e.g. "4.0"). Pass with `label` to render DescTag. */
    number?: string | number;
    /** Eyebrow label (e.g. "Selected Portfolio Companies"). Required with `number`. */
    label?: string;
    /** Section title — rendered as h2 with gradient text. Can be string or JSX (for <br/> support). */
    title: ReactNode;
    /** Optional subtitle paragraph below the heading */
    subtitle?: ReactNode;
    /** Alignment: 'start' (default) or 'center' */
    align?: 'start' | 'center';
    /** Override the title gradient. Defaults to canonical AXEVIL gradient. */
    gradient?: string;
    /** Cap the title width (CSS string) */
    titleMaxWidth?: string;
    /** Cap the subtitle width (CSS string) */
    subtitleMaxWidth?: string;
    /** Outer gap between eyebrow and the heading-block. Default: clamp(1.5rem, 3vw, 2rem). */
    gap?: string;
    /** Inner gap between h2 and subtitle. Default: clamp(1rem, 2vw, 1.5rem). */
    innerGap?: string;
    /** Extra className on the wrapper */
    className?: string;
}
declare function SectionHeading({ number, label, title, subtitle, align, gradient, titleMaxWidth, subtitleMaxWidth, gap, innerGap, className, }: SectionHeadingProps): react_jsx_runtime.JSX.Element;

interface SliderCardProps {
    name: string;
    role: string;
    description: string;
    photo: string;
    className?: string;
}
declare function SliderCard({ name, role, description, photo, className }: SliderCardProps): react_jsx_runtime.JSX.Element;

/**
 * Status pill — small badge with a colored dot + label.
 * Used for deal states (Accepting allocations / Closed / Coming Soon) and any
 * other status indicators across the product.
 *
 * Colors come from the DS status tokens (status-open / status-closed / status-soon).
 */
type StatusKind = 'open' | 'closed' | 'soon';
interface StatusPillProps {
    /** Status kind — drives dot/text/border colors */
    status: StatusKind;
    /** Pill label */
    label: string;
    /** Optional className override */
    className?: string;
}
declare function StatusPill({ status, label, className }: StatusPillProps): react_jsx_runtime.JSX.Element;

/**
 * Tag — three visual variants that cover every "pill-shaped chip" pattern on
 * the site:
 *
 *   - 'tab'        — Block06Tablet / WMInterface tab-switcher. Clickable.
 *                    Mobile h-10 / desktop h-13, rounded-xl→2xl, switchable
 *                    bg between active (white) and inactive (black-400).
 *
 *   - 'regulatory' — small fully-rounded pill used for SEC / FINRA / Delaware
 *                    labels in RIKeyStats and SNS pages. Static span, optional
 *                    leading icon. Background black-400 + subtle border.
 *
 *   - 'plain'      — the legacy minimal variant: text-only label with optional
 *                    active state, transparent bg.
 *
 * Provides `onClick` to render as `<button>`, `href` to render as `<a>`,
 * otherwise renders a `<span>`.
 */
type TagVariant = 'tab' | 'regulatory' | 'plain';
type TagSize = 'sm' | 'md' | 'lg';
interface TagProps {
    label: ReactNode;
    variant?: TagVariant;
    active?: boolean;
    size?: TagSize;
    onClick?: () => void;
    href?: string;
    /** Optional leading element (dot, icon, badge). Common for regulatory pills. */
    leading?: ReactNode;
    className?: string;
}
declare function Tag({ label, variant, active, size, onClick, href, leading, className, }: TagProps): react_jsx_runtime.JSX.Element;

declare const PRELOAD_DEVICES_MOTION: {
    readonly initial: {
        readonly opacity: 0;
        readonly y: 40;
    };
    readonly animate: {
        readonly opacity: 1;
        readonly y: 0;
    };
    readonly transition: {
        readonly duration: 1.4;
        readonly ease: readonly [0.25, 0.4, 0.25, 1];
        readonly delay: 0.4;
    };
};
declare const PRELOAD_IN_VIEW_MOTION: {
    readonly initial: {
        readonly opacity: 0;
        readonly y: 40;
    };
    readonly whileInView: {
        readonly opacity: 1;
        readonly y: 0;
    };
    readonly viewport: {
        readonly once: true;
        readonly amount: 0.2;
    };
    readonly transition: {
        readonly duration: 1.4;
        readonly ease: readonly [0.25, 0.4, 0.25, 1];
        readonly delay: 0.4;
    };
};
declare const PRELOAD_FADE_IN_VIEW_MOTION: {
    readonly initial: {
        readonly opacity: 0;
    };
    readonly whileInView: {
        readonly opacity: 1;
    };
    readonly viewport: {
        readonly once: true;
        readonly amount: 0.2;
    };
    readonly transition: {
        readonly duration: 1.4;
        readonly ease: readonly [0.25, 0.4, 0.25, 1];
        readonly delay: 0.4;
    };
};

export { BgFeatures, BtnOwn, CtaForm, CtaFormNewsletter, DescTag, type DropdownItem, FAQ, type FAQItem, FadeIn, Footer, Form, HeroEyebrow, type IllCard, IllCards, Nav, NavDropdown, PRELOAD_DEVICES_MOTION, PRELOAD_FADE_IN_VIEW_MOTION, PRELOAD_IN_VIEW_MOTION, PageEntry, Quiz, SectionHeading, SliderCard, type StatusKind, StatusPill, Tag, type TagSize, type TagVariant };
