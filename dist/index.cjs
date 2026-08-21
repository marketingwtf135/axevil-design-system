"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// design-system/src/components/index.ts
var index_exports = {};
__export(index_exports, {
  BgFeatures: () => BgFeatures,
  BtnOwn: () => BtnOwn,
  COUNTRIES: () => COUNTRIES,
  CtaForm: () => CtaForm,
  CtaFormNewsletter: () => CtaFormNewsletter,
  DescTag: () => DescTag,
  DynamicGreenBadge: () => HeroEyebrow,
  FAQ: () => FAQ,
  FadeIn: () => FadeIn,
  Footer: () => Footer,
  Form: () => Form,
  HeroEyebrow: () => HeroEyebrow,
  IllCards: () => IllCards,
  Nav: () => Nav,
  NavDropdown: () => NavDropdown,
  PRELOAD_DEVICES_MOTION: () => PRELOAD_DEVICES_MOTION,
  PRELOAD_FADE_IN_VIEW_MOTION: () => PRELOAD_FADE_IN_VIEW_MOTION,
  PRELOAD_IN_VIEW_MOTION: () => PRELOAD_IN_VIEW_MOTION,
  PageEntry: () => PageEntry,
  PhoneField: () => PhoneField,
  Quiz: () => Quiz,
  SectionHeading: () => SectionHeading,
  SliderCard: () => SliderCard,
  StatusPill: () => StatusPill,
  Tag: () => Tag
});
module.exports = __toCommonJS(index_exports);

// design-system/src/components/FadeIn.tsx
var import_react = require("react");
var import_jsx_runtime = require("react/jsx-runtime");
function FadeIn({ children, className = "" }) {
  const ref = (0, import_react.useRef)(null);
  (0, import_react.useEffect)(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(0.5rem)";
    el.style.transition = "opacity 400ms ease-out, transform 400ms ease-out";
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { ref, className, children });
}

// design-system/src/components/Footer.tsx
var import_react2 = require("react");

// design-system/src/lib/openMailComposer.ts
function mailtoHref({ to, cc, subject }) {
  const params = [
    cc ? `cc=${encodeURIComponent(cc)}` : "",
    subject ? `subject=${encodeURIComponent(subject)}` : ""
  ].filter(Boolean).join("&");
  return params ? `mailto:${to}?${params}` : `mailto:${to}`;
}
function handleMailClick(event, { to, cc, subject }) {
  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) return;
  event.preventDefault();
  const url = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(to)}` + (cc ? `&cc=${encodeURIComponent(cc)}` : "") + (subject ? `&su=${encodeURIComponent(subject)}` : "");
  window.open(url, "_blank", "noopener,noreferrer");
}

// design-system/src/components/Footer.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
var OFFICES = [
  { city: "San Francisco", address: "548 Market St, San Francisco, California, 94104, United States" },
  { city: "Dubai", address: "The One Tower, 23rd Floor, Office 13, Dubai, United Arab Emirates" },
  // Astana address per src/pages/Contacts.tsx (single source of truth for office addresses).
  { city: "Astana", address: "Office 338, 55/23 Mangilik El Avenue, Astana, Republic of Kazakhstan" }
];
var CONTACT_EMAIL = "info@axevil.com";
var SOCIALS = [
  {
    name: "LinkedIn",
    path: "M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM3 9.75h4v11.5H3V9.75Zm6.5 0h3.83v1.57h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.5 4.78 5.76v6.12h-4v-5.43c0-1.3-.02-2.96-1.87-2.96-1.87 0-2.16 1.4-2.16 2.86v5.53h-4V9.75Z",
    href: "https://www.linkedin.com/company/axevil-capital"
  },
  {
    name: "YouTube",
    path: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814ZM9.545 15.568V8.432L15.818 12l-6.273 3.568Z",
    href: "https://www.youtube.com/@axevil_capital"
  },
  {
    name: "Medium",
    path: "M13.54 12a6.8 6.8 0 0 1-6.77 6.82A6.8 6.8 0 0 1 0 12a6.8 6.8 0 0 1 6.77-6.82A6.8 6.8 0 0 1 13.54 12Zm7.42 0c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42ZM24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12Z",
    href: "https://medium.com/@axevil"
  }
];
var NAV_COLUMNS = [
  /* Invest column removed per client feedback 2026-07-08. The Platform column below was added
     2026-08-18 (technical-SEO brief §7.1): /retail-investors, /wealth-managers and the research
     hub had no inbound internal link anywhere on the site, so no crawler could reach them by
     following links and no visitor could find them without the address. They are in the header
     too now — this is the second path, and the one that survives a header redesign. */
  { heading: "Platform", items: [
    { label: "Market Intelligence", href: "/companies" },
    { label: "For investors", href: "/retail-investors" },
    { label: "For advisors", href: "/wealth-managers" },
    { label: "Research", href: "/research" }
  ] },
  { heading: "Company", items: [
    { label: "About Us", href: "/about-us" },
    { label: "Team", href: "/team" },
    { label: "Contacts", href: "/contacts" }
  ] },
  // Legal column added 2026-07-09 per client's legal-pages brief (Popups banners and
  // Consent texts.docx, placement matrix). "Cookie Settings" and "Your Privacy Choices"
  // reopen the CookieConsent settings modal via the same open/close-by-event convention
  // Quiz.tsx uses ('open-quiz') — reverted from standalone pages per client feedback
  // 2026-07-09 (tried pages first, client asked to go back to the modal).
  { heading: "Legal", items: [
    { label: "Terms of Use", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Cookie Policy", href: "/cookies" },
    { label: "Legal Disclosures", href: "/disclosures" },
    { label: "Cookie Settings", onClick: () => window.dispatchEvent(new CustomEvent("open-cookie-settings")) },
    { label: "Your Privacy Choices", onClick: () => window.dispatchEvent(new CustomEvent("open-cookie-settings")) }
  ] }
];
var DELAWARE_REGISTRY = "https://icis.corp.delaware.gov/ecorp/entitysearch/NameSearch.aspx";
var COMPLIANCE_BLOCKS = [
  [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, { children: [
      "Axevil Capital, LLC is a US-registered company",
      " ",
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
        "a",
        {
          href: DELAWARE_REGISTRY,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "underline hover:text-white-400 transition-colors",
          children: "(Delaware, #6832739)"
        }
      ),
      " ",
      "with legal address: 548 Market St, San Francisco, California, 94104, United States."
    ] })
  ],
  ["Axevil Capital, LLC has Exempt Reporting Adviser (ERA) status and is regulated by the US Securities and Exchange Commission (SEC #802\u2212126907)."],
  [
    "The information presented on the website is for informational purposes only and:",
    "\u2014 does not constitute an offer to buy or sell securities or other financial instruments;",
    "\u2014 does not constitute an invitation to trade or provision of investment services;",
    "\u2014 does not constitute individual investment advice."
  ],
  ["The Company works exclusively with qualified investors who possess the necessary knowledge, experience, and financial capacity to assess risks and invest in high-risk instruments. This asset class involves elevated risks, volatility, and illiquidity. Investors must be prepared to accept the possibility of total loss of invested capital as well as lack of liquidity."],
  ["NOTIFICATION OF INVESTMENT RISKS AND STATUS OF THE COMPANY'S ACTIVITIES"],
  // Per-jurisdiction notices (US/UAE/Italy/UK/Sweden/Switzerland) removed 2026-07-25 per
  // client: they duplicate /disclosures (LegalDisclosures.tsx) — the footer keeps only
  // this one general paragraph, everything else lives on that page.
  [
    "The Company's activities focus on attracting investments in mature venture projects at the stage of sustainable business development, close to IPO exit.",
    "The Company does not guarantee profit generation. Investments involve risks, including the possibility of returns below expectations, which cannot be guaranteed."
  ]
];
var COPYRIGHT = "Axevil Capital 2021\u22122026 \u2014 All Rights Reserved";
var DEFAULT_COMPLIANCE = /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_jsx_runtime2.Fragment, { children: COMPLIANCE_BLOCKS.map((lines, bi) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_react2.Fragment, { children: [
  bi > 0 && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("br", {}),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("br", {})
  ] }),
  lines.map((line, li) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_react2.Fragment, { children: [
    li > 0 && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("br", {}),
    line
  ] }, li))
] }, bi)) });
function Footer({ logoHref = "/", links, compliance = DEFAULT_COMPLIANCE } = {}) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("footer", { className: "w-full bg-page-bg border-t border-outline-100", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "mx-auto w-full container-px max-w-content flex flex-col gap-spacing-2 py-10 md:py-12 lg:pt-16 lg:pb-12", children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10 md:gap-12 lg:gap-0 pb-spacing-2 border-b border-outline-100", children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "flex flex-col shrink-0", style: { gap: "2rem" }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("a", { href: logoHref, "aria-label": "AXEVIL Capital", className: "inline-block", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          "img",
          {
            src: "/img/logos/footer-logo.svg",
            alt: "AXEVIL",
            className: "footer-logo",
            style: { width: "12.9375rem", height: "2rem", objectFit: "contain", objectPosition: "left" }
          }
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "flex flex-wrap items-center", style: { gap: "0.5rem" }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
            "a",
            {
              href: mailtoHref({ to: CONTACT_EMAIL }),
              onClick: (e) => handleMailClick(e, { to: CONTACT_EMAIL }),
              className: "group inline-flex items-center rounded-0.5 bg-black-500 hover:bg-black-400 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-white",
              style: { gap: "0.625rem", padding: "0.625rem 0.875rem" },
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                  "img",
                  {
                    src: "/icons/Email.svg",
                    alt: "",
                    "aria-hidden": "true",
                    style: { width: "1.25rem", height: "1.25rem", filter: "brightness(0) invert(1)" }
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                  "span",
                  {
                    className: "font-inter-tight font-medium text-m text-white whitespace-nowrap",
                    style: { letterSpacing: "-0.01em" },
                    children: CONTACT_EMAIL
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("ul", { className: "flex items-center list-none p-0 m-0", style: { gap: "0.5rem" }, children: SOCIALS.map((s) => {
            const glyph = /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("svg", { viewBox: "0 0 24 24", "aria-hidden": "true", style: { width: "1.25rem", height: "1.25rem" }, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: s.path, fill: "currentColor" }) });
            const box = "flex items-center justify-center rounded-0.5 bg-black-500 text-white";
            const size = { width: "2.5rem", height: "2.5rem" };
            return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("li", { children: s.href ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
              "a",
              {
                href: s.href,
                target: "_blank",
                rel: "noopener noreferrer",
                "aria-label": s.name,
                className: `${box} hover:bg-black-400 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-white`,
                style: size,
                children: glyph
              }
            ) : (
              // No URL yet — a mark, not a link. Still labelled, so a screen
              // reader announces which network is coming.
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { role: "img", "aria-label": s.name, title: s.name, className: box, style: size, children: glyph })
            ) }, s.name);
          }) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "flex flex-col sm:flex-row lg:flex-col gap-6 sm:gap-10 lg:gap-6", children: OFFICES.map((o) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("address", { className: "not-italic flex flex-col", style: { gap: "0.5rem", maxWidth: "16rem" }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "font-inter-tight font-medium text-s-med text-white", style: { letterSpacing: "-0.01em" }, children: o.city }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "font-inter-tight font-normal text-s-med text-white-400", style: { lineHeight: 1.5 }, children: o.address })
        ] }, o.city)) })
      ] }),
      links ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("nav", { className: "flex flex-wrap lg:justify-end font-inter-tight font-medium text-white", style: { gap: "1rem 1.5rem" }, "aria-label": "Footer", children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("a", { href: l.href, className: "text-s-med text-white-400 hover:text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-white whitespace-nowrap", children: l.label }, l.href)) }) : (
        /* ── nav-wrapper (Figma 2605:6690) — columns gap 3rem, heading→list 2rem, items 1rem ── */
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          "nav",
          {
            className: "flex flex-wrap gap-x-spacing-3 gap-y-10 font-inter-tight font-medium text-white",
            "aria-label": "Footer",
            children: NAV_COLUMNS.map((col) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "flex flex-col gap-spacing-2 items-start shrink-0", children: [
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("h2", { className: "text-m text-white whitespace-nowrap m-0 font-medium", children: col.heading }),
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("ul", { className: "flex flex-col gap-spacing-1 items-start text-xs text-white-400 list-none p-0 m-0", children: col.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("li", { children: "onClick" in item ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                "button",
                {
                  type: "button",
                  onClick: item.onClick,
                  className: "hover:text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-white whitespace-nowrap text-left",
                  children: item.label
                }
              ) : /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                "a",
                {
                  href: item.href,
                  className: "hover:text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-white whitespace-nowrap",
                  children: item.label
                }
              ) }, item.label)) })
            ] }, col.heading))
          }
        )
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
      "p",
      {
        className: "font-inter-tight font-medium text-xs text-black-800 w-full",
        style: { wordBreak: "break-word" },
        children: [
          compliance,
          compliance && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("br", {}),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("br", {})
          ] }),
          COPYRIGHT
        ]
      }
    )
  ] }) });
}

// design-system/src/components/Nav.tsx
var import_react4 = require("react");

// design-system/src/components/btn-own.tsx
var import_react3 = require("react");

// design-system/src/lib/mixpanel.ts
var import_mixpanel_browser = __toESM(require("mixpanel-browser"), 1);
var ready = false;
var anonymousId = null;
function mpReady() {
  return typeof window !== "undefined" && ready;
}
function trackWebEvent(name, props) {
  if (!mpReady()) return;
  import_mixpanel_browser.default.track(name, props);
}
function trackCTAClick(label, extra) {
  trackWebEvent("webCTAClick", { label, page_path: window.location.pathname, ...extra });
}
function trackFormStart(formName) {
  trackWebEvent("webFormStart", { form_name: formName, page_path: window.location.pathname });
}
function trackFormSubmit(formName, extra) {
  trackWebEvent("webFormSubmit", { form_name: formName, page_path: window.location.pathname, ...extra });
}
function trackFormComplete(formName, extra) {
  trackWebEvent("webFormComplete", { form_name: formName, page_path: window.location.pathname, ...extra });
}
function trackFormError(formName, error) {
  trackWebEvent("webFormError", { form_name: formName, page_path: window.location.pathname, error });
}
function identifyLead(email, props) {
  if (!mpReady() || !email) return;
  const current = import_mixpanel_browser.default.get_distinct_id();
  if (current !== email) {
    if (current === anonymousId) {
      import_mixpanel_browser.default.alias(email);
      import_mixpanel_browser.default.identify(email);
    } else {
      import_mixpanel_browser.default.identify(email);
    }
  }
  if (props) import_mixpanel_browser.default.people.set(props);
}

// design-system/src/lib/gtm.ts
function push(event) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push(event);
}
function currentPageId() {
  if (typeof window === "undefined") return "";
  const path = window.location.pathname.replace(/^\/+/, "");
  return path || "home";
}
function pushCtaClick(ctaType, landingId) {
  push({ event: "cta_click", cta_type: ctaType, landing_id: landingId ?? currentPageId() });
}
function pushFormSubmit(formName, landingId) {
  push({ event: "form_submit", form_name: formName, landing_id: landingId ?? currentPageId() });
}

// design-system/src/components/btn-own.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
var SIZE_STYLES = {
  M: { height: "3.625rem", padding: "0.75rem 1.5rem", borderRadius: "1rem", fontSize: "var(--font-btn)", fontWeight: 600 },
  S: { height: "3.125rem", padding: "0.625rem 1.25rem", borderRadius: "0.75rem", fontSize: "var(--font-btn)", fontWeight: 600 },
  XS: { height: "2.625rem", padding: "0.5rem 1rem", borderRadius: "0.75rem", fontSize: "0.875rem", fontWeight: 600 }
};
var BLACK_400 = "var(--black-400, #151515)";
var BLACK_600 = "var(--black-600, #202020)";
var VARIANT_BASE = {
  primary: { background: "var(--white-100, #fff)", color: "var(--black-600, #202020)", border: "none" },
  secondary: { background: BLACK_400, color: "var(--white-100, #fff)", border: "none" }
};
function BtnOwn({
  children,
  className = "",
  style,
  type = "button",
  onClick,
  hideIcon = false,
  icon,
  size,
  variant = "primary",
  disabled = false
}) {
  const [hovered, setHovered] = (0, import_react3.useState)(false);
  const sizeStyle = size ? SIZE_STYLES[size] : {};
  const variantStyle = VARIANT_BASE[variant];
  const iconSrc = icon ?? "/icons/Key.svg";
  const iconSize = size === "XS" ? "0.875rem" : size === "S" ? "1rem" : "1.25rem";
  const iconFilter = variant === "primary" ? "brightness(0)" : "none";
  const hoverStyle = variant === "secondary" ? { background: hovered ? BLACK_600 : BLACK_400, transition: "background-color 0.5s ease-in-out" } : {};
  const hoverClass = variant === "primary" ? "hover:shadow-[0_0_24px_rgba(255,255,255,0.25)] hover:scale-[1.02]" : "";
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
    "button",
    {
      type,
      disabled,
      onClick: () => {
        const ctaLabel = typeof children === "string" ? children : type === "submit" ? "submit" : "cta";
        trackCTAClick(ctaLabel, { variant });
        pushCtaClick(ctaLabel);
        if (onClick) {
          onClick();
          return;
        }
        if (type !== "submit") window.dispatchEvent(new CustomEvent("open-quiz"));
      },
      onMouseEnter: () => setHovered(true),
      onMouseLeave: () => setHovered(false),
      onFocus: () => setHovered(true),
      onBlur: () => setHovered(false),
      className: `btn-own flex items-center justify-center gap-2 font-inter-tight font-semibold transition-all duration-300 ease-out ${hoverClass} focus-visible:outline focus-visible:outline-2 focus-visible:outline-white disabled:opacity-40 disabled:pointer-events-none ${className}`,
      style: {
        height: "3.625rem",
        padding: "0.75rem 1.5rem",
        borderRadius: "1rem",
        fontSize: "var(--font-btn)",
        fontWeight: 600,
        lineHeight: 1.1,
        ...sizeStyle,
        ...variantStyle,
        ...hoverStyle,
        ...style
      },
      children: [
        !hideIcon && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
          "img",
          {
            src: iconSrc,
            alt: "",
            "aria-hidden": "true",
            style: { width: iconSize, height: iconSize, filter: iconFilter }
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("span", { className: "btn-own-slide", children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "btn-own-slide-text", children }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "btn-own-slide-text", "aria-hidden": "true", children })
        ] })
      ]
    }
  );
}

// design-system/src/components/Nav.tsx
var import_jsx_runtime4 = require("react/jsx-runtime");
var NAV_LINKS = [
  { label: "Market Intelligence", href: "/companies" },
  { label: "For investors", href: "/retail-investors" },
  { label: "For advisors", href: "/wealth-managers" },
  { label: "Research", href: "/research" },
  { label: "About", href: "/about-us" },
  { label: "Team", href: "/team" },
  { label: "Contact", href: "/contacts" }
];
function Nav({ links, logoHref = "/", ctaLabel = "Request access", onCtaClick, hideBurger = false } = {}) {
  const cta = onCtaClick ?? (() => window.dispatchEvent(new CustomEvent("open-quiz")));
  const navLinks = links ?? NAV_LINKS;
  const [menuOpen, setMenuOpen] = (0, import_react4.useState)(false);
  (0, import_react4.useEffect)(() => {
    const close = () => setMenuOpen(false);
    window.addEventListener("popstate", close);
    window.addEventListener("pushstate", close);
    return () => {
      window.removeEventListener("popstate", close);
      window.removeEventListener("pushstate", close);
    };
  }, []);
  (0, import_react4.useEffect)(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);
  const [hidden, setHidden] = (0, import_react4.useState)(false);
  (0, import_react4.useEffect)(() => {
    let lastY = window.scrollY;
    let downAccum = 0;
    let upAccum = 0;
    const THRESHOLD = 400;
    const onScroll = () => {
      const y = window.scrollY;
      const delta = y - lastY;
      lastY = y;
      if (y < 80) {
        setHidden(false);
        downAccum = 0;
        upAccum = 0;
        return;
      }
      if (delta > 0) {
        downAccum += delta;
        upAccum = 0;
        if (downAccum > THRESHOLD) setHidden(true);
      } else if (delta < 0) {
        upAccum -= delta;
        downAccum = 0;
        if (upAccum > THRESHOLD) setHidden(false);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const [mounted, setMounted] = (0, import_react4.useState)(false);
  (0, import_react4.useEffect)(() => {
    setMounted(true);
  }, []);
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
      "nav",
      {
        className: "fixed top-0 left-0 w-full z-50 h-[3.75rem] md:h-[5rem]",
        style: {
          background: "var(--black-200, #060606)",
          borderBottom: "1px solid var(--black-500, #1A1A1A)",
          transform: hidden && !menuOpen ? "translateY(-100%)" : "translateY(0)",
          opacity: mounted ? 1 : 0,
          transition: "transform 0.35s ease, opacity 0.4s ease",
          willChange: "transform, opacity"
        },
        children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
          "div",
          {
            className: "relative mx-auto w-full h-[3.75rem] md:h-[5rem] flex items-center justify-between container-px",
            style: { maxWidth: "90rem" },
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("a", { href: logoHref, "aria-label": "AXEVIL Capital", className: "shrink-0", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
                "img",
                {
                  src: "/img/logos/footer-logo.svg",
                  alt: "AXEVIL",
                  className: "w-[7.5rem] h-[1.125rem] lg:w-[9.6875rem] lg:h-6"
                }
              ) }),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "hidden lg:flex items-center gap-1", children: navLinks.map(({ label, href }) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
                "a",
                {
                  href,
                  className: "flex items-center whitespace-nowrap lg:px-2 xl:px-4 py-2 rounded-full font-inter-tight font-medium text-s-med text-white opacity-80 hover:opacity-100 hover:bg-white/5 transition-[opacity,background-color] duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white",
                  children: label
                },
                label
              )) }),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "flex items-center gap-2 shrink-0", children: [
                /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
                  BtnOwn,
                  {
                    size: "S",
                    className: hideBurger ? "flex lg:hidden" : "hidden sm:flex lg:hidden",
                    onClick: cta,
                    children: ctaLabel
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
                  BtnOwn,
                  {
                    size: "XS",
                    className: "hidden lg:flex",
                    onClick: cta,
                    children: ctaLabel
                  }
                ),
                !hideBurger && /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
                  "button",
                  {
                    type: "button",
                    "aria-label": menuOpen ? "Close menu" : "Open menu",
                    "aria-expanded": menuOpen,
                    className: "lg:hidden flex flex-col items-center justify-center gap-[0.3125rem] w-11 h-11 rounded-full transition-colors hover:bg-white/5",
                    onClick: () => setMenuOpen((o) => !o),
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: `block w-5 h-[0.125rem] bg-white transition-transform duration-[250ms] ${menuOpen ? "translate-y-[0.21875rem] rotate-45" : ""}` }),
                      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { className: `block w-5 h-[0.125rem] bg-white transition-transform duration-[250ms] ${menuOpen ? "-translate-y-[0.21875rem] -rotate-45" : ""}` })
                    ]
                  }
                )
              ] })
            ]
          }
        )
      }
    ),
    menuOpen && /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
      "div",
      {
        className: "fixed inset-x-0 bottom-0 top-[3.75rem] md:top-[5rem] z-40 lg:hidden flex flex-col",
        style: { background: "var(--black-200)" },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            "div",
            {
              className: "flex flex-col flex-1 overflow-y-auto",
              style: { padding: "2rem 1rem 1rem", gap: "2rem" },
              children: navLinks.map(({ label, href }) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
                "a",
                {
                  href,
                  onClick: () => setMenuOpen(false),
                  className: "font-inter-tight font-medium text-h4 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-white",
                  style: { fontSize: "var(--font-h4)", letterSpacing: "-0.02em", lineHeight: 1.1 },
                  children: label
                },
                label
              ))
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { style: { padding: "1rem" }, children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            BtnOwn,
            {
              size: "M",
              hideIcon: true,
              className: "w-full",
              onClick: () => {
                setMenuOpen(false);
                cta();
              },
              children: ctaLabel
            }
          ) })
        ]
      }
    )
  ] });
}

// design-system/src/components/Quiz.tsx
var import_react7 = require("react");
var import_framer_motion3 = require("framer-motion");

// design-system/src/components/quiz-overlay.tsx
var import_framer_motion = require("framer-motion");
var import_jsx_runtime5 = require("react/jsx-runtime");
function QuizOverlay({ children, maxWidth = "23.75rem" }) {
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
    import_framer_motion.motion.div,
    {
      className: "fixed inset-0 z-20 flex items-center justify-center",
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
      style: {
        background: "rgba(0,0,0,0.5)",
        backdropFilter: "blur(0.75rem)",
        WebkitBackdropFilter: "blur(0.75rem)",
        paddingLeft: "clamp(1.25rem, 4vw, 2rem)",
        paddingRight: "clamp(1.25rem, 4vw, 2rem)"
      },
      children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
        import_framer_motion.motion.div,
        {
          className: "w-full",
          style: { maxWidth },
          initial: { opacity: 0, y: 16, scale: 0.98 },
          animate: { opacity: 1, y: 0, scale: 1 },
          exit: { opacity: 0, y: 16, scale: 0.98 },
          transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
          children
        }
      )
    }
  );
}

// design-system/src/components/quiz-success-state.tsx
var import_jsx_runtime6 = require("react/jsx-runtime");
function QuizSuccessState({ heading, button, onClose, illustration }) {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
    "div",
    {
      className: `relative flex flex-col md:flex-row items-center overflow-hidden bg-black-400 rounded-1 w-full pt-[clamp(1rem,3vw,1.5rem)] pl-[clamp(1rem,3vw,1.5rem)] pr-[clamp(1rem,3vw,1.5rem)] pb-0 ${illustration ? "md:w-[45rem] md:h-[20rem] md:items-start md:justify-between md:pl-6 md:pr-16 md:py-6" : "md:pb-[clamp(1rem,3vw,1.5rem)]"}`,
      style: { gap: "2rem" },
      children: [
        onClose && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
          "button",
          {
            type: "button",
            onClick: onClose,
            "aria-label": "Close",
            className: "absolute flex items-center justify-center shrink-0 bg-black-600 rounded-full outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-white",
            style: { top: "1rem", right: "1rem", width: "2.75rem", height: "2.75rem" },
            children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("path", { d: "M4 4L12 12M12 4L4 12", stroke: "white", strokeWidth: "1.5", strokeLinecap: "round" }) })
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
          "div",
          {
            className: `flex flex-col items-center w-full md:min-w-0 ${illustration ? "md:items-start md:justify-end md:h-full md:flex-1" : "md:flex-1"}`,
            style: { gap: "1rem" },
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
                "span",
                {
                  className: "font-inter-tight font-medium text-xs",
                  style: {
                    color: "var(--status-open)",
                    background: "var(--status-open-bg)",
                    height: "1.75rem",
                    borderRadius: "0.5rem",
                    padding: "0.625rem 0.75rem",
                    display: "inline-flex",
                    alignItems: "center"
                  },
                  children: "Successful!"
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
                "div",
                {
                  className: `flex flex-col items-center w-full ${illustration ? "md:items-start" : ""}`,
                  style: { gap: "1.5rem" },
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
                      "p",
                      {
                        className: `font-inter-tight font-medium text-h4 text-white text-center w-full whitespace-pre-wrap ${illustration ? "md:text-left" : ""}`,
                        children: heading
                      }
                    ),
                    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
                      BtnOwn,
                      {
                        size: "XS",
                        className: illustration ? "w-auto" : "w-full",
                        icon: button.icon,
                        hideIcon: !button.icon,
                        onClick: button.href ? () => window.open(button.href, "_blank", "noopener,noreferrer") : button.onClick,
                        children: button.label
                      }
                    )
                  ]
                }
              )
            ]
          }
        ),
        illustration && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
          "img",
          {
            src: illustration,
            alt: "",
            "aria-hidden": "true",
            className: "shrink-0",
            style: { width: "15rem", height: "19.125rem", maxWidth: "100%", borderRadius: "2.7376rem", objectFit: "cover" }
          }
        )
      ]
    }
  );
}

// design-system/src/components/quiz-lead-form.tsx
var import_react6 = require("react");

// design-system/src/components/form-field.tsx
var import_jsx_runtime7 = require("react/jsx-runtime");
function inputClass(hasError) {
  return [
    "w-full bg-transparent font-inter-tight font-medium text-white placeholder:text-[rgba(255,255,255,0.35)]",
    "text-m focus:outline-none transition-colors",
    hasError ? "" : ""
  ].join(" ");
}
function Field({
  input,
  error,
  className,
  height = "3.75rem",
  radius = "1rem",
  children
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: `flex flex-col w-full ${className ?? ""}`, style: { gap: "0.375rem" }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
      "div",
      {
        className: "flex items-center w-full",
        style: {
          background: "var(--black-500)",
          height,
          borderRadius: radius,
          padding: "0 1rem",
          border: error ? "1px solid rgba(239,68,68,0.5)" : "none"
        },
        children: input ?? children
      }
    ),
    error && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: "font-inter-tight font-medium text-red-400 text-xs", children: error })
  ] });
}

// design-system/src/components/phone-field.tsx
var import_react5 = require("react");
var import_framer_motion2 = require("framer-motion");
var import_jsx_runtime8 = require("react/jsx-runtime");
var COUNTRIES = [
  { code: "af", dial: "+93", name: "Afghanistan" },
  { code: "al", dial: "+355", name: "Albania" },
  { code: "dz", dial: "+213", name: "Algeria" },
  { code: "ad", dial: "+376", name: "Andorra" },
  { code: "ao", dial: "+244", name: "Angola" },
  { code: "ag", dial: "+1268", name: "Antigua and Barbuda" },
  { code: "ar", dial: "+54", name: "Argentina" },
  { code: "am", dial: "+374", name: "Armenia" },
  { code: "au", dial: "+61", name: "Australia" },
  { code: "at", dial: "+43", name: "Austria" },
  { code: "az", dial: "+994", name: "Azerbaijan" },
  { code: "bs", dial: "+1242", name: "Bahamas" },
  { code: "bh", dial: "+973", name: "Bahrain" },
  { code: "bd", dial: "+880", name: "Bangladesh" },
  { code: "bb", dial: "+1246", name: "Barbados" },
  { code: "by", dial: "+375", name: "Belarus" },
  { code: "be", dial: "+32", name: "Belgium" },
  { code: "bz", dial: "+501", name: "Belize" },
  { code: "bj", dial: "+229", name: "Benin" },
  { code: "bt", dial: "+975", name: "Bhutan" },
  { code: "bo", dial: "+591", name: "Bolivia" },
  { code: "ba", dial: "+387", name: "Bosnia and Herzegovina" },
  { code: "bw", dial: "+267", name: "Botswana" },
  { code: "br", dial: "+55", name: "Brazil" },
  { code: "bn", dial: "+673", name: "Brunei" },
  { code: "bg", dial: "+359", name: "Bulgaria" },
  { code: "bf", dial: "+226", name: "Burkina Faso" },
  { code: "bi", dial: "+257", name: "Burundi" },
  { code: "kh", dial: "+855", name: "Cambodia" },
  { code: "cm", dial: "+237", name: "Cameroon" },
  { code: "ca", dial: "+1", name: "Canada" },
  { code: "cv", dial: "+238", name: "Cape Verde" },
  { code: "cf", dial: "+236", name: "Central African Republic" },
  { code: "td", dial: "+235", name: "Chad" },
  { code: "cl", dial: "+56", name: "Chile" },
  { code: "cn", dial: "+86", name: "China" },
  { code: "co", dial: "+57", name: "Colombia" },
  { code: "km", dial: "+269", name: "Comoros" },
  { code: "cg", dial: "+242", name: "Congo" },
  { code: "cd", dial: "+243", name: "Congo (DRC)" },
  { code: "cr", dial: "+506", name: "Costa Rica" },
  { code: "hr", dial: "+385", name: "Croatia" },
  { code: "cu", dial: "+53", name: "Cuba" },
  { code: "cy", dial: "+357", name: "Cyprus" },
  { code: "cz", dial: "+420", name: "Czech Republic" },
  { code: "dk", dial: "+45", name: "Denmark" },
  { code: "dj", dial: "+253", name: "Djibouti" },
  { code: "dm", dial: "+1767", name: "Dominica" },
  { code: "do", dial: "+1809", name: "Dominican Republic" },
  { code: "ec", dial: "+593", name: "Ecuador" },
  { code: "eg", dial: "+20", name: "Egypt" },
  { code: "sv", dial: "+503", name: "El Salvador" },
  { code: "gq", dial: "+240", name: "Equatorial Guinea" },
  { code: "er", dial: "+291", name: "Eritrea" },
  { code: "ee", dial: "+372", name: "Estonia" },
  { code: "sz", dial: "+268", name: "Eswatini" },
  { code: "et", dial: "+251", name: "Ethiopia" },
  { code: "fj", dial: "+679", name: "Fiji" },
  { code: "fi", dial: "+358", name: "Finland" },
  { code: "fr", dial: "+33", name: "France" },
  { code: "ga", dial: "+241", name: "Gabon" },
  { code: "gm", dial: "+220", name: "Gambia" },
  { code: "ge", dial: "+995", name: "Georgia" },
  { code: "de", dial: "+49", name: "Germany" },
  { code: "gh", dial: "+233", name: "Ghana" },
  { code: "gr", dial: "+30", name: "Greece" },
  { code: "gd", dial: "+1473", name: "Grenada" },
  { code: "gt", dial: "+502", name: "Guatemala" },
  { code: "gn", dial: "+224", name: "Guinea" },
  { code: "gw", dial: "+245", name: "Guinea-Bissau" },
  { code: "gy", dial: "+592", name: "Guyana" },
  { code: "ht", dial: "+509", name: "Haiti" },
  { code: "hn", dial: "+504", name: "Honduras" },
  { code: "hk", dial: "+852", name: "Hong Kong" },
  { code: "hu", dial: "+36", name: "Hungary" },
  { code: "is", dial: "+354", name: "Iceland" },
  { code: "in", dial: "+91", name: "India" },
  { code: "id", dial: "+62", name: "Indonesia" },
  { code: "ir", dial: "+98", name: "Iran" },
  { code: "iq", dial: "+964", name: "Iraq" },
  { code: "ie", dial: "+353", name: "Ireland" },
  { code: "il", dial: "+972", name: "Israel" },
  { code: "it", dial: "+39", name: "Italy" },
  { code: "jm", dial: "+1876", name: "Jamaica" },
  { code: "jp", dial: "+81", name: "Japan" },
  { code: "jo", dial: "+962", name: "Jordan" },
  { code: "kz", dial: "+7", name: "Kazakhstan" },
  { code: "ke", dial: "+254", name: "Kenya" },
  { code: "ki", dial: "+686", name: "Kiribati" },
  { code: "kw", dial: "+965", name: "Kuwait" },
  { code: "kg", dial: "+996", name: "Kyrgyzstan" },
  { code: "la", dial: "+856", name: "Laos" },
  { code: "lv", dial: "+371", name: "Latvia" },
  { code: "lb", dial: "+961", name: "Lebanon" },
  { code: "ls", dial: "+266", name: "Lesotho" },
  { code: "lr", dial: "+231", name: "Liberia" },
  { code: "ly", dial: "+218", name: "Libya" },
  { code: "li", dial: "+423", name: "Liechtenstein" },
  { code: "lt", dial: "+370", name: "Lithuania" },
  { code: "lu", dial: "+352", name: "Luxembourg" },
  { code: "mo", dial: "+853", name: "Macau" },
  { code: "mg", dial: "+261", name: "Madagascar" },
  { code: "mw", dial: "+265", name: "Malawi" },
  { code: "my", dial: "+60", name: "Malaysia" },
  { code: "mv", dial: "+960", name: "Maldives" },
  { code: "ml", dial: "+223", name: "Mali" },
  { code: "mt", dial: "+356", name: "Malta" },
  { code: "mh", dial: "+692", name: "Marshall Islands" },
  { code: "mr", dial: "+222", name: "Mauritania" },
  { code: "mu", dial: "+230", name: "Mauritius" },
  { code: "mx", dial: "+52", name: "Mexico" },
  { code: "fm", dial: "+691", name: "Micronesia" },
  { code: "md", dial: "+373", name: "Moldova" },
  { code: "mc", dial: "+377", name: "Monaco" },
  { code: "mn", dial: "+976", name: "Mongolia" },
  { code: "me", dial: "+382", name: "Montenegro" },
  { code: "ma", dial: "+212", name: "Morocco" },
  { code: "mz", dial: "+258", name: "Mozambique" },
  { code: "mm", dial: "+95", name: "Myanmar" },
  { code: "na", dial: "+264", name: "Namibia" },
  { code: "nr", dial: "+674", name: "Nauru" },
  { code: "np", dial: "+977", name: "Nepal" },
  { code: "nl", dial: "+31", name: "Netherlands" },
  { code: "nz", dial: "+64", name: "New Zealand" },
  { code: "ni", dial: "+505", name: "Nicaragua" },
  { code: "ne", dial: "+227", name: "Niger" },
  { code: "ng", dial: "+234", name: "Nigeria" },
  { code: "kp", dial: "+850", name: "North Korea" },
  { code: "mk", dial: "+389", name: "North Macedonia" },
  { code: "no", dial: "+47", name: "Norway" },
  { code: "om", dial: "+968", name: "Oman" },
  { code: "pk", dial: "+92", name: "Pakistan" },
  { code: "pw", dial: "+680", name: "Palau" },
  { code: "ps", dial: "+970", name: "Palestine" },
  { code: "pa", dial: "+507", name: "Panama" },
  { code: "pg", dial: "+675", name: "Papua New Guinea" },
  { code: "py", dial: "+595", name: "Paraguay" },
  { code: "pe", dial: "+51", name: "Peru" },
  { code: "ph", dial: "+63", name: "Philippines" },
  { code: "pl", dial: "+48", name: "Poland" },
  { code: "pt", dial: "+351", name: "Portugal" },
  { code: "qa", dial: "+974", name: "Qatar" },
  { code: "ro", dial: "+40", name: "Romania" },
  { code: "ru", dial: "+7", name: "Russia" },
  { code: "rw", dial: "+250", name: "Rwanda" },
  { code: "kn", dial: "+1869", name: "Saint Kitts and Nevis" },
  { code: "lc", dial: "+1758", name: "Saint Lucia" },
  { code: "vc", dial: "+1784", name: "Saint Vincent and the Grenadines" },
  { code: "ws", dial: "+685", name: "Samoa" },
  { code: "sm", dial: "+378", name: "San Marino" },
  { code: "st", dial: "+239", name: "Sao Tome and Principe" },
  { code: "sa", dial: "+966", name: "Saudi Arabia" },
  { code: "sn", dial: "+221", name: "Senegal" },
  { code: "rs", dial: "+381", name: "Serbia" },
  { code: "sc", dial: "+248", name: "Seychelles" },
  { code: "sl", dial: "+232", name: "Sierra Leone" },
  { code: "sg", dial: "+65", name: "Singapore" },
  { code: "sk", dial: "+421", name: "Slovakia" },
  { code: "si", dial: "+386", name: "Slovenia" },
  { code: "sb", dial: "+677", name: "Solomon Islands" },
  { code: "so", dial: "+252", name: "Somalia" },
  { code: "za", dial: "+27", name: "South Africa" },
  { code: "kr", dial: "+82", name: "South Korea" },
  { code: "ss", dial: "+211", name: "South Sudan" },
  { code: "es", dial: "+34", name: "Spain" },
  { code: "lk", dial: "+94", name: "Sri Lanka" },
  { code: "sd", dial: "+249", name: "Sudan" },
  { code: "sr", dial: "+597", name: "Suriname" },
  { code: "se", dial: "+46", name: "Sweden" },
  { code: "ch", dial: "+41", name: "Switzerland" },
  { code: "sy", dial: "+963", name: "Syria" },
  { code: "tw", dial: "+886", name: "Taiwan" },
  { code: "tj", dial: "+992", name: "Tajikistan" },
  { code: "tz", dial: "+255", name: "Tanzania" },
  { code: "th", dial: "+66", name: "Thailand" },
  { code: "tl", dial: "+670", name: "Timor-Leste" },
  { code: "tg", dial: "+228", name: "Togo" },
  { code: "to", dial: "+676", name: "Tonga" },
  { code: "tt", dial: "+1868", name: "Trinidad and Tobago" },
  { code: "tn", dial: "+216", name: "Tunisia" },
  { code: "tr", dial: "+90", name: "Turkey" },
  { code: "tm", dial: "+993", name: "Turkmenistan" },
  { code: "tv", dial: "+688", name: "Tuvalu" },
  { code: "ug", dial: "+256", name: "Uganda" },
  { code: "ua", dial: "+380", name: "Ukraine" },
  { code: "ae", dial: "+971", name: "UAE" },
  { code: "gb", dial: "+44", name: "United Kingdom" },
  { code: "us", dial: "+1", name: "United States" },
  { code: "uy", dial: "+598", name: "Uruguay" },
  { code: "uz", dial: "+998", name: "Uzbekistan" },
  { code: "vu", dial: "+678", name: "Vanuatu" },
  { code: "va", dial: "+379", name: "Vatican City" },
  { code: "ve", dial: "+58", name: "Venezuela" },
  { code: "vn", dial: "+84", name: "Vietnam" },
  { code: "ye", dial: "+967", name: "Yemen" },
  { code: "zm", dial: "+260", name: "Zambia" },
  { code: "zw", dial: "+263", name: "Zimbabwe" }
].sort((a, b) => a.name.localeCompare(b.name));
var DIAL_CODE_PREFERENCE = {
  "+1": "us",
  "+7": "ru"
};
var COUNTRIES_BY_DIAL_LENGTH = [...COUNTRIES].sort((a, b) => {
  if (b.dial.length !== a.dial.length) return b.dial.length - a.dial.length;
  const preferred = DIAL_CODE_PREFERENCE[a.dial];
  if (preferred === a.code) return -1;
  if (preferred === b.code) return 1;
  return 0;
});
function detectCountryFromInput(raw) {
  if (!raw.trim().startsWith("+")) return null;
  const compact = raw.replace(/[^\d+]/g, "");
  for (const c of COUNTRIES_BY_DIAL_LENGTH) {
    if (!compact.startsWith(c.dial)) continue;
    const dialDigitCount = c.dial.length - 1;
    let i = 1;
    let seen = 0;
    while (i < raw.length && seen < dialDigitCount) {
      if (/\d/.test(raw[i])) seen += 1;
      i += 1;
    }
    return { code: c.code, rest: raw.slice(i).replace(/^[\s()-]+/, "") };
  }
  return null;
}
var IP_GEO_ENDPOINT = "https://speed.cloudflare.com/meta";
var IP_GEO_TIMEOUT_MS = 3e3;
var IP_GEO_CACHE_KEY = "axevil:geo-country:v1";
var IP_GEO_CACHE_TTL_MS = 24 * 60 * 60 * 1e3;
function readCachedCountry() {
  try {
    const raw = localStorage.getItem(IP_GEO_CACHE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (Date.now() - parsed.cachedAt > IP_GEO_CACHE_TTL_MS) return null;
    return parsed.code;
  } catch {
    return null;
  }
}
function writeCachedCountry(code) {
  try {
    localStorage.setItem(IP_GEO_CACHE_KEY, JSON.stringify({ code, cachedAt: Date.now() }));
  } catch {
  }
}
async function detectCountryByIp() {
  const cached = readCachedCountry();
  if (cached) return cached;
  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), IP_GEO_TIMEOUT_MS);
  try {
    const res = await fetch(IP_GEO_ENDPOINT, { signal: controller.signal });
    if (!res.ok) return null;
    const data = await res.json();
    const code = data.country?.toLowerCase();
    if (!code || !COUNTRIES.some((c) => c.code === code)) return null;
    writeCachedCountry(code);
    return code;
  } catch {
    return null;
  } finally {
    window.clearTimeout(timeout);
  }
}
function filterCountries(query) {
  const q = query.trim().toLowerCase();
  if (!q) return COUNTRIES;
  if (/^\+?\d+$/.test(q)) {
    const digits = q.replace(/^\+/, "");
    return COUNTRIES.filter((c) => c.dial.slice(1).startsWith(digits));
  }
  const starts = [];
  const contains = [];
  for (const c of COUNTRIES) {
    const name = c.name.toLowerCase();
    if (name.startsWith(q)) starts.push(c);
    else if (name.includes(q)) contains.push(c);
  }
  return [...starts, ...contains];
}
function PhoneField({ value, onChange, countryCode, onCountryChange, error, height = "3.5rem", radius, placeholder = "Phone Number", hideCountryPicker = false }) {
  const [open, setOpen] = (0, import_react5.useState)(false);
  const [query, setQuery] = (0, import_react5.useState)("");
  const ref = (0, import_react5.useRef)(null);
  const searchRef = (0, import_react5.useRef)(null);
  const touchedRef = (0, import_react5.useRef)(false);
  const selected = COUNTRIES.find((c) => c.code === countryCode) ?? COUNTRIES[0];
  const filtered = (0, import_react5.useMemo)(() => filterCountries(query), [query]);
  (0, import_react5.useEffect)(() => {
    function onClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
        setQuery("");
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);
  (0, import_react5.useEffect)(() => {
    let cancelled = false;
    detectCountryByIp().then((code) => {
      if (cancelled || touchedRef.current || !code) return;
      onCountryChange(code);
    });
    return () => {
      cancelled = true;
    };
  }, []);
  (0, import_react5.useEffect)(() => {
    if (open) searchRef.current?.focus();
  }, [open]);
  function selectCountry(code) {
    touchedRef.current = true;
    onCountryChange(code);
    setOpen(false);
    setQuery("");
  }
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
    Field,
    {
      height,
      radius,
      error,
      input: /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "flex items-center w-full", style: { gap: "0.5rem" }, children: [
        !hideCountryPicker && /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { ref, className: "relative shrink-0", children: [
          /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(
            "button",
            {
              type: "button",
              "aria-haspopup": "listbox",
              "aria-expanded": open,
              "aria-label": "Country code",
              onClick: () => setOpen((o) => !o),
              onKeyDown: (e) => {
                if (e.key === "Escape") {
                  setOpen(false);
                  setQuery("");
                } else if ((e.key === "Enter" || e.key === " " || e.key === "ArrowDown") && !open) {
                  e.preventDefault();
                  setOpen(true);
                } else if (!open && !e.ctrlKey && !e.metaKey && !e.altKey && e.key.length === 1 && /[a-zA-Z0-9+]/.test(e.key)) {
                  e.preventDefault();
                  setOpen(true);
                  setQuery(e.key);
                }
              },
              className: "flex items-center cursor-pointer select-none outline-none",
              style: { gap: "0.375rem" },
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
                  "img",
                  {
                    src: `https://flagcdn.com/${selected.code}.svg`,
                    alt: "",
                    "aria-hidden": "true",
                    className: "rounded-full object-cover shrink-0",
                    style: { width: "1.125rem", height: "1.125rem" }
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { className: "font-inter-tight font-medium text-m text-white whitespace-nowrap", children: selected.dial }),
                /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
                  import_framer_motion2.motion.svg,
                  {
                    animate: { rotate: open ? 180 : 0 },
                    transition: { duration: 0.2, ease: [0.4, 0, 0.2, 1] },
                    width: "14",
                    height: "14",
                    viewBox: "0 0 20 20",
                    fill: "none",
                    "aria-hidden": "true",
                    style: { flexShrink: 0, display: "block" },
                    children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("path", { d: "M5 8L10 13L15 8", stroke: "rgba(255,255,255,0.4)", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_framer_motion2.AnimatePresence, { children: open && /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(
            import_framer_motion2.motion.div,
            {
              initial: { opacity: 0, y: -6 },
              animate: { opacity: 1, y: 0 },
              exit: { opacity: 0, y: -6 },
              transition: { duration: 0.15, ease: [0.4, 0, 0.2, 1] },
              className: "absolute left-0 z-[1000] flex flex-col",
              style: {
                top: "calc(100% + 0.5rem)",
                marginLeft: "-0.75rem",
                width: "13.5rem",
                maxHeight: "18rem",
                borderRadius: "1rem",
                background: "var(--black-500)",
                overflow: "hidden"
              },
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { style: { padding: "0.5rem", flexShrink: 0 }, children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
                  "input",
                  {
                    ref: searchRef,
                    type: "text",
                    value: query,
                    onChange: (e) => setQuery(e.target.value),
                    onKeyDown: (e) => {
                      if (e.key === "Escape") {
                        setOpen(false);
                        setQuery("");
                      } else if (e.key === "Enter" && filtered[0]) {
                        e.preventDefault();
                        selectCountry(filtered[0].code);
                      }
                    },
                    placeholder: "Search country",
                    "aria-label": "Search country",
                    className: "w-full bg-transparent font-inter-tight font-medium text-s-med text-white placeholder:text-white/35 focus:outline-none",
                    style: { padding: "0.5rem 0.75rem", borderRadius: "0.5rem", background: "rgba(255,255,255,0.06)" }
                  }
                ) }),
                /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { role: "listbox", "aria-label": "Country code", className: "overflow-y-auto", style: { maxHeight: "14rem" }, children: filtered.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
                  "p",
                  {
                    className: "font-inter-tight font-medium text-s-med text-white/40",
                    style: { padding: "0.75rem 1rem", margin: 0 },
                    children: "No countries found"
                  }
                ) : filtered.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(
                  "button",
                  {
                    type: "button",
                    role: "option",
                    "aria-selected": c.code === selected.code,
                    onClick: () => selectCountry(c.code),
                    className: "group flex items-center cursor-pointer transition-colors hover:bg-white/5 font-inter-tight font-medium text-m w-full text-left outline-none",
                    style: {
                      gap: "0.5rem",
                      padding: "0 1rem",
                      height: "2.75rem",
                      background: "transparent",
                      borderBottom: i < filtered.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none",
                      color: "var(--white-400)"
                    },
                    onMouseEnter: (e) => e.currentTarget.style.color = "var(--white-100)",
                    onMouseLeave: (e) => e.currentTarget.style.color = "var(--white-400)",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
                        "img",
                        {
                          src: `https://flagcdn.com/${c.code}.svg`,
                          alt: "",
                          "aria-hidden": "true",
                          className: "rounded-full object-cover shrink-0",
                          style: { width: "1.125rem", height: "1.125rem" }
                        }
                      ),
                      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { className: "truncate", children: c.name }),
                      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { className: "shrink-0", style: { marginLeft: "auto" }, children: c.dial })
                    ]
                  },
                  c.code
                )) })
              ]
            }
          ) })
        ] }),
        !hideCountryPicker && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { className: "shrink-0", style: { width: "1px", height: "1.25rem", background: "rgba(255,255,255,0.1)" } }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
          "input",
          {
            type: "tel",
            inputMode: "tel",
            autoComplete: "tel-national",
            "aria-label": "Phone number",
            placeholder,
            value,
            onChange: (e) => {
              const v = e.target.value;
              const detected = detectCountryFromInput(v);
              if (detected) {
                touchedRef.current = true;
                onCountryChange(detected.code);
                onChange(detected.rest);
              } else {
                onChange(v);
              }
            },
            className: inputClass(!!error)
          }
        )
      ] })
    }
  );
}

// design-system/src/lib/analytics.ts
function gtag(...args) {
  if (typeof window === "undefined") return;
  if (typeof window.gtag === "function") {
    window.gtag(...args);
    return;
  }
  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push(args);
}
function trackEvent(name, params) {
  if (typeof window === "undefined") return;
  gtag("event", name, params ?? {});
}

// design-system/src/lib/submitLead.ts
var GTM_FORM_NAME = {
  partner: "request_access",
  contact: "contact"
};
function classifySource(utmSource, utmMedium) {
  const source = utmSource.toLowerCase();
  const medium = utmMedium.toLowerCase();
  if (medium === "cpc" || medium === "paid") {
    const knownPaid = ["google", "meta", "linkedin", "youtube", "telegram"];
    return { source_l1: "paid", source_l2: knownPaid.includes(source) ? source : source ? "other" : void 0 };
  }
  if (medium === "email") return { source_l1: "content", source_l2: "email" };
  if (!source && !medium) return { source_l1: "organic", source_l2: "direct" };
  const knownOrganic = ["seo", "telegram", "youtube", "linkedin"];
  return { source_l1: "organic", source_l2: knownOrganic.includes(source) ? source : void 0 };
}
function readUtm() {
  const params = new URLSearchParams(window.location.search);
  return {
    source: params.get("utm_source") ?? "",
    medium: params.get("utm_medium") ?? "",
    campaign: params.get("utm_campaign") ?? "",
    term: params.get("utm_term") ?? "",
    content: params.get("utm_content") ?? ""
  };
}
async function submitLead(input) {
  const formName = input.leadType ?? "partner";
  trackFormSubmit(formName, { lead_type: formName });
  const utm = readUtm();
  const { source_l1, source_l2 } = classifySource(utm.source, utm.medium);
  const payload = {
    name: input.name,
    email: input.email || void 0,
    phone: input.phone || void 0,
    ...input.extra ?? {},
    // CRM contract v1.2. Everything routed through submitLead is something a salesperson
    // has to act on — a quiz result, a contact-form enquiry, a partnership request — so it
    // is always "application". Plain mailing signups go through submitSubscription with
    // intent "subscribe" instead, and must not land in the sales queue.
    intent: "application",
    lead_type: input.leadType ?? "partner",
    // No manager_id on purpose (client's call 2026-08-06): leads used to be pinned to the
    // test-circuit manager 999 ("Иван Тестов"), which meant every quiz and contact-form
    // enquiry landed on one person. Omitting the field hands routing back to the CRM, which
    // distributes across the sales team itself. Do not re-add without an explicit request.
    source_l1,
    source_l2,
    // Real ad campaigns keep their utm_campaign value; anything without one (organic/direct
    // visits, which is most quiz traffic) is tagged "site-quiz" instead of left blank, so these
    // leads are identifiable as quiz submissions in the CRM regardless of channel.
    source_l3: utm.campaign || input.sourceL3 || "site-quiz",
    utm,
    page_path: window.location.pathname,
    referrer: document.referrer || ""
  };
  try {
    const res = await fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
      trackFormError(formName, data.error ?? `http_${res.status}`);
      return { ok: false, error: data.error ?? `http_${res.status}` };
    }
    trackEvent("generate_lead", { lead_type: input.leadType ?? "partner", form: input.sourceL3 ?? "quiz" });
    trackFormComplete(formName, { lead_type: formName });
    pushFormSubmit(GTM_FORM_NAME[formName] ?? formName);
    if (input.email) identifyLead(input.email, { $name: input.name, lead_type: formName });
    return { ok: true, action: data.action };
  } catch {
    trackFormError(formName, "network_error");
    return { ok: false, error: "network_error" };
  }
}

// design-system/src/components/quiz-lead-form.tsx
var import_jsx_runtime9 = require("react/jsx-runtime");
function QuizLeadForm({ onClose, onSubmit }) {
  const [data, setData] = (0, import_react6.useState)({ name: "", email: "", phone: "", countryCode: "us" });
  const [errors, setErrors] = (0, import_react6.useState)({});
  const [submitting, setSubmitting] = (0, import_react6.useState)(false);
  const startedRef = (0, import_react6.useRef)(false);
  function onFormFocus() {
    if (startedRef.current) return;
    startedRef.current = true;
    trackFormStart("partner");
  }
  function validate() {
    const e = {};
    if (!data.name.trim()) e.name = "Required";
    if (!data.email.trim()) e.email = "Required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) e.email = "Invalid email";
    if (!data.phone.trim()) e.phone = "Required";
    return e;
  }
  async function handleSubmit(ev) {
    ev.preventDefault();
    const e = validate();
    if (Object.keys(e).length) {
      setErrors(e);
      return;
    }
    setErrors({});
    setSubmitting(true);
    const dial = COUNTRIES.find((c) => c.code === data.countryCode)?.dial ?? "";
    const result = await submitLead({ name: data.name, email: data.email, phone: `${dial}${data.phone}` });
    setSubmitting(false);
    if (!result.ok) {
      setErrors({ submit: "Couldn't send \u2014 please try again." });
      return;
    }
    onSubmit();
  }
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "flex flex-col items-start bg-black-400 rounded-1 w-full", style: { gap: "1.5rem", padding: "1.5rem" }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "flex items-center justify-between w-full", children: [
      /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("p", { className: "font-inter-tight font-medium text-h4 text-white whitespace-pre-line", children: [
        "Fill in the form to get the access",
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("br", {}),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("span", { className: "whitespace-nowrap", children: "to private markets" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
        "button",
        {
          type: "button",
          onClick: onClose,
          "aria-label": "Close",
          className: "flex items-center justify-center shrink-0 bg-black-600 rounded-full outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-white",
          style: { width: "2.75rem", height: "2.75rem" },
          children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("path", { d: "M4 4L12 12M12 4L4 12", stroke: "white", strokeWidth: "1.5", strokeLinecap: "round" }) })
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("form", { className: "flex flex-col items-start w-full", style: { gap: "1rem" }, onSubmit: handleSubmit, onFocus: onFormFocus, noValidate: true, children: [
      /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "flex flex-col items-start w-full", style: { gap: "0.5rem" }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
          Field,
          {
            height: "3.5rem",
            error: errors.name,
            input: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
              "input",
              {
                type: "text",
                autoComplete: "name",
                "aria-label": "Name",
                placeholder: "Name",
                value: data.name,
                onChange: (e) => setData((d) => ({ ...d, name: e.target.value })),
                className: inputClass(!!errors.name)
              }
            )
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
          Field,
          {
            height: "3.5rem",
            error: errors.email,
            input: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
              "input",
              {
                type: "email",
                autoComplete: "email",
                inputMode: "email",
                "aria-label": "Email",
                placeholder: "Email",
                value: data.email,
                onChange: (e) => setData((d) => ({ ...d, email: e.target.value })),
                className: inputClass(!!errors.email)
              }
            )
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
          PhoneField,
          {
            value: data.phone,
            onChange: (v) => setData((d) => ({ ...d, phone: v })),
            countryCode: data.countryCode,
            onCountryChange: (countryCode) => setData((d) => ({ ...d, countryCode })),
            error: errors.phone
          }
        )
      ] }),
      errors.submit && /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("p", { className: "font-inter-tight font-medium text-red-400 text-xs", children: errors.submit }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(BtnOwn, { size: "S", className: "w-full", hideIcon: true, type: "submit", disabled: submitting, children: submitting ? "Sending\u2026" : "Send form" }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("p", { className: "font-inter-tight font-medium text-xs text-white-400", style: { lineHeight: 1.4 }, children: [
        "By submitting this form, you agree that Axevil Capital, LLC will process the information you provide to respond to your enquiry, as described in the",
        " ",
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("a", { href: "/privacy", className: "underline hover:text-white transition-colors", children: "Privacy Policy" }),
        "."
      ] })
    ] })
  ] });
}

// design-system/src/components/Quiz.tsx
var import_jsx_runtime10 = require("react/jsx-runtime");
function useIsBelowLg() {
  const [below, setBelow] = (0, import_react7.useState)(() => window.innerWidth < 1024);
  (0, import_react7.useEffect)(() => {
    const handler = () => setBelow(window.innerWidth < 1024);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);
  return below;
}
var FIXED_IMG_HEIGHT = { 0: "8.3125rem", 1: "4.6875rem" };
var SLIDES = [
  {
    id: 0,
    heading: "Pre-IPO leaders.\nNo middlemen.",
    subheading: null,
    body: "The most sought-after private companies of our era \u2014 the ones reshaping the technology of the next decade.",
    img: "/img/ill/ill-qwiz-01.webp",
    // §12.1: SpaceX listed in June 2026, xAI was absorbed into it in February — neither belongs
    // in a caption about private companies in the portfolio.
    caption: "Anthropic, OpenAI, Anduril, Stripe, Cursor \u2014 and 30 more top companies in portfolio",
    label: "Pre-IPO leaders"
  },
  {
    id: 1,
    heading: "Capital secured by\nregulated structure",
    subheading: null,
    body: "Every deal is structured through a dedicated SPV under SEC regulation \u2014\nfully transparent, with annual reporting.",
    img: "/img/ill/ill-qwiz-02.webp",
    caption: "You receive equity documented to the same standards as leading venture capital funds \u2014 institutional-grade ownership.",
    label: "Capital secured"
  },
  {
    id: 2,
    heading: "Real access. Verified twice",
    subheading: "Structural",
    body: "Before a deal goes live on the platform, we run two independent reviews:\nactual allocation access, jurisdiction, SPV feasibility, liquidity.",
    img: "/img/ill/ill-qwiz-03.webp",
    caption: "Actual allocation access, jurisdiction, SPV feasibility, liquidity\nIf either side doesn't add up \u2014 no deal, no matter how attractive the company.",
    label: "Real access"
  }
];
var Q1 = [
  "Principal investor (Investing personal or family capital directly)",
  "Wealth advisor / RIA  (Managing capital on behalf of clients)",
  "Family office (Single-family or multi-family office)",
  "Other"
];
var Q2 = [
  "Yes \u2014 actively (5+ private market transactions to date)",
  "Yes \u2014 selectively (1\u20134 deals completed)",
  "Not yet \u2014 evaluating (Building familiarity with the asset class)",
  "Not yet \u2014 exploring (Early interest, gathering information)"
];
function AnswerBtn({ opt, selected, onClick }) {
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
    import_framer_motion3.motion.button,
    {
      type: "button",
      onClick,
      whileTap: { scale: 0.99 },
      className: "flex items-center gap-3 outline-none w-full bg-surface-2 rounded-2xl text-left",
      style: {
        minHeight: "3.75rem",
        padding: "1rem 1.25rem",
        border: "none",
        flexShrink: 0
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
          "span",
          {
            className: "font-inter-tight font-medium text-sm md:text-base flex-1",
            style: { color: selected ? "var(--white-100)" : "var(--white-400)", lineHeight: 1.3 },
            children: opt
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
          import_framer_motion3.motion.img,
          {
            src: selected ? "/icons/True.svg" : "/icons/True-innactive.svg",
            alt: "",
            "aria-hidden": "true",
            className: "shrink-0 w-5 h-5 md:w-6 md:h-6",
            animate: { scale: selected ? 1.05 : 1 },
            transition: { duration: 0.15, ease: "easeOut" }
          }
        )
      ]
    }
  );
}
var Q1_PRINCIPAL_INDEX = 0;
function Quiz({ onClose }) {
  const [slide, setSlide] = (0, import_react7.useState)(0);
  const [progress, setProgress] = (0, import_react7.useState)(0);
  const [q1, setQ1] = (0, import_react7.useState)(null);
  const [q2, setQ2] = (0, import_react7.useState)(null);
  const [step, setStep] = (0, import_react7.useState)("questions");
  const isBelowLg = useIsBelowLg();
  (0, import_react7.useEffect)(() => {
    if (step !== "questions") return;
    const pInt = setInterval(() => setProgress((p) => Math.min(p + 0.5, 100)), 50);
    const sInt = setInterval(() => {
      setProgress(0);
      setSlide((s) => (s + 1) % SLIDES.length);
    }, 1e4);
    return () => {
      clearInterval(pInt);
      clearInterval(sInt);
    };
  }, [slide, step]);
  function handleConfirm() {
    setStep(q1 === Q1_PRINCIPAL_INDEX ? "success-app" : "form");
  }
  const cur = SLIDES[slide];
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
    import_framer_motion3.motion.div,
    {
      className: "fixed inset-0 z-[100] flex flex-col lg:flex-row overflow-y-auto lg:overflow-hidden bg-page-bg",
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      style: { minHeight: "100svh" },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
          "div",
          {
            className: "flex flex-col items-center bg-page-bg w-full lg:w-1/2",
            style: {
              height: isBelowLg ? "auto" : "100%",
              paddingLeft: "clamp(1.25rem, 3.2vw, 3.75rem)",
              paddingRight: "clamp(1.25rem, 3.2vw, 3.75rem)",
              paddingTop: "clamp(1.5rem, 3.2vw, 3.75rem)",
              paddingBottom: "clamp(1.5rem, 3.2vw, 3.75rem)"
            },
            children: /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "flex flex-col w-full h-full lg:overflow-hidden lg:justify-center", style: { maxWidth: "47.5rem" }, children: [
              /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_framer_motion3.AnimatePresence, { mode: "wait", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
                import_framer_motion3.motion.div,
                {
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  exit: { opacity: 0, y: -20 },
                  transition: { duration: 0.45, ease: [0.4, 0, 0.2, 1] },
                  className: "flex flex-col lg:overflow-hidden",
                  style: { gap: "clamp(1.5rem, 2.5vw, 1.5rem)" },
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "flex flex-col shrink-0", style: { gap: "clamp(0.75rem, 1.6vw, 1.5rem)" }, children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                      "h2",
                      {
                        "data-no-reveal": true,
                        className: "font-inter-tight font-semibold text-h3 text-white-100 whitespace-pre-line",
                        children: cur.heading
                      }
                    ) }),
                    /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
                      "div",
                      {
                        className: "flex flex-col rounded-3xl shrink-0 overflow-hidden w-full bg-surface-0 gap-spacing-0.75 p-spacing-1 md:p-spacing-1.5",
                        style: { height: isBelowLg ? cur.id === 2 ? "17.5rem" : "13.125rem" : cur.id === 2 ? "25rem" : "18.75rem" },
                        children: [
                          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                            "div",
                            {
                              className: "flex justify-center flex-1",
                              style: { overflow: "hidden", minHeight: 0, alignItems: cur.id === 2 ? "center" : "flex-start" },
                              children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { style: { position: "relative", width: "100%", height: FIXED_IMG_HEIGHT[cur.id], overflow: FIXED_IMG_HEIGHT[cur.id] ? "hidden" : void 0 }, children: /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { style: { position: "relative", width: "100%" }, children: [
                                /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                                  "img",
                                  {
                                    src: cur.img,
                                    alt: "",
                                    style: { display: "block", width: "100%", height: "auto" }
                                  }
                                ),
                                cur.id === 1 && // Baked-in "?" placeholder glyph under "ERA Status" in the source PNG
                                // (unresolved status copy) — patched with a same-color square over the
                                // exact spot rather than re-exporting the asset (2026-07-10 feedback).
                                /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                                  "span",
                                  {
                                    "aria-hidden": "true",
                                    style: { position: "absolute", left: "43.4%", top: "14.8%", width: "4.5%", height: "8.9%", background: "var(--black-500)" }
                                  }
                                )
                              ] }) })
                            }
                          ),
                          (cur.subheading || cur.caption) && /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "shrink-0 flex flex-col gap-spacing-0.75", children: [
                            cur.subheading && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("h3", { className: "font-inter-tight font-medium text-white text-h4", children: cur.subheading }),
                            cur.caption ? cur.id === 2 ? /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", { className: "font-inter-tight font-normal text-paragraph whitespace-pre-line text-white-400", children: cur.caption }) : /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", { className: "font-inter-tight font-medium text-h4 whitespace-pre-line text-white", children: cur.caption }) : null
                          ] })
                        ]
                      }
                    )
                  ]
                },
                slide
              ) }),
              /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                "div",
                {
                  className: "flex shrink-0",
                  style: {
                    gap: "clamp(0.5rem, 1.4vw, 1.25rem)",
                    marginTop: "1.5rem",
                    paddingTop: "clamp(0.5rem, 1.6vw, 2rem)"
                  },
                  children: SLIDES.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "flex flex-col flex-1", style: { gap: "clamp(0.5rem, 1vw, 0.75rem)" }, children: [
                    /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "rounded-full overflow-hidden", style: { height: "0.1875rem", background: "rgba(255,255,255,0.15)" }, children: [
                      i < slide && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "h-full w-full bg-white" }),
                      i === slide && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_framer_motion3.motion.div, { className: "h-full bg-white", initial: { width: "0%" }, animate: { width: `${progress}%` }, transition: { duration: 0.05, ease: "linear" } })
                    ] }),
                    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { className: `font-inter-tight font-medium text-xs md:text-s-med hidden md:inline truncate ${i <= slide ? "text-white" : "text-white/30"}`, children: s.label })
                  ] }, s.id))
                }
              )
            ] })
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
          "div",
          {
            className: "flex flex-col items-center bg-surface-0 w-full lg:w-1/2 lg:overflow-y-auto",
            style: {
              height: isBelowLg ? "auto" : "100%",
              justifyContent: "flex-start",
              paddingLeft: "clamp(1.25rem, 3.4vw, 4rem)",
              paddingRight: "clamp(1.25rem, 3.4vw, 4rem)",
              paddingTop: "clamp(1.5rem, 3vw, 2.5rem)",
              paddingBottom: "clamp(1.5rem, 3vw, 2.5rem)"
            },
            children: /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "flex flex-col w-full h-full", style: { maxWidth: "47.5rem" }, children: [
              /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "flex justify-end shrink-0", style: { marginBottom: "clamp(1rem, 2.2vw, 2rem)" }, children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                "button",
                {
                  type: "button",
                  onClick: onClose,
                  "aria-label": "Close",
                  className: "flex items-center justify-center shrink-0 bg-black-600 rounded-full outline-none transition-colors hover:bg-black-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white",
                  style: { width: "2.75rem", height: "2.75rem" },
                  children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("path", { d: "M4 4L12 12M12 4L4 12", stroke: "white", strokeWidth: "1.5", strokeLinecap: "round" }) })
                }
              ) }),
              /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "flex flex-col flex-1", style: { gap: "clamp(1.5rem, 3vw, 2.5rem)", justifyContent: "flex-start" }, children: /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "flex flex-col shrink-0", style: { gap: "clamp(1.25rem, 2.4vw, 2rem)" }, children: [
                /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "flex flex-col shrink-0", style: { gap: "clamp(0.75rem, 1.6vw, 1rem)" }, children: [
                  /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                    "p",
                    {
                      className: "font-inter-tight font-medium text-h4 shrink-0",
                      style: { color: "var(--white-200)", letterSpacing: "-0.02em" },
                      children: "What best describes your role?"
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "flex flex-col gap-2", children: Q1.map((opt, i) => /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(AnswerBtn, { opt, selected: q1 === i, onClick: () => setQ1(q1 === i ? null : i) }, i)) })
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "flex flex-col shrink-0", style: { gap: "clamp(0.75rem, 1.6vw, 1rem)" }, children: [
                  /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                    "p",
                    {
                      className: "font-inter-tight font-medium text-h4 shrink-0",
                      style: { color: "var(--white-200)", letterSpacing: "-0.02em" },
                      children: "Have you participated in private markets before?"
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "flex flex-col gap-2", children: Q2.map((opt, i) => /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(AnswerBtn, { opt, selected: q2 === i, onClick: () => setQ2(q2 === i ? null : i) }, i)) })
                ] })
              ] }) }),
              /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
                "div",
                {
                  className: "flex items-center justify-between gap-2 mt-8 lg:mt-auto shrink-0",
                  style: { paddingTop: "clamp(1.5rem, 2.4vw, 2rem)" },
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                      "button",
                      {
                        type: "button",
                        onClick: onClose,
                        className: "flex items-center justify-center font-inter-tight font-semibold text-white outline-none transition-all duration-300 bg-surface-1 hover:bg-surface-mid rounded-2xl text-sm md:text-base h-12 md:h-14 px-5 md:px-6",
                        children: "Back"
                      }
                    ),
                    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(BtnOwn, { size: "S", hideIcon: true, className: "md:hidden", disabled: q1 === null || q2 === null, onClick: handleConfirm, children: "Confirm" }),
                    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(BtnOwn, { size: "M", hideIcon: true, className: "hidden md:flex", disabled: q1 === null || q2 === null, onClick: handleConfirm, children: "Confirm" })
                  ]
                }
              )
            ] })
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(import_framer_motion3.AnimatePresence, { children: [
          step === "form" && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(QuizOverlay, { maxWidth: "37.5rem", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(QuizLeadForm, { onClose: () => setStep("questions"), onSubmit: () => setStep("success-thanks") }) }, "form"),
          step === "success-app" && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(QuizOverlay, { maxWidth: "45rem", children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
            QuizSuccessState,
            {
              heading: "Get Pre-IPO Directly\nInto Your Pocket",
              button: { label: "Download Axevil App", icon: "/icons/Download.svg", href: "https://axevil.app.link/web?~campaign=new_main" },
              onClose,
              illustration: "/img/ill/quiz-success-app-devices.png"
            }
          ) }, "success-app"),
          step === "success-thanks" && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(QuizOverlay, { children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
            QuizSuccessState,
            {
              heading: "Thank you, will contact\nyou shortly",
              button: { label: "Back to home", onClick: onClose },
              onClose
            }
          ) }, "success-thanks")
        ] })
      ]
    }
  );
}

// design-system/src/components/bg-features.tsx
var import_react8 = require("react");
var import_framer_motion4 = require("framer-motion");
var import_jsx_runtime11 = require("react/jsx-runtime");
function BgFeatures({
  spotlight = false,
  spotlightSize = "24rem",
  ambientOpacity = 0.5,
  backgroundPosition = "53% -7.5rem",
  blendMode,
  animated = false,
  animationDuration = 30
} = {}) {
  const ref = (0, import_react8.useRef)(null);
  (0, import_react8.useEffect)(() => {
    if (!spotlight) return;
    const el = ref.current;
    if (!el) return;
    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
      el.style.setProperty("--my", `${e.clientY - rect.top}px`);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [spotlight]);
  const bgImage = "url(/img/about/bg-features.png)";
  const spotlightMask = `radial-gradient(circle ${spotlightSize} at var(--mx, 50%) var(--my, 50%), black 0%, transparent 70%)`;
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(
    "div",
    {
      ref,
      "aria-hidden": "true",
      className: "absolute inset-0 pointer-events-none overflow-hidden",
      style: { zIndex: 0 },
      children: [
        animated ? /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
          import_framer_motion4.motion.div,
          {
            className: "absolute inset-0",
            style: {
              backgroundImage: bgImage,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition,
              opacity: ambientOpacity,
              mixBlendMode: blendMode,
              transformOrigin: "center center"
            },
            animate: {
              x: ["0%", "-1.5%", "1%", "0%"],
              y: ["0%", "1.2%", "-0.8%", "0%"],
              scale: [1, 1.04, 1.02, 1]
            },
            transition: {
              duration: animationDuration,
              ease: "easeInOut",
              repeat: Infinity
            }
          }
        ) : /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
          "div",
          {
            className: "absolute inset-0",
            style: {
              backgroundImage: bgImage,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition,
              opacity: ambientOpacity,
              mixBlendMode: blendMode
            }
          }
        ),
        spotlight && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
          "div",
          {
            className: "absolute inset-0",
            style: {
              backgroundImage: bgImage,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition,
              mixBlendMode: blendMode,
              maskImage: spotlightMask,
              WebkitMaskImage: spotlightMask
            }
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
          "div",
          {
            className: "absolute inset-x-0 bottom-0",
            style: {
              height: "40%",
              background: "linear-gradient(to bottom, transparent 0%, var(--page-bg, #080808) 100%)"
            }
          }
        )
      ]
    }
  );
}

// design-system/src/components/desc-tag.tsx
var import_jsx_runtime12 = require("react/jsx-runtime");
function DescTag({ number, label, className = "" }) {
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(
    "div",
    {
      className: `flex gap-2 items-center font-inter-tight font-medium text-m text-white-400 ${className}`,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { className: "text-m opacity-50", children: number }),
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { className: "text-m opacity-80", children: label })
      ]
    }
  );
}

// design-system/src/components/cta-form.tsx
var import_jsx_runtime13 = require("react/jsx-runtime");
var GRADIENT = "var(--gradient-headline)";
function CtaForm({
  number,
  label,
  title,
  subtitle,
  primaryLabel,
  secondaryLabel,
  primarySize,
  primaryHideIcon = false,
  onPrimaryClick,
  onSecondaryClick,
  className = ""
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("section", { className: `relative w-full bg-page-bg padding-section-t6-b12 ${className}`, children: /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(
    "div",
    {
      className: "mx-auto w-full max-w-content container-px flex flex-col items-center text-center",
      style: { gap: "2rem" },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "flex flex-col items-center text-center", style: { gap: "2rem", maxWidth: "50rem" }, children: [
          /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(DescTag, { number, label }),
          /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "flex flex-col items-center text-center", style: { gap: "1rem" }, children: [
            /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
              "h2",
              {
                className: "font-inter-tight font-semibold text-h2 text-transparent gradient-text",
                style: { backgroundImage: GRADIENT, overflow: "visible" },
                children: title
              }
            ),
            subtitle && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
              "p",
              {
                className: "font-inter-tight font-normal text-paragraph text-white/60",
                style: { maxWidth: "37.5rem" },
                children: subtitle
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(
          "div",
          {
            className: "flex flex-col sm:flex-row items-stretch sm:items-center justify-center w-full max-w-[30rem] sm:max-w-none",
            style: { gap: "0.5rem" },
            children: [
              primarySize ? /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(BtnOwn, { size: primarySize, hideIcon: primaryHideIcon, onClick: onPrimaryClick, className: "w-full sm:w-auto", children: primaryLabel }) : /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(import_jsx_runtime13.Fragment, { children: [
                /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(BtnOwn, { size: "S", hideIcon: primaryHideIcon, onClick: onPrimaryClick, className: "w-full sm:hidden", children: primaryLabel }),
                /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(BtnOwn, { size: "M", hideIcon: primaryHideIcon, onClick: onPrimaryClick, className: "hidden sm:flex sm:w-auto", children: primaryLabel })
              ] }),
              secondaryLabel && /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(import_jsx_runtime13.Fragment, { children: [
                /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(BtnOwn, { size: "S", hideIcon: true, variant: "secondary", onClick: onSecondaryClick, className: "w-full sm:hidden", children: secondaryLabel }),
                /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(BtnOwn, { size: "M", hideIcon: true, variant: "secondary", onClick: onSecondaryClick, className: "hidden sm:flex sm:w-auto", children: secondaryLabel })
              ] })
            ]
          }
        )
      ]
    }
  ) });
}

// design-system/src/components/cta-form-newsletter.tsx
var import_react9 = require("react");
var import_jsx_runtime14 = require("react/jsx-runtime");
function CtaFormNewsletter({
  buttonLabel = "Subscribe",
  buttonIcon = "/icons/Email.svg",
  placeholder = "yourmail@gmail.com",
  successMessage = "\u2713 You're subscribed!",
  onSubmit,
  className = ""
}) {
  const [email, setEmail] = (0, import_react9.useState)("");
  const [submitted, setSubmitted] = (0, import_react9.useState)(false);
  const startedRef = (0, import_react9.useRef)(false);
  function onFormFocus() {
    if (startedRef.current) return;
    startedRef.current = true;
    trackFormStart("newsletter");
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
    onSubmit?.(email);
  }
  if (submitted) {
    return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
      "div",
      {
        className: `flex items-center justify-center font-inter-tight font-medium text-l text-status-open w-full max-w-[30rem] lg:max-w-none ${className}`,
        style: {
          height: "3.5rem",
          padding: "0 1.5rem",
          borderRadius: "1rem",
          background: "var(--status-open-bg)",
          border: "1px solid var(--status-open-border)"
        },
        children: successMessage
      }
    );
  }
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(
    "form",
    {
      onSubmit: handleSubmit,
      onFocus: onFormFocus,
      className: `flex flex-row items-center w-full max-w-[30rem] lg:max-w-none lg:w-auto ${className}`,
      style: { gap: "0.5rem" },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
          "input",
          {
            type: "email",
            required: true,
            value: email,
            onChange: (e) => setEmail(e.target.value),
            placeholder,
            className: "font-inter-tight font-medium text-m text-white placeholder:text-white/40 focus:outline-none min-w-0 flex-1 lg:flex-none lg:w-[22.5rem]",
            style: {
              height: "3.5rem",
              padding: "0.625rem 1rem",
              borderRadius: "1rem",
              background: "var(--black-400, #151515)",
              border: "none",
              lineHeight: 1.1
            }
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(BtnOwn, { type: "submit", size: "S", icon: buttonIcon, className: "shrink-0 sm:hidden", children: buttonLabel }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(BtnOwn, { type: "submit", size: "M", icon: buttonIcon, className: "hidden shrink-0 sm:flex lg:w-[9.1875rem]", children: buttonLabel })
      ]
    }
  );
}

// design-system/src/components/faq.tsx
var import_react10 = require("react");
var import_framer_motion5 = require("framer-motion");
var import_jsx_runtime15 = require("react/jsx-runtime");
function FAQ({ items, className = "" }) {
  const [open, setOpen] = (0, import_react10.useState)(null);
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { className: `w-full flex flex-col ${className}`, children: items.map((item, i) => {
    const isOpen = open === i;
    return /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)("div", { style: { borderBottom: "1px solid rgba(255,255,255,0.1)" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(
        "button",
        {
          type: "button",
          onClick: () => setOpen(isOpen ? null : i),
          "aria-expanded": isOpen,
          className: "w-full flex items-center justify-between gap-4 text-left outline-none",
          style: { paddingTop: "clamp(1.25rem, 3vw, 1.75rem)", paddingBottom: "1.5rem", minHeight: "3.5rem" },
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("span", { className: "font-inter-tight font-medium text-[0.875rem] md:text-xl", style: { color: "var(--white-300)" }, children: item.q }),
            /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
              import_framer_motion5.motion.div,
              {
                animate: { rotate: isOpen ? 45 : 0 },
                transition: { duration: 0.3, ease: "easeInOut" },
                className: "shrink-0 flex items-center justify-center",
                style: {
                  width: "clamp(3rem, 4vw, 3.5rem)",
                  height: "clamp(3rem, 4vw, 3.5rem)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  borderRadius: "50%",
                  flexShrink: 0
                },
                children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("path", { d: "M6 1v10M1 6h10", stroke: "white", strokeWidth: "1.5", strokeLinecap: "round" }) })
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_framer_motion5.AnimatePresence, { initial: false, children: isOpen && /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
        import_framer_motion5.motion.div,
        {
          initial: { height: 0, opacity: 0 },
          animate: { height: "auto", opacity: 1 },
          exit: { height: 0, opacity: 0 },
          transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
          style: { overflow: "hidden" },
          children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)("div", { style: { paddingBottom: "clamp(1.25rem, 3vw, 1.75rem)", paddingRight: "clamp(0rem, 8vw, 5rem)" }, children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
            "p",
            {
              className: "font-inter-tight font-medium text-white/60",
              style: { fontSize: "clamp(0.875rem, 1.25vw, 1.0625rem)", lineHeight: 1.6, maxWidth: "50rem" },
              children: item.a
            }
          ) })
        }
      ) })
    ] }, i);
  }) });
}

// design-system/src/components/form.tsx
var import_framer_motion6 = require("framer-motion");
var import_react11 = require("react");

// design-system/src/lib/navigate.ts
function navigate(path) {
  if (typeof window === "undefined") return;
  if (path === window.location.pathname) {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  window.history.pushState({}, "", path);
  window.dispatchEvent(new Event("pushstate"));
}

// design-system/src/components/form.tsx
var import_jsx_runtime16 = require("react/jsx-runtime");
var INQUIRY_OPTIONS = [
  { value: "press", label: "Press inquiry" },
  { value: "partnership", label: "Partnership" },
  { value: "investor", label: "Investor access" },
  { value: "general", label: "General" }
];
function InquiryDropdown({ value, onChange }) {
  const [open, setOpen] = (0, import_react11.useState)(false);
  const ref = (0, import_react11.useRef)(null);
  const selected = INQUIRY_OPTIONS.find((o) => o.value === value);
  (0, import_react11.useEffect)(() => {
    function onClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { ref, className: "relative w-full", children: [
    /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(
      "button",
      {
        type: "button",
        "aria-haspopup": "listbox",
        "aria-expanded": open,
        "aria-label": "Inquiry type",
        onClick: () => setOpen(!open),
        onKeyDown: (e) => {
          if (e.key === "Escape") {
            setOpen(false);
          } else if ((e.key === "Enter" || e.key === " " || e.key === "ArrowDown") && !open) {
            e.preventDefault();
            setOpen(true);
          }
        },
        className: "flex items-center justify-between cursor-pointer select-none w-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-white",
        style: {
          background: "var(--black-500)",
          height: "3.75rem",
          borderRadius: "1rem",
          padding: "0 1rem",
          border: "none"
        },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
            "span",
            {
              className: "font-inter-tight font-medium text-m",
              style: { color: selected ? "var(--white-100)" : "rgba(255,255,255,0.35)" },
              children: selected ? selected.label : "Inquiry type (optional)"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
            import_framer_motion6.motion.svg,
            {
              animate: { rotate: open ? 180 : 0 },
              transition: { duration: 0.2, ease: [0.4, 0, 0.2, 1] },
              width: "20",
              height: "20",
              viewBox: "0 0 20 20",
              fill: "none",
              "aria-hidden": "true",
              style: { flexShrink: 0, display: "block", width: "1.25rem", height: "1.25rem" },
              children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("path", { d: "M5 8L10 13L15 8", stroke: "rgba(255,255,255,0.4)", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(import_framer_motion6.AnimatePresence, { children: open && /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
      import_framer_motion6.motion.div,
      {
        role: "listbox",
        "aria-label": "Inquiry type",
        initial: { opacity: 0, y: -6 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -6 },
        transition: { duration: 0.15, ease: [0.4, 0, 0.2, 1] },
        className: "absolute left-0 right-0 z-[1000] overflow-hidden",
        style: {
          marginTop: "0.25rem",
          borderRadius: "1rem",
          background: "var(--black-500)"
        },
        children: INQUIRY_OPTIONS.map((opt, i) => /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
          "button",
          {
            type: "button",
            role: "option",
            "aria-selected": opt.value === value,
            onClick: () => {
              onChange(opt.value);
              setOpen(false);
            },
            onKeyDown: (e) => {
              if (e.key === "Escape") setOpen(false);
            },
            className: "group flex items-center cursor-pointer transition-colors hover:bg-white/5 font-inter-tight font-medium text-m w-full text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-white",
            style: {
              padding: "0 1rem",
              height: "3.25rem",
              background: "transparent",
              borderBottom: i < INQUIRY_OPTIONS.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none",
              color: "var(--white-400)"
            },
            onMouseEnter: (e) => e.currentTarget.style.color = "var(--white-100)",
            onMouseLeave: (e) => e.currentTarget.style.color = "var(--white-400)",
            children: opt.label
          },
          opt.value
        ))
      }
    ) })
  ] });
}
function SuccessState() {
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
    import_framer_motion6.motion.div,
    {
      className: "w-full",
      initial: { opacity: 0, y: 16 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
      children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
        QuizSuccessState,
        {
          heading: "Thank you \u2014 we received\nyour request.",
          button: { label: "Back to home", onClick: () => {
            navigate("/");
          } }
        }
      )
    }
  );
}
function Form({
  number = "02",
  label = "Leave a request",
  title = "Send us a note.",
  subtitle = "Tell us briefly what you need. We will reply within 24 hours.",
  recipient = "info@axevil.com",
  cc = "support@axevil.com",
  subject = "Question from the website axevil.com",
  paddingClass = "padding-section-t6-b12"
} = {}) {
  const [data, setData] = (0, import_react11.useState)({ email: "", name: "", position: "", company: "", inquiry: "" });
  const [errors, setErrors] = (0, import_react11.useState)({});
  const [submitted, setSubmitted] = (0, import_react11.useState)(false);
  const startedRef = (0, import_react11.useRef)(false);
  function onFormFocus() {
    if (startedRef.current) return;
    startedRef.current = true;
    trackFormStart("contact");
  }
  function validate() {
    const e = {};
    if (!data.email.trim()) e.email = "Required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) e.email = "Invalid email";
    if (!data.name.trim()) e.name = "Required";
    return e;
  }
  function handleSubmit(ev) {
    ev.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setErrors({});
    const inquiryLabel = INQUIRY_OPTIONS.find((o) => o.value === data.inquiry)?.label ?? "\u2014";
    void submitLead({
      name: data.name,
      email: data.email,
      leadType: "contact",
      sourceL3: "site-contact-form",
      extra: {
        position: data.position || void 0,
        company: data.company || void 0,
        inquiry_type: inquiryLabel
      }
    });
    const body = encodeURIComponent(
      `Name: ${data.name}
Email: ${data.email}
Position: ${data.position || "\u2014"}
Company: ${data.company || "\u2014"}
Inquiry type: ${inquiryLabel}
`
    );
    const params = [
      `subject=${encodeURIComponent(subject)}`,
      cc ? `cc=${encodeURIComponent(cc)}` : "",
      `body=${body}`
    ].filter(Boolean).join("&");
    window.location.href = `mailto:${recipient}?${params}`;
    setSubmitted(true);
  }
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
    "section",
    {
      id: "contact-form",
      className: `relative w-full bg-page-bg flex flex-col items-center ${paddingClass}`,
      children: /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(
        import_framer_motion6.motion.div,
        {
          className: "relative w-full max-w-content container-px mx-auto flex flex-col items-center",
          style: { gap: "2rem" },
          initial: { opacity: 0, y: 60 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.2 },
          transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "flex flex-col items-center justify-center w-full", style: { maxWidth: "37.5rem", gap: "1rem" }, children: [
              /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "flex gap-2 items-center font-inter-tight font-medium text-m text-neutral-30 whitespace-nowrap", children: [
                /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("span", { className: "opacity-50", children: number }),
                /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("span", { className: "opacity-80", children: label })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "flex flex-col items-center text-center", style: { gap: "1rem" }, children: [
                /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
                  "h2",
                  {
                    className: "font-inter-tight font-semibold text-h2 text-transparent gradient-text",
                    style: {
                      letterSpacing: "-0.02em",
                      overflow: "visible",
                      paddingBottom: "0.15em",
                      backgroundImage: "var(--gradient-headline)",
                      whiteSpace: "pre-line"
                    },
                    children: title
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
                  "p",
                  {
                    className: "font-inter-tight font-medium",
                    style: {
                      fontSize: "clamp(0.875rem, 1.25vw, 1.125rem)",
                      lineHeight: 1.35,
                      color: "rgba(255,255,255,0.5)",
                      letterSpacing: "-0.0225em",
                      maxWidth: "31.25rem"
                    },
                    children: subtitle
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: "flex flex-col items-center w-full", style: { maxWidth: "37.5rem", gap: "0.75rem" }, children: submitted ? /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(SuccessState, {}) : /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("form", { onSubmit: handleSubmit, onFocus: onFormFocus, noValidate: true, className: "flex flex-col w-full", style: { gap: "0.5rem" }, children: [
              /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(Field, { error: errors.email, input: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
                "input",
                {
                  type: "email",
                  required: true,
                  autoComplete: "email",
                  inputMode: "email",
                  "aria-label": "Email address",
                  placeholder: "your@email.com",
                  value: data.email,
                  onChange: (e) => setData((f) => ({ ...f, email: e.target.value })),
                  className: inputClass(!!errors.email)
                }
              ) }),
              /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(Field, { error: errors.name, input: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
                "input",
                {
                  type: "text",
                  required: true,
                  autoComplete: "name",
                  "aria-label": "Full name",
                  placeholder: "Full name",
                  value: data.name,
                  onChange: (e) => setData((f) => ({ ...f, name: e.target.value })),
                  className: inputClass(!!errors.name)
                }
              ) }),
              /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(Field, { input: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
                "input",
                {
                  type: "text",
                  autoComplete: "organization-title",
                  "aria-label": "Position",
                  placeholder: "Position",
                  value: data.position,
                  onChange: (e) => setData((f) => ({ ...f, position: e.target.value })),
                  className: inputClass(false)
                }
              ) }),
              /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)("div", { className: "flex flex-col sm:flex-row w-full", style: { gap: "0.5rem" }, children: [
                /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(Field, { className: "flex-1", input: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
                  "input",
                  {
                    type: "text",
                    autoComplete: "organization",
                    "aria-label": "Company",
                    placeholder: "Company",
                    value: data.company,
                    onChange: (e) => setData((f) => ({ ...f, company: e.target.value })),
                    className: inputClass(false)
                  }
                ) }),
                /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { className: "flex-1", children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
                  InquiryDropdown,
                  {
                    value: data.inquiry,
                    onChange: (v) => setData((f) => ({ ...f, inquiry: v }))
                  }
                ) })
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(
                "button",
                {
                  type: "submit",
                  className: "btn-own inline-flex items-center justify-center font-inter-tight font-semibold transition-all duration-300 ease-out hover:shadow-[0_0_24px_rgba(255,255,255,0.25)] hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-white",
                  style: {
                    gap: "0.5rem",
                    height: "3.5rem",
                    padding: "0.8125rem 1.5rem",
                    borderRadius: "1rem",
                    fontSize: "var(--font-btn)",
                    fontWeight: 600,
                    background: "var(--white-100, #fff)",
                    color: "var(--black-600, #202020)",
                    border: "none",
                    marginTop: "0.5rem"
                  },
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
                      "img",
                      {
                        src: "/icons/Email.svg",
                        alt: "",
                        "aria-hidden": "true",
                        style: { width: "1.5rem", height: "1.5rem", filter: "brightness(0)" }
                      }
                    ),
                    "Leave a request"
                  ]
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime16.jsxs)(
                "p",
                {
                  className: "font-inter-tight font-medium text-center w-full",
                  style: {
                    fontSize: "var(--font-xs)",
                    lineHeight: 1.3,
                    color: "var(--white-400)",
                    marginTop: "0.5rem"
                  },
                  children: [
                    "We reply within 24 hours. By submitting this form, you agree that Axevil Capital, LLC will process the information you provide to respond to your enquiry, as described in the",
                    " ",
                    /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("a", { href: "/privacy", className: "underline hover:text-white transition-colors", children: "Privacy Policy" }),
                    "."
                  ]
                }
              )
            ] }) })
          ]
        }
      )
    }
  );
}

// design-system/src/components/hero-eyebrow.tsx
var import_jsx_runtime17 = require("react/jsx-runtime");
function HeroEyebrow({ children, className = "" }) {
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsxs)(
    "div",
    {
      className: `flex items-center font-inter-tight font-medium text-s-med text-white ${className}`,
      style: {
        padding: "0.75rem 1rem",
        borderRadius: "6.25rem",
        background: "var(--status-open-bg)",
        border: "1px solid var(--status-open-border)",
        gap: "0.5rem",
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06), inset 0 -1px 0 rgba(0,0,0,0.25)"
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
          "span",
          {
            className: "block ri-online-dot",
            style: {
              width: "0.625rem",
              height: "0.625rem",
              borderRadius: "0.625rem",
              background: "var(--status-open)",
              boxShadow: "0 1px 4px 0 rgba(255, 255, 255, 0.75) inset"
            }
          }
        ),
        children
      ]
    }
  );
}

// design-system/src/components/ill-cards.tsx
var import_jsx_runtime18 = require("react/jsx-runtime");
function IllCards({
  cards,
  className = "",
  objectPosition = "center",
  cardHeight = "20rem",
  titleSize = "h4",
  imageHeight,
  hideImages = false
}) {
  const titleClass = titleSize === "h3" ? "text-h3" : "text-h4";
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
    "div",
    {
      className: `grid grid-cols-1 md:grid-cols-2 w-full ${className}`,
      style: { gap: 0 },
      children: cards.map((card) => /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(
        "div",
        {
          className: "ill-card relative overflow-hidden",
          style: {
            height: cardHeight,
            minWidth: "18.75rem",
            ...card.border ?? { border: "1px solid var(--black-500, #1A1A1A)" }
          },
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
              "span",
              {
                className: "font-inter-tight font-medium text-m text-black-800 absolute",
                style: {
                  left: "1.4375rem",
                  top: "1.4375rem",
                  zIndex: 10,
                  pointerEvents: "none"
                },
                children: card.num
              }
            ),
            !hideImages && /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)("picture", { children: [
              card.imgMobile && /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("source", { media: "(max-width: 480px)", srcSet: card.imgMobile }),
              /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
                "img",
                {
                  src: card.img,
                  alt: "",
                  "aria-hidden": "true",
                  className: `ill-card-img ${card.imgClassName ?? ""}`,
                  style: {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: imageHeight ?? "100%",
                    objectFit: card.objectFit ?? "contain",
                    ...card.imgClassName ? {} : { objectPosition }
                  },
                  loading: "lazy"
                }
              )
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(
              "div",
              {
                className: "absolute flex flex-col gap-3",
                style: { left: "1.5rem", right: "1.5rem", bottom: "1.5rem", zIndex: 5 },
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
                    "h3",
                    {
                      className: `font-inter-tight font-medium text-white ${titleClass}`,
                      style: { margin: 0 },
                      children: card.title
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("p", { className: "font-inter-tight font-normal text-paragraph text-white-400", children: card.body })
                ]
              }
            )
          ]
        },
        card.num
      ))
    }
  );
}

// design-system/src/components/nav-dropdown.tsx
var import_framer_motion7 = require("framer-motion");
var import_jsx_runtime19 = require("react/jsx-runtime");
function Card({ item, onClose }) {
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(
    "a",
    {
      href: item.href,
      onClick: onClose,
      className: "flex flex-col w-full rounded-[0.5rem] transition-colors hover:bg-[rgba(48,48,48,0.5)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-white",
      style: { padding: "0.75rem", gap: "0.625rem" },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "font-inter-tight font-medium text-xs whitespace-nowrap", style: { color: "var(--white-400)" }, children: item.label }),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("span", { className: "font-inter-tight font-medium text-s-med", style: { color: "var(--white-200)", lineHeight: 1.3 }, children: item.description })
      ]
    }
  );
}
function NavDropdown({ items, open, onClose, onMouseEnter, onMouseLeave }) {
  const half = Math.ceil(items.length / 2);
  const col1 = items.slice(0, half);
  const col2 = items.slice(half);
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(import_framer_motion7.AnimatePresence, { children: open && /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
    import_framer_motion7.motion.div,
    {
      initial: { opacity: 0, y: "1rem" },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: "1rem" },
      transition: { duration: 0.3, ease: "easeInOut" },
      className: "absolute z-50 hidden lg:block",
      style: {
        top: "calc(100% + 0.5rem)",
        left: "28rem",
        maxWidth: "35rem"
      },
      onMouseEnter,
      onMouseLeave,
      children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
        "div",
        {
          className: "rounded-[1rem] border",
          style: {
            background: "var(--page-bg)",
            borderColor: "var(--black-500)",
            padding: "0.5rem"
          },
          children: /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(
            "div",
            {
              className: "flex items-stretch rounded-[0.75rem]",
              style: { background: "var(--black-500)", padding: "0.5rem", gap: "1.5rem" },
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "flex flex-col flex-1 min-w-0", style: { gap: "1rem" }, children: col1.map((it) => /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(Card, { item: it, onClose }, it.label)) }),
                col2.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(import_jsx_runtime19.Fragment, { children: [
                  /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { style: { width: "1px", alignSelf: "stretch", background: "rgba(255,255,255,0.1)" } }),
                  /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: "flex flex-col flex-1 min-w-0", style: { gap: "1rem" }, children: col2.map((it) => /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(Card, { item: it, onClose }, it.label)) })
                ] })
              ]
            }
          )
        }
      )
    }
  ) });
}

// design-system/src/components/page-entry.tsx
var import_framer_motion8 = require("framer-motion");
var import_jsx_runtime20 = require("react/jsx-runtime");
function PageEntry({
  children,
  className = "",
  style,
  initial = { opacity: 0 },
  animate = { opacity: 1 },
  exit = { opacity: 0, transition: { duration: 0.35, ease: [0.4, 0, 0.2, 1] } },
  transition = { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
  ...rest
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
    import_framer_motion8.motion.main,
    {
      className,
      style,
      initial,
      animate,
      exit,
      transition,
      ...rest,
      children
    }
  );
}

// design-system/src/components/section-heading.tsx
var import_jsx_runtime21 = require("react/jsx-runtime");
var DEFAULT_GRADIENT = "var(--gradient-headline)";
function SectionHeading({
  number,
  label,
  title,
  subtitle,
  align = "center",
  gradient = DEFAULT_GRADIENT,
  titleMaxWidth,
  subtitleMaxWidth,
  gap = "clamp(1.5rem, 3vw, 2rem)",
  innerGap = "clamp(1rem, 2vw, 1.5rem)",
  className = "",
  titleAs = "h2"
}) {
  const alignClass = align === "center" ? "items-center text-center" : "items-start";
  const TitleTag = titleAs;
  const headingEl = /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
    TitleTag,
    {
      className: "font-inter-tight font-semibold text-h2 text-transparent gradient-text bg-clip-text [-webkit-background-clip:text]",
      style: {
        backgroundImage: gradient,
        /* text-h2 has line-height:1 — tight enough that descenders (y, g, j, p, q)
           and accents get clipped by the gradient-text background-clip box.
           padding-bottom: 0.15em gives the glyph box ~10px breathing room so
           "hug" sizing renders the full character. */
        paddingBottom: "0.15em",
        overflow: "visible",
        ...titleMaxWidth ? { maxWidth: titleMaxWidth } : {}
      },
      children: title
    }
  );
  const subtitleEl = subtitle && /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(
    "p",
    {
      className: "font-inter-tight font-normal text-paragraph text-white/60",
      style: subtitleMaxWidth ? { maxWidth: subtitleMaxWidth } : void 0,
      children: subtitle
    }
  );
  return /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)(
    "div",
    {
      className: `flex flex-col w-full ${alignClass} ${className}`,
      style: { gap, overflow: "visible" },
      children: [
        number !== void 0 && label && /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(DescTag, { number, label }),
        subtitle ? /* @__PURE__ */ (0, import_jsx_runtime21.jsxs)("div", { className: `flex flex-col w-full ${alignClass}`, style: { gap: innerGap }, children: [
          headingEl,
          subtitleEl
        ] }) : headingEl
      ]
    }
  );
}

// design-system/src/components/slider-card.tsx
var import_jsx_runtime22 = require("react/jsx-runtime");
function SliderCard({ name, role, description, photo, linkedin, className = "" }) {
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: `group flex flex-col items-start shrink-0 relative ${className}`, style: { gap: "1.5rem" }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(
      "div",
      {
        className: "relative rounded-2 w-full overflow-hidden border-2 border-outline-100",
        style: { height: "25rem" },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
            "img",
            {
              src: "/img/block09/bg-speaker-gradient.png",
              alt: "",
              "aria-hidden": "true",
              loading: "lazy",
              className: "absolute inset-0 w-full h-full pointer-events-none",
              style: { zIndex: 0, objectFit: "cover" }
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
            "img",
            {
              alt: name,
              src: photo,
              className: "absolute inset-0 w-full h-full rounded-2",
              loading: "lazy",
              style: { zIndex: 1, objectFit: "contain", objectPosition: "bottom center" }
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(
            "div",
            {
              className: "absolute top-5 left-5 flex gap-2 items-center px-4 py-3 rounded-1",
              style: { background: "var(--black-600)", backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)", zIndex: 2 },
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("span", { className: "rounded-full shrink-0 size-2", style: { background: "rgba(255,255,255,0.5)" } }),
                /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
                  "span",
                  {
                    className: "font-inter-tight font-semibold text-white whitespace-nowrap",
                    style: { fontSize: "0.875rem", lineHeight: 1.2, letterSpacing: "-0.02em" },
                    children: role
                  }
                )
              ]
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "flex flex-col items-start px-4 w-full", style: { gap: "1.25rem" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)("div", { className: "flex flex-col items-start w-full", style: { gap: "0.75rem" }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
          "h4",
          {
            className: "font-inter-tight font-medium text-white w-full",
            style: { fontSize: "clamp(1.125rem, 1.5vw, 1.5rem)", lineHeight: 1.2, letterSpacing: "-0.02em", margin: 0 },
            children: name
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("p", { className: "font-inter-tight font-normal text-paragraph text-white/50 w-full", children: description })
      ] }),
      linkedin && /* @__PURE__ */ (0, import_jsx_runtime22.jsxs)(
        "a",
        {
          href: linkedin,
          target: "_blank",
          rel: "noreferrer",
          className: "flex items-center gap-2 text-white",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("span", { className: "font-inter-tight font-medium text-m whitespace-nowrap group-hover:underline", children: "LinkedIn" }),
            /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(
              "svg",
              {
                width: "12",
                height: "12",
                viewBox: "0 0 12 12",
                fill: "none",
                "aria-hidden": "true",
                className: "shrink-0 transition-transform duration-700 ease-in-out group-hover:rotate-180",
                children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)("path", { d: "M6 1.5v9M1.5 6h9", stroke: "currentColor", strokeWidth: "1.4", strokeLinecap: "round" })
              }
            )
          ]
        }
      )
    ] })
  ] });
}

// design-system/src/components/status-pill.tsx
var import_jsx_runtime23 = require("react/jsx-runtime");
var COLORS = {
  open: { dot: "var(--status-open)", bg: "var(--status-open-bg)", border: "var(--status-open-border)", text: "var(--status-open)" },
  closed: { dot: "var(--status-closed)", bg: "var(--status-closed-bg)", border: "var(--status-closed-border)", text: "var(--status-closed)" },
  soon: { dot: "var(--status-soon)", bg: "var(--status-soon-bg)", border: "var(--status-soon-border)", text: "var(--status-soon)" }
};
function StatusPill({ status, label, className = "" }) {
  const c = COLORS[status];
  return /* @__PURE__ */ (0, import_jsx_runtime23.jsxs)(
    "span",
    {
      className: `inline-flex items-center justify-center font-inter-tight font-medium text-xs whitespace-nowrap ${className}`,
      style: {
        padding: "0.625rem 0.75rem",
        borderRadius: "1.5rem",
        background: c.bg,
        border: `1px solid ${c.border}`,
        color: c.text,
        gap: status === "soon" ? "0.5rem" : "0.375rem"
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime23.jsx)("span", { className: "block rounded-full", style: { width: "0.4375rem", height: "0.4375rem", background: c.dot } }),
        label
      ]
    }
  );
}

// design-system/src/components/tag.tsx
var import_jsx_runtime24 = require("react/jsx-runtime");
function Tag({
  label,
  variant = "tab",
  active = false,
  size = "md",
  onClick,
  href,
  leading,
  className = ""
}) {
  let cls = "font-inter-tight whitespace-nowrap transition-colors duration-200 ";
  let style = {};
  if (variant === "tab") {
    cls += "font-medium text-s-med md:text-m ";
    cls += "h-10 md:h-[3.25rem] px-3 md:px-5 py-2 md:py-4 ";
    cls += "rounded-xl md:rounded-2xl ";
    cls += "focus-visible:outline focus-visible:outline-2 focus-visible:outline-white ";
    style.background = active ? "var(--white-100)" : "var(--black-400)";
    style.color = active ? "var(--black-100)" : "var(--white-400)";
  } else if (variant === "regulatory") {
    cls += "inline-flex items-center gap-2 font-medium text-s-semi text-white-400 ";
    cls += "rounded-full ";
    style.padding = "0.5rem 0.875rem";
    style.background = "var(--black-400)";
    style.border = "1px solid var(--border-subtle)";
  } else {
    const sizeStyles = size === "sm" ? "text-s-med px-3.5 py-1.5" : size === "lg" ? "text-m px-6 py-2.5" : "text-m px-5 py-2";
    cls += `font-semibold rounded-full ${sizeStyles} `;
    cls += active ? "bg-white text-black" : "bg-transparent text-white/40 hover:text-white/70";
  }
  cls += className;
  const content = /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(import_jsx_runtime24.Fragment, { children: [
    leading,
    label
  ] });
  if (onClick) {
    return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("button", { type: "button", onClick, className: cls, style, children: content });
  }
  if (href) {
    return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("a", { href, className: cls, style, children: content });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("span", { className: cls, style, children: content });
}

// design-system/src/components/preload-devices.tsx
var INITIAL = { opacity: 0, y: 40 };
var FINAL = { opacity: 1, y: 0 };
var TRANSITION = { duration: 1.4, ease: [0.25, 0.4, 0.25, 1], delay: 0.4 };
var PRELOAD_DEVICES_MOTION = {
  initial: INITIAL,
  animate: FINAL,
  transition: TRANSITION
};
var PRELOAD_IN_VIEW_MOTION = {
  initial: INITIAL,
  whileInView: FINAL,
  viewport: { once: true, amount: 0.2 },
  transition: TRANSITION
};
var PRELOAD_FADE_IN_VIEW_MOTION = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, amount: 0.2 },
  transition: TRANSITION
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  BgFeatures,
  BtnOwn,
  COUNTRIES,
  CtaForm,
  CtaFormNewsletter,
  DescTag,
  DynamicGreenBadge,
  FAQ,
  FadeIn,
  Footer,
  Form,
  HeroEyebrow,
  IllCards,
  Nav,
  NavDropdown,
  PRELOAD_DEVICES_MOTION,
  PRELOAD_FADE_IN_VIEW_MOTION,
  PRELOAD_IN_VIEW_MOTION,
  PageEntry,
  PhoneField,
  Quiz,
  SectionHeading,
  SliderCard,
  StatusPill,
  Tag
});
