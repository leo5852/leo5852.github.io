# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Static GitHub Pages portfolio site for a game programmer. No build step, no framework — plain HTML/CSS served directly by GitHub Pages from the `main` branch root.

## Deployment

Push to `main` → GitHub Pages serves automatically at `https://leo5852.github.io`. No CI, no build pipeline.

## Architecture

**Two-level page structure:**
- `index.html` — landing page with profile section (top) and project grid (bottom)
- `projects/projectN.html` — individual project detail pages; each links back to `index.html`

**Single stylesheet:** `css/style.css` covers both levels. Detail-page styles are namespaced under `.detail-*` classes; shared components (header, footer, skill tags) are reused across all pages via the same CSS file.

**Images:** stored flat in `images/`. Expected filenames: `profile.jpg`, `project1.jpg`–`project4.jpg`. The file `images/placeholder.svg` is a fallback shown when images are missing.

## Adding a new project

1. Add a new `<a class="project-card">` entry in the `div.project-grid` of `index.html`.
2. Create `projects/projectN.html` — copy an existing detail page as a template; keep the same section structure (`.detail-section` blocks for 소개, 사용 기술, 내 역할, 기술적 특이사항).
3. Drop the thumbnail image into `images/` with a matching filename.

## Content that still needs real data

Placeholder values in `index.html` and all `projects/*.html` that must be replaced:
- Name (`홍길동`), email, university name
- Project titles, descriptions, tech stacks, and role/highlight bullets
- Profile and project thumbnail images

## Theme

Retro / classic-game look defined by CSS variables in `:root` of `css/style.css`: soft sky background, navy ink borders, hard offset shadows, muted blue and yellow accents. No gradients and no red. Font is the system stack ('Segoe UI', 'Apple SD Gothic Neo').

## Carousels & media

- `js/detail-carousel.js` builds the dots from the number of `.issue-slide` elements, so only add slides; carousels with one slide hide dots and arrows.
- Videos live in `videos/`. GitHub rejects files over 100MB: compress first (720p H.264 is enough). Uncompressed originals go in `videos/_original/`, which is gitignored.
