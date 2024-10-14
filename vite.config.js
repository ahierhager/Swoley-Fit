import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// });

export default defineConfig({
  plugins: [react()],
  base: "/Swoley-Fit/", // Add this to match your repository name
  build: {
    outDir: "build", // This ensures the build folder is named 'build'
  },
});
