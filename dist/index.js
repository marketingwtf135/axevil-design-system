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
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
var NAV_COLUMNS = [
  // Wealth Manager + Retail Investors hidden for v1 (2026-06-30).
  // Invest column removed per client feedback 2026-07-08.
  { heading: "Company", href: "#", items: [
    { label: "About Us", href: "/about-us" },
    { label: "Team", href: "/team" },
    { label: "Contacts", href: "/contacts" }
  ] }
];
function Footer({ logoHref = "/", links, compliance } = {}) {
  return /* @__PURE__ */ jsx2(
    "footer",
    {
      className: "w-full bg-page-bg",
      style: { borderTop: "1px solid var(--color-border-default, #1a1a1a)" },
      children: /* @__PURE__ */ jsxs(
        "div",
        {
          className: "mx-auto w-full container-px flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10 md:gap-12 lg:gap-0 py-10 md:py-12 lg:pt-16 lg:pb-12",
          style: { maxWidth: "90rem" },
          children: [
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col shrink-0", style: { gap: "1.25rem" }, children: [
              /* @__PURE__ */ jsx2("a", { href: logoHref, "aria-label": "AXEVIL Capital", className: "inline-block", children: /* @__PURE__ */ jsx2(
                "img",
                {
                  src: "/img/logos/footer-logo.svg",
                  alt: "AXEVIL",
                  className: "footer-logo",
                  style: { width: "12.9375rem", height: "2rem", objectFit: "contain", objectPosition: "left" }
                }
              ) }),
              compliance && /* @__PURE__ */ jsx2("p", { className: "font-inter-tight font-medium text-xs text-white-400", style: { maxWidth: "34rem" }, children: compliance })
            ] }),
            links ? /* @__PURE__ */ jsx2("nav", { className: "flex flex-wrap lg:justify-end font-inter-tight font-medium text-white", style: { gap: "1rem 1.5rem" }, "aria-label": "Footer", children: links.map((l) => /* @__PURE__ */ jsx2("a", { href: l.href, className: "text-s-med text-white-400 hover:text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-white whitespace-nowrap", children: l.label }, l.href)) }) : (
              /* ── Nav columns ──
                  mobile: 2-col grid
                  tablet+: flex-row, justify-between, wraps if needed
                  desktop: pinned right, max-w 44.375rem (=710px)
              */
              /* @__PURE__ */ jsx2(
                "nav",
                {
                  className: "flex flex-wrap gap-x-spacing-4 gap-y-10 font-inter-tight font-medium text-white",
                  "aria-label": "Footer",
                  children: NAV_COLUMNS.map((col) => /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-8 items-start shrink-0", children: [
                    /* @__PURE__ */ jsx2(
                      "a",
                      {
                        href: col.href,
                        className: "text-base text-white hover:opacity-80 transition-opacity focus-visible:outline focus-visible:outline-2 focus-visible:outline-white whitespace-nowrap",
                        style: { letterSpacing: "-0.02em" },
                        children: col.heading
                      }
                    ),
                    /* @__PURE__ */ jsx2("ul", { className: "flex flex-col gap-4 items-start text-s-med text-white-400 list-none p-0 m-0", children: col.items.map((item) => /* @__PURE__ */ jsx2("li", { children: /* @__PURE__ */ jsx2(
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
          ]
        }
      )
    }
  );
}

// design-system/src/components/Nav.tsx
import { useState as useState2, useEffect as useEffect2, useRef as useRef2 } from "react";

// design-system/src/components/btn-own.tsx
import { useState } from "react";
import { jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";
var SIZE_STYLES = {
  M: { height: "3.625rem", padding: "0.75rem 1.5rem", borderRadius: "1rem", fontSize: "var(--font-btn)", fontWeight: 600 },
  S: { height: "3.125rem", padding: "0.625rem 1.25rem", borderRadius: "1rem", fontSize: "var(--font-btn)", fontWeight: 600 },
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
  variant = "primary"
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
      className: `btn-own flex items-center justify-center gap-2 font-inter-tight font-semibold transition-all duration-300 ease-out ${hoverClass} focus-visible:outline focus-visible:outline-2 focus-visible:outline-white ${className}`,
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

// design-system/src/components/nav-dropdown.tsx
import { motion, AnimatePresence } from "framer-motion";
import { Fragment, jsx as jsx4, jsxs as jsxs3 } from "react/jsx-runtime";
function Card({ item, onClose }) {
  return /* @__PURE__ */ jsxs3(
    "a",
    {
      href: item.href,
      onClick: onClose,
      className: "flex flex-col w-full rounded-[0.5rem] transition-colors hover:bg-[rgba(48,48,48,0.5)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-white",
      style: { padding: "0.75rem", gap: "0.625rem" },
      children: [
        /* @__PURE__ */ jsx4("span", { className: "font-inter-tight font-medium text-xs whitespace-nowrap", style: { color: "var(--white-400)" }, children: item.label }),
        /* @__PURE__ */ jsx4("span", { className: "font-inter-tight font-medium text-s-med", style: { color: "var(--white-200)", lineHeight: 1.3 }, children: item.description })
      ]
    }
  );
}
function NavDropdown({ items, open, onClose, onMouseEnter, onMouseLeave }) {
  const half = Math.ceil(items.length / 2);
  const col1 = items.slice(0, half);
  const col2 = items.slice(half);
  return /* @__PURE__ */ jsx4(AnimatePresence, { children: open && /* @__PURE__ */ jsx4(
    motion.div,
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
      children: /* @__PURE__ */ jsx4(
        "div",
        {
          className: "rounded-[1rem] border",
          style: {
            background: "var(--page-bg)",
            borderColor: "var(--black-500)",
            padding: "0.5rem"
          },
          children: /* @__PURE__ */ jsxs3(
            "div",
            {
              className: "flex items-stretch rounded-[0.75rem]",
              style: { background: "var(--black-500)", padding: "0.5rem", gap: "1.5rem" },
              children: [
                /* @__PURE__ */ jsx4("div", { className: "flex flex-col flex-1 min-w-0", style: { gap: "1rem" }, children: col1.map((it) => /* @__PURE__ */ jsx4(Card, { item: it, onClose }, it.label)) }),
                col2.length > 0 && /* @__PURE__ */ jsxs3(Fragment, { children: [
                  /* @__PURE__ */ jsx4("div", { style: { width: "1px", alignSelf: "stretch", background: "rgba(255,255,255,0.1)" } }),
                  /* @__PURE__ */ jsx4("div", { className: "flex flex-col flex-1 min-w-0", style: { gap: "1rem" }, children: col2.map((it) => /* @__PURE__ */ jsx4(Card, { item: it, onClose }, it.label)) })
                ] })
              ]
            }
          )
        }
      )
    }
  ) });
}

// design-system/src/components/Nav.tsx
import { Fragment as Fragment2, jsx as jsx5, jsxs as jsxs4 } from "react/jsx-runtime";
var NAV_LINKS = ["Private Companies", "About Axevil"];
function navHref(label) {
  if (label === "Private Companies") return "/companies";
  return "#";
}
var MOBILE_SECTIONS = [
  { label: "Private Companies" },
  {
    label: "About Axevil",
    items: [
      { label: "About Us", href: "/about-us" },
      { label: "Team", href: "/team" },
      { label: "Contacts", href: "/contacts" }
    ]
  }
];
var COMPANY_ITEMS = [
  {
    label: "About Us",
    description: "Who Axevil is and why we built it.",
    href: "/about-us"
  },
  {
    label: "Team",
    description: "Leadership, advisors and the operators behind every deal.",
    href: "/team"
  },
  {
    label: "Contacts",
    description: "Press, partnerships and direct contact channels.",
    href: "/contacts"
  }
];
function hasDropdown(label) {
  if (label === "About Axevil") return "company";
  return null;
}
function Nav({ links, logoHref = "/", ctaLabel = "Request access", onCtaClick } = {}) {
  const cta = onCtaClick ?? (() => window.dispatchEvent(new CustomEvent("open-quiz")));
  const desktopLinks = links ?? NAV_LINKS.map((l) => ({ label: l, href: navHref(l) }));
  const mobileSections = links ? links.map((l) => ({ label: l.label, href: l.href })) : MOBILE_SECTIONS;
  const useDropdowns = !links;
  const [menuOpen, setMenuOpen] = useState2(false);
  const [openDropdown, setOpenDropdown] = useState2(null);
  const closeTimer = useRef2(null);
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
  function openWith(key) {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
    setOpenDropdown(key);
  }
  function scheduleClose() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 180);
  }
  const activeItems = openDropdown === "company" ? COMPANY_ITEMS : [];
  return /* @__PURE__ */ jsxs4(Fragment2, { children: [
    /* @__PURE__ */ jsx5(
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
        children: /* @__PURE__ */ jsxs4(
          "div",
          {
            className: "relative mx-auto w-full h-[3.75rem] md:h-[5rem] flex items-center justify-between container-px",
            style: { maxWidth: "90rem" },
            children: [
              /* @__PURE__ */ jsx5("a", { href: logoHref, "aria-label": "AXEVIL Capital", className: "shrink-0", children: /* @__PURE__ */ jsx5(
                "img",
                {
                  src: "/img/logos/footer-logo.svg",
                  alt: "AXEVIL",
                  className: "w-[7.5rem] h-[1.125rem] lg:w-[9.6875rem] lg:h-6"
                }
              ) }),
              /* @__PURE__ */ jsx5("div", { className: "hidden lg:flex items-center gap-1", children: desktopLinks.map(({ label, href }) => {
                const dropKey = useDropdowns ? hasDropdown(label) : null;
                return /* @__PURE__ */ jsx5(
                  "a",
                  {
                    href,
                    onMouseEnter: () => openWith(dropKey),
                    onMouseLeave: () => {
                      if (dropKey) scheduleClose();
                    },
                    className: "flex items-center px-4 py-2 rounded-full font-inter-tight font-medium text-s-med text-white opacity-80 hover:opacity-100 hover:bg-white/5 transition-[opacity,background-color] duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white",
                    children: label
                  },
                  label
                );
              }) }),
              /* @__PURE__ */ jsx5(
                NavDropdown,
                {
                  items: activeItems,
                  open: openDropdown !== null,
                  onMouseEnter: () => openWith(openDropdown),
                  onMouseLeave: scheduleClose,
                  onClose: () => setOpenDropdown(null)
                }
              ),
              /* @__PURE__ */ jsxs4("div", { className: "flex items-center gap-2 shrink-0", children: [
                /* @__PURE__ */ jsx5(
                  BtnOwn,
                  {
                    size: "S",
                    hideIcon: true,
                    className: "hidden sm:flex lg:hidden",
                    onClick: cta,
                    children: ctaLabel
                  }
                ),
                /* @__PURE__ */ jsx5(
                  BtnOwn,
                  {
                    size: "XS",
                    hideIcon: true,
                    className: "hidden lg:flex",
                    onClick: cta,
                    children: ctaLabel
                  }
                ),
                /* @__PURE__ */ jsxs4(
                  "button",
                  {
                    type: "button",
                    "aria-label": menuOpen ? "Close menu" : "Open menu",
                    "aria-expanded": menuOpen,
                    className: "lg:hidden flex flex-col items-center justify-center gap-[0.3125rem] w-11 h-11 rounded-full transition-colors hover:bg-white/5",
                    onClick: () => setMenuOpen((o) => !o),
                    children: [
                      /* @__PURE__ */ jsx5("span", { className: `block w-5 h-[0.125rem] bg-white transition-transform duration-[250ms] ${menuOpen ? "translate-y-[0.21875rem] rotate-45" : ""}` }),
                      /* @__PURE__ */ jsx5("span", { className: `block w-5 h-[0.125rem] bg-white transition-transform duration-[250ms] ${menuOpen ? "-translate-y-[0.21875rem] -rotate-45" : ""}` })
                    ]
                  }
                )
              ] })
            ]
          }
        )
      }
    ),
    menuOpen && /* @__PURE__ */ jsxs4(
      "div",
      {
        className: "fixed inset-x-0 bottom-0 top-[3.75rem] md:top-[5rem] z-40 lg:hidden flex flex-col",
        style: { background: "var(--black-200)" },
        children: [
          /* @__PURE__ */ jsx5(
            "div",
            {
              className: "flex flex-col flex-1 overflow-y-auto",
              style: { padding: "2rem 1rem 1rem", gap: "2rem" },
              children: mobileSections.map((section) => {
                if (section.items) {
                  return /* @__PURE__ */ jsxs4("div", { className: "flex flex-col items-start", style: { gap: "1rem" }, children: [
                    /* @__PURE__ */ jsx5(
                      "span",
                      {
                        className: "font-inter-tight font-medium text-l",
                        style: { color: "var(--white-400)", letterSpacing: "-0.02em", lineHeight: 1.35 },
                        children: section.label
                      }
                    ),
                    /* @__PURE__ */ jsx5("div", { className: "flex flex-col items-start", style: { gap: "0.75rem" }, children: section.items.map((item) => /* @__PURE__ */ jsx5(
                      "a",
                      {
                        href: item.href,
                        onClick: () => setMenuOpen(false),
                        className: "font-inter-tight font-semibold text-h4 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-white",
                        style: { fontSize: "var(--font-h4)", letterSpacing: "-0.02em", lineHeight: 1.2 },
                        children: item.label
                      },
                      item.label
                    )) })
                  ] }, section.label);
                }
                return /* @__PURE__ */ jsx5(
                  "a",
                  {
                    href: section.href ?? navHref(section.label),
                    onClick: () => setMenuOpen(false),
                    className: "font-inter-tight font-semibold text-h4 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-white",
                    style: { fontSize: "var(--font-h4)", letterSpacing: "-0.02em", lineHeight: 1.2 },
                    children: section.label
                  },
                  section.label
                );
              })
            }
          ),
          /* @__PURE__ */ jsx5("div", { style: { padding: "1rem" }, children: /* @__PURE__ */ jsx5(
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
import { useState as useState3, useEffect as useEffect3 } from "react";
import { motion as motion2, AnimatePresence as AnimatePresence2 } from "framer-motion";
import { jsx as jsx6, jsxs as jsxs5 } from "react/jsx-runtime";
function useIsBelowLg() {
  const [below, setBelow] = useState3(() => window.innerWidth < 1024);
  useEffect3(() => {
    const handler = () => setBelow(window.innerWidth < 1024);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);
  return below;
}
var SLIDES = [
  {
    id: 0,
    heading: "Pre-IPO leaders.\nNo middlemen.",
    subheading: null,
    body: "The most sought-after private companies of our era \u2014 the ones reshaping the technology of the next decade.",
    img: "/img/ill/ill-qwiz-01.webp",
    caption: "SpaceX, xAI, Anthropic, Stripe, Cursor \u2014\nand 30 more top companies in portfolio",
    label: "Pre-IPO leaders"
  },
  {
    id: 1,
    heading: "Capital secured by\nregulated structure",
    subheading: null,
    body: "Every deal is structured through a dedicated SPV under SEC regulation \u2014\nfully transparent, with annual reporting.",
    img: "/img/ill/ill-qwiz-02.webp",
    caption: "You receive equity documented to the same standards as leading\nventure capital funds \u2014 institutional-grade ownership.",
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
  return /* @__PURE__ */ jsxs5(
    motion2.button,
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
        /* @__PURE__ */ jsx6(
          "span",
          {
            className: "font-inter-tight font-medium text-sm md:text-base flex-1",
            style: { color: selected ? "var(--white-100)" : "var(--white-400)", lineHeight: 1.3 },
            children: opt
          }
        ),
        /* @__PURE__ */ jsx6(
          motion2.img,
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
function Quiz({ onClose }) {
  const [slide, setSlide] = useState3(0);
  const [progress, setProgress] = useState3(0);
  const [q1, setQ1] = useState3(null);
  const [q2, setQ2] = useState3(null);
  const isBelowLg = useIsBelowLg();
  useEffect3(() => {
    setProgress(0);
    const pInt = setInterval(() => setProgress((p) => Math.min(p + 0.5, 100)), 50);
    const sInt = setInterval(() => {
      setProgress(0);
      setSlide((s) => (s + 1) % SLIDES.length);
    }, 1e4);
    return () => {
      clearInterval(pInt);
      clearInterval(sInt);
    };
  }, [slide]);
  const cur = SLIDES[slide];
  return /* @__PURE__ */ jsxs5(
    motion2.div,
    {
      className: "fixed inset-0 z-[100] flex flex-col lg:flex-row overflow-y-auto lg:overflow-hidden bg-page-bg",
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      style: { minHeight: "100svh" },
      children: [
        /* @__PURE__ */ jsx6(
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
            children: /* @__PURE__ */ jsxs5("div", { className: "flex flex-col w-full h-full lg:overflow-hidden lg:justify-center", style: { maxWidth: "47.5rem" }, children: [
              /* @__PURE__ */ jsx6(AnimatePresence2, { mode: "wait", children: /* @__PURE__ */ jsxs5(
                motion2.div,
                {
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  exit: { opacity: 0, y: -20 },
                  transition: { duration: 0.45, ease: [0.4, 0, 0.2, 1] },
                  className: "flex flex-col lg:overflow-hidden",
                  style: { gap: "clamp(1.5rem, 2.5vw, 1.5rem)" },
                  children: [
                    /* @__PURE__ */ jsx6("div", { className: "flex flex-col shrink-0", style: { gap: "clamp(0.75rem, 1.6vw, 1.5rem)" }, children: /* @__PURE__ */ jsx6(
                      "h2",
                      {
                        "data-no-reveal": true,
                        className: "font-inter-tight font-semibold text-h3 text-white-100 whitespace-pre-line",
                        children: cur.heading
                      }
                    ) }),
                    /* @__PURE__ */ jsxs5(
                      "div",
                      {
                        className: "flex flex-col rounded-3xl shrink-0 overflow-hidden w-full bg-surface-0",
                        style: { height: cur.id === 2 ? "25rem" : "18.75rem" },
                        children: [
                          /* @__PURE__ */ jsx6(
                            "div",
                            {
                              className: "flex items-center justify-center flex-1",
                              style: { overflow: "hidden", minHeight: 0 },
                              children: /* @__PURE__ */ jsx6(
                                "img",
                                {
                                  src: cur.img,
                                  alt: "",
                                  style: { maxWidth: "100%", maxHeight: "100%", objectFit: "contain", display: "block" }
                                }
                              )
                            }
                          ),
                          /* @__PURE__ */ jsxs5("div", { className: "shrink-0 flex flex-col gap-spacing-0.75", style: { padding: "clamp(1rem, 2vw, 1.5rem)", paddingTop: 0 }, children: [
                            cur.subheading && /* @__PURE__ */ jsx6("h3", { className: "font-inter-tight font-semibold text-white text-h4", children: cur.subheading }),
                            cur.caption ? cur.id === 2 ? /* @__PURE__ */ jsx6("p", { className: "font-inter-tight font-normal text-paragraph whitespace-pre-line text-white-400", children: cur.caption }) : cur.id === 1 ? /* @__PURE__ */ jsx6("p", { className: "font-inter-tight font-normal text-h4 whitespace-pre-line text-white", children: cur.caption }) : /* @__PURE__ */ jsx6("p", { className: "font-inter-tight font-normal text-paragraph whitespace-pre-line text-white", children: cur.caption }) : null
                          ] })
                        ]
                      }
                    )
                  ]
                },
                slide
              ) }),
              /* @__PURE__ */ jsx6(
                "div",
                {
                  className: "flex shrink-0",
                  style: {
                    gap: "clamp(0.5rem, 1.4vw, 1.25rem)",
                    marginTop: "1.5rem",
                    paddingTop: "clamp(0.5rem, 1.6vw, 2rem)"
                  },
                  children: SLIDES.map((s, i) => /* @__PURE__ */ jsxs5("div", { className: "flex flex-col flex-1", style: { gap: "clamp(0.5rem, 1vw, 0.75rem)" }, children: [
                    /* @__PURE__ */ jsxs5("div", { className: "rounded-full overflow-hidden", style: { height: "0.1875rem", background: "rgba(255,255,255,0.15)" }, children: [
                      i < slide && /* @__PURE__ */ jsx6("div", { className: "h-full w-full bg-white" }),
                      i === slide && /* @__PURE__ */ jsx6(motion2.div, { className: "h-full bg-white", initial: { width: "0%" }, animate: { width: `${progress}%` }, transition: { duration: 0.05, ease: "linear" } })
                    ] }),
                    /* @__PURE__ */ jsx6("span", { className: `font-inter-tight font-medium text-xs md:text-s-med hidden md:inline truncate ${i <= slide ? "text-white" : "text-white/30"}`, children: s.label })
                  ] }, s.id))
                }
              )
            ] })
          }
        ),
        /* @__PURE__ */ jsx6(
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
            children: /* @__PURE__ */ jsxs5("div", { className: "flex flex-col w-full h-full", style: { maxWidth: "47.5rem" }, children: [
              /* @__PURE__ */ jsx6("div", { className: "flex justify-end shrink-0", style: { marginBottom: "clamp(1rem, 2.2vw, 2rem)" }, children: /* @__PURE__ */ jsx6(
                "button",
                {
                  type: "button",
                  onClick: onClose,
                  className: "font-inter-tight font-medium text-m text-white/40 hover:text-white transition-colors outline-none",
                  children: "\u2715 Close"
                }
              ) }),
              /* @__PURE__ */ jsxs5("div", { className: "flex flex-col flex-1", style: { gap: "clamp(1.5rem, 3vw, 2.5rem)" }, children: [
                /* @__PURE__ */ jsxs5(
                  "h2",
                  {
                    className: "font-inter-tight font-semibold text-h3 md:text-h2 text-white shrink-0",
                    style: { letterSpacing: "0" },
                    children: [
                      "Get an Access",
                      " ",
                      /* @__PURE__ */ jsx6("br", { className: "hidden md:block" }),
                      "to pre-IPO Infrastructure"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxs5("div", { className: "flex flex-col shrink-0", style: { gap: "clamp(1.25rem, 2.4vw, 2rem)" }, children: [
                  /* @__PURE__ */ jsxs5("div", { className: "flex flex-col shrink-0", style: { gap: "clamp(0.75rem, 1.6vw, 1rem)" }, children: [
                    /* @__PURE__ */ jsx6(
                      "p",
                      {
                        className: "font-inter-tight font-medium text-h4 shrink-0",
                        style: { color: "var(--white-200)", letterSpacing: "-0.02em" },
                        children: "What best describes your role?"
                      }
                    ),
                    /* @__PURE__ */ jsx6("div", { className: "flex flex-col gap-2", children: Q1.map((opt, i) => /* @__PURE__ */ jsx6(AnswerBtn, { opt, selected: q1 === i, onClick: () => setQ1(q1 === i ? null : i) }, i)) })
                  ] }),
                  /* @__PURE__ */ jsxs5("div", { className: "flex flex-col shrink-0", style: { gap: "clamp(0.75rem, 1.6vw, 1rem)" }, children: [
                    /* @__PURE__ */ jsx6(
                      "p",
                      {
                        className: "font-inter-tight font-medium text-h4 shrink-0",
                        style: { color: "var(--white-200)", letterSpacing: "-0.02em" },
                        children: "Have you participated in private markets before?"
                      }
                    ),
                    /* @__PURE__ */ jsx6("div", { className: "flex flex-col gap-2", children: Q2.map((opt, i) => /* @__PURE__ */ jsx6(AnswerBtn, { opt, selected: q2 === i, onClick: () => setQ2(q2 === i ? null : i) }, i)) })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxs5(
                "div",
                {
                  className: "flex items-center justify-between gap-2 mt-8 lg:mt-auto shrink-0",
                  style: { paddingTop: "clamp(1.5rem, 2.4vw, 2rem)" },
                  children: [
                    /* @__PURE__ */ jsx6(
                      "button",
                      {
                        type: "button",
                        onClick: onClose,
                        className: "flex items-center justify-center font-inter-tight font-semibold text-white outline-none transition-all duration-300 bg-surface-1 hover:bg-surface-mid rounded-2xl text-sm md:text-base h-12 md:h-14 px-5 md:px-6",
                        children: "Back"
                      }
                    ),
                    /* @__PURE__ */ jsx6(BtnOwn, { size: "S", hideIcon: true, className: "md:hidden", children: "Next" }),
                    /* @__PURE__ */ jsx6(BtnOwn, { size: "M", hideIcon: true, className: "hidden md:flex", children: "Next" })
                  ]
                }
              )
            ] })
          }
        )
      ]
    }
  );
}

// design-system/src/components/bg-features.tsx
import { useEffect as useEffect4, useRef as useRef3 } from "react";
import { motion as motion3 } from "framer-motion";
import { jsx as jsx7, jsxs as jsxs6 } from "react/jsx-runtime";
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
  useEffect4(() => {
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
  return /* @__PURE__ */ jsxs6(
    "div",
    {
      ref,
      "aria-hidden": "true",
      className: "absolute inset-0 pointer-events-none overflow-hidden",
      style: { zIndex: 0 },
      children: [
        animated ? /* @__PURE__ */ jsx7(
          motion3.div,
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
        ) : /* @__PURE__ */ jsx7(
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
        spotlight && /* @__PURE__ */ jsx7(
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
        /* @__PURE__ */ jsx7(
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
import { jsx as jsx8, jsxs as jsxs7 } from "react/jsx-runtime";
function DescTag({ number, label, className = "" }) {
  return /* @__PURE__ */ jsxs7(
    "div",
    {
      className: `flex gap-2 items-center font-inter-tight font-medium text-m text-neutral-30 ${className}`,
      children: [
        /* @__PURE__ */ jsx8("span", { className: "text-m opacity-50", children: number }),
        /* @__PURE__ */ jsx8("span", { className: "text-m opacity-80", children: label })
      ]
    }
  );
}

// design-system/src/components/cta-form.tsx
import { Fragment as Fragment3, jsx as jsx9, jsxs as jsxs8 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsx9("section", { className: `relative w-full bg-page-bg padding-section-t6-b12 ${className}`, children: /* @__PURE__ */ jsxs8(
    "div",
    {
      className: "mx-auto w-full max-w-content container-px flex flex-col items-center text-center",
      style: { gap: "2rem" },
      children: [
        /* @__PURE__ */ jsxs8("div", { className: "flex flex-col items-center text-center", style: { gap: "2rem", maxWidth: "50rem" }, children: [
          /* @__PURE__ */ jsx9(DescTag, { number, label }),
          /* @__PURE__ */ jsxs8("div", { className: "flex flex-col items-center text-center", style: { gap: "1rem" }, children: [
            /* @__PURE__ */ jsx9(
              "h2",
              {
                className: "font-inter-tight font-semibold text-h2 text-transparent gradient-text",
                style: { backgroundImage: GRADIENT, overflow: "visible" },
                children: title
              }
            ),
            subtitle && /* @__PURE__ */ jsx9(
              "p",
              {
                className: "font-inter-tight font-normal text-paragraph text-white/60",
                style: { maxWidth: "37.5rem" },
                children: subtitle
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxs8(
          "div",
          {
            className: "flex flex-col sm:flex-row items-stretch sm:items-center justify-center w-full max-w-[30rem] sm:max-w-none",
            style: { gap: "0.5rem" },
            children: [
              primarySize ? /* @__PURE__ */ jsx9(BtnOwn, { size: primarySize, hideIcon: primaryHideIcon, onClick: onPrimaryClick, className: "w-full sm:w-auto", children: primaryLabel }) : /* @__PURE__ */ jsxs8(Fragment3, { children: [
                /* @__PURE__ */ jsx9(BtnOwn, { size: "S", hideIcon: primaryHideIcon, onClick: onPrimaryClick, className: "w-full sm:hidden", children: primaryLabel }),
                /* @__PURE__ */ jsx9(BtnOwn, { size: "M", hideIcon: primaryHideIcon, onClick: onPrimaryClick, className: "hidden sm:flex sm:w-auto", children: primaryLabel })
              ] }),
              secondaryLabel && /* @__PURE__ */ jsxs8(Fragment3, { children: [
                /* @__PURE__ */ jsx9(BtnOwn, { size: "S", hideIcon: true, variant: "secondary", onClick: onSecondaryClick, className: "w-full sm:hidden", children: secondaryLabel }),
                /* @__PURE__ */ jsx9(BtnOwn, { size: "M", hideIcon: true, variant: "secondary", onClick: onSecondaryClick, className: "hidden sm:flex sm:w-auto", children: secondaryLabel })
              ] })
            ]
          }
        )
      ]
    }
  ) });
}

// design-system/src/components/cta-form-newsletter.tsx
import { useState as useState4 } from "react";
import { jsx as jsx10, jsxs as jsxs9 } from "react/jsx-runtime";
function CtaFormNewsletter({
  buttonLabel = "Subscribe",
  buttonIcon = "/icons/Email.svg",
  placeholder = "yourmail@gmail.com",
  successMessage = "\u2713 You're subscribed!",
  onSubmit,
  className = ""
}) {
  const [email, setEmail] = useState4("");
  const [submitted, setSubmitted] = useState4(false);
  function handleSubmit(e) {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
    onSubmit?.(email);
  }
  if (submitted) {
    return /* @__PURE__ */ jsx10(
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
  return /* @__PURE__ */ jsxs9(
    "form",
    {
      onSubmit: handleSubmit,
      className: `flex flex-col sm:flex-row items-stretch sm:items-center w-full max-w-[30rem] lg:max-w-none lg:w-auto ${className}`,
      style: { gap: "0.5rem" },
      children: [
        /* @__PURE__ */ jsx10(
          "input",
          {
            type: "email",
            required: true,
            value: email,
            onChange: (e) => setEmail(e.target.value),
            placeholder,
            className: "font-inter-tight font-medium text-m text-white placeholder:text-white/40 focus:outline-none w-full sm:flex-1 sm:min-w-0 lg:flex-none lg:w-[22.5rem]",
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
        /* @__PURE__ */ jsx10(
          BtnOwn,
          {
            type: "submit",
            size: "M",
            icon: buttonIcon,
            className: "w-full sm:flex-1 lg:flex-none lg:w-[9.1875rem]",
            children: buttonLabel
          }
        )
      ]
    }
  );
}

// design-system/src/components/faq.tsx
import { useState as useState5 } from "react";
import { motion as motion4, AnimatePresence as AnimatePresence3 } from "framer-motion";
import { jsx as jsx11, jsxs as jsxs10 } from "react/jsx-runtime";
function FAQ({ items, className = "" }) {
  const [open, setOpen] = useState5(null);
  return /* @__PURE__ */ jsx11("div", { className: `w-full flex flex-col ${className}`, children: items.map((item, i) => {
    const isOpen = open === i;
    return /* @__PURE__ */ jsxs10("div", { style: { borderBottom: "1px solid rgba(255,255,255,0.1)" }, children: [
      /* @__PURE__ */ jsxs10(
        "button",
        {
          type: "button",
          onClick: () => setOpen(isOpen ? null : i),
          "aria-expanded": isOpen,
          className: "w-full flex items-center justify-between gap-4 text-left outline-none",
          style: { paddingTop: "clamp(1.25rem, 3vw, 1.75rem)", paddingBottom: "1.5rem", minHeight: "3.5rem" },
          children: [
            /* @__PURE__ */ jsx11("span", { className: "font-inter-tight font-medium text-[0.875rem] md:text-xl", style: { color: "var(--white-300)" }, children: item.q }),
            /* @__PURE__ */ jsx11(
              motion4.div,
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
                children: /* @__PURE__ */ jsx11("svg", { width: "12", height: "12", viewBox: "0 0 12 12", fill: "none", children: /* @__PURE__ */ jsx11("path", { d: "M6 1v10M1 6h10", stroke: "white", strokeWidth: "1.5", strokeLinecap: "round" }) })
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsx11(AnimatePresence3, { initial: false, children: isOpen && /* @__PURE__ */ jsx11(
        motion4.div,
        {
          initial: { height: 0, opacity: 0 },
          animate: { height: "auto", opacity: 1 },
          exit: { height: 0, opacity: 0 },
          transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
          style: { overflow: "hidden" },
          children: /* @__PURE__ */ jsx11("div", { style: { paddingBottom: "clamp(1.25rem, 3vw, 1.75rem)", paddingRight: "clamp(0rem, 8vw, 5rem)" }, children: /* @__PURE__ */ jsx11(
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
import { AnimatePresence as AnimatePresence4, motion as motion5 } from "framer-motion";
import { useEffect as useEffect5, useRef as useRef4, useState as useState6 } from "react";
import { jsx as jsx12, jsxs as jsxs11 } from "react/jsx-runtime";
var INQUIRY_OPTIONS = [
  { value: "press", label: "Press inquiry" },
  { value: "partnership", label: "Partnership" },
  { value: "investor", label: "Investor access" },
  { value: "general", label: "General" }
];
function InquiryDropdown({ value, onChange }) {
  const [open, setOpen] = useState6(false);
  const ref = useRef4(null);
  const selected = INQUIRY_OPTIONS.find((o) => o.value === value);
  useEffect5(() => {
    function onClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);
  return /* @__PURE__ */ jsxs11("div", { ref, className: "relative w-full", children: [
    /* @__PURE__ */ jsxs11(
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
          /* @__PURE__ */ jsx12(
            "span",
            {
              className: "font-inter-tight font-medium text-m",
              style: { color: selected ? "var(--white-100)" : "rgba(255,255,255,0.35)" },
              children: selected ? selected.label : "Inquiry type (optional)"
            }
          ),
          /* @__PURE__ */ jsx12(
            motion5.svg,
            {
              animate: { rotate: open ? 180 : 0 },
              transition: { duration: 0.2, ease: [0.4, 0, 0.2, 1] },
              width: "20",
              height: "20",
              viewBox: "0 0 20 20",
              fill: "none",
              "aria-hidden": "true",
              style: { flexShrink: 0, display: "block", width: "1.25rem", height: "1.25rem" },
              children: /* @__PURE__ */ jsx12("path", { d: "M5 8L10 13L15 8", stroke: "rgba(255,255,255,0.4)", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" })
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsx12(AnimatePresence4, { children: open && /* @__PURE__ */ jsx12(
      motion5.div,
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
        children: INQUIRY_OPTIONS.map((opt, i) => /* @__PURE__ */ jsx12(
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
  children
}) {
  return /* @__PURE__ */ jsxs11("div", { className: `flex flex-col ${className ?? ""}`, style: { gap: "0.375rem" }, children: [
    /* @__PURE__ */ jsx12(
      "div",
      {
        className: "flex items-center w-full",
        style: {
          background: "var(--black-500)",
          height: "3.75rem",
          borderRadius: "1rem",
          padding: "0 1rem",
          border: error ? "1px solid rgba(239,68,68,0.5)" : "none"
        },
        children: input ?? children
      }
    ),
    error && /* @__PURE__ */ jsx12("p", { className: "font-inter-tight font-medium text-red-400 text-xs", children: error })
  ] });
}
function SuccessState() {
  return /* @__PURE__ */ jsxs11(
    motion5.div,
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
        /* @__PURE__ */ jsx12(
          "div",
          {
            className: "flex items-center justify-center",
            style: {
              width: "3.5rem",
              height: "3.5rem",
              borderRadius: "50%",
              background: "var(--status-open-bg)",
              border: "1px solid var(--status-open-border)"
            },
            children: /* @__PURE__ */ jsx12("svg", { width: "20", height: "16", viewBox: "0 0 20 16", fill: "none", style: { width: "1.25rem", height: "1rem" }, children: /* @__PURE__ */ jsx12("path", { d: "M1.5 8L7 13.5L18.5 1.5", stroke: "var(--status-open)", strokeWidth: "2.2", strokeLinecap: "round", strokeLinejoin: "round" }) })
          }
        ),
        /* @__PURE__ */ jsxs11("div", { className: "flex flex-col items-center text-center", style: { gap: "0.5rem" }, children: [
          /* @__PURE__ */ jsx12(
            "h3",
            {
              className: "font-inter-tight font-semibold text-white",
              style: { fontSize: "clamp(1.125rem, 1.5vw, 1.375rem)", lineHeight: 1.2, letterSpacing: "-0.02em" },
              children: "Thank you \u2014 we received your request."
            }
          ),
          /* @__PURE__ */ jsx12(
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
  const [data, setData] = useState6({ email: "", name: "", position: "", company: "", inquiry: "" });
  const [errors, setErrors] = useState6({});
  const [submitted, setSubmitted] = useState6(false);
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
  return /* @__PURE__ */ jsx12(
    "section",
    {
      id: "contact-form",
      className: `relative w-full bg-page-bg flex flex-col items-center ${paddingClass}`,
      children: /* @__PURE__ */ jsxs11(
        motion5.div,
        {
          className: "relative w-full max-w-content container-px mx-auto flex flex-col items-center",
          style: { gap: "2rem" },
          initial: { opacity: 0, y: 60 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, amount: 0.2 },
          transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
          children: [
            /* @__PURE__ */ jsxs11("div", { className: "flex flex-col items-center justify-center w-full", style: { maxWidth: "37.5rem", gap: "1rem" }, children: [
              /* @__PURE__ */ jsxs11("div", { className: "flex gap-2 items-center font-inter-tight font-medium text-m text-neutral-30 whitespace-nowrap", children: [
                /* @__PURE__ */ jsx12("span", { className: "opacity-50", children: number }),
                /* @__PURE__ */ jsx12("span", { className: "opacity-80", children: label })
              ] }),
              /* @__PURE__ */ jsxs11("div", { className: "flex flex-col items-center text-center", style: { gap: "1rem" }, children: [
                /* @__PURE__ */ jsx12(
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
                /* @__PURE__ */ jsx12(
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
            /* @__PURE__ */ jsx12("div", { className: "flex flex-col items-center w-full", style: { maxWidth: "37.5rem", gap: "0.75rem" }, children: submitted ? /* @__PURE__ */ jsx12(SuccessState, {}) : /* @__PURE__ */ jsxs11("form", { onSubmit: handleSubmit, noValidate: true, className: "flex flex-col w-full", style: { gap: "0.5rem" }, children: [
              /* @__PURE__ */ jsx12(Field, { error: errors.email, input: /* @__PURE__ */ jsx12(
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
              /* @__PURE__ */ jsx12(Field, { error: errors.name, input: /* @__PURE__ */ jsx12(
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
              /* @__PURE__ */ jsx12(Field, { input: /* @__PURE__ */ jsx12(
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
              /* @__PURE__ */ jsxs11("div", { className: "flex flex-col sm:flex-row w-full", style: { gap: "0.5rem" }, children: [
                /* @__PURE__ */ jsx12(Field, { className: "flex-1", input: /* @__PURE__ */ jsx12(
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
                /* @__PURE__ */ jsx12("div", { className: "flex-1", children: /* @__PURE__ */ jsx12(
                  InquiryDropdown,
                  {
                    value: data.inquiry,
                    onChange: (v) => setData((f) => ({ ...f, inquiry: v }))
                  }
                ) })
              ] }),
              /* @__PURE__ */ jsxs11(
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
                    /* @__PURE__ */ jsx12(
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
              /* @__PURE__ */ jsx12(
                "p",
                {
                  className: "font-inter-tight font-medium text-center w-full",
                  style: {
                    fontSize: "var(--font-xs)",
                    lineHeight: 1.3,
                    color: "var(--white-400)",
                    marginTop: "0.5rem"
                  },
                  children: "We reply within 24 hours. By submitting, you agree to our processing of the information above."
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
import { jsx as jsx13, jsxs as jsxs12 } from "react/jsx-runtime";
function HeroEyebrow({ children, className = "" }) {
  return /* @__PURE__ */ jsxs12(
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
        /* @__PURE__ */ jsx13(
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
import { jsx as jsx14, jsxs as jsxs13 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsx14(
    "div",
    {
      className: `grid grid-cols-1 md:grid-cols-2 w-full ${className}`,
      style: { gap: 0 },
      children: cards.map((card) => /* @__PURE__ */ jsxs13(
        "div",
        {
          className: "ill-card relative overflow-hidden",
          style: {
            height: cardHeight,
            minWidth: "18.75rem",
            ...card.border ?? { border: "1px solid var(--black-500, #1A1A1A)" }
          },
          children: [
            /* @__PURE__ */ jsx14(
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
            !hideImages && /* @__PURE__ */ jsxs13("picture", { children: [
              card.imgMobile && /* @__PURE__ */ jsx14("source", { media: "(max-width: 480px)", srcSet: card.imgMobile }),
              /* @__PURE__ */ jsx14(
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
            /* @__PURE__ */ jsxs13(
              "div",
              {
                className: "absolute flex flex-col gap-3",
                style: { left: "1.5rem", right: "1.5rem", bottom: "1.5rem", zIndex: 5 },
                children: [
                  /* @__PURE__ */ jsx14(
                    "h3",
                    {
                      className: `font-inter-tight font-medium text-white ${titleClass}`,
                      style: { margin: 0 },
                      children: card.title
                    }
                  ),
                  /* @__PURE__ */ jsx14("p", { className: "font-inter-tight font-normal text-paragraph text-white-400", children: card.body })
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

// design-system/src/components/page-entry.tsx
import { motion as motion6 } from "framer-motion";
import { jsx as jsx15 } from "react/jsx-runtime";
function PageEntry({
  children,
  className = "",
  style,
  initial = { opacity: 0 },
  animate = { opacity: 1 },
  transition = { duration: 1.5, ease: [0.4, 0, 0.2, 1] },
  ...rest
}) {
  return /* @__PURE__ */ jsx15(
    motion6.main,
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
import { jsx as jsx16, jsxs as jsxs14 } from "react/jsx-runtime";
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
  const headingEl = /* @__PURE__ */ jsx16(
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
  const subtitleEl = subtitle && /* @__PURE__ */ jsx16(
    "p",
    {
      className: "font-inter-tight font-normal text-paragraph text-white/60",
      style: subtitleMaxWidth ? { maxWidth: subtitleMaxWidth } : void 0,
      children: subtitle
    }
  );
  return /* @__PURE__ */ jsxs14(
    "div",
    {
      className: `flex flex-col w-full ${alignClass} ${className}`,
      style: { gap, overflow: "visible" },
      children: [
        number !== void 0 && label && /* @__PURE__ */ jsx16(DescTag, { number, label }),
        subtitle ? /* @__PURE__ */ jsxs14("div", { className: `flex flex-col w-full ${alignClass}`, style: { gap: innerGap }, children: [
          headingEl,
          subtitleEl
        ] }) : headingEl
      ]
    }
  );
}

// design-system/src/components/slider-card.tsx
import { jsx as jsx17, jsxs as jsxs15 } from "react/jsx-runtime";
function SliderCard({ name, role, description, photo, linkedin, className = "" }) {
  return /* @__PURE__ */ jsxs15("div", { className: `flex flex-col items-start shrink-0 relative ${className}`, style: { gap: "1.5rem" }, children: [
    /* @__PURE__ */ jsxs15(
      "div",
      {
        className: "relative rounded-2 w-full overflow-hidden border-2 border-outline-100",
        style: { height: "25rem" },
        children: [
          /* @__PURE__ */ jsx17(
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
          /* @__PURE__ */ jsx17(
            "img",
            {
              alt: name,
              src: photo,
              className: "absolute inset-0 w-full h-full rounded-2",
              loading: "lazy",
              style: { zIndex: 1, objectFit: "contain", objectPosition: "bottom center" }
            }
          ),
          /* @__PURE__ */ jsxs15(
            "div",
            {
              className: "absolute top-5 left-5 flex gap-2 items-center px-4 py-3 rounded-1",
              style: { background: "var(--black-600)", backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)", zIndex: 2 },
              children: [
                /* @__PURE__ */ jsx17("span", { className: "rounded-full shrink-0 size-2", style: { background: "rgba(255,255,255,0.5)" } }),
                /* @__PURE__ */ jsx17(
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
    /* @__PURE__ */ jsxs15("div", { className: "flex flex-col items-start px-4 w-full", style: { gap: "1.25rem" }, children: [
      /* @__PURE__ */ jsxs15("div", { className: "flex flex-col items-start w-full", style: { gap: "0.75rem" }, children: [
        /* @__PURE__ */ jsx17(
          "h4",
          {
            className: "font-inter-tight font-semibold text-white w-full",
            style: { fontSize: "clamp(1.125rem, 1.5vw, 1.5rem)", lineHeight: 1.2, letterSpacing: "-0.02em", margin: 0 },
            children: name
          }
        ),
        /* @__PURE__ */ jsx17("p", { className: "font-inter-tight font-normal text-paragraph text-white/50 w-full", children: description })
      ] }),
      /* @__PURE__ */ jsxs15(
        "a",
        {
          href: linkedin || void 0,
          target: linkedin ? "_blank" : void 0,
          rel: linkedin ? "noreferrer" : void 0,
          className: "group flex items-center gap-2 text-white",
          children: [
            /* @__PURE__ */ jsx17("span", { className: "font-inter-tight font-medium text-m whitespace-nowrap group-hover:underline", children: "LinkedIn" }),
            /* @__PURE__ */ jsx17(
              "svg",
              {
                width: "12",
                height: "12",
                viewBox: "0 0 12 12",
                fill: "none",
                "aria-hidden": "true",
                className: "shrink-0 transition-transform duration-700 ease-in-out group-hover:rotate-180",
                children: /* @__PURE__ */ jsx17("path", { d: "M6 1.5v9M1.5 6h9", stroke: "currentColor", strokeWidth: "1.4", strokeLinecap: "round" })
              }
            )
          ]
        }
      )
    ] })
  ] });
}

// design-system/src/components/status-pill.tsx
import { jsx as jsx18, jsxs as jsxs16 } from "react/jsx-runtime";
var COLORS = {
  open: { dot: "var(--status-open)", bg: "var(--status-open-bg)", border: "var(--status-open-border)", text: "var(--status-open)" },
  closed: { dot: "var(--status-closed)", bg: "var(--status-closed-bg)", border: "var(--status-closed-border)", text: "var(--status-closed)" },
  soon: { dot: "var(--status-soon)", bg: "var(--status-soon-bg)", border: "var(--status-soon-border)", text: "var(--status-soon)" }
};
function StatusPill({ status, label, className = "" }) {
  const c = COLORS[status];
  return /* @__PURE__ */ jsxs16(
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
        /* @__PURE__ */ jsx18("span", { className: "block rounded-full", style: { width: "0.4375rem", height: "0.4375rem", background: c.dot } }),
        label
      ]
    }
  );
}

// design-system/src/components/tag.tsx
import { Fragment as Fragment4, jsx as jsx19, jsxs as jsxs17 } from "react/jsx-runtime";
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
  const content = /* @__PURE__ */ jsxs17(Fragment4, { children: [
    leading,
    label
  ] });
  if (onClick) {
    return /* @__PURE__ */ jsx19("button", { type: "button", onClick, className: cls, style, children: content });
  }
  if (href) {
    return /* @__PURE__ */ jsx19("a", { href, className: cls, style, children: content });
  }
  return /* @__PURE__ */ jsx19("span", { className: cls, style, children: content });
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
