# NexVex Boilate

A production-ready boilerplate for Next.js 16 + Convex. Ship your SaaS in hours, not weeks.

[![GitHub stars](https://img.shields.io/github/stars/yourusername/yourrepo?style=social)](https://github.com/yourusername/yourrepo)
[![Next.js](https://img.shields.io/badge/Next.js-16-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)

## What's Included

### Landing Page
- Sticky header with scroll-aware blur
- Animated hero section with CTAs
- "Trusted by" logo cloud
- Fully responsive with mobile navigation

### Authentication
- Two-column layout with particle animation
- Canvas-based orca particle field (your brand, alive)
- Email OTP flow (enter email → receive code → verify)
- Google & Apple OAuth buttons
- Typing interactions (particles react to keyboard input)

### Dashboard
- Collapsible sidebar with icon mode
- Stats cards and recent activity
- Reusable layout components
- Dark mode ready

## Quick Start

```bash
# Clone the repository
git clone https://github.com/yourusername/yourrepo.git
cd yourrepo

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your Convex credentials

# Run the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the landing page.

## Project Structure

```
src/
├── app/
│   ├── (app)/           # Authenticated app routes
│   │   ├── dashboard/   # Main dashboard
│   │   └── layout.tsx   # App shell with sidebar
│   ├── (auth)/          # Auth routes
│   │   └── auth/        # Login page
│   └── page.tsx         # Landing page
├── components/
│   ├── ui/              # shadcn/ui primitives
│   ├── layout/          # Layout components
│   └── views/           # Page sections
├── hooks/               # Custom React hooks
└── lib/                 # Utilities
```

## Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) with App Router
- **Language:** [TypeScript](https://www.typescriptlang.org/) (strict mode)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **UI:** [shadcn/ui](https://ui.shadcn.com/) + [Radix UI](https://www.radix-ui.com/)
- **Animation:** [tw-animate-css](https://github.com/twbs/tw-animate-css)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Backend:** [Convex](https://convex.dev/) (planned)

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server (Turbopack) |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run typecheck` | Run TypeScript checks |
| `npm run format` | Format code with Prettier |

## Roadmap

- [x] Landing page with animations
- [x] Auth UI with particle effects
- [x] Dashboard shell with sidebar
- [x] OTP verification flow
- [ ] Convex backend integration
- [ ] Working authentication
- [ ] Auth guard middleware
- [ ] Projects CRUD
- [ ] Team management
- [ ] Analytics charts
- [ ] Billing (Stripe)

## Design Principles

1. **Server Components First** — Only use client components when necessary
2. **Zero `any` Types** — Strict TypeScript everywhere
3. **Composition Over Configuration** — Small, composable components
4. **No Prop Drilling** — Use context or URL state
5. **Performance Matters** — Static generation, minimal JS, optimized assets

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

[MIT](LICENSE) — Free for personal and commercial use.

---

Built with ❤️ by [Purple Orca](https://github.com/yourusername)
