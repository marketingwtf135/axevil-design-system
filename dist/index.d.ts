import * as react_jsx_runtime from 'react/jsx-runtime';
import * as react from 'react';
import { ReactNode, CSSProperties } from 'react';
import { MotionProps } from 'framer-motion';

interface FadeInProps {
    children: ReactNode;
    className?: string;
}
declare function FadeIn({ children, className }: FadeInProps): react_jsx_runtime.JSX.Element;

interface FooterLink {
    label: string;
    href: string;
}
interface FooterProps {
    /** Logo link target (default '/'). */
    logoHref?: string;
    /** Replace the nav columns with a flat link row (standalone pages, e.g. axevil-about). */
    links?: FooterLink[];
    /** Compliance/legal copy rendered under the divider — defaults to the standard
     *  disclaimer transcribed from Figma 2605:6917. Pass `null` to omit it (the
     *  copyright line stays). */
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
    /** Hide the mobile/tablet burger + drawer entirely (e.g. when `links` is empty and
     *  there's nothing to open) — the CTA button stays visible at every width instead. */
    hideBurger?: boolean;
}
declare function Nav({ links, logoHref, ctaLabel, onCtaClick, hideBurger }?: NavProps): react_jsx_runtime.JSX.Element;

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
    /** Enable the cursor-tracked spotlight. Default false — internal-page heroes
     *  use the static texture only (per 2026-06-25 feedback: no bg hover interaction). */
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
    size?: 'M' | 'S' | 'XS';
    /** primary: white bg + dark text · secondary: black-400 bg + white text, hover → black-600 */
    variant?: Variant;
    /** Legacy prop — no-op now (secondary is borderless by default). Kept so existing call-sites compile. */
    noBorder?: boolean;
    disabled?: boolean;
    /**
     * Renders an `<a>` instead of a `<button>`, with the same fill, radius, hover and focus ring.
     *
     * Added for the Help Center, whose per-collection CTA is a navigation ("Browse private
     * companies", "Legal disclosures") rather than an action. A link has to BE a link: the SPA
     * click interceptor in App.tsx only upgrades real anchors, and a button that navigates is not
     * reachable the way a link is — no middle-click, no copy-address, and the wrong role announced.
     * `Tag` already carries the same href/onClick pair for the same reason.
     */
    href?: string;
    /** External target. Adds `rel="noopener noreferrer"`. Only meaningful with `href`. */
    external?: boolean;
}
declare function BtnOwn({ children, className, style, type, onClick, hideIcon, icon, size, variant, disabled, href, external, }: BtnOwnProps): react_jsx_runtime.JSX.Element;

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
    /** Secondary CTA label (black-400 bg). Omit to render a single primary button. */
    secondaryLabel?: string;
    /** Override the primary button size. When set, renders ONE primary button at this
     *  size (instead of the responsive S/M pair). Default: responsive S (mobile) / M (desktop). */
    primarySize?: 'M' | 'S';
    /** Hide the primary button's icon. Default false. */
    primaryHideIcon?: boolean;
    /** Optional click handlers — both default to dispatching open-quiz */
    onPrimaryClick?: () => void;
    onSecondaryClick?: () => void;
    /** Extra className on section */
    className?: string;
}
declare function CtaForm({ number, label, title, subtitle, primaryLabel, secondaryLabel, primarySize, primaryHideIcon, onPrimaryClick, onSecondaryClick, className, }: CtaFormProps): react_jsx_runtime.JSX.Element;

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
 * Newsletter signup form — email input + submit button, always a single horizontal row
 * (client feedback 2026-07-08 — was stacking on mobile).
 * Mobile (<sm):   input flex-1 + compact size-S button, max-w 30rem
 * Tablet (sm-lg): input flex-1 + size-M button, max-w 30rem
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
    /**
     * Numeric prefix like "1.0", "2.0" — rendered with reduced opacity.
     *
     * Optional since 14.09.2026: a section of a numbered document has one, a standalone block of
     * page chrome does not, and inventing a sequence for the latter reads as a broken reference.
     */
    number?: string | number;
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
    /**
     * `article` — the rich-text template's FAQ (client 2026-09-12, items 7-8): a fixed 3rem
     * toggle instead of the marketing pages' 3.5rem, and the question in white-100 rather than
     * white-300. Everything else is shared, so the two stay one component.
     */
    variant?: 'default' | 'article';
}
declare function FAQ({ items, className, variant }: FAQProps): react_jsx_runtime.JSX.Element;

interface FormProps {
    number?: string;
    label?: string;
    title?: ReactNode;
    subtitle?: ReactNode;
    /** Email recipient for the mailto submit. Default: info@axevil.com */
    recipient?: string;
    /** Carbon copy on the mailto submit. Default: support@axevil.com (client 2026-08-04). */
    cc?: string;
    /** Subject line. Default: "Question from the website axevil.com" (client 2026-08-04) —
     *  a fixed subject so the shared inbox can filter website enquiries into one thread. */
    subject?: string;
    paddingClass?: string;
}
declare function Form({ number, label, title, subtitle, recipient, cc, subject, paddingClass, }?: FormProps): react_jsx_runtime.JSX.Element;

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
    /** Per-card object-fit override. Default 'contain' (fits whole illustration).
     *  Set 'cover' to stretch the image to fill the card full-width (crops to fit) —
     *  e.g. the company-stock growth chart that should span the card edge-to-edge. */
    objectFit?: CSSProperties['objectFit'];
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
    /** When true, the card illustration is not rendered — only the number + text
     *  content remain. Card fill/border/padding/radius stay unchanged.
     *  Used by CS "Why invest" per client feedback (illustrations removed for now). */
    hideImages?: boolean;
}
declare function IllCards({ cards, className, objectPosition, cardHeight, titleSize, imageHeight, hideImages, }: IllCardsProps): react_jsx_runtime.JSX.Element;

interface LinkblockItem {
    label: ReactNode;
    href: string;
}
interface LinkblockCardProps {
    /** Small line above the heading — "4 articles", a date, a count. */
    meta?: ReactNode;
    title: string;
    /** The heading is a link when the group has a page of its own. */
    href?: string;
    summary?: ReactNode;
    links: LinkblockItem[];
    /** Text of the plus-link at the foot. Omitted → no footer link. */
    cta?: string;
    /** Where the plus-link goes; defaults to `href`. */
    ctaHref?: string;
    className?: string;
}
declare function LinkblockCard({ meta, title, href, summary, links, cta, ctaHref, className, }: LinkblockCardProps): react_jsx_runtime.JSX.Element;

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
 *   · label: text-xs white-400 (#8a8f98)
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
 * PageEntry — standard `<main>` wrapper with a fade-in.
 * Drop-in replacement for `<main>` at the top of any page component.
 *
 * Default animation: opacity 0 → 1 over 0.5s easeOut. Override via the
 * standard motion props (`initial`, `animate`, `transition`).
 *
 * The fade-in was 1.5s until 2026-08-04. On a first visit that read as a considered
 * reveal, but on every subsequent route change it stacked on top of the 0.4s exit — a
 * combined ~2s before the new page was fully legible, which the client read as a
 * preloader rather than a transition. 0.5s in / 0.35s out keeps the crossfade smooth
 * while the destination lands almost immediately.
 *
 * Also carries a default `exit` (opacity → 0, 0.4s) so that when App.tsx's route
 * switch is wrapped in `<AnimatePresence>`, the page being NAVIGATED AWAY FROM fades
 * out instead of being unmounted instantly — the abrupt cut + a slow 1.5s fade-in on
 * top of it was reading as a lag/stutter on every route change (2026-07-25 feedback).
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
declare function PageEntry({ children, className, style, initial, animate, exit, transition, ...rest }: PageEntryProps): react_jsx_runtime.JSX.Element;

/** Full dial-code list (client 2026-08-13: "оооочень мало стран", the 15-entry "major
 *  financial hubs" curation this used to be wasn't enough — visitors outside that set had
 *  no way to enter their own country at all). Sorted by name for a list this size (the
 *  curated one didn't need it at 15 entries; at ~195 a fixed relevance order stops helping
 *  and alphabetical is what makes a specific country findable). Flags load from
 *  flagcdn.com with no bundled assets, matching CompanyCard's <Flag>. */
declare const COUNTRIES: {
    code: string;
    dial: string;
    name: string;
}[];
interface PhoneFieldProps {
    value: string;
    onChange: (v: string) => void;
    countryCode: string;
    onCountryChange: (code: string) => void;
    error?: string;
    /** Passed straight to Field — match a sibling field's radius when this sits next to one. */
    height?: string;
    radius?: string;
    /** Input placeholder — override per consumer locale. Defaults to the English label. */
    placeholder?: string;
    /** Hide the flag/dial-code picker UI — the field becomes a plain number input. The
     *  dial code still applies silently from `countryCode` (IP auto-detect and the
     *  paste-a-full-number auto-detect both keep working, just invisibly). */
    hideCountryPicker?: boolean;
}
/** Phone input with a country-dial-code picker (flag + code), same visual language and
 *  outside-click/keyboard behavior as `InquiryDropdown` in form.tsx. */
declare function PhoneField({ value, onChange, countryCode, onCountryChange, error, height, radius, placeholder, hideCountryPicker }: PhoneFieldProps): react_jsx_runtime.JSX.Element;

/**
 * SearchInput — the minimal underline search field (Figma 2180:6142, and the `search-input`
 * node of page-research 3245:5134, which is the same component): transparent field, a single
 * 1px black-600 bottom border, an 18px magnifier on the RIGHT, 14px white-400 placeholder.
 *
 * EXTRACTED 2026-09-09 from the local copy in pages/Companies.tsx, because /research now
 * renders the same field in its filters row and CLAUDE.md's component-reuse rule is explicit
 * that a second copy is a finding rather than a convenience. Companies keeps its local
 * `SearchInput` name and delegates here, so nothing at its call sites had to change.
 *
 * The placeholder and the accessible label are props, not constants: the field is the same
 * control on both surfaces, but "Search 500+ companies…" is a lie on a page that lists reports.
 */
interface SearchInputProps {
    value: string;
    onChange: (v: string) => void;
    /** Visible placeholder — name what is actually being searched. */
    placeholder: string;
    /** Accessible name. The field has no visible label, so this is the only one a reader gets. */
    ariaLabel: string;
    className?: string;
    autoFocus?: boolean;
}
declare function SearchInput({ value, onChange, placeholder, ariaLabel, className, autoFocus, }: SearchInputProps): react_jsx_runtime.JSX.Element;

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
    /**
     * Element the title renders as. Default `h2`.
     *
     * Pass `'p'` on a RESPONSIVE DUPLICATE — a second copy of the same heading that exists only so a
     * different breakpoint can lay it out differently. Both copies are in the DOM at once (one is
     * merely `display:none`), so two `<h2>`s ship on every render: the 2026-08-18 SEO audit counted
     * "Key Stats" three times on the home page and again on /retail-investors and /wealth-managers,
     * and "Pre-packaged institutional infrastructure" twice on /wealth-managers. A `<p>` with the
     * identical classes is pixel-identical (Tailwind's preflight zeroes heading margins) and is not
     * a heading, which is the whole point — the outline should describe the page once.
     *
     * Not a general styling escape hatch: the FIRST, canonical copy of a heading stays an `h2`.
     */
    titleAs?: 'h2' | 'p';
}
declare function SectionHeading({ number, label, title, subtitle, align, gradient, titleMaxWidth, subtitleMaxWidth, gap, innerGap, className, titleAs, }: SectionHeadingProps): react_jsx_runtime.JSX.Element;

interface SliderCardProps {
    name: string;
    role: string;
    description: string;
    photo: string;
    /** LinkedIn profile URL (Figma 797:4193) — the link only renders when this is set. */
    linkedin?: string;
    className?: string;
}
declare function SliderCard({ name, role, description, photo, linkedin, className }: SliderCardProps): react_jsx_runtime.JSX.Element;

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
type TagVariant = 'tab' | 'regulatory' | 'topic' | 'plain';
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

/**
 * Rich-text content model — what an article / report / news page IS, before any React.
 *
 * Source of the element set: Figma "Template-report" (node 3245:6194, September 2026), which
 * lays out the report/cluster template as a hero followed by a 708px column of typed blocks.
 * Everything a page needs is one of these blocks; a page is a list of sections of blocks; a new
 * kind of content is a new block type here plus one component in ./blocks. Nothing else has to
 * change — the renderer in RichText.tsx dispatches on `type`.
 *
 * WHY DATA AND NOT JSX. The first `/learn/` page was written as JSX prose with a dozen ad-hoc
 * primitives, and every text change was a code change. As data, the copy can be reviewed,
 * translated and (later) fed from a CMS, and the same document renders identically on the main
 * site and on any landing that consumes @axevil/design-system.
 *
 * Plain `.ts`: no React import, so the build-time SEO collector can read a document without
 * pulling the component tree into a Node script (same rule as teamMembers.ts / publications.ts).
 */
/** A run of text with at most one mark. Plain strings are the common case. */
type InlineNode = string | {
    type: 'strong';
    text: string;
} | {
    type: 'em';
    text: string;
}
/** A term defined at first use — set in white-200 medium; links to its glossary entry or page. */
 | {
    type: 'term';
    text: string;
    href?: string;
} | {
    type: 'link';
    text: string;
    href: string;
    external?: boolean;
};
/** Paragraph content: one node or a sequence. */
type Inline = InlineNode | InlineNode[];
interface FactItem {
    value: string;
    label: string;
    /** As-of + publisher, e.g. "Year to Q2 2025 · Carta". A figure without a date does not publish. */
    source: string;
    href?: string;
}
interface DealFigure {
    value: string;
    label: string;
    /** Date + source line under the figure. */
    source: string;
}
interface GlossaryEntry {
    term: string;
    definition: string;
    /** Set when the term has its own page. */
    href?: string;
}
interface SourceRow {
    n: number;
    publisher: string;
    claim: string;
    date: string;
    url: string;
}
type TableCell = string
/** A tinted pill — the "+167%" growth cell of the macro. `tone` maps to the DS status tokens. */
 | {
    pill: string;
    tone?: 'open' | 'closed' | 'soon';
};
interface TableColumn {
    key: string;
    label: string;
    /** Column width in rem; omitted columns share the remaining space. */
    width?: string;
    align?: 'left' | 'right';
}
interface TableRow {
    cells: TableCell[];
}
interface FaqEntry {
    q: string;
    a: string;
}
type RichTextBlock = 
/** The short answer — the largest body type on the page, set once at the top (Figma "answer"). */
{
    type: 'lead';
    paragraphs: Inline[];
} | {
    type: 'paragraph';
    content: Inline;
}
/** Sub-heading inside a section. Sections render their own h2; this is the only deeper level. */
 | {
    type: 'heading';
    text: string;
    id?: string;
} | {
    type: 'facts';
    items: FactItem[];
} | {
    type: 'image';
    src: string;
    alt: string;
    width: number;
    height: number;
    caption?: string;
    source?: string;
    /** Cap the rendered height so a tall figure hugs instead of filling the column. */
    maxHeight?: string;
    wide?: boolean;
} | {
    type: 'deal';
    logo: string;
    company: string;
    round: string;
    statement: string;
    figures: DealFigure[];
    link: {
        label: string;
        href: string;
    };
} | {
    type: 'glossary';
    entries: GlossaryEntry[];
} | {
    type: 'sources';
    rows: SourceRow[];
    wide?: boolean;
} | {
    type: 'table';
    columns: TableColumn[];
    rows: TableRow[];
    /** Breaks out of the text measure to the wide one, as the macro's 900px card does. */
    wide?: boolean;
    caption?: string;
    /** Dated provenance under the table. */
    source?: string;
    /** 14px cells instead of 18 — for a table whose cells are sentences, not numbers. */
    dense?: boolean;
    /** Width below which the table scrolls inside its own card. */
    minWidth?: string;
} | {
    type: 'faq';
    items: FaqEntry[];
}
/** The one sentence a section is really about, pulled out of the prose. */
 | {
    type: 'takeaway';
    content: Inline;
} | {
    type: 'callout';
    tone?: 'note' | 'warning' | 'positive';
    title?: string;
    content: Inline;
} | {
    type: 'list';
    ordered?: boolean;
    items: Inline[];
} | {
    type: 'quote';
    content: Inline;
    cite?: string;
    role?: string;
} | {
    type: 'keyValue';
    rows: {
        key: string;
        value: Inline;
    }[];
} | {
    type: 'divider';
}
/**
 * Escape hatch for a bespoke figure (an SVG scheme, a timeline) that is code, not content.
 * The page passes a renderer for each `id` — see RichTextProps.renderers.
 */
 | {
    type: 'custom';
    id: string;
    wide?: boolean;
};
interface RichTextSection {
    /** Anchor id — the chapter navigation and scroll-spy key on it. */
    id: string;
    /** "1.0", "2.0" — the DescTag number. */
    number: string;
    /** The DescTag label, e.g. "The structure". */
    label: string;
    /** Section h2. The opening "short answer" section has none, as in the macro. */
    title?: string;
    blocks: RichTextBlock[];
}
interface RichTextDocument {
    sections: RichTextSection[];
}
interface ArticleAuthor {
    name: string;
    role: string;
    photo: string;
    href?: string;
}
interface Crumb {
    label: string;
    href?: string;
}
interface ArticleHeroData {
    breadcrumb: Crumb[];
    author: ArticleAuthor;
    /** "7 September 2026". */
    published: string;
    /** "9 min read". */
    readingTime: string;
    h1: string;
    lead: string;
    topics: string[];
}

/**
 * The renderer. A document is sections of blocks; each block type maps to exactly one component
 * in ./blocks, and this file is the only place that mapping lives.
 *
 * LAYOUT, from Figma "section-publications" (3351:5242): the body sits in one column centred on
 * the page — 800px (client 2026-09-12, item 10; the macro's own is 708) — 100px above it and
 * 200px below (`ps-t6-b12`, the tier utilities with their tablet and mobile steps), 80px between
 * sections and 32px between the blocks of a section. Two flowing blocks are 16px apart instead —
 * the macro's paragraph spacing — and a sub-heading gets 40px of air above it.
 *
 * A block that sets `wide` breaks out of the column to 1000px, symmetrically, capped at the
 * viewport: the route comparison and the sources table both do.
 *
 * `renderers` is the escape hatch for a `custom` block: bespoke figures that are code rather
 * than content (an SVG scheme, a timeline) are rendered by the page, keyed by id, so the content
 * file stays plain data.
 */
interface RichTextProps {
    document: RichTextDocument;
    renderers?: Record<string, () => ReactNode>;
    /** Rendered after the last section, inside the same measure — a disclosure, a note. */
    after?: ReactNode;
}
declare function RichText({ document, renderers, after }: RichTextProps): react_jsx_runtime.JSX.Element;
declare function Section({ section, renderers }: {
    section: RichTextSection;
    renderers?: RichTextProps['renderers'];
}): react_jsx_runtime.JSX.Element;

/**
 * Report / cluster-page hero — Figma "Template-report" › hero (3346:5195).
 *
 * Centred stack: breadcrumb → author chip → h1 + lead → topic tags. Plain page ground — the
 * macro puts no texture behind it, unlike the marketing heroes, so none is drawn here.
 *
 * TYPE. Every line is a DS token except the h1. The macro sets it at 48px semibold, which sits
 * between text-h3 (36) and text-h1-semi (64) and is not in the September type spec; it is the
 * one inline size in the whole template, fluid so it lands at 32px on a phone, and it keeps the
 * headline gradient the rest of the site's h1s carry.
 */
declare function ArticleHero({ data }: {
    data: ArticleHeroData;
}): react_jsx_runtime.JSX.Element;

interface SubscribeCopy {
    /** Names the SUBJECT of the newsletter, never the action. */
    heading: string;
    body: string;
    /** Cadence + consent line under the form. */
    note: string;
}
/**
 * Newsletter band — Figma wrapper 3351:5924: centred heading and body, one email field beside
 * the DS button, a small consent line. No panel and no role select — the macro draws neither.
 *
 * The one conversion point of a report page. It stays at the foot, after the answer has been
 * given away, with nothing else to click on the page.
 *
 * Heading is 3rem / SemiBold (client 2026-09-12) — the macro draws 36px, and like the rest of
 * the template it is the template's own style rather than a DS token.
 */
declare function SubscribeBand({ copy, source }: {
    copy: SubscribeCopy;
    source: string;
}): react_jsx_runtime.JSX.Element;

/**
 * The three text blocks of the template, each on the template's OWN style (../typography.ts) —
 * not a DS type token. See the note at the head of that file for why.
 *
 *   Lead        24 / 500 / 135%   the "short answer" — the largest body type on a page
 *   Paragraph   16 / 400 / 140%   body copy, tracking normal
 *   SubHeading  18 / 500 / 135%   the only heading level under a section's h2
 */
declare function Lead({ paragraphs }: {
    paragraphs: Inline[];
}): react_jsx_runtime.JSX.Element;
declare function Paragraph({ content }: {
    content: Inline;
}): react_jsx_runtime.JSX.Element;
declare function SubHeading({ text, id }: {
    text: string;
    id?: string;
}): react_jsx_runtime.JSX.Element;

/**
 * Fact cards — Figma "cards-wrapper" (3351:5313): a 2×2 grid of filled tiles, value on top,
 * label under it, the dated source pinned to the bottom edge.
 *
 * The value is the template's own style, not `text-h3`: the macro draws 36 / SemiBold / 110%
 * with normal tracking, and `text-h3` is 36 / Medium with the section's tracking — and the site
 * forces that 500 with `!important`, so the weight could not be lifted here at all
 * (client 2026-09-12, item 1).
 */
declare function FactGrid({ items }: {
    items: FactItem[];
}): react_jsx_runtime.JSX.Element;

/**
 * An image in the column — Figma "image" (3351:5344): full column width, 16px radius.
 *
 * `maxHeight` lets a tall figure HUG instead of filling the column (client 2026-09-12, item 3):
 * the picture scales down inside the cap and stays centred, rather than being cropped to it.
 *
 * The macro draws the image bare. Caption and source lines are additions: a figure in a report
 * that cannot say what it shows or where it is from is the one thing the content rules forbid,
 * and both render in the same recessive register as a fact card's source line.
 *
 * Intrinsic width/height are mandatory so the box is reserved before the bytes arrive (CLS 0).
 */
declare function Figure({ src, alt, width, height, caption, source, maxHeight, }: {
    src: string;
    alt: string;
    width: number;
    height: number;
    caption?: string;
    source?: string;
    maxHeight?: string;
}): react_jsx_runtime.JSX.Element;

/**
 * Deal spotlight — Figma "deal-spotlight" (3351:5357). One filled card: on the left the company
 * mark, name and round, the one-sentence reading and a link to the company page; on the right a
 * stack of three nested figure tiles, one step lighter than the card so the nesting reads.
 *
 * Under 768px the two halves stack and the tiles go full width.
 */
declare function DealSpotlight({ logo, company, round, statement, figures, link, }: {
    logo: string;
    company: string;
    round: string;
    statement: string;
    figures: DealFigure[];
    link: {
        label: string;
        href: string;
    };
}): react_jsx_runtime.JSX.Element;

/**
 * Glossary — Figma "glossary" (3351:5704): a definition list, term in a fixed 240px column,
 * definition beside it, a hairline between entries and none above the first. A real <dl>, so a
 * parser and a screen reader get the term/definition pairing.
 *
 * Under 768px the term sits above its definition.
 */
declare function Glossary({ entries }: {
    entries: GlossaryEntry[];
}): react_jsx_runtime.JSX.Element;

declare function SourcesTable({ rows }: {
    rows: SourceRow[];
}): react_jsx_runtime.JSX.Element;

/**
 * Data table — Figma "advantages" (3351:5501). The template's one table chrome, and every other
 * tabular block on the page wears it too: a header band on black-400 with the top corners
 * rounded, a body on black-300 rounded at the bottom, rows parted by a dashed black-600 rule,
 * cells at 18/500, and an optional tinted pill for a delta ("+167%").
 *
 * `wide` on the block breaks it out of the article column to 1000px, which is what the macro's
 * 900px card does against its 708px column.
 *
 * `dense` drops the cells to 14px — for a table whose cells are sentences rather than numbers
 * (the route comparison), where 18px runs every row to four lines.
 */
declare function DataTable({ columns, rows, caption, source, dense, minWidth, }: {
    columns: TableColumn[];
    rows: TableRow[];
    caption?: string;
    source?: string;
    dense?: boolean;
    /** Width below which the table scrolls inside its own card rather than crushing cells. */
    minWidth?: string;
}): react_jsx_runtime.JSX.Element;
/**
 * The macro's growth pill — status colours without the status dot. Green is the default because
 * a delta cell in these tables is, so far, always a gain; `closed` gives the red pair for a loss
 * and `soon` the amber one for a flat or pending figure.
 */
declare function TrendPill({ label, tone }: {
    label: string;
    tone?: 'open' | 'closed' | 'soon';
}): react_jsx_runtime.JSX.Element;

type PublicationGridVariant = 'bare' | 'plaque';
interface PublicationCard {
    href: string;
    /** Meta row cells — category, date, language. Joined with a middot; empty cells leave no
        dangling separator, which is why this is a list rather than a preformatted string. */
    meta: (string | null | undefined)[];
    title: string;
    summary: string;
    cover?: {
        src: string;
        alt: string;
        width: number;
        height: number;
    };
    /** Optional byline — the macro's card carries one; a "related page" card has no author. */
    byline?: {
        name: string;
        photo: string;
    };
}
/**
 * Publication cards — Figma "publication-cards" (3245:5623), the row the author page draws.
 *
 * Card anatomy: a 3:2 cover with a black-600 hairline and an 8px radius, then the copy —
 * meta row in black-800, the title at 24/500, the summary at 16/400 — and the byline pinned to
 * the bottom so it sits on one line across a row of unequal summaries.
 *
 * A vertical rule parts the columns, drawn per row rather than as the macro's three fixed
 * dividers: the count is content-driven and the grid wraps. Three per row at lg, two at md.
 */
/**
 * `plaque` — each card on its own black-300 panel with 1.5rem of padding and a 0.5rem lift on
 * hover (client, 14.09.2026, on /help/how-it-works). The bare variant is the macro's own card
 * and stays the default: /learn and /authors draw them on the page ground with a rule between
 * columns, and a panel there would be a redesign of a signed-off layout.
 *
 * The column gap tightens on plaques — the panels already separate the cards, so the macro's
 * 2.5rem trough between them reads as a hole.
 */
declare function PublicationGrid({ items, variant, }: {
    items: PublicationCard[];
    variant?: PublicationGridVariant;
}): react_jsx_runtime.JSX.Element;

/**
 * Elements the macro does not draw, built in the same register so a page can use them without
 * looking like it left the template: a pulled statement, a callout, lists, a quotation, a
 * key/value strip, a rule. Each is one filled surface or one hairline — no strokes around
 * wide content, the rule every other block here follows.
 */
/** The one sentence a section is really about, pulled out of the prose. */
declare function Takeaway({ content }: {
    content: Inline;
}): react_jsx_runtime.JSX.Element;
/** A note beside the prose — a caveat, a definition, a warning. */
declare function Callout({ tone, title, content }: {
    tone?: 'note' | 'warning' | 'positive';
    title?: string;
    content: Inline;
}): react_jsx_runtime.JSX.Element;
/** Bulleted or numbered. Numbers are two-digit and dim, the way the webinar landings count. */
declare function List({ ordered, items }: {
    ordered?: boolean;
    items: Inline[];
}): react_jsx_runtime.JSX.Element;
/** A quotation with attribution. Upright — there is no italic face — so weight and colour do the work. */
declare function Quote({ content, cite, role }: {
    content: Inline;
    cite?: string;
    role?: string;
}): react_jsx_runtime.JSX.Element;
/** Label / value rows — terms of a round, the parameters of a structure. */
declare function KeyValue({ rows }: {
    rows: {
        key: string;
        value: Inline;
    }[];
}): react_jsx_runtime.JSX.Element;
declare function Divider(): react_jsx_runtime.JSX.Element;

/**
 * Renders inline content — a string, a marked run, or a sequence of them.
 *
 * Marks are deliberately few. A body of text with bold, italic, links and defined terms covers
 * everything the reports and cluster pages have needed so far; anything richer is a block.
 *
 * `em` renders upright: Inter Tight ships here in 400/500/600 only (see specs/foundations/
 * typography.md), so a browser italic would be synthesised. Emphasis is carried by weight and
 * colour instead, which is also how the rest of the site does it.
 */
declare function InlineText({ content }: {
    content: Inline;
}): react_jsx_runtime.JSX.Element;

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

export { type ArticleAuthor, ArticleHero, type ArticleHeroData, BgFeatures, BtnOwn, COUNTRIES, Callout, type Crumb, CtaForm, CtaFormNewsletter, DataTable, type DealFigure, DealSpotlight, DescTag, Divider, type DropdownItem, HeroEyebrow as DynamicGreenBadge, FAQ, type FAQItem, FactGrid, type FactItem, FadeIn, type FaqEntry, Figure, Footer, Form, Glossary, type GlossaryEntry, HeroEyebrow, type IllCard, IllCards, type Inline, type InlineNode, InlineText, KeyValue, Lead, LinkblockCard, type LinkblockCardProps, type LinkblockItem, List, Nav, NavDropdown, PRELOAD_DEVICES_MOTION, PRELOAD_FADE_IN_VIEW_MOTION, PRELOAD_IN_VIEW_MOTION, PageEntry, Paragraph, PhoneField, type PublicationCard, PublicationGrid, Quiz, Quote, RichText, type RichTextBlock, type RichTextDocument, Section as RichTextSection, SearchInput, SectionHeading, SliderCard, type SourceRow, SourcesTable, type StatusKind, StatusPill, SubHeading, SubscribeBand, type SubscribeCopy, type TableCell, type TableColumn, type TableRow, Tag, type TagSize, type TagVariant, Takeaway, TrendPill };
