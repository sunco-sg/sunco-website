# Sunsets Collective Website

Single-page website for Sunsets Collective.

## Deploy to Vercel

1. Push this repo to GitHub.
2. Import the repo in Vercel — **no build step, no framework preset**. Vercel will serve everything statically.
3. Visit your project URL — `/` resolves to `index.html` automatically.

## Local preview

Open `index.html` directly in a browser, or run any static server from the repo root:

```sh
npx serve .
# or
python3 -m http.server
```

## Structure

```
.
├── index.html         ← entry point (Vercel serves this at /)
├── styles.css
├── app.jsx            ← React app, transpiled in-browser via Babel
├── tweaks-panel.jsx
└── assets/            ← images
```

Note: `app.jsx` and `tweaks-panel.jsx` are compiled in the browser via `@babel/standalone`. That keeps the deploy zero-build, but means there's a brief transpile delay on first paint. If you want a faster prod build later, pre-compile the JSX with esbuild or Vite and swap the script tags.
