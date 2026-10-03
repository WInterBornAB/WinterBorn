export type Language = "sv" | "en";

export type Product = {
  name: string;
  eyebrow: string;
  description: string;
  status: string;
  href?: string;
  external?: boolean;
};

export type SiteContent = {
  nav: { products: string; about: string; contact: string };
  hero: { title: string; description: string; explore: string };
  products: { kicker: string; title: string; intro: string; items: Product[] };
  about: { kicker: string; title: string; body: string };
  company: { kicker: string; title: string; body: string; location: string; registration: string };
  contact: { kicker: string; title: string; body: string; email: string };
  footer: { rights: string };
};

export const siteContent: Record<Language, SiteContent> = {
  sv: {
    nav: { products: "Produkter", about: "Om", contact: "Kontakt" },
    hero: {
      title: "WinterBorn",
      description: "WinterBorn AB utvecklar och driver digitala produkter och tjänster.",
      explore: "Utforska våra produkter",
    },
    products: {
      kicker: "Produkter",
      title: "Byggda för att användas.",
      intro: "Tre produkter i olika faser, samlade under samma bolag och samma ambition: tydliga digitala upplevelser som löser riktiga problem.",
      items: [
        {
          name: "RemoteRaid",
          eyebrow: "Gaming utility",
          description: "En digital tjänst för att matcha och koordinera spelare kring remote raids.",
          status: "Live / test",
          href: "https://remoteraid.app",
          external: true,
        },
        {
          name: "WNTR Training",
          eyebrow: "Training platform",
          description: "En träningsplattform för atleter och coacher med strukturerade program, progression och enkel uppföljning.",
          status: "Under utveckling",
          href: "https://wntrtraining.app",
          external: true,
        },
        {
          name: "LureWise",
          eyebrow: "Fishing intelligence",
          description: "En kommande plattform för smartare val av fiskedrag, tackelhantering och fångstloggning.",
          status: "Kommer senare",
        },
      ],
    },
    about: {
      kicker: "Om WinterBorn",
      title: "Ett produktbolag, flera idéer.",
      body: "WinterBorn AB utvecklar och driver egna digitala produkter. Fokus ligger på enkelhet, användbarhet och långsiktiga lösningar som kan växa med sina användare.",
    },
    company: {
      kicker: "Bolaget",
      title: "WinterBorn AB",
      body: "Svenskt aktiebolag med fokus på utveckling och drift av digitala produkter och tjänster.",
      location: "Växjö, Sverige",
      registration: "Org.nr 559604-4239",
    },
    contact: {
      kicker: "Kontakt",
      title: "Hör av dig.",
      body: "För frågor om WinterBorn eller våra produkter.",
      email: "hello@winterborn.se",
    },
    footer: { rights: "WinterBorn AB. Alla rättigheter förbehållna." },
  },
  en: {
    nav: { products: "Products", about: "About", contact: "Contact" },
    hero: {
      title: "WinterBorn",
      description: "WinterBorn AB develops and operates digital products and services.",
      explore: "Explore our products",
    },
    products: {
      kicker: "Products",
      title: "Built to be used.",
      intro: "Three products at different stages, brought together by one company and one ambition: clear digital experiences that solve real problems.",
      items: [
        {
          name: "RemoteRaid",
          eyebrow: "Gaming utility",
          description: "A digital service for matching and coordinating players around remote raids.",
          status: "Live / testing",
          href: "https://remoteraid.app",
          external: true,
        },
        {
          name: "WNTR Training",
          eyebrow: "Training platform",
          description: "A training platform for athletes and coaches with structured programming, progression and simple follow-up.",
          status: "In development",
          href: "https://wntrtraining.app",
          external: true,
        },
        {
          name: "LureWise",
          eyebrow: "Fishing intelligence",
          description: "An upcoming platform for smarter lure selection, tackle management and catch logging.",
          status: "Coming later",
        },
      ],
    },
    about: {
      kicker: "About WinterBorn",
      title: "One product company, several ideas.",
      body: "WinterBorn AB develops and operates its own digital products, with a focus on simplicity, usability and long-term solutions that can grow with their users.",
    },
    company: {
      kicker: "Company",
      title: "WinterBorn AB",
      body: "A Swedish limited company focused on developing and operating digital products and services.",
      location: "Växjö, Sweden",
      registration: "Company no. 559604-4239",
    },
    contact: {
      kicker: "Contact",
      title: "Get in touch.",
      body: "For questions about WinterBorn or our products.",
      email: "hello@winterborn.se",
    },
    footer: { rights: "WinterBorn AB. All rights reserved." },
  },
};
