const plugin = require("tailwindcss/plugin");
const helpers = require("./../helpers");

module.exports = plugin(({ matchUtilities, theme }) => {
	matchUtilities(
		{
			typo: (config) => {
				const generateStyles = (targetConfig = config) => {
					return Object.entries(targetConfig).reduce((obj, item) => {
						const { key, value } = helpers.ObjEntry(item);
						const result = {};

						const generateProperty = (targetKey = key, targetValue = value) => {
							const style = theme(`${targetKey}.${targetValue}`);

							if (targetKey === "fontFamily") {
								result["font-family"] = style;
							} else if (targetKey === "fontWeight") {
								result["font-weight"] = style;
							} else if (targetKey === "fontSize") {
								result["font-size"] = style;
							} else if (targetKey === "lineHeight") {
								result["line-height"] = style;
							} else if (targetKey === "letterSpacing") {
								result["letter-spacing"] = style;
							}
						};

						const generateBreakpoint = () => {
							const media = `@media (min-width: ${theme(`screens.${key}`)})`;
							const styles = generateStyles(value);

							result[media] = styles;
						};

						if (typeof value === "object") {
							generateBreakpoint();
						} else {
							generateProperty();
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
