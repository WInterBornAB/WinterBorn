import type { SiteContent } from "@/content/site-content";

type HeroProps = { content: SiteContent["hero"] };

export function Hero({ content }: HeroProps) {
  return (
    <section className="hero section" aria-labelledby="hero-title">
      <div className="hero-orbit" aria-hidden="true" />
      <div className="hero-grid" aria-hidden="true" />
      <div className="container hero-content">
        <div className="eyebrow-line">
          <span className="signal-dot" />
          WinterBorn AB
        </div>
        <h1 id="hero-title" className="hero-title">{content.title}</h1>
        <p className="hero-copy">{content.description}</p>
        <a className="text-link" href="#products">
          {content.explore}
          <span aria-hidden="true">↘</span>
        </a>
      </div>
    </section>
  );
}
