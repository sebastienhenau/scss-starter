/* eslint @typescript-eslint/no-var-requires: 0 */
const { em, rem } = require("./.postcss/functions");

module.exports = {
	content: ["./src/scripts/**/*.js", "./src/index.html"],
	corePlugins: {
		container: false,
	},
	plugins: [
		require("@tailwindcss/line-clamp"),
		require("./.tailwind/plugins/fullBleed"),
		require("./.tailwind/plugins/cssVariables"),
		require("./.tailwind/plugins/flow"),
		require("./.tailwind/plugins/fontStyles"),
		require("./.tailwind/plugins/schemes"),
		require("./.tailwind/plugins/section"),
		require("./.tailwind/plugins/container")({
			maxWidth: rem("1440px"),
			spacing: {
				DEFAULT: 1,
				md: 2,
				lg: 3,
			},
		}),
	],
	theme: {
		screens: {
			"2xs": em("375px"),
			xs: em("568px"),
			sm: em("640px"),
			md: em("768px"),
			lg: em("1024px"),
			xl: em("1280px"),
			"2xl": em("1536px"),
		},
		cssVariables: {
			spacing: {},
			fontFamily: {},
			fontSize: {},
			colors: {},
		},
		fontStyles: {},
		section: {},
		flow: {},
		extend: {
			container: {},
		},
	},
};
