const plugin = require("tailwindcss/plugin");
const { objEntry } = require("./../helpers");

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
		const { key, value } = objEntry(item);

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
				...(theme("cssVariables.spacing") ? generateCssVariables(theme("cssVariables.spacing"), "space") : {}),
				...(theme("cssVariables.fontFamily")
					? generateCssVariables(theme("cssVariables.fontFamily"), "font-family")
					: {}),
				...(theme("cssVariables.fontSize")
					? generateCssVariables(theme("cssVariables.fontSize"), "font-size")
					: {}),
				...(theme("cssVariables.colors") ? generateCssVariables(theme("cssVariables.colors"), "color") : {}),
			},
		});
	},
	{
		theme: {
			spacing: ({ theme }) => {
				return theme("cssVariables.spacing")
					? assignCssVariables(theme("cssVariables.spacing"), "space", ({ key, name }) => {
							return `var(--${name}-${key})`;
					  })
					: {};
			},
			fontFamily: ({ theme }) => {
				return theme("cssVariables.fontFamily")
					? assignCssVariables(theme("cssVariables.fontFamily"), "font-family", ({ key, name }) => {
							return `var(--${name}-${key})`;
					  })
					: {};
			},
			fontSize: ({ theme }) => {
				return theme("cssVariables.fontSize")
					? assignCssVariables(theme("cssVariables.fontSize"), "font-size", ({ key, name }) => {
							return `var(--${name}-${key})`;
					  })
					: {};
			},
			colors: ({ theme }) => {
				// TODO: <alpha-value>
				return theme("cssVariables.colors")
					? assignCssVariables(theme("cssVariables.colors"), "color", ({ key, name }) => {
							return `hsl(var(--${name}-${key}))`;
					  })
					: {};
			},
		},
	}
);
