# ACCURA INDUSTRIAL SUPPLIES website

A responsive static company-profile website built with React, Vite, React Router, Tailwind CSS, and Lucide icons.

## Local development

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Updating business details

Edit `src/data/company.js` to add the verified GSTIN, phone, WhatsApp, email, and map URL. Empty contact values render as non-clickable **To be added** placeholders. Never add unverified details.

Edit `src/data/products.js` to update categories, descriptions, or item lists. The generated hero image is stored at `public/images/industrial-hero.png`; replace it using the same filename or update its path in `src/pages/Home.jsx`.

## Domain and SEO setup

Before launch, replace `https://example.com` in `public/sitemap.xml` and `public/robots.txt` with the final domain. Update Open Graph metadata in `index.html` if required.

## GitHub Pages deployment

The project is configured for the `accura-industrial-supplies` repository and uses hash-based routes for reliable GitHub Pages navigation. See `DEPLOYMENT.md` for repository setup, Pages configuration, custom-domain instructions, and the automatic deployment workflow.

For other static hosts, the build command is `npm run build` and the output directory is `dist`.

No backend, forms, payments, tracking, or e-commerce features are included.
