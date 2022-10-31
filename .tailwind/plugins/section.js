const plugin = require("tailwindcss/plugin");
const { parseBreakpoints } = require("./../helpers");

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
					return parseBreakpoints(theme, config, (value) => {
						const space = theme(`spacing.${value}`);

						return {
							"padding-top": space,
							"padding-bottom": space,
						};
					});
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
