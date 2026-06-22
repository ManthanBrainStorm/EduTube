# EduTube

**Turn YouTube playlists into structured courses.**

A premium SaaS starter built with Next.js 15, TypeScript, Tailwind CSS, and shadcn/ui. Dark-mode first, inspired by Linear, Notion, and Arc Browser.

## Core Workflow

1. Paste a YouTube playlist URL
2. Generate a structured course
3. Track progress across lessons
4. Resume exactly where you left off

## Tech Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui
- Lucide React

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Pages

| Route | Description |
|---|---|
| `/` | Landing — hero with playlist input + transformation mockup |
| `/login` | Sign in |
| `/signup` | Create account |
| `/dashboard` | Library of imported playlists + import bar |
| `/courses/[id]` | Course view — video player + lesson sidebar |

## Project Structure

```
src/
├── app/
│   ├── (marketing)/     Landing page
│   ├── (auth)/          Login & signup
│   └── (dashboard)/     Library + course player
├── components/
│   ├── auth/
│   ├── course/          Video player + lesson sidebar
│   ├── dashboard/       Import bar, playlist cards, stats
│   ├── layout/          Marketing header/footer, app sidebar
│   ├── marketing/       Hero, how-it-works, features, FAQ
│   ├── shared/          Logo
│   └── ui/              shadcn/ui primitives
├── data/                Mock playlist data
└── lib/                 Utils & constants
```

## Design

- **Dark mode first** — deep backgrounds, subtle borders, violet accent
- **No generic LMS** — no fake instructors, certificates, or marketplace
- **Product Hunt ready** — premium startup aesthetic with interactive hero mockup

## Notes

Structure and UI only. No YouTube API integration, auth, or database included.
