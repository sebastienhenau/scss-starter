const { rem, em, px } = require("./.postcss/functions");

module.exports = {
	plugins: [
		require("postcss-functions")({
			functions: {
				rem,
				px,
				em,
			},
		}),
		require("tailwindcss"),
		require("postcss-preset-env")({
			stage: 2,
			browsers: "last 2 versions",
		}),
		require("autoprefixer"),
		process.env.NODE_ENV === "production" &&
			require("cssnano")({
				preset: "default",
			}),
	],
};
