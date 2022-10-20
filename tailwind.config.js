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
		// require("./.tailwind/plugins/container")({
		// 	maxWidth: rem("960px"),
		// 	spacing: {
		// 		DEFAULT: 1,
		// 		md: 2,
		// 		lg: 3,
		// 	},
		// }),
		require("./.tailwind/plugins/layout")({
			containerWidth: rem("960px"),
			popWidth: rem("100px"),
			burstWidth: rem("200px"),
			bound: {
				DEFAULT: 1,
				md: 2,
				lg: 3,
			},
			gutter: {
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
			spacing: {
				"-3": "clamp(0.25rem, calc(0.23rem + 0.09vw), 0.31rem)",
				"-2": "clamp(0.50rem, calc(0.46rem + 0.17vw), 0.63rem)",
				"-1": "clamp(0.75rem, calc(0.69rem + 0.26vw), 0.94rem)",
				0: "clamp(1.00rem, calc(0.92rem + 0.34vw), 1.25rem)",
				1: "clamp(1.50rem, calc(1.38rem + 0.52vw), 1.88rem)",
				2: "clamp(2.00rem, calc(1.84rem + 0.69vw), 2.50rem)",
				3: "clamp(3.00rem, calc(2.76rem + 1.03vw), 3.75rem)",
				4: "clamp(4.00rem, calc(3.68rem + 1.38vw), 5.00rem)",
				5: "clamp(6.00rem, calc(5.52rem + 2.07vw), 7.50rem)",
				6: "clamp(7.00rem, calc(6.43rem + 2.41vw), 8.75rem)",
				7: "clamp(8.00rem, calc(7.35rem + 2.76vw), 10.00rem)",
				8: "clamp(9.00rem, calc(8.27rem + 3.10vw), 11.25rem)",
				9: "clamp(10.00rem, calc(9.19rem + 3.45vw), 12.50rem)",
			},
			fontFamily: {
				primary: "Roboto",
			},
			fontSize: {
				"-2": "clamp(0.64rem, calc(0.59rem + 0.22vw), 0.80rem)",
				"-1": "clamp(0.80rem, calc(0.74rem + 0.28vw), 1.00rem)",
				0: "clamp(1.00rem, calc(0.92rem + 0.34vw), 1.25rem)",
				1: "clamp(1.25rem, calc(1.15rem + 0.43vw), 1.56rem)",
				2: "clamp(1.56rem, calc(1.44rem + 0.54vw), 1.95rem)",
				3: "clamp(1.95rem, calc(1.80rem + 0.67vw), 2.44rem)",
				4: "clamp(2.44rem, calc(2.24rem + 0.84vw), 3.05rem)",
				5: "clamp(3.05rem, calc(2.81rem + 1.05vw), 3.82rem)",
				6: "clamp(3.82rem, calc(3.51rem + 1.31vw), 4.77rem)",
				7: "clamp(4.77rem, calc(4.38rem + 1.64vw), 5.96rem)",
				8: "clamp(5.96rem, calc(5.48rem + 2.05vw), 7.45rem)",
				9: "clamp(7.45rem, calc(6.85rem + 2.57vw), 9.31rem)",
				10: "clamp(9.31rem, calc(8.56rem + 3.21vw), 11.64rem)",
			},
			colors: {
				"primary-500": "100deg 50% 50%",
				"secondary-500": "yellow",
				"neutral-100": "white",
				"neutral-0": "black",
			},
		},
		fontStyles: {
			h1: {
				fontFamily: "primary",
				fontSize: 5,
				lineHeight: "normal",
				fontWeight: "bold",
			},
			p: {
				"font-family": "var(--font-family-primary)",
				"font-size": "var(--font-size-0)",
				"line-height": "1.5",
				"font-weight": "normal",
			},
		},
		section: {
			sm: 1,
			md: {
				DEFAULT: 2,
				md: 4,
				lg: 6,
			},
			lg: {
				DEFAULT: 3,
				md: 6,
				lg: 9,
			},
		},
		flow: {
			sm: 1,
			md: {
				DEFAULT: 2,
				md: 4,
				lg: 6,
			},
			lg: {
				DEFAULT: 3,
				md: 6,
				lg: 9,
			},
		},
		extend: {
			container: {
				500: "500px",
			},
		},
	},
};
