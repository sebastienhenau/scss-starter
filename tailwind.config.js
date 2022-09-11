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
	theme: {
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
		/**
		 * Custom spacing. These should only contain the values defined as
		 * css-variables in styles/base/spacing.scss.
		 */
		spacing: {
			"-3": "var(--space--3)",
			"-2": "var(--space--2)",
			"-1": "var(--space--1)",
			0: "var(--space-0)",
			1: "var(--space-1)",
			2: "var(--space-2)",
			3: "var(--space-3)",
			4: "var(--space-4)",
			5: "2rem",
			6: "4rem",
			// 5: "var(--space-5)",
			// 6: "var(--space-6)",
			7: "var(--space-7)",
			8: "var(--space-8)",
			9: "var(--space-9)",
			"-3--2": "var(--space--3--2)",
			"-2--1": "var(--space--2--1)",
			"-1--0": "var(--space--1-0)",
			"0-1": "var(--space-0-1)",
			"1-2": "var(--space-1-2)",
			"2-3": "var(--space-2-3)",
			"3-4": "var(--space-3-4)",
			"4-5": "var(--space-4-5)",
			"5-6": "var(--space-5-6)",
			"6-7": "var(--space-6-7)",
			"7-8": "var(--space-7-8)",
			"8-9": "var(--space-8-9)",
			"9-10": "var(--space-9-10)",
		},
		/**
		 * Custom Font families. These should only contain the font-family
		 * values defined as css-variables in styles/base/typography.scss.
		 */
		fontFamily: {
			primary: "var(--font-family-primary)",
			secondary: "var(--font-family-secondary)",
		},
		/**
		 * Custom font sizes. These should only contain the font)size values
		 * defined as css-variables in styles/base/spacing.scss.
		 */
		fontSize: {
			"-2": ["var(--font-size--2)", "var(--line-height-md)"],
			"-1": ["var(--font-size--1)", "var(--line-height-md)"],
			0: ["var(--font-size-0)", "var(--line-height-md)"],
			1: ["var(--font-size-1)", "var(--line-height-md)"],
			2: ["var(--font-size-2)", "var(--line-height-md)"],
			3: ["var(--font-size-3)", "var(--line-height-md)"],
			4: ["var(--font-size-4)", "var(--line-height-md)"],
			5: ["var(--font-size-5)", "var(--line-height-md)"],
			6: ["var(--font-size-6)", "var(--line-height-md)"],
			7: ["var(--font-size-7)", "var(--line-height-md)"],
			8: ["var(--font-size-8)", "var(--line-height-md)"],
		},
		/**
		 * Custom line heights. These should only contain the line height values
		 * defined as css-variables in styles/base/spacing.scss.
		 */
		lineHeight: {
			none: "var(--line-height-none)",
			xs: "var(--line-height-xs)",
			sm: "var(--line-height-sm)",
			md: "var(--line-height-md)",
			lg: "var(--line-height-lg)",
			xl: "var(--line-height-xl)",
		},
		/**
		 * Custom color system. These should only contain the values defined as
		 * css-variables in styles/base/colors.scss.
		 */
		colors: {
			primary: {
				50: "hsl(var(--color-primary-50) / <alpha-value>)",
				100: "hsl(var(--color-primary-100) / <alpha-value>)",
				200: "hsl(var(--color-primary-200) / <alpha-value>)",
				300: "hsl(var(--color-primary-300) / <alpha-value>)",
				400: "hsl(var(--color-primary-400) / <alpha-value>)",
				500: "hsl(var(--color-primary-500) / <alpha-value>)",
				600: "hsl(var(--color-primary-600) / <alpha-value>)",
				700: "hsl(var(--color-primary-700) / <alpha-value>)",
				800: "hsl(var(--color-primary-800) / <alpha-value>)",
				900: "hsl(var(--color-primary-900) / <alpha-value>)",
			},
		},
		// borderRadius: {},
		// boxShadow: {},
	},
};
