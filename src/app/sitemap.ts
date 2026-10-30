import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.winterborn.se",
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
