import { defineConfig } from "vite";
import { VitePluginNode } from "vite-plugin-node";

export default defineConfig({
  server: {
    host: true,
    port: 3000,
  },
  plugins: [
    ...VitePluginNode({
      adapter: "fastify",
      appPath: "./src/app.ts",
      exportName: "app",
      tsCompiler: "esbuild",
    }),
  ],
});
