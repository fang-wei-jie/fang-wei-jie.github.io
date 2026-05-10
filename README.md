# Fang Wei Jie Portfolio

Personal portfolio site built with [Astro](https://astro.build/) and Tailwind CSS.

## Development

Install dependencies:

```sh
npm install
```

Start the local dev server:

```sh
npm run dev
```

The site runs at `http://localhost:4321/` by default.

## Build

Build the static site:

```sh
npm run build
```

Astro writes the production output to `docs/` so it can be served by GitHub Pages.

## Tailwind

Tailwind is compiled through Astro's PostCSS pipeline. Do not add the Tailwind CDN script to the page; styles should come from `src/styles/global.css` and `tailwind.config.mjs`.
