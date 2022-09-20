const plugin = require("tailwindcss/plugin");
const helpers = require("./../helpers");

module.exports = plugin.withOptions(
	(options = {}) => {
		const maxWidth = options.maxWidth ?? 1440;
		const spacing = options.spacing ?? {
			DEFAULT: 2,
		};

		return ({ matchUtilities, addUtilities, theme }) => {
			const generateSpacing = (propsCb) => {
				return Object.entries(spacing).reduce((obj, item) => {
					const { key, value } = helpers.ObjEntry(item);
					const space = theme(`spacing.${value}`);
					const media = `@media (min-width: ${theme(`screens.${key}`)})`;
					const props = propsCb(space);
					const result = helpers.isDefault(key) ? props : { [media]: props };

					return {
						...obj,
						...result,
					};
				}, {});
			};

			const generateContainer = (value = maxWidth) => {
				return {
					"margin-left": "auto",
					"margin-right": "auto",
					"max-width": value,
				};
			};

			const generateContainerL = (value = maxWidth) => {
				return {
					"margin-left": "auto",
					"max-width": `calc(${value} + ((100% - ${value}) * 0.5))`,
				};
			};

			const generateContainerLInset = (value = maxWidth) => {
				return {
					"padding-right": `calc((100% - ${value}) * 0.5)`,
				};
			};

			const generateContainerR = (value = maxWidth) => {
				return {
					"margin-right": "auto",
					"max-width": `calc(${value} + ((100% - ${value}) * 0.5))`,
				};
			};

			const generateContainerRInset = (value = maxWidth) => {
				return {
					"padding-left": `calc((100% - ${value}) * 0.5)`,
				};
			};

			const generateContainerInset = (value = maxWidth) => {
				return {
					"padding-right": `calc((100% - ${value}) * 0.5)`,
					"padding-left": `calc((100% - ${value}) * 0.5)`,
				};
			};

			addUtilities({
				".container-space-l": generateSpacing((space) => {
					return {
						"padding-left": space,
					};
				}),
				".container-space-r": generateSpacing((space) => {
					return {
						"padding-right": space,
					};
				}),
				".container-space-t": generateSpacing((space) => {
					return {
						"padding-top": space,
					};
				}),
				".container-space-b": generateSpacing((space) => {
					return {
						"padding-bottom": space,
					};
				}),
				".container-space-x": generateSpacing((space) => {
					return {
						"padding-left": space,
						"padding-right": space,
					};
				}),
				".container-space-y": generateSpacing((space) => {
					return {
						"padding-top": space,
						"padding-bottom": space,
					};
				}),
				".container-space": generateSpacing((space) => {
					return {
						padding: space,
					};
				}),
				".container": generateContainer(),
				".container-l": generateContainerL(),
				".container-l-inset": generateContainerLInset(),
				".container-r": generateContainerR(),
				".container-r-inset": generateContainerRInset(),
				".container-inset": generateContainerInset(),
			});

			matchUtilities(
				{
					container: generateContainer,
					"container-l": generateContainerL,
					"container-l-inset": generateContainerLInset,
					"container-r": generateContainerR,
					"container-r-inset": generateContainerRInset,
					"container-inset": generateContainerInset,
				},
				{
					values: theme("container"),
				}
			);
		};
	},
	() => {
		return {
			theme: {
				container: ({ theme }) => {
					return {
						...Object.entries(theme("screens")).reduce((obj, item) => {
							const { key, value } = helpers.ObjEntry(item);

							return {
								...obj,
								[key]: `${helpers.removeUnit(value)}rem`,
							};
						}, {}),
					};
				},
			},
		};
	}
);
