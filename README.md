# EduTube — SaaS Starter

A production-ready SaaS starter built with **Next.js 15**, **TypeScript**, **Tailwind CSS**, and **shadcn/ui**.

## Tech Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui (New York style)
- Lucide React icons

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── (auth)/          # Auth route group
│   │   ├── login/
│   │   └── signup/
│   ├── (dashboard)/     # Dashboard route group
│   │   ├── dashboard/
│   │   └── courses/[id]/
│   ├── (marketing)/     # Landing page route group
│   ├── layout.tsx
│   └── globals.css
├── components/
│   ├── auth/            # Auth form components
│   ├── dashboard/       # Dashboard-specific components
│   ├── layout/          # Navbar, Sidebar, Footer
│   ├── marketing/       # Landing page sections
│   └── ui/              # shadcn/ui primitives
├── data/                # Dummy data & nav config
└── lib/                 # Utilities & constants
```

## Pages

| Route            | Description        |
| ---------------- | ------------------ |
| `/`              | Landing page       |
| `/login`         | Login page         |
| `/signup`        | Signup page        |
| `/dashboard`     | Dashboard overview |
| `/courses/[id]`  | Course detail page |

## Scripts

- `npm run dev` — Start development server
- `npm run build` — Production build
- `npm run start` — Start production server
- `npm run lint` — Run ESLint

## Notes

This is a **structure-only starter**. No authentication, database, or business logic is included. Wire up your preferred auth provider and data layer as needed.
