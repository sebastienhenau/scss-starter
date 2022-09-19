const section = require("./.tailwind/plugins/section");
const flow = require("./.tailwind/plugins/flow");
const fontStyles = require("./.tailwind/plugins/fontStyles");
const container = require("./.tailwind/plugins/container");
const fullBleed = require("./.tailwind/plugins/fullBleed");
const cssVariables = require("./.tailwind/plugins/cssVariables");

const pxToEm = (px) => `${px / 16}em`;

const pxToRem = (px) => `${px / 16}rem`;

module.exports = {
	/**
	 * Link all the files that tailwind has to scan:
	 * - DON'T ADD ANY CSS FILES HERE
	 * - Don't do all src files, but be explicit so tailwind can easier scan all
	 *   the necessary files.
	 */
	content: ["./src/scripts/**/*.js", "./src/index.html"],
	/**
	 * Disable tailwind container, because we want to make use of more than just
	 * one type of container. These containers and their respective classes are
	 * defined in styles/utilities/container.scss.
	 */
	corePlugins: {
		container: false,
	},
	plugins: [
		section,
		flow,
		fontStyles,
		fullBleed,
		cssVariables,
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
		extend: {
			container: {
				test: "500px",
			},
		},
		cssVariables: {
			spacing: {
				"-3": "clamp(0.25rem, calc(0.21rem + 0.17vw), 0.38rem)",
				"-2": "clamp(0.5rem, calc(0.42rem + 0.34vw), 0.75rem)",
				"-1": "clamp(0.75rem, calc(0.63rem + 0.52vw), 1.13rem)",
				0: "clamp(1rem, calc(0.84rem + 0.69vw), 1.5rem)",
				1: "clamp(1.5rem, calc(1.26rem + 1.03vw), 2.25rem)",
				2: "clamp(2rem, calc(1.68rem + 1.38vw), 3rem)",
				3: "clamp(3rem, calc(2.52rem + 2.07vw), 4.5rem)",
				4: "clamp(4rem, calc(3.35rem + 2.76vw), 6rem)",
				5: "clamp(6rem, calc(5.03rem + 4.13vw), 9rem)",
				6: "clamp(7rem, calc(5.87rem + 4.82vw), 10.5rem)",
				7: "clamp(8rem, calc(6.71rem + 5.51vw), 12rem)",
				8: "clamp(9rem, calc(7.55rem + 6.2vw), 13.5rem)",
				9: "clamp(10rem, calc(8.39rem + 6.89vw), 15rem)",
			},
			fontFamily: {
				primary: ["Graphik", "sans-serif"],
				secondary: ["Merriweather", "serif"],
			},
			fontSize: {
				"-2": "clamp(0.64rem, calc(0.54rem + 0.44vw), 0.96rem)",
				"-1": "clamp(0.8rem, calc(0.67rem + 0.55vw), 1.2rem)",
				0: "clamp(1rem, calc(0.84rem + 0.69vw), 1.5rem)",
				1: "clamp(1.25rem, calc(1.05rem + 0.86vw), 1.88rem)",
				2: "clamp(1.56rem, calc(1.31rem + 1.08vw), 2.34rem)",
				3: "clamp(1.95rem, calc(1.64rem + 1.35vw), 2.93rem)",
				4: "clamp(2.44rem, calc(2.05rem + 1.68vw), 3.66rem)",
				5: "clamp(3.05rem, calc(2.56rem + 2.1vw), 4.58rem)",
				6: "clamp(3.82rem, calc(3.2rem + 2.63vw), 5.72rem)",
				7: "clamp(4.77rem, calc(4rem + 3.29vw), 7.15rem)",
				8: "clamp(5.96rem, calc(5rem + 4.11vw), 8.94rem)",
			},
			colors: {
				"primary-50": "0 100% 100%",
				"primary-100": "0 100% 90%",
				"primary-200": "0 100% 80%",
				"primary-300": "0 100% 70%",
				"primary-400": "0 100% 60%",
				"primary-500": "0 100% 50%",
				"primary-600": "0 100% 40%",
				"primary-700": "0 100% 30%",
				"primary-800": "0 100% 20%",
				"primary-900": "0 100% 10%",
			},
		},
		section: {
			sm: {
				DEFAULT: 2,
				md: 4,
				lg: 8,
			},
			md: 8,
		},
		flow: {
			sm: {
				DEFAULT: 2,
				md: 4,
				lg: 8,
			},
			md: 2,
		},
		fontStyles: {
			h1: {
				fontFamily: "primary",
				fontSize: 3,
				lineHeight: "md",
				fontWeight: "bold",
				letterSpacing: "tight",
				md: {
					fontSize: 6,
				},
			},
			h2: {
				fontFamily: "primary",
				fontSize: 2,
				lineHeight: "md",
				fontWeight: "bold",
				letterSpacing: "tight",
				md: {
					fontSize: 4,
				},
			},
		},

		/**
		 * Custom breakpoints expressed in em. Avoid pixels or rem, explained
		 * here: https://zellwk.com/blog/media-query-units/
		 */
		screens: {
			"2xs": pxToEm(375),
			xs: pxToEm(568),
			sm: pxToEm(640),
			md: pxToEm(768),
			lg: pxToEm(1024),
			xl: pxToEm(1280),
			"2xl": pxToEm(1536),
		},
		// spacing: ({ theme }) => {
		// 	return {
		// 		8: "100px",
		// 	};
		// },
		/**
		 * Custom spacing. These should only contain the values defined as
		 * css-variables in styles/base/spacing.scss.
		 */
		// spacing: {
		// "-3": "var(--space--3)",
		// "-2": "var(--space--2)",
		// "-1": "var(--space--1)",
		// 0: "var(--space-0)",
		// 1: "var(--space-1)",
		// 2: "var(--space-2)",
		// 3: "var(--space-3)",
		// 4: "var(--space-4)",
		// 5: "var(--space-5)",
		// 6: "var(--space-6)",
		// 7: "var(--space-7)",
		// 8: "var(--space-8)",
		// 9: "var(--space-9)",
		// "-3--2": "var(--space--3--2)",
		// "-2--1": "var(--space--2--1)",
		// "-1--0": "var(--space--1-0)",
		// "0-1": "var(--space-0-1)",
		// "1-2": "var(--space-1-2)",
		// "2-3": "var(--space-2-3)",
		// "3-4": "var(--space-3-4)",
		// "4-5": "var(--space-4-5)",
		// "5-6": "var(--space-5-6)",
		// "6-7": "var(--space-6-7)",
		// "7-8": "var(--space-7-8)",
		// "8-9": "var(--space-8-9)",
		// "9-10": "var(--space-9-10)",
		// },
		/**
		 * Custom Font families. These should only contain the font-family
		 * values defined as css-variables in styles/base/typography.scss.
		 */
		// fontFamily: {
		// 	primary: "var(--font-family-primary)",
		// 	secondary: "var(--font-family-secondary)",
		// },
		/**
		 * Custom font sizes. These should only contain the font)size values
		 * defined as css-variables in styles/base/spacing.scss.
		 */
		// fontSize: {
		// 	"-2": ["var(--font-size--2)", "var(--line-height-md)"],
		// 	"-1": ["var(--font-size--1)", "var(--line-height-md)"],
		// 	0: ["var(--font-size-0)", "var(--line-heigh t-md)"],
		// 	1: ["var(--font-size-1)", "var(--line-height-md)"],
		// 	2: ["var(--font-size-2)", "var(--line-height-md)"],
		// 	3: ["var(--font-size-3)", "var(--line-height-md)"],
		// 	4: ["var(--font-size-4)", "var(--line-height-md)"],
		// 	5: ["var(--font-size-5)", "var(--line-height-md)"],
		// 	6: ["var(--font-size-6)", "var(--line-height-md)"],
		// 	7: ["var(--font-size-7)", "var(--line-height-md)"],
		// 	8: ["var(--font-size-8)", "var(--line-height-md)"],
		// },
		// /**
		//  * Custom line heights. These should only contain the line height values
		//  * defined as css-variables in styles/base/spacing.scss.
		//  */
		// lineHeight: {
		// 	none: "var(--line-height-none)",
		// 	xs: "var(--line-height-xs)",
		// 	sm: "var(--line-height-sm)",
		// 	md: "var(--line-height-md)",
		// 	lg: "var(--line-height-lg)",
		// 	xl: "var(--line-height-xl)",
		// },
		/**
		 * Custom color system. These should only contain the values defined as
		 * css-variables in styles/base/colors.scss.
		 */
		// colors: {
		// 	primary: {
		// 		50: "hsl(var(--color-primary-50) / <alpha-value>)",
		// 		100: "hsl(var(--color-primary-100) / <alpha-value>)",
		// 		200: "hsl(var(--color-primary-200) / <alpha-value>)",
		// 		300: "hsl(var(--color-primary-300) / <alpha-value>)",
		// 		400: "hsl(var(--color-primary-400) / <alpha-value>)",
		// 		500: "hsl(var(--color-primary-500) / <alpha-value>)",
		// 		600: "hsl(var(--color-primary-600) / <alpha-value>)",
		// 		700: "hsl(var(--color-primary-700) / <alpha-value>)",
		// 		800: "hsl(var(--color-primary-800) / <alpha-value>)",
		// 		900: "hsl(var(--color-primary-900) / <alpha-value>)",
		// 	},
		// },
		// borderRadius: {},
		// boxShadow: {},
	},
};
