/* eslint @typescript-eslint/no-var-requires: 0 */
module.exports = {
	plugins: [
		require("postcss-functions")({
			functions: {
				rem: require("./.postcss/functions/rem"),
				em: require("./.postcss/functions/em"),
				px: require("./.postcss/functions/px"),
			},
		}),
		require("tailwindcss"),
		require("postcss-preset-env")({
			stage: 2,
			browsers: "last 2 versions",
		}),
		require("postcss-simple-vars"),
		require("postcss-nested"),
		require("autoprefixer"),
		process.env.NODE_ENV === "production" &&
			require("cssnano")({
				preset: "default",
			}),
	],
};
