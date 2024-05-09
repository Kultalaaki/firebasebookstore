import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/firebasebookstore/", // name of the repository
  plugins: [react()],
});
