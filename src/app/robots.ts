import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://www.winterborn.se/sitemap.xml",
    host: "https://www.winterborn.se",
  };
}
