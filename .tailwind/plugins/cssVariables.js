const plugin = require("tailwindcss/plugin");
const helpers = require("./../helpers");

const assignCssVariables = (data, name, valueCb) => {
	return Object.keys(data).reduce((obj, key) => {
		return {
			...obj,
			[key]: valueCb({ key, name }),
		};
	}, {});
};

const generateCssVariables = (data, name) => {
	return Object.entries(data).reduce((obj, item) => {
		const { key, value } = helpers.ObjEntry(item);

		return {
			...obj,
			[`--${name}-${key}`]: value,
		};
	}, {});
};

module.exports = plugin(
	({ addBase, theme }) => {
		addBase({
			":root": {
				...generateCssVariables(theme("cssVariables.spacing"), "space"),
				...generateCssVariables(theme("cssVariables.fontFamily"), "font-family"),
				...generateCssVariables(theme("cssVariables.fontSize"), "font-size"),
				...generateCssVariables(theme("cssVariables.colors"), "color"),
			},
		});
	},
	{
		theme: {
			spacing: ({ theme }) => {
				return assignCssVariables(theme("cssVariables.spacing"), "space", ({ key, name }) => {
					return `var(--${name}-${key})`;
				});
			},
			fontFamily: ({ theme }) => {
				return assignCssVariables(theme("cssVariables.fontFamily"), "font-family", ({ key, name }) => {
					return `var(--${name}-${key})`;
				});
			},
			fontSize: ({ theme }) => {
				return assignCssVariables(theme("cssVariables.fontSize"), "font-size", ({ key, name }) => {
					return `var(--${name}-${key})`;
				});
			},
			colors: ({ theme }) => {
				return assignCssVariables(theme("cssVariables.colors"), "color", ({ key, name }) => {
					return `hsl(var(--${name}-${key}) / <alpha-value>)`;
				});
			},
		},
	}
);
