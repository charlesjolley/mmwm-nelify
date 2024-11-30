import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import compressor from "astro-compressor";


import react from "@astrojs/react";


// https://astro.build/config
export default defineConfig({
  // https://docs.astro.build/en/guides/images/#authorizing-remote-images
  site: "https://tmc.club",
  image: {
    domains: ["images.unsplash.com"],
  },
  prefetch: true,
  integrations: [tailwind(), 
    sitemap(),
    compressor({
      gzip: false,
      brotli: true,
    }),
    react()],
  experimental: {
    clientPrerender: true,
    directRenderScript: true,
  },
});