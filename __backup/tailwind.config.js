// const plugin = require("tailwindcss/plugin");

const spacing = {
	"-3": "var(--space--3)",
	"-2": "var(--space--2)",
	"-1": "var(--space--1)",
	0: "var(--space-0)",
	1: "var(--space-1)",
	2: "var(--space-2)",
	3: "var(--space-3)",
	4: "var(--space-4)",
	5: "var(--space-5)",
	6: "var(--space-6)",
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
};

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/scripts/**/*.js", "./src/index.html"],
	theme: {
		screens: {
			"2xs": "375px",
			xs: "568px",
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
			"2xl": "1536px",
		},
		padding: spacing,
		margin: spacing,
		gap: spacing,
		space: spacing,
		fontFamily: {
			primary: "var(--font-family-primary)",
			secondary: "var(--font-family-secondary)",
		},
		fontSize: {
			"-2": "var(--font-size--2)",
			"-1": "var(--font-size--1)",
			0: "var(--font-size-0)",
			1: "var(--font-size-1)",
			2: "var(--font-size-2)",
			3: "var(--font-size-3)",
			4: "var(--font-size-4)",
			5: "var(--font-size-5)",
			6: "var(--font-size-6)",
			7: "var(--font-size-7)",
			8: "var(--font-size-8)",
		},
		lineHeight: {
			none: "var(--line-height-none)",
			xs: "var(--line-height-xs)",
			sm: "var(--line-height-sm)",
			md: "var(--line-height-md)",
			lg: "var(--line-height-lg)",
			xl: "var(--line-height-xl)",
		},
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
		container: {
			center: true,
			padding: {
				DEFAULT: "1rem",
				sm: "2rem",
				lg: "4rem",
				xl: "5rem",
				"2xl": "6rem",
			},
		},
		// schemes: {
		// 	primary: {
		// 		bg: "hsl(var(--color-primary-500))",
		// 		text: "hsl(var(--color-primary-50))",
		// 	},
		// 	secondary: {
		// 		bg: "green",
		// 		text: "white",
		// 	},
		// 	tertiary: {
		// 		bg: "blue",
		// 		text: "white",
		// 	},
		// },
	},
	// plugins: [
	// 	plugin(({ matchUtilities, theme }) => {
	// 		matchUtilities(
	// 			{
	// 				scheme: (value) => {
	// 					return {
	// 						"--scheme-bg": value.bg,
	// 						"--scheme-color": value.text,
	// 					};
	// 				},
	// 			},
	// 			{
	// 				values: theme("schemes"),
	// 			}
	// 		);
	// 	}),
	// 	plugin(({ addUtilities }) => {
	// 		addUtilities({
	// 			".prop-bg": {
	// 				"background-color": "var(--scheme-bg)",
	// 			},
	// 			".prop-text": {
	// 				color: "var(--scheme-color)",
	// 			},
	// 		});
	// 	}),
	// ],
};
