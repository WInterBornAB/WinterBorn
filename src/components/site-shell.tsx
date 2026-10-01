"use client";

import { useState } from "react";
import { siteContent, type Language } from "@/content/site-content";
import { Hero } from "@/components/hero";
import { ProductGrid } from "@/components/product-grid";
import { CompanySections } from "@/components/company-sections";

export function SiteShell() {
  const [language, setLanguage] = useState<Language>("sv");
  const content = siteContent[language];

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="container header-inner">
          <a className="wordmark" href="#top" aria-label="WinterBorn home">WinterBorn</a>
          <nav className="desktop-nav" aria-label={language === "sv" ? "Huvudnavigation" : "Main navigation"}>
            <a href="#products">{content.nav.products}</a>
            <a href="#about">{content.nav.about}</a>
            <a href="#contact">{content.nav.contact}</a>
          </nav>
          <div className="language-switch" aria-label={language === "sv" ? "Välj språk" : "Choose language"}>
            <button type="button" aria-pressed={language === "sv"} onClick={() => setLanguage("sv")}>SV</button>
            <span aria-hidden="true">/</span>
            <button type="button" aria-pressed={language === "en"} onClick={() => setLanguage("en")}>EN</button>
          </div>
        </div>
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
    </div>
  );
}
