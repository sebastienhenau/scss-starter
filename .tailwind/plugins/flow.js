const plugin = require("tailwindcss/plugin");
const helpers = require("./../helpers");

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
					const definition = Object.entries(config).reduce((obj, item) => {
						const { key, value } = helpers.ObjEntry(item);
						const space = theme(`spacing.${value}`);
						const media = `@media (min-width: ${theme(`screens.${key}`)})`;
						const props = {
							"margin-top": space,
						};
						const result = helpers.isDefault(key) ? props : { [media]: props };

						return {
							...obj,
							...result,
						};
					}, {});

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
