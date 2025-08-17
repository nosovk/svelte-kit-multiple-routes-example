import { defineConfig } from "vite";
import { enhancedImages } from "@sveltejs/enhanced-img";
import { paraglideVitePlugin } from "@inlang/paraglide-js";
import { sveltekit } from "@sveltejs/kit/vite";

export default defineConfig({
	plugins: [
		paraglideVitePlugin({
			project: "./project.inlang",
			outdir: "./src/lib/paraglide",
			strategy: ["url"],
		}),
		enhancedImages(),
		sveltekit(),
	],
	server: {
		host: "0.0.0.0",
		port: 3000,
		strictPort: true,
		open: false,
	},
});
