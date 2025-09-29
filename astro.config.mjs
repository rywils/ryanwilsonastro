// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import cloudflare from "@astrojs/cloudflare";

import tailwindcss from "@tailwindcss/vite";


import maintenance from "astro-maintenance";


// https://astro.build/config
export default defineConfig({
  
  site: "https://ryanwilson.io",

     vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    mdx(), 
    sitemap(), 
  maintenance({
      enabled: true, // Maintenance mode enabled
      template: "simple", // Options: 'simple', 'countdown', 'construction' or imported template content
      title: "Site Under Maintenance",
      description: "We are performing scheduled maintenance. Please check back soon.",
      override: "preview", // Access site with ?preview
      // Other optional parameters...
    }),
  ],
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
    
  }),

});