import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Allow requests that arrive through Cloudflare Tunnel with your domain name.
  preview: { allowedHosts: true },
});
