# ACCURA INDUSTRIAL SUPPLIES — React Website Development Instructions

## Role and objective
Build a complete, production-ready, clean, modern, professional, responsive company profile website for **ACCURA INDUSTRIAL SUPPLIES**, an industrial products and maintenance supplies trading business in Perumbavoor, Ernakulam, Kerala, India.

The site is informational only, suitable for sharing via visiting cards, brochures, and business communications. It is **not** an e-commerce application. Implement the website, not just mockups. Do not add carts, checkout, login, payment, customer accounts, backend, or admin panels.

## Technology
- React with Vite and JavaScript (JSX).
- React Router for separate pages/routes.
- Tailwind CSS for styling; use Lucide React for consistent icons.
- Static content stored in a simple centralized data/config file so company contact details and product categories can be updated easily.
- No backend or database. Compatible with static hosting on GitHub Pages, GitLab Pages, Netlify, Vercel, or Cloudflare Pages.
- Use accessible semantic HTML and optimized assets. Avoid unnecessary dependencies.

## Visual direction
Create a premium but restrained B2B industrial design: clean white and light-gray backgrounds, charcoal/navy typography, and a single safety-orange or steel-blue accent. Use modern readable typography, generous whitespace, subtle borders, well-proportioned product imagery, and minimal animations. The result should feel trustworthy, technical, and polished, not flashy or template-heavy.

Design mobile-first, then tablet and desktop. Provide a sticky responsive header with logo/wordmark, navigation, and a prominent **Request a Quote** contact CTA. On small screens use an accessible hamburger menu. Add a consistent footer with business information, quick links, product categories, and contact placeholders.

Use high-quality, relevant industrial product images (bearings, belts, gearboxes, oils, grease, valves, industrial spare parts). Prefer properly licensed assets; use local assets under `public/images` or clearly labeled placeholders until licensed images are supplied. Do not invent brands, product certifications, stock availability, partnerships, or company history.

## Routes and pages

### `/` — Home
- Hero: **ACCURA INDUSTRIAL SUPPLIES**
- Tagline: **Your Partner for Industrial Products & Maintenance Supplies.**
- Short introduction: Industrial products and maintenance supplies trading company based in Perumbavoor, Ernakulam, Kerala, serving manufacturing industries, factories, workshops, and other industrial establishments.
- CTAs: **Explore Products**, **Contact Us**, and **Request a Quote**.
- Featured product categories in attractive image cards.
- Why Choose Us section: broad sourcing range, customer-focused procurement, competitive and transparent pricing, dependable coordination, and responsive support. Frame these as business commitments rather than proven guarantees.
- Short About preview and contact banner.

### `/about` — About Us
Use the supplied company profile faithfully, with polished presentation and concise, readable sections:
- Who We Are
- Our Business Approach
- Target Customers
- Vision and Mission

**Company introduction:**
ACCURA INDUSTRIAL SUPPLIES is an industrial products and maintenance supplies trading company based in Perumbavoor, Ernakulam, Kerala, India. We aim to provide reliable industrial products and essential maintenance materials to manufacturing industries, factories, workshops, and other industrial establishments.

Our goal is to simplify industrial procurement by providing a wide range of quality products through a single point of contact. We focus on understanding our customers’ requirements, sourcing suitable products, offering competitive pricing, and ensuring dependable customer support.

**Business approach:**
We aim to procure products from suitable manufacturers, authorised distributors, and reliable suppliers according to customer specifications and requirements. Focus areas include wide product variety, competitive and transparent pricing, requirement-based sourcing, timely coordination and delivery, reliable communication, and long-term customer relationships.

**Target customers:** Plywood and laminate manufacturing industries; manufacturing plants and factories; engineering and fabrication workshops; maintenance departments; mechanical and electrical contractors; industrial service providers; and commercial establishments requiring industrial supplies.

**Vision:** To become a trusted industrial supply partner by providing a broad range of industrial products, dependable sourcing, competitive pricing, and professional customer service.

**Mission:** To make industrial purchasing easier by connecting customers with the products they need for machinery maintenance, plant operations, and industrial applications.

### `/products` — Products
Create a responsive category grid with a clear industrial photo or tasteful placeholder for each category, category title, brief description, and list of items. No prices, cart, or purchase buttons. Provide a **Request a Quote** CTA that links to the Contact page (optionally with category query parameter).

Use all eight categories:

1. **Bearings & Mechanical Components:** Industrial bearings; ball bearings and roller bearings; pillow block bearings and bearing housings; bushes, seals, and related mechanical components.
2. **Power Transmission Products:** V-belts and industrial belts; pulleys and belt drive components; chains and sprockets; couplings and other power transmission accessories.
3. **Gearboxes & Drive Systems:** Industrial gearboxes and geared motors; mechanical drive components; power transmission accessories; related industrial machinery spares.
4. **Industrial Oils & Lubricants:** Industrial lubricating oils; hydraulic oils; gear oils; compressor oils; other industrial lubricants.
5. **Grease & Lubrication Products:** Industrial grease; high-temperature grease; multipurpose grease; special-purpose lubrication products.
6. **Industrial Chemicals:** Industrial cleaning chemicals; maintenance chemicals; degreasers and related cleaning products; other industrial process and maintenance chemicals subject to application requirements.
7. **Pneumatic & Hydraulic Products:** Solenoid valves; pneumatic fittings and accessories; air preparation units and related components; hydraulic fittings and selected hydraulic components.
8. **Industrial Maintenance & MRO Supplies:** Mechanical spare parts; fasteners, nuts, bolts, and washers; seals, gaskets, and related accessories; factory maintenance consumables; other industrial requirements based on customer demand.

### `/gst-details` — GST Details
- Display business name and location.
- GSTIN status: **To be added after registration**.
- Never generate or guess a GSTIN, registration status, legal entity type, or tax credentials.
- Build this page so the real GSTIN can be added through one configuration value later.

### `/contact` — Contact & Location
- Business name: **ACCURA INDUSTRIAL SUPPLIES**.
- Location: **Perumbavoor, Ernakulam, Kerala, India**.
- Phone: **To be added**.
- WhatsApp: **To be added**.
- Email: **To be added**.
- Render phone, WhatsApp, and email links only when real values have been configured. Until then, show clear non-clickable placeholders; do not invent data.
- Include a location section and optional Google Maps search link for Perumbavoor, Ernakulam; do not claim an exact office pin/address without one.
- Include a simple contact CTA; no fake working contact form. If implementing a form, it must be clearly labeled as requiring an integration before messages can be delivered. Prefer direct contact links once configured.

## Centralized configuration
Create `src/data/company.js` with fields such as:
```js
export const company = {
  name: 'ACCURA INDUSTRIAL SUPPLIES',
  tagline: 'Your Partner for Industrial Products & Maintenance Supplies.',
  location: 'Perumbavoor, Ernakulam, Kerala, India',
  gstin: '',
  phone: '',
  whatsapp: '',
  email: '',
};
```
Create `src/data/products.js` for all product categories, descriptions, item lists, and image paths. Avoid duplicating these values across components.

## Shared components
Build reusable `Header`, `MobileNav`, `Footer`, `PageHero`, `SectionHeading`, `ProductCard`, `CTASection`, and `ContactDetails` components where helpful. Keep files organized under `src/components`, `src/pages`, `src/data`, and `src/assets`.

## UX and accessibility
- Fully responsive at ~320px, 375px, 768px, 1024px, and large desktop widths.
- Clear focus states, adequate color contrast, accessible navigation labels, semantic headings, descriptive alt text, keyboard-operable mobile menu.
- No horizontal scrolling or broken image layouts.
- Active navigation indication; smooth but subtle hover states.
- Respect `prefers-reduced-motion`.
- Helpful 404 page and scroll-to-top on route changes.

## SEO and performance
- Page-specific titles and descriptions, favicon, Open Graph basics, and descriptive content for local searches (industrial supplies in Perumbavoor / Ernakulam / Kerala).
- Responsive image sizing, lazy loading below the fold, sensible image compression, minimal JavaScript.
- Add sitemap/robots where practical for the chosen static deployment.
- Do not make misleading claims such as being an authorised dealer or market leader.

## Deployment and documentation
- Provide a working `npm install`, `npm run dev`, and `npm run build` setup.
- Add a README explaining where to update GSTIN, phone, WhatsApp, email, product images, and the eventual domain.
- Document static-hosting deployment. For GitHub/GitLab Pages, account for base paths and SPA route refresh handling (404 fallback, hash routing, or equivalent), rather than assuming React Router history routes will work automatically.
- Do not buy a domain or provision hosting without explicit instruction.

## Acceptance criteria
- All five routes work: Home, About, Products, GST Details, Contact.
- All eight product categories and their item lists appear correctly.
- Mobile navigation works and the layout looks polished on phone and desktop.
- No fabricated contact details, GSTIN, product inventory, company claims, or functional integrations.
- No e-commerce functionality.
- Build completes without errors; no broken navigation or images.
- The result looks like a credible, minimal, modern industrial B2B company website ready for content verification and deployment.

## Implementation instruction
Start by setting up the project structure and dependencies. Then implement the complete responsive UI, reusable components, page content, routing, SEO basics, and documentation. Run the build and fix any issues. Prefer finished, maintainable code over explanations or placeholder-only mockups.
