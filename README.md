# Siddharth Rajak — Portfolio

Personal portfolio for my Data Science and Machine Learning work. It's a single-page React app styled like a notebook page, with sticky notes, taped polaroids and stacked folder-tab project cards.

## What's on the page

- **Hero:** who I am, what I do, and the roles I'm open to.
- **About:** a short intro, real charts from my projects, and the tools I use.
- **Projects:** each card has its key result metrics, a chart from the project's own analysis, and links to the code and live demo.
  - Credit Risk Scorer
  - India Air Quality Analysis
  - SupportIQ
- **Contact:** email, LinkedIn and GitHub.

## Tech

React 19, Vite and plain CSS (one stylesheet per section). Fonts come from Google Fonts: Pixelify Sans, Space Grotesk, JetBrains Mono and Caveat.

## Run locally

```bash
npm install
npm run dev      # start the dev server
npm run build    # production build in dist/
npm run lint     # oxlint
```

## Editing content

All the text lives in `src/data.js`: links, project details, metrics and skills. Project charts are in `src/assets/figures/`.
