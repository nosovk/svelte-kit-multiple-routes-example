import { loadEnv } from "vite";
import { readdir } from "node:fs/promises";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import adapterCloudflare from "@sveltejs/adapter-cloudflare";
import adapterStatic from "@sveltejs/adapter-static";

process.env = { ...process.env, ...loadEnv("", process.cwd()) };

const languages = Array.from(await readdir("./messages"))
	.filter((row) => row.endsWith(".json"))
	.map((row) => row.replace(".json", ""));

const routesDirname = ["routes", process.env.VITE_TYPE, process.env.VITE_ROUTE_SUFFIX]
	.filter(Boolean)
	.join("-");

const routePath = `./src/${routesDirname}`;

/** @type {import('@sveltejs/kit').KitConfig} */
let kit = {
	adapter: adapterCloudflare(),
	files: { routes: routePath },
	paths: { base: process.env.VITE_ROUTE_BASEPATH },
};

if (process.env.VITE_TYPE === "static") {
	kit = {
		adapter: adapterStatic({
			pages: ".svelte-kit/cloudflare",
			assets: ".svelte-kit/cloudflare",
			fallback: "/404",
		}),
		files: { routes: routePath },
		paths: { base: process.env.VITE_ROUTE_BASEPATH, relative: true },
		prerender: { entries: languages.map((locale) => `/${locale}`) },
		inlineStyleThreshold: 100000000,
	};
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: vitePreprocess(),
	kit,
};

export default config;
