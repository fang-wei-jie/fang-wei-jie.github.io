import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://fang-wei-jie.github.io',
  output: 'static',
  outDir: './docs',
  vite: {
    plugins: [tailwindcss()],
  },
});
