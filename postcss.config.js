module.exports = {
	syntax: "postcss-scss",
	plugins: {
		"postcss-preset-env": {
			stage: 2,
			browsers: "last 2 versions",
		},
	},
};
