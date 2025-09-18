Vite React App (local instructions)

This project was scaffolded with Vite using the React template.

Quick start

1. Change directory into the project:

   cd vite-react-app

2. Install dependencies (if you haven't already):

   npm install

3. Start the dev server:

   npm run dev -- --host

Troubleshooting

- Node.js version: Vite requires Node.js v20.19.0+ or v22.12.0+. If you see an error mentioning your Node version, install a compatible Node version. Recommended options:
  - Use nvm (Node Version Manager):

    nvm install 20
    nvm use 20

  - Or upgrade/downgrade using your preferred Node installer.

- Crypto.hash error when running on Node 21.x: Node 21 has breaking changes that affect some tooling. Use Node 20 or Node 22+ to avoid this.

Notes

- The project folder `vite-react-app` contains the Vite config, `package.json` scripts, and a minimal React app in `src/`.
- If you'd like, I can switch the project to Yarn or PNPM, add TypeScript, or wire up a GitHub Actions workflow.
