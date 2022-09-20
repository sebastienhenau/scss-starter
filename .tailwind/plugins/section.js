const plugin = require("tailwindcss/plugin");
const { objEntry, isDefault } = require("./../helpers");

module.exports = plugin(({ matchUtilities, theme }) => {
	matchUtilities(
		{
			section: (config) => {
				const generateNumber = () => {
					const space = theme(`spacing.${config}`);

					return {
						"padding-top": space,
						"padding-bottom": space,
					};
				};

				const generateObject = () => {
					return Object.entries(config).reduce((obj, item) => {
						const { key, value } = objEntry(item);
						const space = theme(`spacing.${value}`);
						const media = `@media (min-width: ${theme(`screens.${key}`)})`;
						const props = {
							"padding-top": space,
							"padding-bottom": space,
						};
						const result = isDefault(key) ? props : { [media]: props };

						return {
							...obj,
							...result,
						};
					}, {});
				};

				if (typeof config === "number") {
					return generateNumber();
				} else if (typeof config === "object") {
					return generateObject();
				}
			},
		},
		{
			values: theme("section"),
		}
	);
});
