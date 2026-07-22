// design-system/src/components/FadeIn.tsx
import { useEffect, useRef } from "react";
import { jsx } from "react/jsx-runtime";
function FadeIn({ children, className = "" }) {
  const ref = useRef(null);
  useEffect(() => {
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
  return /* @__PURE__ */ jsx("div", { ref, className, children });
}

// design-system/src/components/Footer.tsx
import { Fragment } from "react";
import { Fragment as Fragment2, jsx as jsx2, jsxs } from "react/jsx-runtime";
var OFFICES = [
  { city: "San Francisco", address: "548 Market St, San Francisco, California, 94104, United States" },
  { city: "Dubai", address: "The One Tower, 23rd Floor, Office 13, Dubai, United Arab Emirates" },
  // Astana address per src/pages/Contacts.tsx (single source of truth for office addresses).
  { city: "Astana", address: "Republic of Kazakhstan, Astana city, Yessil district, Mangilik El avenue, building 55/23, block C4.4, office No.338" }
];
var CONTACT_EMAIL = "info@axevil.com";
var SOCIALS = [
  {
    name: "Telegram",
    path: "M21.9 4.3 19 19.4c-.2 1-.8 1.2-1.6.8l-4.4-3.3-2.2 2.1c-.2.2-.4.4-.9.4l.3-4.6L18.6 7c.4-.3-.1-.5-.6-.2L7.6 13.3l-4.4-1.4c-1-.3-1-.9.2-1.4l17-6.6c.8-.3 1.5.2 1.5 1.4Z"
  },
  {
    name: "LinkedIn",
    path: "M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM3 9.75h4v11.5H3V9.75Zm6.5 0h3.83v1.57h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.5 4.78 5.76v6.12h-4v-5.43c0-1.3-.02-2.96-1.87-2.96-1.87 0-2.16 1.4-2.16 2.86v5.53h-4V9.75Z"
  },
  {
    name: "Instagram",
    path: "M12 2.2c3.2 0 3.6 0 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.25.07 1.63.07 4.81s-.01 3.56-.07 4.81c-.05 1.17-.25 1.8-.41 2.23a3.7 3.7 0 0 1-.9 1.38c-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.25.06-1.63.07-4.85.07s-3.6-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.16 15.56 2.15 15.18 2.15 12s.01-3.56.07-4.81c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.4 2.21 8.8 2.2 12 2.2Zm0 1.8c-3.14 0-3.5.01-4.74.07-1.14.05-1.76.24-2.17.4-.55.21-.94.47-1.35.88-.41.41-.67.8-.88 1.35-.16.41-.35 1.03-.4 2.17C2.4 10.1 2.39 10.46 2.39 12s.01 1.9.07 3.13c.05 1.14.24 1.76.4 2.17.21.55.47.94.88 1.35.41.41.8.67 1.35.88.41.16 1.03.35 2.17.4 1.24.06 1.6.07 4.74.07s3.5-.01 4.74-.07c1.14-.05 1.76-.24 2.17-.4.55-.21.94-.47 1.35-.88.41-.41.67-.8.88-1.35.16-.41.35-1.03.4-2.17.06-1.24.07-1.6.07-3.13s-.01-1.9-.07-3.13c-.05-1.14-.24-1.76-.4-2.17a3.6 3.6 0 0 0-.88-1.35 3.6 3.6 0 0 0-1.35-.88c-.41-.16-1.03-.35-2.17-.4C15.5 4.01 15.14 4 12 4Zm0 3.03a4.97 4.97 0 1 1 0 9.94 4.97 4.97 0 0 1 0-9.94Zm0 1.8a3.17 3.17 0 1 0 0 6.34 3.17 3.17 0 0 0 0-6.34Zm5.17-3.2a1.16 1.16 0 1 1 0 2.32 1.16 1.16 0 0 1 0-2.32Z"
  }
];
var NAV_COLUMNS = [
  // Wealth Manager + Retail Investors hidden for v1 (2026-06-30).
  // Invest column removed per client feedback 2026-07-08.
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
    /* @__PURE__ */ jsxs(Fragment2, { children: [
      "Axevil Capital, LLC is a US-registered company",
      " ",
      /* @__PURE__ */ jsx2(
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
  [
    "FOR ALL INVESTORS GENERALLY:",
    "The Company's activities focus on attracting investments in mature venture projects at the stage of sustainable business development, close to IPO exit.",
    "The Company does not guarantee profit generation. Investments involve risks, including the possibility of returns below expectations, which cannot be guaranteed."
  ],
  [
    "NOTICE TO INVESTORS IN THE UNITED STATES:",
    "\u2014 Investment interest offerings are conducted as private placements and are not subject to registration under US securities laws.",
    "\u2014 Available only to accredited investors.",
    "\u2014 Such securities may have transfer and resale restrictions.",
    "\u2014 Investments carry a high level of financial risk.",
    "\u2014 Independent legal, tax, and financial consultation is strongly recommended before making investment decisions."
  ],
  [
    "NOTICE TO RESIDENTS OF THE UNITED ARAB EMIRATES (UAE):",
    "\u2014 Investment interest offerings are not public in the UAE.",
    "\u2014 Directed only to qualified institutional investors.",
    "\u2014 Interests are not registered or approved by the UAE Central Bank, SCA, or other regulators."
  ],
  [
    "NOTICE TO RESIDENTS OF ITALY:",
    "\u2014 Interest offerings are not authorized by Italian regulators under Decreto Legislativo No. 58/1998.",
    "\u2014 Interests may not be offered, distributed, or sold to the general public."
  ],
  [
    "NOTICE TO RESIDENTS OF THE UNITED KINGDOM:",
    "\u2014 SPVs constitute unregulated collective investment schemes under FSMA 2000.",
    '\u2014 Promotion is restricted and permitted only to "relevant persons" within the meaning of Financial Promotion Order 2005 (Articles 19(5), 49(2)(a)-(d)).',
    "\u2014 Most standard protections of the UK regulatory system do not apply.",
    "\u2014 Compensation under the UK Financial Services Compensation Scheme is not provided."
  ],
  [
    "NOTICE TO RESIDENTS OF SWEDEN:",
    "\u2014 The partnership is not an investment fund under the Swedish Investment Funds Act (2004:46).",
    "\u2014 The offering is not subject to registration under the Swedish Financial Instruments Trading Act (1991:980).",
    "\u2014 Interests are not approved and will not be approved by the Swedish Financial Supervisory Authority."
  ],
  [
    "NOTICE TO RESIDENTS OF SWITZERLAND:",
    "\u2014 SPVs are not approved by FINMA as foreign collective investment schemes under Article 120 CISA. Interests may not be publicly offered or distributed in Switzerland.",
    "\u2014 SPVs are not regulated by Swiss authorities.",
    '\u2014 Interests are available only to "qualified investors" under CISA or a limited circle of persons without public offering.',
    "\u2014 By continuing, you confirm that:",
    "1. You qualify as an accredited/qualified investor under the laws of your jurisdiction (e.g., in the U.S. an annual income exceeding $200,000 individually or $300,000 jointly, or net worth above $1 million, excluding primary residence).",
    "2. You are legally permitted to access this information in your jurisdiction.",
    "3. You understand that private investments involve a high degree of risk, including the risk of total loss of capital."
  ]
];
var COPYRIGHT = "Axevil Capital 2021\u22122026 \u2014 All Rights Reserved";
var DEFAULT_COMPLIANCE = /* @__PURE__ */ jsx2(Fragment2, { children: COMPLIANCE_BLOCKS.map((lines, bi) => /* @__PURE__ */ jsxs(Fragment, { children: [
  bi > 0 && /* @__PURE__ */ jsxs(Fragment2, { children: [
    /* @__PURE__ */ jsx2("br", {}),
    /* @__PURE__ */ jsx2("br", {})
  ] }),
  lines.map((line, li) => /* @__PURE__ */ jsxs(Fragment, { children: [
    li > 0 && /* @__PURE__ */ jsx2("br", {}),
    line
  ] }, li))
] }, bi)) });
function Footer({ logoHref = "/", links, compliance = DEFAULT_COMPLIANCE } = {}) {
  return /* @__PURE__ */ jsx2("footer", { className: "w-full bg-page-bg border-t border-outline-100", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto w-full container-px max-w-content flex flex-col gap-spacing-2 py-10 md:py-12 lg:pt-16 lg:pb-12", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10 md:gap-12 lg:gap-0 pb-spacing-2 border-b border-outline-100", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col shrink-0", style: { gap: "2rem" }, children: [
        /* @__PURE__ */ jsx2("a", { href: logoHref, "aria-label": "AXEVIL Capital", className: "inline-block", children: /* @__PURE__ */ jsx2(
          "img",
          {
            src: "/img/logos/footer-logo.svg",
            alt: "AXEVIL",
            className: "footer-logo",
            style: { width: "12.9375rem", height: "2rem", objectFit: "contain", objectPosition: "left" }
          }
        ) }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center", style: { gap: "0.5rem" }, children: [
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: `mailto:${CONTACT_EMAIL}`,
              className: "group inline-flex items-center rounded-0.5 bg-black-500 hover:bg-black-400 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-white",
              style: { gap: "0.625rem", padding: "0.625rem 0.875rem" },
              children: [
                /* @__PURE__ */ jsx2(
                  "img",
                  {
                    src: "/icons/Email.svg",
                    alt: "",
                    "aria-hidden": "true",
                    style: { width: "1.25rem", height: "1.25rem", filter: "brightness(0) invert(1)" }
                  }
                ),
                /* @__PURE__ */ jsx2(
                  "span",
                  {
                    className: "font-inter-tight font-semibold text-m text-white whitespace-nowrap",
                    style: { letterSpacing: "-0.01em" },
                    children: CONTACT_EMAIL
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsx2("ul", { className: "flex items-center list-none p-0 m-0", style: { gap: "0.5rem" }, children: SOCIALS.map((s) => {
            const glyph = /* @__PURE__ */ jsx2("svg", { viewBox: "0 0 24 24", "aria-hidden": "true", style: { width: "1.25rem", height: "1.25rem" }, children: /* @__PURE__ */ jsx2("path", { d: s.path, fill: "currentColor" }) });
            const box = "flex items-center justify-center rounded-0.5 bg-black-500 text-white";
            const size = { width: "2.5rem", height: "2.5rem" };
            return /* @__PURE__ */ jsx2("li", { children: s.href ? /* @__PURE__ */ jsx2(
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
              /* @__PURE__ */ jsx2("span", { role: "img", "aria-label": s.name, title: s.name, className: box, style: size, children: glyph })
            ) }, s.name);
          }) })
        ] }),
        /* @__PURE__ */ jsx2("div", { className: "flex flex-col sm:flex-row lg:flex-col gap-6 sm:gap-10 lg:gap-6", children: OFFICES.map((o) => /* @__PURE__ */ jsxs("address", { className: "not-italic flex flex-col", style: { gap: "0.5rem", maxWidth: "16rem" }, children: [
          /* @__PURE__ */ jsx2("span", { className: "font-inter-tight font-medium text-s-med text-white", style: { letterSpacing: "-0.01em" }, children: o.city }),
          /* @__PURE__ */ jsx2("span", { className: "font-inter-tight font-normal text-s-med text-white-400", style: { lineHeight: 1.5 }, children: o.address })
        ] }, o.city)) })
      ] }),
      links ? /* @__PURE__ */ jsx2("nav", { className: "flex flex-wrap lg:justify-end font-inter-tight font-medium text-white", style: { gap: "1rem 1.5rem" }, "aria-label": "Footer", children: links.map((l) => /* @__PURE__ */ jsx2("a", { href: l.href, className: "text-s-med text-white-400 hover:text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-white whitespace-nowrap", children: l.label }, l.href)) }) : (
        /* ── nav-wrapper (Figma 2605:6690) — columns gap 3rem, heading→list 2rem, items 1rem ── */
        /* @__PURE__ */ jsx2(
          "nav",
          {
            className: "flex flex-wrap gap-x-spacing-3 gap-y-10 font-inter-tight font-medium text-white",
            "aria-label": "Footer",
            children: NAV_COLUMNS.map((col) => /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-spacing-2 items-start shrink-0", children: [
              /* @__PURE__ */ jsx2("h2", { className: "text-m text-white whitespace-nowrap m-0 font-medium", children: col.heading }),
              /* @__PURE__ */ jsx2("ul", { className: "flex flex-col gap-spacing-1 items-start text-xs text-white-400 list-none p-0 m-0", children: col.items.map((item) => /* @__PURE__ */ jsx2("li", { children: "onClick" in item ? /* @__PURE__ */ jsx2(
                "button",
                {
                  type: "button",
                  onClick: item.onClick,
                  className: "hover:text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-white whitespace-nowrap text-left",
                  children: item.label
                }
              ) : /* @__PURE__ */ jsx2(
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
    /* @__PURE__ */ jsxs(
      "p",
      {
        className: "font-inter-tight font-medium text-xs text-black-800 w-full",
        style: { wordBreak: "break-word" },
        children: [
          compliance,
          compliance && /* @__PURE__ */ jsxs(Fragment2, { children: [
            /* @__PURE__ */ jsx2("br", {}),
            /* @__PURE__ */ jsx2("br", {})
          ] }),
          COPYRIGHT
        ]
      }
    )
  ] }) });
}

// design-system/src/components/Nav.tsx
import { useState as useState2, useEffect as useEffect2 } from "react";

// design-system/src/components/btn-own.tsx
import { useState } from "react";
import { jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";
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
  const [hovered, setHovered] = useState(false);
  const sizeStyle = size ? SIZE_STYLES[size] : {};
  const variantStyle = VARIANT_BASE[variant];
  const iconSrc = icon ?? "/icons/Key.svg";
  const iconSize = size === "XS" ? "0.875rem" : size === "S" ? "1rem" : "1.25rem";
  const iconFilter = variant === "primary" ? "brightness(0)" : "none";
  const hoverStyle = variant === "secondary" ? { background: hovered ? BLACK_600 : BLACK_400, transition: "background-color 0.5s ease-in-out" } : {};
  const hoverClass = variant === "primary" ? "hover:shadow-[0_0_24px_rgba(255,255,255,0.25)] hover:scale-[1.02]" : "";
  return /* @__PURE__ */ jsxs2(
    "button",
    {
      type,
      disabled,
      onClick: () => {
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
        !hideIcon && /* @__PURE__ */ jsx3(
          "img",
          {
            src: iconSrc,
            alt: "",
            "aria-hidden": "true",
            style: { width: iconSize, height: iconSize, filter: iconFilter }
          }
        ),
        /* @__PURE__ */ jsxs2("span", { className: "btn-own-slide", children: [
          /* @__PURE__ */ jsx3("span", { className: "btn-own-slide-text", children }),
          /* @__PURE__ */ jsx3("span", { className: "btn-own-slide-text", "aria-hidden": "true", children })
        ] })
      ]
    }
  );
}

// design-system/src/components/Nav.tsx
import { Fragment as Fragment3, jsx as jsx4, jsxs as jsxs3 } from "react/jsx-runtime";
var NAV_LINKS = [
  { label: "About", href: "/about-us" },
  { label: "Market Intelligence", href: "/companies" },
  { label: "Team", href: "/team" },
  { label: "Contact", href: "/contacts" }
];
function Nav({ links, logoHref = "/", ctaLabel = "Request access", onCtaClick } = {}) {
  const cta = onCtaClick ?? (() => window.dispatchEvent(new CustomEvent("open-quiz")));
  const navLinks = links ?? NAV_LINKS;
  const [menuOpen, setMenuOpen] = useState2(false);
  useEffect2(() => {
    const close = () => setMenuOpen(false);
    window.addEventListener("popstate", close);
    window.addEventListener("pushstate", close);
    return () => {
      window.removeEventListener("popstate", close);
      window.removeEventListener("pushstate", close);
    };
  }, []);
  useEffect2(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);
  const [hidden, setHidden] = useState2(false);
  useEffect2(() => {
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
  const [mounted, setMounted] = useState2(false);
  useEffect2(() => {
    setMounted(true);
  }, []);
  return /* @__PURE__ */ jsxs3(Fragment3, { children: [
    /* @__PURE__ */ jsx4(
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
        children: /* @__PURE__ */ jsxs3(
          "div",
          {
            className: "relative mx-auto w-full h-[3.75rem] md:h-[5rem] flex items-center justify-between container-px",
            style: { maxWidth: "90rem" },
            children: [
              /* @__PURE__ */ jsx4("a", { href: logoHref, "aria-label": "AXEVIL Capital", className: "shrink-0", children: /* @__PURE__ */ jsx4(
                "img",
                {
                  src: "/img/logos/footer-logo.svg",
                  alt: "AXEVIL",
                  className: "w-[7.5rem] h-[1.125rem] lg:w-[9.6875rem] lg:h-6"
                }
              ) }),
              /* @__PURE__ */ jsx4("div", { className: "hidden lg:flex items-center gap-1", children: navLinks.map(({ label, href }) => /* @__PURE__ */ jsx4(
                "a",
                {
                  href,
                  className: "flex items-center px-4 py-2 rounded-full font-inter-tight font-medium text-s-med text-white opacity-80 hover:opacity-100 hover:bg-white/5 transition-[opacity,background-color] duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white",
                  children: label
                },
                label
              )) }),
              /* @__PURE__ */ jsxs3("div", { className: "flex items-center gap-2 shrink-0", children: [
                /* @__PURE__ */ jsx4(
                  BtnOwn,
                  {
                    size: "S",
                    hideIcon: true,
                    className: "hidden sm:flex lg:hidden",
                    onClick: cta,
                    children: ctaLabel
                  }
                ),
                /* @__PURE__ */ jsx4(
                  BtnOwn,
                  {
                    size: "XS",
                    hideIcon: true,
                    className: "hidden lg:flex",
                    onClick: cta,
                    children: ctaLabel
                  }
                ),
                /* @__PURE__ */ jsxs3(
                  "button",
                  {
                    type: "button",
                    "aria-label": menuOpen ? "Close menu" : "Open menu",
                    "aria-expanded": menuOpen,
                    className: "lg:hidden flex flex-col items-center justify-center gap-[0.3125rem] w-11 h-11 rounded-full transition-colors hover:bg-white/5",
                    onClick: () => setMenuOpen((o) => !o),
                    children: [
                      /* @__PURE__ */ jsx4("span", { className: `block w-5 h-[0.125rem] bg-white transition-transform duration-[250ms] ${menuOpen ? "translate-y-[0.21875rem] rotate-45" : ""}` }),
                      /* @__PURE__ */ jsx4("span", { className: `block w-5 h-[0.125rem] bg-white transition-transform duration-[250ms] ${menuOpen ? "-translate-y-[0.21875rem] -rotate-45" : ""}` })
                    ]
                  }
                )
              ] })
            ]
          }
        )
      }
    ),
    menuOpen && /* @__PURE__ */ jsxs3(
      "div",
      {
        className: "fixed inset-x-0 bottom-0 top-[3.75rem] md:top-[5rem] z-40 lg:hidden flex flex-col",
        style: { background: "var(--black-200)" },
        children: [
          /* @__PURE__ */ jsx4(
            "div",
            {
              className: "flex flex-col flex-1 overflow-y-auto",
              style: { padding: "2rem 1rem 1rem", gap: "2rem" },
              children: navLinks.map(({ label, href }) => /* @__PURE__ */ jsx4(
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
          /* @__PURE__ */ jsx4("div", { style: { padding: "1rem" }, children: /* @__PURE__ */ jsx4(
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
import { useState as useState5, useEffect as useEffect4 } from "react";
import { motion as motion3, AnimatePresence as AnimatePresence2 } from "framer-motion";

// design-system/src/components/quiz-overlay.tsx
import { motion } from "framer-motion";
import { jsx as jsx5 } from "react/jsx-runtime";
function QuizOverlay({ children, maxWidth = "23.75rem" }) {
  return /* @__PURE__ */ jsx5(
    motion.div,
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
      children: /* @__PURE__ */ jsx5(
        motion.div,
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
import { jsx as jsx6, jsxs as jsxs4 } from "react/jsx-runtime";
function QuizSuccessState({ heading, button, onClose, illustration }) {
  return /* @__PURE__ */ jsxs4(
    "div",
    {
      className: `relative flex flex-col md:flex-row items-center overflow-hidden bg-black-400 rounded-1 w-full pt-[clamp(1rem,3vw,1.5rem)] pl-[clamp(1rem,3vw,1.5rem)] pr-[clamp(1rem,3vw,1.5rem)] pb-0 ${illustration ? "md:w-[45rem] md:h-[20rem] md:items-start md:justify-between md:pl-6 md:pr-16 md:py-6" : "md:pb-[clamp(1rem,3vw,1.5rem)]"}`,
      style: { gap: "2rem" },
      children: [
        onClose && /* @__PURE__ */ jsx6(
          "button",
          {
            type: "button",
            onClick: onClose,
            "aria-label": "Close",
            className: "absolute flex items-center justify-center shrink-0 bg-black-600 rounded-full outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-white",
            style: { top: "1rem", right: "1rem", width: "2.75rem", height: "2.75rem" },
            children: /* @__PURE__ */ jsx6("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ jsx6("path", { d: "M4 4L12 12M12 4L4 12", stroke: "white", strokeWidth: "1.5", strokeLinecap: "round" }) })
          }
        ),
        /* @__PURE__ */ jsxs4(
          "div",
          {
            className: `flex flex-col items-center w-full md:min-w-0 ${illustration ? "md:items-start md:justify-end md:h-full md:flex-1" : "md:flex-1"}`,
            style: { gap: "1rem" },
            children: [
              /* @__PURE__ */ jsx6(
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
              /* @__PURE__ */ jsxs4(
                "div",
                {
                  className: `flex flex-col items-center w-full ${illustration ? "md:items-start" : ""}`,
                  style: { gap: "1.5rem" },
                  children: [
                    /* @__PURE__ */ jsx6(
                      "p",
                      {
                        className: `font-inter-tight font-medium text-h4 text-white text-center w-full whitespace-pre-wrap ${illustration ? "md:text-left" : ""}`,
                        children: heading
                      }
                    ),
                    /* @__PURE__ */ jsx6(
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
        illustration && /* @__PURE__ */ jsx6(
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
import { useState as useState4 } from "react";

// design-system/src/components/form-field.tsx
import { jsx as jsx7, jsxs as jsxs5 } from "react/jsx-runtime";
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
  children
}) {
  return /* @__PURE__ */ jsxs5("div", { className: `flex flex-col w-full ${className ?? ""}`, style: { gap: "0.375rem" }, children: [
    /* @__PURE__ */ jsx7(
      "div",
      {
        className: "flex items-center w-full",
        style: {
          background: "var(--black-500)",
          height,
          borderRadius: "1rem",
          padding: "0 1rem",
          border: error ? "1px solid rgba(239,68,68,0.5)" : "none"
        },
        children: input ?? children
      }
    ),
    error && /* @__PURE__ */ jsx7("p", { className: "font-inter-tight font-medium text-red-400 text-xs", children: error })
  ] });
}

// design-system/src/components/phone-field.tsx
import { useEffect as useEffect3, useRef as useRef2, useState as useState3 } from "react";
import { motion as motion2, AnimatePresence } from "framer-motion";
import { jsx as jsx8, jsxs as jsxs6 } from "react/jsx-runtime";
var COUNTRIES = [
  { code: "us", dial: "+1", name: "United States" },
  { code: "gb", dial: "+44", name: "United Kingdom" },
  { code: "ae", dial: "+971", name: "UAE" },
  { code: "ch", dial: "+41", name: "Switzerland" },
  { code: "sg", dial: "+65", name: "Singapore" },
  { code: "hk", dial: "+852", name: "Hong Kong" },
  { code: "de", dial: "+49", name: "Germany" },
  { code: "fr", dial: "+33", name: "France" },
  { code: "ca", dial: "+1", name: "Canada" },
  { code: "au", dial: "+61", name: "Australia" },
  { code: "jp", dial: "+81", name: "Japan" },
  { code: "kr", dial: "+82", name: "South Korea" },
  { code: "il", dial: "+972", name: "Israel" },
  { code: "in", dial: "+91", name: "India" },
  { code: "br", dial: "+55", name: "Brazil" }
];
function PhoneField({ value, onChange, countryCode, onCountryChange, error }) {
  const [open, setOpen] = useState3(false);
  const ref = useRef2(null);
  const selected = COUNTRIES.find((c) => c.code === countryCode) ?? COUNTRIES[0];
  useEffect3(() => {
    function onClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);
  return /* @__PURE__ */ jsx8(
    Field,
    {
      height: "3.5rem",
      error,
      input: /* @__PURE__ */ jsxs6("div", { className: "flex items-center w-full", style: { gap: "0.5rem" }, children: [
        /* @__PURE__ */ jsxs6("div", { ref, className: "relative shrink-0", children: [
          /* @__PURE__ */ jsxs6(
            "button",
            {
              type: "button",
              "aria-haspopup": "listbox",
              "aria-expanded": open,
              "aria-label": "Country code",
              onClick: () => setOpen((o) => !o),
              onKeyDown: (e) => {
                if (e.key === "Escape") setOpen(false);
                else if ((e.key === "Enter" || e.key === " " || e.key === "ArrowDown") && !open) {
                  e.preventDefault();
                  setOpen(true);
                }
              },
              className: "flex items-center cursor-pointer select-none outline-none",
              style: { gap: "0.375rem" },
              children: [
                /* @__PURE__ */ jsx8(
                  "img",
                  {
                    src: `https://flagcdn.com/${selected.code}.svg`,
                    alt: "",
                    "aria-hidden": "true",
                    className: "rounded-full object-cover shrink-0",
                    style: { width: "1.125rem", height: "1.125rem" }
                  }
                ),
                /* @__PURE__ */ jsx8("span", { className: "font-inter-tight font-medium text-m text-white whitespace-nowrap", children: selected.dial }),
                /* @__PURE__ */ jsx8(
                  motion2.svg,
                  {
                    animate: { rotate: open ? 180 : 0 },
                    transition: { duration: 0.2, ease: [0.4, 0, 0.2, 1] },
                    width: "14",
                    height: "14",
                    viewBox: "0 0 20 20",
                    fill: "none",
                    "aria-hidden": "true",
                    style: { flexShrink: 0, display: "block" },
                    children: /* @__PURE__ */ jsx8("path", { d: "M5 8L10 13L15 8", stroke: "rgba(255,255,255,0.4)", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsx8(AnimatePresence, { children: open && /* @__PURE__ */ jsx8(
            motion2.div,
            {
              role: "listbox",
              "aria-label": "Country code",
              initial: { opacity: 0, y: -6 },
              animate: { opacity: 1, y: 0 },
              exit: { opacity: 0, y: -6 },
              transition: { duration: 0.15, ease: [0.4, 0, 0.2, 1] },
              className: "absolute left-0 z-[1000] overflow-y-auto",
              style: {
                top: "calc(100% + 0.5rem)",
                marginLeft: "-0.75rem",
                width: "12.5rem",
                maxHeight: "15rem",
                borderRadius: "1rem",
                background: "var(--black-500)"
              },
              children: COUNTRIES.map((c, i) => /* @__PURE__ */ jsxs6(
                "button",
                {
                  type: "button",
                  role: "option",
                  "aria-selected": c.code === selected.code,
                  onClick: () => {
                    onCountryChange(c.code);
                    setOpen(false);
                  },
                  className: "group flex items-center cursor-pointer transition-colors hover:bg-white/5 font-inter-tight font-medium text-m w-full text-left outline-none",
                  style: {
                    gap: "0.5rem",
                    padding: "0 1rem",
                    height: "2.75rem",
                    background: "transparent",
                    borderBottom: i < COUNTRIES.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none",
                    color: "var(--white-400)"
                  },
                  onMouseEnter: (e) => e.currentTarget.style.color = "var(--white-100)",
                  onMouseLeave: (e) => e.currentTarget.style.color = "var(--white-400)",
                  children: [
                    /* @__PURE__ */ jsx8(
                      "img",
                      {
                        src: `https://flagcdn.com/${c.code}.svg`,
                        alt: "",
                        "aria-hidden": "true",
                        className: "rounded-full object-cover shrink-0",
                        style: { width: "1.125rem", height: "1.125rem" }
                      }
                    ),
                    /* @__PURE__ */ jsx8("span", { className: "truncate", children: c.name }),
                    /* @__PURE__ */ jsx8("span", { className: "shrink-0", style: { marginLeft: "auto" }, children: c.dial })
                  ]
                },
                c.code
              ))
            }
          ) })
        ] }),
        /* @__PURE__ */ jsx8("span", { className: "shrink-0", style: { width: "1px", height: "1.25rem", background: "rgba(255,255,255,0.1)" } }),
        /* @__PURE__ */ jsx8(
          "input",
          {
            type: "tel",
            inputMode: "tel",
            autoComplete: "tel-national",
            "aria-label": "Phone number",
            placeholder: "Phone Number",
            value,
            onChange: (e) => onChange(e.target.value),
            className: inputClass(!!error)
          }
        )
      ] })
    }
  );
}

// design-system/src/lib/submitLead.ts
var QUIZ_MANAGER_ID = 999;
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
  const utm = readUtm();
  const { source_l1, source_l2 } = classifySource(utm.source, utm.medium);
  const payload = {
    name: input.name,
    email: input.email || void 0,
    phone: input.phone || void 0,
    lead_type: "partner",
    manager_id: QUIZ_MANAGER_ID,
    source_l1,
    source_l2,
    // Real ad campaigns keep their utm_campaign value; anything without one (organic/direct
    // visits, which is most quiz traffic) is tagged "site-quiz" instead of left blank, so these
    // leads are identifiable as quiz submissions in the CRM regardless of channel.
    source_l3: utm.campaign || "site-quiz",
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
    if (!res.ok) return { ok: false, error: data.error ?? `http_${res.status}` };
    return { ok: true, action: data.action };
  } catch {
    return { ok: false, error: "network_error" };
  }
}

// design-system/src/components/quiz-lead-form.tsx
import { jsx as jsx9, jsxs as jsxs7 } from "react/jsx-runtime";
function QuizLeadForm({ onClose, onSubmit }) {
  const [data, setData] = useState4({ name: "", email: "", phone: "", countryCode: "us" });
  const [errors, setErrors] = useState4({});
  const [submitting, setSubmitting] = useState4(false);
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
  return /* @__PURE__ */ jsxs7("div", { className: "flex flex-col items-start bg-black-400 rounded-1 w-full", style: { gap: "1.5rem", padding: "1.5rem" }, children: [
    /* @__PURE__ */ jsxs7("div", { className: "flex items-center justify-between w-full", children: [
      /* @__PURE__ */ jsxs7("p", { className: "font-inter-tight font-medium text-h4 text-white whitespace-pre-line", children: [
        "Fill in the form to get the access",
        /* @__PURE__ */ jsx9("br", {}),
        /* @__PURE__ */ jsx9("span", { className: "whitespace-nowrap", children: "to private markets" })
      ] }),
      /* @__PURE__ */ jsx9(
        "button",
        {
          type: "button",
          onClick: onClose,
          "aria-label": "Close",
          className: "flex items-center justify-center shrink-0 bg-black-600 rounded-full outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-white",
          style: { width: "2.75rem", height: "2.75rem" },
          children: /* @__PURE__ */ jsx9("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ jsx9("path", { d: "M4 4L12 12M12 4L4 12", stroke: "white", strokeWidth: "1.5", strokeLinecap: "round" }) })
        }
      )
    ] }),
    /* @__PURE__ */ jsxs7("form", { className: "flex flex-col items-start w-full", style: { gap: "1rem" }, onSubmit: handleSubmit, noValidate: true, children: [
      /* @__PURE__ */ jsxs7("div", { className: "flex flex-col items-start w-full", style: { gap: "0.5rem" }, children: [
        /* @__PURE__ */ jsx9(
          Field,
          {
            height: "3.5rem",
            error: errors.name,
            input: /* @__PURE__ */ jsx9(
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
        /* @__PURE__ */ jsx9(
          Field,
          {
            height: "3.5rem",
            error: errors.email,
            input: /* @__PURE__ */ jsx9(
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
        /* @__PURE__ */ jsx9(
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
      errors.submit && /* @__PURE__ */ jsx9("p", { className: "font-inter-tight font-medium text-red-400 text-xs", children: errors.submit }),
      /* @__PURE__ */ jsx9(BtnOwn, { size: "S", className: "w-full", hideIcon: true, type: "submit", disabled: submitting, children: submitting ? "Sending\u2026" : "Send form" }),
      /* @__PURE__ */ jsxs7("p", { className: "font-inter-tight font-medium text-xs text-white-400", style: { lineHeight: 1.4 }, children: [
        "By submitting this form, you agree that Axevil Capital, LLC will process the information you provide to respond to your enquiry, as described in the",
        " ",
        /* @__PURE__ */ jsx9("a", { href: "/privacy", className: "underline hover:text-white transition-colors", children: "Privacy Policy" }),
        "."
      ] })
    ] })
  ] });
}

// design-system/src/components/Quiz.tsx
import { jsx as jsx10, jsxs as jsxs8 } from "react/jsx-runtime";
function useIsBelowLg() {
  const [below, setBelow] = useState5(() => window.innerWidth < 1024);
  useEffect4(() => {
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
    caption: "SpaceX, xAI, Anthropic, Stripe, Cursor \u2014 and 30 more top companies in portfolio",
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
  return /* @__PURE__ */ jsxs8(
    motion3.button,
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
        /* @__PURE__ */ jsx10(
          "span",
          {
            className: "font-inter-tight font-medium text-sm md:text-base flex-1",
            style: { color: selected ? "var(--white-100)" : "var(--white-400)", lineHeight: 1.3 },
            children: opt
          }
        ),
        /* @__PURE__ */ jsx10(
          motion3.img,
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
  const [slide, setSlide] = useState5(0);
  const [progress, setProgress] = useState5(0);
  const [q1, setQ1] = useState5(null);
  const [q2, setQ2] = useState5(null);
  const [step, setStep] = useState5("questions");
  const isBelowLg = useIsBelowLg();
  useEffect4(() => {
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
  return /* @__PURE__ */ jsxs8(
    motion3.div,
    {
      className: "fixed inset-0 z-[100] flex flex-col lg:flex-row overflow-y-auto lg:overflow-hidden bg-page-bg",
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      style: { minHeight: "100svh" },
      children: [
        /* @__PURE__ */ jsx10(
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
            children: /* @__PURE__ */ jsxs8("div", { className: "flex flex-col w-full h-full lg:overflow-hidden lg:justify-center", style: { maxWidth: "47.5rem" }, children: [
              /* @__PURE__ */ jsx10(AnimatePresence2, { mode: "wait", children: /* @__PURE__ */ jsxs8(
                motion3.div,
                {
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  exit: { opacity: 0, y: -20 },
                  transition: { duration: 0.45, ease: [0.4, 0, 0.2, 1] },
                  className: "flex flex-col lg:overflow-hidden",
                  style: { gap: "clamp(1.5rem, 2.5vw, 1.5rem)" },
                  children: [
                    /* @__PURE__ */ jsx10("div", { className: "flex flex-col shrink-0", style: { gap: "clamp(0.75rem, 1.6vw, 1.5rem)" }, children: /* @__PURE__ */ jsx10(
                      "h2",
                      {
                        "data-no-reveal": true,
                        className: "font-inter-tight font-semibold text-h3 text-white-100 whitespace-pre-line",
                        children: cur.heading
                      }
                    ) }),
                    /* @__PURE__ */ jsxs8(
                      "div",
                      {
                        className: "flex flex-col rounded-3xl shrink-0 overflow-hidden w-full bg-surface-0 gap-spacing-0.75 p-spacing-1 md:p-spacing-1.5",
                        style: { height: isBelowLg ? cur.id === 2 ? "17.5rem" : "13.125rem" : cur.id === 2 ? "25rem" : "18.75rem" },
                        children: [
                          /* @__PURE__ */ jsx10(
                            "div",
                            {
                              className: "flex justify-center flex-1",
                              style: { overflow: "hidden", minHeight: 0, alignItems: cur.id === 2 ? "center" : "flex-start" },
                              children: /* @__PURE__ */ jsx10("div", { style: { position: "relative", width: "100%", height: FIXED_IMG_HEIGHT[cur.id], overflow: FIXED_IMG_HEIGHT[cur.id] ? "hidden" : void 0 }, children: /* @__PURE__ */ jsxs8("div", { style: { position: "relative", width: "100%" }, children: [
                                /* @__PURE__ */ jsx10(
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
                                /* @__PURE__ */ jsx10(
                                  "span",
                                  {
                                    "aria-hidden": "true",
                                    style: { position: "absolute", left: "43.4%", top: "14.8%", width: "4.5%", height: "8.9%", background: "var(--black-500)" }
                                  }
                                )
                              ] }) })
                            }
                          ),
                          (cur.subheading || cur.caption) && /* @__PURE__ */ jsxs8("div", { className: "shrink-0 flex flex-col gap-spacing-0.75", children: [
                            cur.subheading && /* @__PURE__ */ jsx10("h3", { className: "font-inter-tight font-medium text-white text-h4", children: cur.subheading }),
                            cur.caption ? cur.id === 2 ? /* @__PURE__ */ jsx10("p", { className: "font-inter-tight font-normal text-paragraph whitespace-pre-line text-white-400", children: cur.caption }) : /* @__PURE__ */ jsx10("p", { className: "font-inter-tight font-medium text-h4 whitespace-pre-line text-white", children: cur.caption }) : null
                          ] })
                        ]
                      }
                    )
                  ]
                },
                slide
              ) }),
              /* @__PURE__ */ jsx10(
                "div",
                {
                  className: "flex shrink-0",
                  style: {
                    gap: "clamp(0.5rem, 1.4vw, 1.25rem)",
                    marginTop: "1.5rem",
                    paddingTop: "clamp(0.5rem, 1.6vw, 2rem)"
                  },
                  children: SLIDES.map((s, i) => /* @__PURE__ */ jsxs8("div", { className: "flex flex-col flex-1", style: { gap: "clamp(0.5rem, 1vw, 0.75rem)" }, children: [
                    /* @__PURE__ */ jsxs8("div", { className: "rounded-full overflow-hidden", style: { height: "0.1875rem", background: "rgba(255,255,255,0.15)" }, children: [
                      i < slide && /* @__PURE__ */ jsx10("div", { className: "h-full w-full bg-white" }),
                      i === slide && /* @__PURE__ */ jsx10(motion3.div, { className: "h-full bg-white", initial: { width: "0%" }, animate: { width: `${progress}%` }, transition: { duration: 0.05, ease: "linear" } })
                    ] }),
                    /* @__PURE__ */ jsx10("span", { className: `font-inter-tight font-medium text-xs md:text-s-med hidden md:inline truncate ${i <= slide ? "text-white" : "text-white/30"}`, children: s.label })
                  ] }, s.id))
                }
              )
            ] })
          }
        ),
        /* @__PURE__ */ jsx10(
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
            children: /* @__PURE__ */ jsxs8("div", { className: "flex flex-col w-full h-full", style: { maxWidth: "47.5rem" }, children: [
              /* @__PURE__ */ jsx10("div", { className: "flex justify-end shrink-0", style: { marginBottom: "clamp(1rem, 2.2vw, 2rem)" }, children: /* @__PURE__ */ jsx10(
                "button",
                {
                  type: "button",
                  onClick: onClose,
                  "aria-label": "Close",
                  className: "flex items-center justify-center shrink-0 bg-black-600 rounded-full outline-none transition-colors hover:bg-black-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white",
                  style: { width: "2.75rem", height: "2.75rem" },
                  children: /* @__PURE__ */ jsx10("svg", { width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ jsx10("path", { d: "M4 4L12 12M12 4L4 12", stroke: "white", strokeWidth: "1.5", strokeLinecap: "round" }) })
                }
              ) }),
              /* @__PURE__ */ jsx10("div", { className: "flex flex-col flex-1", style: { gap: "clamp(1.5rem, 3vw, 2.5rem)", justifyContent: "flex-start" }, children: /* @__PURE__ */ jsxs8("div", { className: "flex flex-col shrink-0", style: { gap: "clamp(1.25rem, 2.4vw, 2rem)" }, children: [
                /* @__PURE__ */ jsxs8("div", { className: "flex flex-col shrink-0", style: { gap: "clamp(0.75rem, 1.6vw, 1rem)" }, children: [
                  /* @__PURE__ */ jsx10(
                    "p",
                    {
                      className: "font-inter-tight font-medium text-h4 shrink-0",
                      style: { color: "var(--white-200)", letterSpacing: "-0.02em" },
                      children: "What best describes your role?"
                    }
                  ),
                  /* @__PURE__ */ jsx10("div", { className: "flex flex-col gap-2", children: Q1.map((opt, i) => /* @__PURE__ */ jsx10(AnswerBtn, { opt, selected: q1 === i, onClick: () => setQ1(q1 === i ? null : i) }, i)) })
                ] }),
                /* @__PURE__ */ jsxs8("div", { className: "flex flex-col shrink-0", style: { gap: "clamp(0.75rem, 1.6vw, 1rem)" }, children: [
                  /* @__PURE__ */ jsx10(
                    "p",
                    {
                      className: "font-inter-tight font-medium text-h4 shrink-0",
                      style: { color: "var(--white-200)", letterSpacing: "-0.02em" },
                      children: "Have you participated in private markets before?"
                    }
                  ),
                  /* @__PURE__ */ jsx10("div", { className: "flex flex-col gap-2", children: Q2.map((opt, i) => /* @__PURE__ */ jsx10(AnswerBtn, { opt, selected: q2 === i, onClick: () => setQ2(q2 === i ? null : i) }, i)) })
                ] })
              ] }) }),
              /* @__PURE__ */ jsxs8(
                "div",
                {
                  className: "flex items-center justify-between gap-2 mt-8 lg:mt-auto shrink-0",
                  style: { paddingTop: "clamp(1.5rem, 2.4vw, 2rem)" },
                  children: [
                    /* @__PURE__ */ jsx10(
                      "button",
                      {
                        type: "button",
                        onClick: onClose,
                        className: "flex items-center justify-center font-inter-tight font-semibold text-white outline-none transition-all duration-300 bg-surface-1 hover:bg-surface-mid rounded-2xl text-sm md:text-base h-12 md:h-14 px-5 md:px-6",
                        children: "Back"
                      }
                    ),
                    /* @__PURE__ */ jsx10(BtnOwn, { size: "S", hideIcon: true, className: "md:hidden", disabled: q1 === null || q2 === null, onClick: handleConfirm, children: "Confirm" }),
                    /* @__PURE__ */ jsx10(BtnOwn, { size: "M", hideIcon: true, className: "hidden md:flex", disabled: q1 === null || q2 === null, onClick: handleConfirm, children: "Confirm" })
                  ]
                }
              )
            ] })
          }
        ),
        /* @__PURE__ */ jsxs8(AnimatePresence2, { children: [
          step === "form" && /* @__PURE__ */ jsx10(QuizOverlay, { maxWidth: "37.5rem", children: /* @__PURE__ */ jsx10(QuizLeadForm, { onClose: () => setStep("questions"), onSubmit: () => setStep("success-thanks") }) }, "form"),
          step === "success-app" && /* @__PURE__ */ jsx10(QuizOverlay, { maxWidth: "45rem", children: /* @__PURE__ */ jsx10(
            QuizSuccessState,
            {
              heading: "Get Pre-IPO Directly\nInto Your Pocket",
              button: { label: "Download Axevil App", icon: "/icons/Download.svg", href: "https://axevil.app.link/web?~campaign=new_main" },
              onClose,
              illustration: "/img/ill/quiz-success-app-devices.png"
            }
          ) }, "success-app"),
          step === "success-thanks" && /* @__PURE__ */ jsx10(QuizOverlay, { children: /* @__PURE__ */ jsx10(
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
import { useEffect as useEffect5, useRef as useRef3 } from "react";
import { motion as motion4 } from "framer-motion";
import { jsx as jsx11, jsxs as jsxs9 } from "react/jsx-runtime";
function BgFeatures({
  spotlight = false,
  spotlightSize = "24rem",
  ambientOpacity = 0.5,
  backgroundPosition = "53% -7.5rem",
  blendMode,
  animated = false,
  animationDuration = 30
} = {}) {
  const ref = useRef3(null);
  useEffect5(() => {
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
  return /* @__PURE__ */ jsxs9(
    "div",
    {
      ref,
      "aria-hidden": "true",
      className: "absolute inset-0 pointer-events-none overflow-hidden",
      style: { zIndex: 0 },
      children: [
        animated ? /* @__PURE__ */ jsx11(
          motion4.div,
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
        ) : /* @__PURE__ */ jsx11(
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
        spotlight && /* @__PURE__ */ jsx11(
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
        /* @__PURE__ */ jsx11(
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
import { jsx as jsx12, jsxs as jsxs10 } from "react/jsx-runtime";
function DescTag({ number, label, className = "" }) {
  return /* @__PURE__ */ jsxs10(
    "div",
    {
      className: `flex gap-2 items-center font-inter-tight font-medium text-m text-neutral-30 ${className}`,
      children: [
        /* @__PURE__ */ jsx12("span", { className: "text-m opacity-50", children: number }),
        /* @__PURE__ */ jsx12("span", { className: "text-m opacity-80", children: label })
      ]
    }
  );
}

// design-system/src/components/cta-form.tsx
import { Fragment as Fragment4, jsx as jsx13, jsxs as jsxs11 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsx13("section", { className: `relative w-full bg-page-bg padding-section-t6-b12 ${className}`, children: /* @__PURE__ */ jsxs11(
    "div",
    {
      className: "mx-auto w-full max-w-content container-px flex flex-col items-center text-center",
      style: { gap: "2rem" },
      children: [
        /* @__PURE__ */ jsxs11("div", { className: "flex flex-col items-center text-center", style: { gap: "2rem", maxWidth: "50rem" }, children: [
          /* @__PURE__ */ jsx13(DescTag, { number, label }),
          /* @__PURE__ */ jsxs11("div", { className: "flex flex-col items-center text-center", style: { gap: "1rem" }, children: [
            /* @__PURE__ */ jsx13(
              "h2",
              {
                className: "font-inter-tight font-semibold text-h2 text-transparent gradient-text",
                style: { backgroundImage: GRADIENT, overflow: "visible" },
                children: title
              }
            ),
            subtitle && /* @__PURE__ */ jsx13(
              "p",
              {
                className: "font-inter-tight font-normal text-paragraph text-white/60",
                style: { maxWidth: "37.5rem" },
                children: subtitle
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxs11(
          "div",
          {
            className: "flex flex-col sm:flex-row items-stretch sm:items-center justify-center w-full max-w-[30rem] sm:max-w-none",
            style: { gap: "0.5rem" },
            children: [
              primarySize ? /* @__PURE__ */ jsx13(BtnOwn, { size: primarySize, hideIcon: primaryHideIcon, onClick: onPrimaryClick, className: "w-full sm:w-auto", children: primaryLabel }) : /* @__PURE__ */ jsxs11(Fragment4, { children: [
                /* @__PURE__ */ jsx13(BtnOwn, { size: "S", hideIcon: primaryHideIcon, onClick: onPrimaryClick, className: "w-full sm:hidden", children: primaryLabel }),
                /* @__PURE__ */ jsx13(BtnOwn, { size: "M", hideIcon: primaryHideIcon, onClick: onPrimaryClick, className: "hidden sm:flex sm:w-auto", children: primaryLabel })
              ] }),
              secondaryLabel && /* @__PURE__ */ jsxs11(Fragment4, { children: [
                /* @__PURE__ */ jsx13(BtnOwn, { size: "S", hideIcon: true, variant: "secondary", onClick: onSecondaryClick, className: "w-full sm:hidden", children: secondaryLabel }),
                /* @__PURE__ */ jsx13(BtnOwn, { size: "M", hideIcon: true, variant: "secondary", onClick: onSecondaryClick, className: "hidden sm:flex sm:w-auto", children: secondaryLabel })
              ] })
            ]
          }
        )
      ]
    }
  ) });
}

// design-system/src/components/cta-form-newsletter.tsx
import { useState as useState6 } from "react";
import { jsx as jsx14, jsxs as jsxs12 } from "react/jsx-runtime";
function CtaFormNewsletter({
  buttonLabel = "Subscribe",
  buttonIcon = "/icons/Email.svg",
  placeholder = "yourmail@gmail.com",
  successMessage = "\u2713 You're subscribed!",
  onSubmit,
  className = ""
}) {
  const [email, setEmail] = useState6("");
  const [submitted, setSubmitted] = useState6(false);
  function handleSubmit(e) {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
    onSubmit?.(email);
  }
  if (submitted) {
    return /* @__PURE__ */ jsx14(
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
  return /* @__PURE__ */ jsxs12(
    "form",
    {
      onSubmit: handleSubmit,
      className: `flex flex-row items-center w-full max-w-[30rem] lg:max-w-none lg:w-auto ${className}`,
      style: { gap: "0.5rem" },
      children: [
        /* @__PURE__ */ jsx14(
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
        /* @__PURE__ */ jsx14(BtnOwn, { type: "submit", size: "S", icon: buttonIcon, className: "shrink-0 sm:hidden", children: buttonLabel }),
        /* @__PURE__ */ jsx14(BtnOwn, { type: "submit", size: "M", icon: buttonIcon, className: "hidden shrink-0 sm:flex lg:w-[9.1875rem]", children: buttonLabel })
      ]
    }
  );
}

// design-system/src/components/faq.tsx
import { useState as useState7 } from "react";
import { motion as motion5, AnimatePresence as AnimatePresence3 } from "framer-motion";
import { jsx as jsx15, jsxs as jsxs13 } from "react/jsx-runtime";
function FAQ({ items, className = "" }) {
  const [open, setOpen] = useState7(null);
  return /* @__PURE__ */ jsx15("div", { className: `w-full flex flex-col ${className}`, children: items.map((item, i) => {
    const isOpen = open === i;
    return /* @__PURE__ */ jsxs13("div", { style: { borderBottom: "1px solid rgba(255,255,255,0.1)" }, children: [
      /* @__PURE__ */ jsxs13(
        "button",
        {
          type: "button",
          onClick: () => setOpen(isOpen ? null : i),
          "aria-expanded": isOpen,
          className: "w-full flex items-center justify-between gap-4 text-left outline-none",
          style: { paddingTop: "clamp(1.25rem, 3vw, 1.75rem)", paddingBottom: "1.5rem", minHeight: "3.5rem" },
          children: [
            /* @__PURE__ */ jsx15("span", { className: "font-inter-tight font-medium text-[0.875rem] md:text-xl", style: { color: "var(--white-300)" }, children: item.q }),
            /* @__PURE__ */ jsx15(
              motion5.div,
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
                children: /* @__PURE__ */ jsx15("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", children: /* @__PURE__ */ jsx15("path", { d: "M6 1v10M1 6h10", stroke: "white", strokeWidth: "1.5", strokeLinecap: "round" }) })
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsx15(AnimatePresence3, { initial: false, children: isOpen && /* @__PURE__ */ jsx15(
        motion5.div,
        {
          initial: { height: 0, opacity: 0 },
          animate: { height: "auto", opacity: 1 },
          exit: { height: 0, opacity: 0 },
          transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
          style: { overflow: "hidden" },
          children: /* @__PURE__ */ jsx15("div", { style: { paddingBottom: "clamp(1.25rem, 3vw, 1.75rem)", paddingRight: "clamp(0rem, 8vw, 5rem)" }, children: /* @__PURE__ */ jsx15(
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
import { AnimatePresence as AnimatePresence4, motion as motion6 } from "framer-motion";
import { useEffect as useEffect6, useRef as useRef4, useState as useState8 } from "react";

// design-system/src/components/success-icon.tsx
import { jsx as jsx16 } from "react/jsx-runtime";
function SuccessIcon() {
  return /* @__PURE__ */ jsx16(
    "div",
    {
      className: "flex items-center justify-center shrink-0",
      style: {
        width: "3.5rem",
        height: "3.5rem",
        borderRadius: "50%",
        background: "var(--status-open-bg)",
        border: "1px solid var(--status-open-border)"
      },
      children: /* @__PURE__ */ jsx16("svg", { width: "20", height: "16", viewBox: "0 0 20 16", fill: "none", style: { width: "1.25rem", height: "1rem" }, children: /* @__PURE__ */ jsx16("path", { d: "M1.5 8L7 13.5L18.5 1.5", stroke: "var(--status-open)", strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round" }) })
    }
  );
}

// design-system/src/components/form.tsx
import { jsx as jsx17, jsxs as jsxs14 } from "react/jsx-runtime";
var INQUIRY_OPTIONS = [
  { value: "press", label: "Press inquiry" },
  { value: "partnership", label: "Partnership" },
  { value: "investor", label: "Investor access" },
  { value: "general", label: "General" }
];
function InquiryDropdown({ value, onChange }) {
  const [open, setOpen] = useState8(false);
  const ref = useRef4(null);
  const selected = INQUIRY_OPTIONS.find((o) => o.value === value);
  useEffect6(() => {
    function onClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);
  return /* @__PURE__ */ jsxs14("div", { ref, className: "relative w-full", children: [
    /* @__PURE__ */ jsxs14(
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
          /* @__PURE__ */ jsx17(
            "span",
            {
              className: "font-inter-tight font-medium text-m",
              style: { color: selected ? "var(--white-100)" : "rgba(255,255,255,0.35)" },
              children: selected ? selected.label : "Inquiry type (optional)"
            }
          ),
          /* @__PURE__ */ jsx17(
            motion6.svg,
            {
              animate: { rotate: open ? 180 : 0 },
              transition: { duration: 0.2, ease: [0.4, 0, 0.2, 1] },
              width: "20",
              height: "20",
              viewBox: "0 0 20 20",
              fill: "none",
              "aria-hidden": "true",
              style: { flexShrink: 0, display: "block", width: "1.25rem", height: "1.25rem" },
              children: /* @__PURE__ */ jsx17("path", { d: "M5 8L10 13L15 8", stroke: "rgba(255,255,255,0.4)", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsx17(AnimatePresence4, { children: open && /* @__PURE__ */ jsx17(
      motion6.div,
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
        children: INQUIRY_OPTIONS.map((opt, i) => /* @__PURE__ */ jsx17(
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
  return /* @__PURE__ */ jsxs14(
    motion6.div,
    {
      className: "flex flex-col items-center justify-center w-full",
      initial: { opacity: 0, y: 16 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
      style: {
        background: "var(--black-500)",
        borderRadius: "1.25rem",
        gap: "1.25rem",
        padding: "3rem 1.5rem"
      },
      children: [
        /* @__PURE__ */ jsx17(SuccessIcon, {}),
        /* @__PURE__ */ jsxs14("div", { className: "flex flex-col items-center text-center", style: { gap: "0.5rem" }, children: [
          /* @__PURE__ */ jsx17(
            "h3",
            {
              className: "font-inter-tight font-semibold text-white",
              style: { fontSize: "clamp(1.125rem, 1.5vw, 1.375rem)", lineHeight: 1.2, letterSpacing: "-0.02em" },
              children: "Thank you \u2014 we received your request."
            }
          ),
          /* @__PURE__ */ jsx17(
            "p",
            {
              className: "font-inter-tight font-medium",
              style: { fontSize: "clamp(0.8125rem, 1vw, 0.9375rem)", lineHeight: 1.5, color: "rgba(255,255,255,0.4)" },
              children: "Our team will reply within 24 hours."
            }
          )
        ] })
      ]
    }
  );
}
function Form({
  number = "02",
  label = "Leave a request",
  title = "Send us a note.",
  subtitle = "Tell us briefly what you need. We will reply within 24 hours.",
  recipient = "info@axevil.com",
  paddingClass = "padding-section-t6-b12"
} = {}) {
  const [data, setData] = useState8({ email: "", name: "", position: "", company: "", inquiry: "" });
  const [errors, setErrors] = useState8({});
  const [submitted, setSubmitted] = useState8(false);
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
    const subject = encodeURIComponent(`New inquiry from ${data.name}`);
    const body = encodeURIComponent(
      `Name: ${data.name}
Email: ${data.email}
Position: ${data.position || "\u2014"}
Company: ${data.company || "\u2014"}
Inquiry type: ${inquiryLabel}
`
    );
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }
  return /* @__PURE__ */ jsx17(
    "section",
    {
      id: "contact-form",
      className: `relative w-full bg-page-bg flex flex-col items-center ${paddingClass}`,
      children: /* @__PURE__ */ jsxs14(
        motion6.div,
        {
          className: "relative w-full max-w-content container-px mx-auto flex flex-col items-center",
          style: { gap: "2rem" },
          initial: { opacity: 0, y: 60 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.2 },
          transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
          children: [
            /* @__PURE__ */ jsxs14("div", { className: "flex flex-col items-center justify-center w-full", style: { maxWidth: "37.5rem", gap: "1rem" }, children: [
              /* @__PURE__ */ jsxs14("div", { className: "flex gap-2 items-center font-inter-tight font-medium text-m text-neutral-30 whitespace-nowrap", children: [
                /* @__PURE__ */ jsx17("span", { className: "opacity-50", children: number }),
                /* @__PURE__ */ jsx17("span", { className: "opacity-80", children: label })
              ] }),
              /* @__PURE__ */ jsxs14("div", { className: "flex flex-col items-center text-center", style: { gap: "1rem" }, children: [
                /* @__PURE__ */ jsx17(
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
                /* @__PURE__ */ jsx17(
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
            /* @__PURE__ */ jsx17("div", { className: "flex flex-col items-center w-full", style: { maxWidth: "37.5rem", gap: "0.75rem" }, children: submitted ? /* @__PURE__ */ jsx17(SuccessState, {}) : /* @__PURE__ */ jsxs14("form", { onSubmit: handleSubmit, noValidate: true, className: "flex flex-col w-full", style: { gap: "0.5rem" }, children: [
              /* @__PURE__ */ jsx17(Field, { error: errors.email, input: /* @__PURE__ */ jsx17(
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
              /* @__PURE__ */ jsx17(Field, { error: errors.name, input: /* @__PURE__ */ jsx17(
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
              /* @__PURE__ */ jsx17(Field, { input: /* @__PURE__ */ jsx17(
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
              /* @__PURE__ */ jsxs14("div", { className: "flex flex-col sm:flex-row w-full", style: { gap: "0.5rem" }, children: [
                /* @__PURE__ */ jsx17(Field, { className: "flex-1", input: /* @__PURE__ */ jsx17(
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
                /* @__PURE__ */ jsx17("div", { className: "flex-1", children: /* @__PURE__ */ jsx17(
                  InquiryDropdown,
                  {
                    value: data.inquiry,
                    onChange: (v) => setData((f) => ({ ...f, inquiry: v }))
                  }
                ) })
              ] }),
              /* @__PURE__ */ jsxs14(
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
                    /* @__PURE__ */ jsx17(
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
              /* @__PURE__ */ jsxs14(
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
                    /* @__PURE__ */ jsx17("a", { href: "/privacy", className: "underline hover:text-white transition-colors", children: "Privacy Policy" }),
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
import { jsx as jsx18, jsxs as jsxs15 } from "react/jsx-runtime";
function HeroEyebrow({ children, className = "" }) {
  return /* @__PURE__ */ jsxs15(
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
        /* @__PURE__ */ jsx18(
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
import { jsx as jsx19, jsxs as jsxs16 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsx19(
    "div",
    {
      className: `grid grid-cols-1 md:grid-cols-2 w-full ${className}`,
      style: { gap: 0 },
      children: cards.map((card) => /* @__PURE__ */ jsxs16(
        "div",
        {
          className: "ill-card relative overflow-hidden",
          style: {
            height: cardHeight,
            minWidth: "18.75rem",
            ...card.border ?? { border: "1px solid var(--black-500, #1A1A1A)" }
          },
          children: [
            /* @__PURE__ */ jsx19(
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
            !hideImages && /* @__PURE__ */ jsxs16("picture", { children: [
              card.imgMobile && /* @__PURE__ */ jsx19("source", { media: "(max-width: 480px)", srcSet: card.imgMobile }),
              /* @__PURE__ */ jsx19(
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
            /* @__PURE__ */ jsxs16(
              "div",
              {
                className: "absolute flex flex-col gap-3",
                style: { left: "1.5rem", right: "1.5rem", bottom: "1.5rem", zIndex: 5 },
                children: [
                  /* @__PURE__ */ jsx19(
                    "h3",
                    {
                      className: `font-inter-tight font-medium text-white ${titleClass}`,
                      style: { margin: 0 },
                      children: card.title
                    }
                  ),
                  /* @__PURE__ */ jsx19("p", { className: "font-inter-tight font-normal text-paragraph text-white-400", children: card.body })
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
import { motion as motion7, AnimatePresence as AnimatePresence5 } from "framer-motion";
import { Fragment as Fragment5, jsx as jsx20, jsxs as jsxs17 } from "react/jsx-runtime";
function Card({ item, onClose }) {
  return /* @__PURE__ */ jsxs17(
    "a",
    {
      href: item.href,
      onClick: onClose,
      className: "flex flex-col w-full rounded-[0.5rem] transition-colors hover:bg-[rgba(48,48,48,0.5)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-white",
      style: { padding: "0.75rem", gap: "0.625rem" },
      children: [
        /* @__PURE__ */ jsx20("span", { className: "font-inter-tight font-medium text-xs whitespace-nowrap", style: { color: "var(--white-400)" }, children: item.label }),
        /* @__PURE__ */ jsx20("span", { className: "font-inter-tight font-medium text-s-med", style: { color: "var(--white-200)", lineHeight: 1.3 }, children: item.description })
      ]
    }
  );
}
function NavDropdown({ items, open, onClose, onMouseEnter, onMouseLeave }) {
  const half = Math.ceil(items.length / 2);
  const col1 = items.slice(0, half);
  const col2 = items.slice(half);
  return /* @__PURE__ */ jsx20(AnimatePresence5, { children: open && /* @__PURE__ */ jsx20(
    motion7.div,
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
      children: /* @__PURE__ */ jsx20(
        "div",
        {
          className: "rounded-[1rem] border",
          style: {
            background: "var(--page-bg)",
            borderColor: "var(--black-500)",
            padding: "0.5rem"
          },
          children: /* @__PURE__ */ jsxs17(
            "div",
            {
              className: "flex items-stretch rounded-[0.75rem]",
              style: { background: "var(--black-500)", padding: "0.5rem", gap: "1.5rem" },
              children: [
                /* @__PURE__ */ jsx20("div", { className: "flex flex-col flex-1 min-w-0", style: { gap: "1rem" }, children: col1.map((it) => /* @__PURE__ */ jsx20(Card, { item: it, onClose }, it.label)) }),
                col2.length > 0 && /* @__PURE__ */ jsxs17(Fragment5, { children: [
                  /* @__PURE__ */ jsx20("div", { style: { width: "1px", alignSelf: "stretch", background: "rgba(255,255,255,0.1)" } }),
                  /* @__PURE__ */ jsx20("div", { className: "flex flex-col flex-1 min-w-0", style: { gap: "1rem" }, children: col2.map((it) => /* @__PURE__ */ jsx20(Card, { item: it, onClose }, it.label)) })
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
import { motion as motion8 } from "framer-motion";
import { jsx as jsx21 } from "react/jsx-runtime";
function PageEntry({
  children,
  className = "",
  style,
  initial = { opacity: 0 },
  animate = { opacity: 1 },
  transition = { duration: 1.5, ease: [0.4, 0, 0.2, 1] },
  ...rest
}) {
  return /* @__PURE__ */ jsx21(
    motion8.main,
    {
      className,
      style,
      initial,
      animate,
      transition,
      ...rest,
      children
    }
  );
}

// design-system/src/components/section-heading.tsx
import { jsx as jsx22, jsxs as jsxs18 } from "react/jsx-runtime";
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
  className = ""
}) {
  const alignClass = align === "center" ? "items-center text-center" : "items-start";
  const headingEl = /* @__PURE__ */ jsx22(
    "h2",
    {
      className: "font-inter-tight font-semibold text-h2 text-transparent gradient-text",
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
  const subtitleEl = subtitle && /* @__PURE__ */ jsx22(
    "p",
    {
      className: "font-inter-tight font-normal text-paragraph text-white/60",
      style: subtitleMaxWidth ? { maxWidth: subtitleMaxWidth } : void 0,
      children: subtitle
    }
  );
  return /* @__PURE__ */ jsxs18(
    "div",
    {
      className: `flex flex-col w-full ${alignClass} ${className}`,
      style: { gap, overflow: "visible" },
      children: [
        number !== void 0 && label && /* @__PURE__ */ jsx22(DescTag, { number, label }),
        subtitle ? /* @__PURE__ */ jsxs18("div", { className: `flex flex-col w-full ${alignClass}`, style: { gap: innerGap }, children: [
          headingEl,
          subtitleEl
        ] }) : headingEl
      ]
    }
  );
}

// design-system/src/components/slider-card.tsx
import { jsx as jsx23, jsxs as jsxs19 } from "react/jsx-runtime";
function SliderCard({ name, role, description, photo, linkedin, className = "" }) {
  return /* @__PURE__ */ jsxs19("div", { className: `group flex flex-col items-start shrink-0 relative ${className}`, style: { gap: "1.5rem" }, children: [
    /* @__PURE__ */ jsxs19(
      "div",
      {
        className: "relative rounded-2 w-full overflow-hidden border-2 border-outline-100",
        style: { height: "25rem" },
        children: [
          /* @__PURE__ */ jsx23(
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
          /* @__PURE__ */ jsx23(
            "img",
            {
              alt: name,
              src: photo,
              className: "absolute inset-0 w-full h-full rounded-2",
              loading: "lazy",
              style: { zIndex: 1, objectFit: "contain", objectPosition: "bottom center" }
            }
          ),
          /* @__PURE__ */ jsxs19(
            "div",
            {
              className: "absolute top-5 left-5 flex gap-2 items-center px-4 py-3 rounded-1",
              style: { background: "var(--black-600)", backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)", zIndex: 2 },
              children: [
                /* @__PURE__ */ jsx23("span", { className: "rounded-full shrink-0 size-2", style: { background: "rgba(255,255,255,0.5)" } }),
                /* @__PURE__ */ jsx23(
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
    /* @__PURE__ */ jsxs19("div", { className: "flex flex-col items-start px-4 w-full", style: { gap: "1.25rem" }, children: [
      /* @__PURE__ */ jsxs19("div", { className: "flex flex-col items-start w-full", style: { gap: "0.75rem" }, children: [
        /* @__PURE__ */ jsx23(
          "h4",
          {
            className: "font-inter-tight font-semibold text-white w-full",
            style: { fontSize: "clamp(1.125rem, 1.5vw, 1.5rem)", lineHeight: 1.2, letterSpacing: "-0.02em", margin: 0 },
            children: name
          }
        ),
        /* @__PURE__ */ jsx23("p", { className: "font-inter-tight font-normal text-paragraph text-white/50 w-full", children: description })
      ] }),
      /* @__PURE__ */ jsxs19(
        "a",
        {
          href: linkedin || void 0,
          target: linkedin ? "_blank" : void 0,
          rel: linkedin ? "noreferrer" : void 0,
          className: "flex items-center gap-2 text-white",
          children: [
            /* @__PURE__ */ jsx23("span", { className: "font-inter-tight font-medium text-m whitespace-nowrap group-hover:underline", children: "LinkedIn" }),
            /* @__PURE__ */ jsx23(
              "svg",
              {
                width: "12",
                height: "12",
                viewBox: "0 0 12 12",
                fill: "none",
                "aria-hidden": "true",
                className: "shrink-0 transition-transform duration-700 ease-in-out group-hover:rotate-180",
                children: /* @__PURE__ */ jsx23("path", { d: "M6 1.5v9M1.5 6h9", stroke: "currentColor", strokeWidth: "1.4", strokeLinecap: "round" })
              }
            )
          ]
        }
      )
    ] })
  ] });
}

// design-system/src/components/status-pill.tsx
import { jsx as jsx24, jsxs as jsxs20 } from "react/jsx-runtime";
var COLORS = {
  open: { dot: "var(--status-open)", bg: "var(--status-open-bg)", border: "var(--status-open-border)", text: "var(--status-open)" },
  closed: { dot: "var(--status-closed)", bg: "var(--status-closed-bg)", border: "var(--status-closed-border)", text: "var(--status-closed)" },
  soon: { dot: "var(--status-soon)", bg: "var(--status-soon-bg)", border: "var(--status-soon-border)", text: "var(--status-soon)" }
};
function StatusPill({ status, label, className = "" }) {
  const c = COLORS[status];
  return /* @__PURE__ */ jsxs20(
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
        /* @__PURE__ */ jsx24("span", { className: "block rounded-full", style: { width: "0.4375rem", height: "0.4375rem", background: c.dot } }),
        label
      ]
    }
  );
}

// design-system/src/components/tag.tsx
import { Fragment as Fragment6, jsx as jsx25, jsxs as jsxs21 } from "react/jsx-runtime";
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
  const content = /* @__PURE__ */ jsxs21(Fragment6, { children: [
    leading,
    label
  ] });
  if (onClick) {
    return /* @__PURE__ */ jsx25("button", { type: "button", onClick, className: cls, style, children: content });
  }
  if (href) {
    return /* @__PURE__ */ jsx25("a", { href, className: cls, style, children: content });
  }
  return /* @__PURE__ */ jsx25("span", { className: cls, style, children: content });
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
export {
  BgFeatures,
  BtnOwn,
  CtaForm,
  CtaFormNewsletter,
  DescTag,
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
  Quiz,
  SectionHeading,
  SliderCard,
  StatusPill,
  Tag
};
