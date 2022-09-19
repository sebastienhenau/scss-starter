const plugin = require("tailwindcss/plugin");

module.exports = plugin(({ addUtilities }) => {
	addUtilities({
		".full-bleed": {
			width: "100vw",
			"margin-left": "calc(50% - 50vw)",
		},
	});
});
