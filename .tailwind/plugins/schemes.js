const plugin = require("tailwindcss/plugin");

module.exports = plugin(({ addUtilities, matchUtilities, theme }) => {
	addUtilities({
		".prop-bg": {
			"background-color": "var(--scheme-base)",
		},
		".prop-color": {
			color: "var(--scheme-contrast)",
		},
	});

	matchUtilities(
		{
			scheme: (value) => {
				return {
					"--scheme-base": value.base,
					"--scheme-contrast": value.contrast,
				};
			},
		},
		{
			values: theme("schemes"),
		}
	);
});
