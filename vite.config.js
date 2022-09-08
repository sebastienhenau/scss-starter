import { defineConfig } from "vite";
import path from "path";

const src = path.join(__dirname, "src");
const dist = path.join(__dirname, "dist");

export default defineConfig({
	root: src,
	build: {
		outDir: dist,
		emptyOutDir: true,
	},
	rollupOptions: {
		input: {
			main: path.resolve(src, "index.html"),
		},
	},
	resolve: {
		alias: {
			"@": src,
		},
	},
	server: {
		port: 9000,
		host: true,
	},
});
