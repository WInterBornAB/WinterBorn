import type { SiteContent } from "@/content/site-content";

type SectionsProps = {
  about: SiteContent["about"];
  company: SiteContent["company"];
  contact: SiteContent["contact"];
};

export function CompanySections({ about, company, contact }: SectionsProps) {
  return (
    <>
      <section id="about" className="section section-bordered" aria-labelledby="about-title">
        <div className="container split-section">
          <p className="kicker">{about.kicker}</p>
          <div className="split-copy">
            <h2 id="about-title">{about.title}</h2>
            <p>{about.body}</p>
          </div>
        </div>
      </section>

      <section className="section section-bordered compact-section" aria-labelledby="company-title">
        <div className="container company-grid">
          <div>
            <p className="kicker">{company.kicker}</p>
            <h2 id="company-title">{company.title}</h2>
          </div>
          <p className="company-body">{company.body}</p>
          <div className="company-meta">
            <span>{company.location}</span>
            <span>{company.registration}</span>
          </div>
        </div>
      </section>

      <section id="contact" className="section section-bordered contact-section" aria-labelledby="contact-title">
        <div className="container contact-grid">
          <div>
            <p className="kicker">{contact.kicker}</p>
            <h2 id="contact-title">{contact.title}</h2>
          </div>
          <div className="contact-copy">
            <p>{contact.body}</p>
            <a className="contact-mail" href={`mailto:${contact.email}`}>{contact.email}</a>
          </div>
        </div>
      </section>
    </>
  );
}
