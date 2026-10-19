# Little Astronauts website

React + TypeScript + Vite.

## Work on the site

```bash
npm install          # first time only
npm run dev          # live preview at http://localhost:5173 (auto-reloads on save)
```

- Text, stats, topics, timeline, venues and the contact email: `src/data.ts`
- Pages: `src/pages/` · Shared pieces: `src/components/` · Styles: `src/styles.css`
- Pages use the URL hash (`#rocketry`), so there is no server routing to set up.

`npm run typecheck` checks the TypeScript without building.

## Host it from the home PC

1. Build and serve:
   ```bash
   npm run build        # type-checks, then writes the site to dist/
   npm run serve        # serves dist/ at http://127.0.0.1:3000
   ```
2. Keep it running after reboots (optional):
   ```bash
   npm install -g pm2
   pm2 start npm --name little-astronauts -- run serve
   pm2 save
   pm2 startup          # follow the command it prints
   ```
   On Windows, use `pm2-installer` or Task Scheduler instead of `pm2 startup`.
3. Cloudflare Tunnel: in the Cloudflare dashboard go to **Zero Trust → Networks → Tunnels → Create a tunnel → Cloudflared**,
   run the install command it shows on this PC, then add a **Public Hostname**:
   `yourdomain.org` → `http://localhost:3000`.
   No router port forwarding is needed.

After editing content: `npm run build`, then `pm2 restart little-astronauts` (or restart `npm run serve`).

## Hosting a second site

Put it in its own folder and change the port in its `serve` script (e.g. `--port 3001`),
then add another Public Hostname in the same tunnel pointing at `http://localhost:3001`.
