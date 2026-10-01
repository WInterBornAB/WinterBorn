"use client";

import { useState } from "react";
import { siteContent, type Language } from "@/content/site-content";
import { Hero } from "@/components/hero";
import { ProductGrid } from "@/components/product-grid";
import { CompanySections } from "@/components/company-sections";

export function SiteShell() {
  const [language, setLanguage] = useState<Language>("sv");
  const [menuOpen, setMenuOpen] = useState(false);
  const content = siteContent[language];
  const menuLabel = language === "sv" ? "Öppna meny" : "Open menu";
  const closeMenuLabel = language === "sv" ? "Stäng meny" : "Close menu";

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="container header-inner">
          <a className="wordmark" href="#top" aria-label="WinterBorn home" onClick={closeMenu}>WinterBorn</a>
          <nav className="desktop-nav" aria-label={language === "sv" ? "Huvudnavigation" : "Main navigation"}>
            <a href="#products">{content.nav.products}</a>
            <a href="#about">{content.nav.about}</a>
            <a href="#contact">{content.nav.contact}</a>
          </nav>
          <div className="header-actions">
            <div className="language-switch" aria-label={language === "sv" ? "Välj språk" : "Choose language"}>
              <button type="button" aria-pressed={language === "sv"} onClick={() => setLanguage("sv")}>SV</button>
              <span aria-hidden="true">/</span>
              <button type="button" aria-pressed={language === "en"} onClick={() => setLanguage("en")}>EN</button>
            </div>
            <button
              className={`mobile-menu-toggle${menuOpen ? " is-open" : ""}`}
              type="button"
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              aria-label={menuOpen ? closeMenuLabel : menuLabel}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </button>
          </div>
        </div>
        {menuOpen && (
          <nav id="mobile-navigation" className="mobile-nav" aria-label={language === "sv" ? "Mobilnavigation" : "Mobile navigation"}>
            <div className="container mobile-nav-inner">
              <a href="#products" onClick={closeMenu}>{content.nav.products}</a>
              <a href="#about" onClick={closeMenu}>{content.nav.about}</a>
              <a href="#contact" onClick={closeMenu}>{content.nav.contact}</a>
            </div>
          </nav>
        )}
      </header>

      <main id="top">
        <Hero content={content.hero} />
        <ProductGrid content={content.products} />
        <CompanySections about={content.about} company={content.company} contact={content.contact} />
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <span className="footer-wordmark">WinterBorn</span>
          <span>© {new Date().getFullYear()} {content.footer.rights}</span>
        </div>
      </footer>

      <style>{`
        .header-actions {
          display: inline-flex;
          align-items: center;
          justify-content: flex-end;
          gap: 14px;
        }
        .mobile-menu-toggle {
          width: 34px;
          height: 34px;
          padding: 7px;
          display: inline-flex;
          flex-direction: column;
          justify-content: center;
          gap: 4px;
          border: 1px solid var(--line);
          border-radius: 7px;
          background: rgba(255,255,255,0.025);
          cursor: pointer;
        }
        .mobile-menu-toggle span {
          width: 100%;
          height: 1px;
          background: #d9e0e5;
          transform-origin: center;
          transition: transform 180ms ease, opacity 180ms ease;
        }
        .mobile-menu-toggle.is-open span:nth-child(1) { transform: translateY(5px) rotate(45deg); }
        .mobile-menu-toggle.is-open span:nth-child(2) { opacity: 0; }
        .mobile-menu-toggle.is-open span:nth-child(3) { transform: translateY(-5px) rotate(-45deg); }
        .mobile-nav {
          border-top: 1px solid var(--line);
          border-bottom: 1px solid var(--line);
          background: rgba(7, 9, 12, 0.97);
          backdrop-filter: blur(18px);
        }
        .mobile-nav-inner {
          padding-top: 10px;
          padding-bottom: 14px;
          display: grid;
        }
        .mobile-nav a {
          padding: 15px 0;
          border-bottom: 1px solid rgba(255,255,255,0.055);
          color: #c4cdd4;
          font-size: 0.9rem;
          letter-spacing: 0.01em;
        }
        .mobile-nav a:last-child { border-bottom: 0; }
        @media (min-width: 700px) {
          .mobile-menu-toggle, .mobile-nav { display: none; }
        }
      `}</style>
    </div>
  );
}
