module.exports = {
	root: true,
	env: {
		browser: true,
		node: true,
	},
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		/**
		 * https://github.com/prettier/eslint-plugin-prettier#recommended-configuration
		 * - Extends prettier
		 * - enables the config from eslint-config-prettier
		 * - Sets prettier as plugin
		 * - Enables the prettier/prettier rule as error.
		 * - Disables arrow-body-style
		 * - Disables prefer-arrow-callback
		 */
		"plugin:prettier/recommended",
	],
	parser: "@typescript-eslint/parser",
	plugins: ["@typescript-eslint"],
};
