# ByteSpace

A pixel-accurate Figma-to-Next.js conversion of **ByteSpace**, an online course marketplace. It includes a responsive landing page plus Sign In and Join Us pages. Built as part of the Doin Tech assessment.

**Live Demo:** [https://bytespace-new-web.vercel.app/](https://bytespace-new-web.vercel.app/)

## Pages

| Route     | Description                                                                                          |
| --------- | ---------------------------------------------------------------------------------------------------- |
| `/`       | Landing page: hero, partner logos, featured courses, learning paths, creator sections, testimonials |
| `/login`  | Sign In page (UI)                                                                                    |
| `/signup` | Join Us page (UI)                                                                                    |
| `/*`      | Custom 404 page for unknown routes, with a "Back to home" button                                     |

## Tech Stack

- **Framework:** Next.js 16 (App Router) with React 19
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4, `class-variance-authority`, `clsx`, `tailwind-merge`
- **Fonts:** Poppins (Google Fonts) and Satoshi (local)
- **Tooling:** ESLint, Prettier (with Tailwind plugin)
- **Deployment:** Vercel

## Getting Started

**Prerequisites:** Node.js 20+ and npm.

```bash
# 1. Clone the repository
git clone https://github.com/ragibBarket317/bytespace-new.git
cd bytespace-new

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env.local

# 4. Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Environment Variables

| Variable               | Description                | Default                 |
| ---------------------- | -------------------------- | ----------------------- |
| `NEXT_PUBLIC_SITE_URL` | Public base URL of the app | `http://localhost:3000` |

## Scripts

| Command                | Purpose                      |
| ---------------------- | ---------------------------- |
| `npm run dev`          | Start the development server |
| `npm run build`        | Create a production build    |
| `npm run start`        | Run the production build     |
| `npm run lint`         | Lint the codebase            |
| `npm run typecheck`    | Run the TypeScript checker   |
| `npm run format`       | Format code with Prettier    |
| `npm run format:check` | Check code formatting        |

## Project Structure

```
src/
├── app/            # Routes: (marketing) landing page, (auth) login & signup, not-found (404)
├── components/
│   ├── layout/     # Header, footer, mobile menu
│   ├── sections/   # Home and auth page sections
│   ├── common/     # Reusable cards (course, revenue, progress, etc.)
│   ├── ui/         # Base primitives (button, container, section)
│   └── icons/      # SVG icons
├── config/         # Site metadata and navigation links
├── data/           # Static content for courses and home sections
├── lib/            # Utilities (cn helper, design-unit scaling)
└── types/          # Shared TypeScript types
```

## Highlights

- Fully responsive layout with a mobile navigation menu
- Custom 404 page that guides users back to the home page
- Reusable, typed components with centralized static data
- Design tokens (colors, fonts) defined once in Tailwind's `@theme`
- Security headers enabled (HSTS, X-Frame-Options, Permissions-Policy, and more)
- Optimized images (AVIF/WebP) and fonts via Next.js

## Notes

- The Sign In and Join Us forms are UI only; no authentication backend is connected yet.
- Course and testimonial content is static mock data.
