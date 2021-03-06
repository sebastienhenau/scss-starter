module.exports = {
	root: true,
	env: {
		browser: true,
		node: true,
		es6: true,
	},
	parserOptions: {
		parser: "babel-eslint",
		ecmaVersion: 6,
		sourceType: "module",
	},
	extends: ["eslint:recommended", "plugin:prettier/recommended", "prettier"],
	plugins: ["prettier", "eslint-plugin-import"],
	rules: {
		"no-await-in-loop": "error",
		"no-console": "warn",
		"no-extra-parens": [
			"error",
			"all",
			{
				conditionalAssign: true,
				nestedBinaryExpressions: false,
				returnAssign: false,
				enforceForArrowConditionals: false,
			},
		],
		"no-template-curly-in-string": "error",
		"array-callback-return": ["error", { allowImplicit: true }],
		"block-scoped-var": "error",
		"consistent-return": "error",
		curly: ["error", "multi-line"],
		"default-case": ["error", { commentPattern: "^no default$" }],
		"dot-location": ["error", "property"],
		"dot-notation": ["error", { allowKeywords: true }],
		eqeqeq: ["error", "always", { null: "ignore" }],
		"guard-for-in": "error",
		"max-classes-per-file": ["error", 1],
		"no-alert": "warn",
		"no-else-return": ["error", { allowElseIf: false }],
		"no-empty-function": ["warn"],
		"no-eval": "error",
		"no-extra-bind": "error",
		"no-floating-decimal": "error",
		"no-implied-eval": "error",
		"no-iterator": "error",
		"no-labels": ["error", { allowLoop: false, allowSwitch: false }],
		"no-lone-blocks": "error",
		"no-loop-func": "error",
		"no-multi-spaces": [
			"error",
			{
				ignoreEOLComments: false,
			},
		],
		"no-multi-str": "error",
		"no-new": "error",
		"no-new-func": "error",
		"no-new-wrappers": "error",
		"no-octal-escape": "error",
		"no-proto": "error",
		"no-redeclare": "error",
		"no-return-assign": ["error", "always"],
		"no-return-await": "error",
		"no-script-url": "error",
		"no-self-compare": "error",
		"no-sequences": "error",
		"no-throw-literal": "error",
		"no-unused-expressions": [
			"error",
			{
				allowShortCircuit: false,
				allowTernary: false,
				allowTaggedTemplates: false,
			},
		],
		"no-useless-concat": "error",
		"no-useless-return": "error",
		"no-void": "error",
		radix: "off",
		"vars-on-top": "error",
		"wrap-iife": ["error", "outside", { functionPrototypeMethods: false }],
		yoda: "error",
		"no-label-var": "error",
		"no-shadow": "error",
		"no-undef-init": "error",
		"no-unused-vars": ["warn", { vars: "all", args: "after-used", ignoreRestSiblings: true }],
		"no-use-before-define": ["error", { functions: true, classes: true, variables: true }],
		"array-bracket-newline": ["error", "consistent"],
		"array-bracket-spacing": ["error", "never"],
		"block-spacing": ["error", "always"],
		"brace-style": ["error", "1tbs"],
		camelcase: ["error", { properties: "never", ignoreDestructuring: false }],
		"comma-dangle": [
			"error",
			{
				arrays: "always-multiline",
				objects: "always-multiline",
				imports: "always-multiline",
				exports: "always-multiline",
				functions: "never",
			},
		],
		"comma-spacing": ["error", { before: false, after: true }],
		"comma-style": [
			"error",
			"last",
			{
				exceptions: {
					ArrayExpression: false,
					ArrayPattern: false,
					ArrowFunctionExpression: false,
					CallExpression: false,
					FunctionDeclaration: false,
					FunctionExpression: false,
					ImportDeclaration: false,
					ObjectExpression: false,
					ObjectPattern: false,
					VariableDeclaration: false,
					NewExpression: false,
				},
			},
		],
		"computed-property-spacing": ["error", "never"],
		"eol-last": ["error", "always"],
		"func-call-spacing": ["error", "never"],
		indent: ["error", "tab"],
		"key-spacing": ["error", { beforeColon: false, afterColon: true }],
		"keyword-spacing": [
			"error",
			{
				before: true,
				after: true,
				overrides: {
					return: { after: true },
					throw: { after: true },
					case: { after: true },
				},
			},
		],
		"linebreak-style": ["error", "unix"],
		"lines-between-class-members": ["error", "always", { exceptAfterSingleLine: false }],
		"max-len": [
			"warn",
			{
				code: 80,
				comments: 80,
				ignoreStrings: true,
				ignoreTemplateLiterals: true,
				ignoreRegExpLiterals: true,
				ignoreUrls: true,
			},
		],
		"new-cap": [
			"error",
			{
				newIsCap: true,
				capIsNew: false,
			},
		],
		"new-parens": "error",
		"no-array-constructor": "error",
		"no-bitwise": "error",
		"no-continue": "error",
		"no-lonely-if": "error",
		"no-multi-assign": ["error"],
		"no-multiple-empty-lines": ["error", { max: 1, maxBOF: 0, maxEOF: 0 }],
		"no-nested-ternary": "error",
		"no-new-object": "error",
		"no-plusplus": "error",
		"no-restricted-syntax": ["error", "ForInStatement", "ForOfStatement", "LabeledStatement", "WithStatement"],
		"no-trailing-spaces": [
			"error",
			{
				skipBlankLines: false,
				ignoreComments: false,
			},
		],
		"no-underscore-dangle": [
			"error",
			{
				allowAfterThis: false,
				allowAfterSuper: false,
				enforceInMethodNames: true,
			},
		],
		"no-unneeded-ternary": ["error", { defaultAssignment: false }],
		"no-whitespace-before-property": "error",
		"nonblock-statement-body-position": ["error", "beside"],
		"object-property-newline": [
			"error",
			{
				allowAllPropertiesOnSameLine: true,
			},
		],
		"one-var": ["error", "never"],
		"one-var-declaration-per-line": ["error", "always"],
		"operator-assignment": ["error", "always"],
		"padded-blocks": [
			"error",
			{
				blocks: "never",
				classes: "never",
				switches: "never",
			},
			{
				allowSingleLineBlocks: true,
			},
		],
		"prefer-object-spread": "error",
		"quote-props": ["error", "as-needed", { keywords: false, unnecessary: true, numbers: false }],
		quotes: [
			"error",
			"double",
			{
				avoidEscape: true,
			},
		],
		semi: ["error", "always"],
		"semi-spacing": ["error", { before: false, after: true }],
		"semi-style": ["error", "last"],
		"space-before-blocks": "error",
		"space-before-function-paren": [
			"error",
			{
				anonymous: "always",
				named: "never",
				asyncArrow: "always",
			},
		],
		"space-in-parens": ["error", "never"],
		"space-infix-ops": "error",
		"space-unary-ops": [
			"error",
			{
				words: true,
				nonwords: false,
				overrides: {},
			},
		],
		"spaced-comment": [
			"error",
			"always",
			{
				line: {
					exceptions: ["-", "+"],
					markers: ["=", "!", "/"], // space here to support sprockets directives, slash for TS /// comments
				},
				block: {
					exceptions: ["-", "+"],
					markers: ["=", "!", ":", "::"], // space here to support sprockets directives and flow comment types
					balanced: true,
				},
			},
		],
		"switch-colon-spacing": ["error", { after: true, before: false }],
		"template-tag-spacing": ["error", "never"],
		"unicode-bom": ["error", "never"],
		"arrow-body-style": "error",
		"arrow-parens": ["error", "always"],
		"arrow-spacing": ["error", { before: true, after: true }],
		"constructor-super": "error",
		"generator-star-spacing": ["error", { before: false, after: true }],
		"no-confusing-arrow": [
			"error",
			{
				allowParens: true,
			},
		],
		"no-useless-computed-key": "error",
		"no-useless-constructor": "error",
		"no-useless-rename": "error",
		"no-var": "error",
		"object-shorthand": [
			"error",
			"always",
			{
				ignoreConstructors: false,
				avoidQuotes: true,
			},
		],
		"prefer-arrow-callback": [
			"error",
			{
				allowNamedFunctions: false,
				allowUnboundThis: true,
			},
		],
		"prefer-const": [
			"error",
			{
				destructuring: "any",
				ignoreReadBeforeAssign: true,
			},
		],
		"prefer-destructuring": [
			"error",
			{
				VariableDeclarator: {
					array: false,
					object: true,
				},
				AssignmentExpression: {
					array: true,
					object: false,
				},
			},
			{
				enforceForRenamedProperties: false,
			},
		],
		"prefer-numeric-literals": "error",
		"prefer-rest-params": "error",
		"prefer-spread": "error",
		"prefer-template": "error",
		"rest-spread-spacing": ["error", "never"],
		"template-curly-spacing": "error",
		"import/no-deprecated": "warn",
		"import/order": [
			"error",
			{
				groups: ["builtin", "external", "internal"],
				pathGroups: [
					{
						pattern: "react",
						group: "external",
						position: "before",
					},
				],
				pathGroupsExcludedImportTypes: ["react"],
				"newlines-between": "always",
				alphabetize: {
					order: "asc",
					caseInsensitive: true,
				},
			},
		],
		"import/no-extraneous-dependencies": [
			"error",
			{
				devDependencies: true,
				packageDir: "./",
			},
		],
		"import/extensions": [
			"error",
			"ignorePackages",
			{
				js: "never",
				jsx: "never",
				ts: "never",
				tsx: "never",
			},
		],
		"import/no-cycle": "error",
		"import/prefer-default-export": "off",
	},
};
