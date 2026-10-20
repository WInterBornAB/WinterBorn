import Image from "next/image";
import type { SiteContent } from "@/content/site-content";

type ProductGridProps = { content: SiteContent["products"] };

export function ProductGrid({ content }: ProductGridProps) {
  const featured = content.items[0];
  return (
    <section id="products" className="section section-bordered" aria-labelledby="products-title">
      <div className="container">
        <div className="section-heading">
          <p className="kicker">{content.kicker}</p>
          <div>
            <h2 id="products-title">{content.title}</h2>
            <p className="section-intro">{content.intro}</p>
          </div>
        </div>

        <article id="remote-raid" className="featured-product">
          <div className="featured-copy">
            <div className="product-topline">
              <p className="kicker">{featured.eyebrow}</p>
              <span className="status-pill">{featured.status}</span>
            </div>
            <div className="product-brand-heading">
              <Image className="product-brand-logo" src="/brand/remote-raid.svg" alt="" width={56} height={56} />
              <h3>{featured.name}</h3>
            </div>
            <p className="featured-description">{featured.description}</p>
            <a className="primary-button" href={featured.href} target="_blank" rel="noreferrer">
              {content.featuredLink}<span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="app-preview">
            <div className="preview-toolbar" aria-hidden="true"><span className="preview-dots">•••</span><span>remoteraid.app</span></div>
            <div className="preview-screen">
              <Image src="/products/remote-raid.png" alt={content.previewAlt} width={723} height={731} sizes="(max-width: 899px) 90vw, 600px" />
            </div>
          </div>
        </article>

        <div className="product-grid">
          {content.items.slice(1).map((product, index) => {
            const card = (
              <article className={`product-card product-card-${index + 2}`}>
                <div className="product-topline">
                  <span className="product-index">0{index + 2}</span>
                  <span className="status-pill">{product.status}</span>
                </div>
                <div className="product-body">
                  <p className="product-eyebrow">{product.eyebrow}</p>
                  <h3>
                    {product.logo ? (
                      <Image className="training-wordmark" src={product.logo} alt={product.name} width={800} height={300} />
                    ) : product.name}
                  </h3>
                  <p>{product.description}</p>
                </div>
                <div className="product-footer">
                  <span>WinterBorn / Product</span>
                  {product.href ? <span aria-hidden="true">↗</span> : <span aria-hidden="true">—</span>}
                </div>
              </article>
            );

            return product.href ? (
              <a
                className="product-link"
                key={product.name}
                href={product.href}
                target={product.external ? "_blank" : undefined}
                rel={product.external ? "noreferrer" : undefined}
                aria-label={`${product.name} – ${product.status}`}
              >
                {card}
              </a>
            ) : (
              <div key={product.name}>{card}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
