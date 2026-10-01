import type { SiteContent } from "@/content/site-content";

type ProductGridProps = { content: SiteContent["products"] };

export function ProductGrid({ content }: ProductGridProps) {
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

        <div className="product-grid">
          {content.items.map((product, index) => {
            const card = (
              <article className={`product-card product-card-${index + 1}`}>
                <div className="product-topline">
                  <span className="product-index">0{index + 1}</span>
                  <span className="status-pill">{product.status}</span>
                </div>
                <div className="product-body">
                  <p className="product-eyebrow">{product.eyebrow}</p>
                  <h3>{product.name}</h3>
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
