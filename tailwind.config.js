const { em } = require("./.postcss/functions");
const { fullBleed, container, cssVariables, flow, fontStyles, schemes, section } = require("./.tailwind/plugins");

module.exports = {
	content: ["./src/scripts/**/*.js", "./src/index.html"],
	corePlugins: {
		container: false,
	},
	plugins: [
		fullBleed,
		cssVariables,
		flow,
		fontStyles,
		schemes,
		section,
		container({
			maxWidth: "1440px",
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
