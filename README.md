# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.

## Vercel deployment

This project is configured for Vercel deployment as a static SPA.

- Root Directory: `./`
- Build Command: `npm run build`
- Output Directory: `dist`
- `vercel.json` is included to rewrite all routes to `index.html` for client-side routing.

### Production API

The frontend uses the production API URL directly in `src/services/api.js`:

`https://deeksharambh2026-production.up.railway.app`

This means the app will call your Railway backend in production without requiring a local proxy.
