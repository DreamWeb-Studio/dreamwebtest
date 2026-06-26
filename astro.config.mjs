import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://dreamwebstudio.pl",
  trailingSlash: "always",
  vite: {
    cacheDir: "work/.vite",
    resolve: {
      preserveSymlinks: true
    }
  },
  integrations: [
    tailwind({
      applyBaseStyles: false
    }),
    react()
  ]
});
