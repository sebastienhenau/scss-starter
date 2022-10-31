const plugin = require("tailwindcss/plugin");
const { parseBreakpoints } = require("./../helpers");

module.exports = plugin(({ matchUtilities, theme }) => {
	matchUtilities(
		{
			flow: (config) => {
				const generateNumber = () => {
					const space = theme(`spacing.${config}`);

					return {
						["> * + *"]: {
							"--tw-space-y-reverse": 0,
							"margin-top": `calc(${space} * calc(1 - var(--tw-space-y-reverse)))`,
							"margin-bottom": `calc(${space} * var(--tw-space-y-reverse))`,
						},
					};
				};

				const generateObject = () => {
					const definition = parseBreakpoints(theme, config, (value) => {
						return {
							"margin-top": theme(`spacing.${value}`),
						};
					});

					return {
						["> * + *"]: definition,
					};
				};

				if (typeof config === "number") {
					return generateNumber();
				} else if (typeof config === "object") {
					return generateObject();
				}
			},
		},
		{
			values: theme("flow"),
		}
	);
});
