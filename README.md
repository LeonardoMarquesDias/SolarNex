# SolarNex — Solar Energy Solutions UK

A professional landing page for a solar energy company in the United Kingdom. The project provides information about services, lead capture, customer reviews and FAQ, with full SEO implementation.

---

## Preview

![SolarNex Preview](public/screenshot.png)

> To add the screenshot: open the project in your browser (`npm run dev`), take a full-page screenshot and save it as `public/screenshot.png`.

---

## About the Project

| Item | Detail |
|------|--------|
| **Project start** | May 2026 |
| **Domain** | https://solarnex.com |
| **Market** | United Kingdom |
| **Goal** | Lead generation for solar panel installation |

---

## Technologies

| Technology | Version | Purpose |
|-----------|---------|---------|
| [Next.js](https://nextjs.org) | 13.5 | Main framework (SSG / Static Export) |
| [React](https://react.dev) | 18.2 | UI layer |
| [TypeScript](https://www.typescriptlang.org) | 5.2 | Static typing |
| [Tailwind CSS](https://tailwindcss.com) | 3.3 | Styling |
| [shadcn/ui](https://ui.shadcn.com) | — | Accessible UI components |
| [Lucide React](https://lucide.dev) | 0.446 | Icons |
| [React Hook Form](https://react-hook-form.com) | 7.53 | Lead capture form |
| [Zod](https://zod.dev) | 3.23 | Form validation |
| [Supabase JS](https://supabase.com) | 2.58 | Database (leads) |

---

## SEO Implementation

### Metadata
- `title` with dynamic template per page (`%s | SolarNex`)
- Optimised `meta description` with high-volume keywords
- `keywords` array focused on the UK solar market
- `canonical` tag on all pages to prevent duplicate content
- Granular `robots` attributes (index/follow + Googlebot-specific)
- `lang="en-GB"` and geographical meta tags (`geo.region`, `geo.country`)
- `theme-color` for mobile browsers

### Open Graph & Social
- `og:title`, `og:description`, `og:image`, `og:locale` (en_GB)
- `og:type: website` + `og:site_name`
- Twitter Card `summary_large_image`
- OG image 1200x630px

### Structured Data (JSON-LD)
| Schema | Benefit |
|--------|---------|
| `LocalBusiness` | Appears in Google Maps / Knowledge Panel |
| `WebSite` + `SearchAction` | Enables search box in Google results |
| `FAQPage` | FAQ rich result in Google (expanded answer) |
| `ItemList` + `Service` | Service highlights in search results |
| `AggregateRating` + `Review` | Star ratings in search results |
| Inline Microdata (`itemScope`/`itemProp`) | Semantic reinforcement on review cards |

### Accessibility & Core Web Vitals
- `aria-label` on all sections
- FAQ with `aria-expanded`, `aria-controls` and `<dl>/<dt>/<dd>` structure
- Reviews with `<blockquote>` and semantic list markup
- Icons marked with `aria-hidden="true"`
- Google Font loaded with `display: swap` (prevents FOIT)
- `dns-prefetch` for Pexels (external images)

### Crawling & Indexing
- `public/sitemap.xml` with all routes and priorities
- `public/robots.txt` with `Sitemap:` declaration
- Google verification support (`verification.google`)

---

## Page Structure

```
/                    → Main landing page
/privacy-policy      → Privacy policy
/terms-of-service    → Terms of service
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/solarnex.git
cd solarnex

# 2. Install dependencies
npm install

# 3. Configure environment variables
cp .env.example .env
# Edit .env with your Supabase credentials
```

### Environment Variables

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
```

### Commands

```bash
# Development
npm run dev

# Production build
npm run build

# Serve production build
npm run start

# TypeScript type check
npm run typecheck
```

The development server will be available at `http://localhost:3000`.

---

## Deployment

The project uses `output: 'export'` in `next.config.js`, generating static HTML files in the `out/` folder. Compatible with:

- **Vercel** (recommended)
- **Netlify**
- **GitHub Pages**
- Any CDN / static hosting

---

## Licence

All rights reserved &copy; 2026 SolarNex.
