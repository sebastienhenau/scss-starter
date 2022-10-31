const plugin = require("tailwindcss/plugin");
const { objEntry } = require("./../helpers");

module.exports = plugin(({ matchUtilities, theme }) => {
	matchUtilities(
		{
			typo: (config) => {
				const generateStyles = (targetConfig = config) => {
					return Object.entries(targetConfig).reduce((obj, item) => {
						const { key, value } = objEntry(item);
						const result = {};

						const generateBreakpoint = () => {
							const media = `@media (min-width: ${theme(`screens.${key}`)})`;
							const styles = generateStyles(value);

							result[media] = styles;
						};

						if (typeof value === "object") {
							generateBreakpoint();
						} else {
							result[key] = value;
						}

						return {
							...obj,
							...result,
						};
					}, {});
				};

				return generateStyles();
			},
		},
		{
			values: theme("fontStyles"),
		}
	);
});
