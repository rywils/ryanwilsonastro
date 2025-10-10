import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import cloudflare from "@astrojs/cloudflare";
import react from "@astrojs/react";
import maintenance from "astro-maintenance";
import tailwindcss from "@tailwindcss/vite";

import icon from "astro-icon";

export default defineConfig({
  site: "https://ryanwilson.io",

  // Vite config: pass the single plugin instance returned by tailwindcss()
  vite: {
    plugins: [tailwindcss()],
  },

  // Astro integrations: one instance per integration
  integrations: [react(), mdx(), sitemap(), maintenance({
    enabled: true,
    template: "simple",
    title: "Site Under Maintenance",
    description: "We are performing scheduled maintenance. Please check back soon.",
    location: ["Des Moines, IA", "Urbandale, IA", "Waukee, IA", "Iowa", "Grimes, IA", "50322", "50263", "515"],
    override: "preview",
  }), icon()],

  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
  }),
});