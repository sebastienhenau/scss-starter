module.exports = {};

// module.exports = {
// 	extends: [
// 		/**
// 		 * https://www.npmjs.com/package/stylelint-config-standard-scss
// 		 * Extends from:
// 		 * - stylelint-config-standard
// 		 * - stylelint-config-recommended
// 		 * - stylelint-config-recommended-scss
// 		 */
// 		"stylelint-config-standard-scss",
// 		/**
// 		 * https://github.com/prettier/stylelint-prettier
// 		 * - Enables the stylelint-plugin-prettier plugin.
// 		 * - Enables the prettier/prettier rule.
// 		 * - Extends the stylelint-config-prettier configuration.
// 		 */
// 		"stylelint-prettier/recommended",
// 	],
// 	plugins: ["stylelint-order"],
// 	rules: {
// 		// Allow usage of tailwinds @ functions
// 		"scss/at-rule-no-unknown": [
// 			true,
// 			{
// 				ignoreAtRules: ["tailwind", "apply", "variants", "responsive", "screen"],
// 			},
// 		],
// 		"declaration-block-trailing-semicolon": null,
// 		"no-descending-specificity": null,
// 		// Allow private functions starting with _
// 		"scss/at-function-pattern": /^_?([a-z][a-z0-9]*)(-[a-z0-9]+)*$/,
// 		// Allow private variables
// 		"scss/dollar-variable-pattern": /^[-a-z0-9_]+$/,
// 		// Allow double dashes in css variables for negative values with kebab case
// 		"custom-property-pattern": /^([a-z][a-z0-9]*)((-|--)[a-z0-9]+)*$/,
// 		/**
// 		 * Disable declaration-empty-line-before because it conflicts with
// 		 * emptyLineBefore key in order plugin.
// 		 */
// 		"declaration-empty-line-before": null,
// 	},
// 	"order/order": ["dollar-variables", "custom-properties", "declarations", "rules", "at-rules"],
// 	"order/properties-order": [
// 		{
// 			groupName: "position",
// 			emptyLineBefore: "always",
// 			noEmptyLineBetween: true,
// 			order: "strict",
// 			properties: ["position", "top", "right", "bottom", "left", "z-index"],
// 		},
// 		{
// 			groupName: "box-modal",
// 			emptyLineBefore: "always",
// 			noEmptyLineBetween: true,
// 			order: "strict",
// 			properties: [
// 				"display",
// 				"flex",
// 				"flex-basis",
// 				"flex-direction",
// 				"flex-flow",
// 				"flex-grow",
// 				"flex-shrink",
// 				"flex-wrap",
// 				"grid",
// 				"grid-area",
// 				"grid-auto-rows",
// 				"grid-auto-columns",
// 				"grid-auto-flow",
// 				"grid-gap",
// 				"grid-row",
// 				"grid-row-start",
// 				"grid-row-end",
// 				"grid-row-gap",
// 				"grid-column",
// 				"grid-column-start",
// 				"grid-column-end",
// 				"grid-column-gap",
// 				"grid-template",
// 				"grid-template-areas",
// 				"grid-template-rows",
// 				"grid-template-columns",
// 				"gap",
// 				"align-content",
// 				"align-items",
// 				"align-self",
// 				"justify-content",
// 				"justify-items",
// 				"justify-self",
// 				"order",
// 				"float",
// 				"clear",
// 				"box-sizing",
// 				"width",
// 				"min-width",
// 				"max-width",
// 				"height",
// 				"min-height",
// 				"max-height",
// 				"overflow",
// 				"overflow-x",
// 				"overflow-y",
// 				"margin",
// 				"margin-inline",
// 				"margin-inline-start",
// 				"margin-inline-end",
// 				"margin-block",
// 				"margin-block-start",
// 				"margin-block-end",
// 				"margin-top",
// 				"margin-right",
// 				"margin-bottom",
// 				"margin-left",
// 				"padding",
// 				"padding-inline",
// 				"padding-inline-start",
// 				"padding-inline-end",
// 				"padding-block",
// 				"padding-block-start",
// 				"padding-block-end",
// 				"padding-top",
// 				"padding-right",
// 				"padding-bottom",
// 				"padding-left",
// 			],
// 		},
// 		{
// 			groupName: "typography",
// 			emptyLineBefore: "always",
// 			noEmptyLineBetween: true,
// 			order: "strict",
// 			properties: [
// 				"font",
// 				"font-weight",
// 				"font-size",
// 				"font-family",
// 				"font-style",
// 				"font-variant",
// 				"font-size-adjust",
// 				"font-stretch",
// 				"font-effect",
// 				"font-emphasize",
// 				"font-emphasize-position",
// 				"font-emphasize-style",
// 				"font-smooth",
// 				"line-height",
// 				"direction",
// 				"letter-spacing",
// 				"white-space",
// 				"text-align",
// 				"text-align-last",
// 				"text-transform",
// 				"text-decoration",
// 				"text-emphasis",
// 				"text-emphasis-color",
// 				"text-emphasis-style",
// 				"text-emphasis-position",
// 				"text-indent",
// 				"text-justify",
// 				"text-outline",
// 				"text-wrap",
// 				"text-overflow",
// 				"text-overflow-ellipsis",
// 				"text-overflow-mode",
// 				"text-orientation",
// 				"text-shadow",
// 				"vertical-align",
// 				"word-wrap",
// 				"word-break",
// 				"word-spacing",
// 				"overflow-wrap",
// 				"tab-size",
// 				"hyphens",
// 				"unicode-bidi",
// 				"columns",
// 				"column-count",
// 				"column-fill",
// 				"column-gap",
// 				"column-rule",
// 				"column-rule-color",
// 				"column-rule-style",
// 				"column-rule-width",
// 				"column-span",
// 				"column-width",
// 				"page-break-after",
// 				"page-break-before",
// 				"page-break-inside",
// 			],
// 		},
// 		{
// 			groupName: "visual",
// 			emptyLineBefore: "always",
// 			noEmptyLineBetween: true,
// 			order: "strict",
// 			properties: [
// 				"list-style",
// 				"list-style-position",
// 				"list-style-type",
// 				"list-style-image",
// 				"table-layout",
// 				"empty-cells",
// 				"caption-side",
// 				"background",
// 				"background-color",
// 				"background-image",
// 				"background-repeat",
// 				"background-position",
// 				"background-position-x",
// 				"background-position-y",
// 				"background-size",
// 				"background-clip",
// 				"background-origin",
// 				"background-attachment",
// 				"background-blend-mode",
// 				"border",
// 				"border-color",
// 				"border-style",
// 				"border-width",
// 				"border-top",
// 				"border-top-color",
// 				"border-top-width",
// 				"border-top-style",
// 				"border-right",
// 				"border-right-color",
// 				"border-right-width",
// 				"border-right-style",
// 				"border-bottom",
// 				"border-bottom-color",
// 				"border-bottom-width",
// 				"border-bottom-style",
// 				"border-left",
// 				"border-left-color",
// 				"border-left-width",
// 				"border-left-style",
// 				"border-radius",
// 				"border-top-left-radius",
// 				"border-top-right-radius",
// 				"border-bottom-right-radius",
// 				"border-bottom-left-radius",
// 				"border-image",
// 				"border-image-source",
// 				"border-image-slice",
// 				"border-image-width",
// 				"border-image-outset",
// 				"border-image-repeat",
// 				"border-collapse",
// 				"border-spacing",
// 				"object-fit",
// 				"object-position",
// 				"outline",
// 				"outline-width",
// 				"outline-style",
// 				"outline-color",
// 				"outline-offset",
// 				"box-shadow",
// 				"box-decoration-break",
// 				"transform",
// 				"transform-origin",
// 				"transform-style",
// 				"backface-visibility",
// 				"perspective",
// 				"perspective-origin",
// 				"visibility",
// 				"cursor",
// 				"opacity",
// 				"filter",
// 				"isolation",
// 				"backdrop-filter",
// 				"mix-blend-mode",
// 			],
// 		},
// 		{
// 			groupName: "svg",
// 			emptyLineBefore: "always",
// 			noEmptyLineBetween: true,
// 			order: "strict",
// 			properties: [
// 				"fill",
// 				"stroke-width",
// 				"stroke-align",
// 				"stroke-alignment",
// 				"stroke-break",
// 				"stroke-color",
// 				"stroke-dash-corner",
// 				"stroke-dashcorner",
// 				"stroke-dash-justify",
// 				"stroke-dashadjust",
// 				"stroke-dasharray",
// 				"stroke-dashoffset",
// 				"stroke-image",
// 				"stroke-linecap",
// 				"stroke-linejoin",
// 				"stroke-miterlimit",
// 				"stroke-opacity",
// 				"stroke-origin",
// 				"stroke-position",
// 				"stroke-repeat",
// 				"stroke-size",
// 				"stroke-width",
// 			],
// 		},
// 		{
// 			groupName: "animation",
// 			emptyLineBefore: "always",
// 			noEmptyLineBetween: true,
// 			order: "strict",
// 			properties: [
// 				"transition",
// 				"transition-delay",
// 				"transition-timing-function",
// 				"transition-duration",
// 				"transition-property",
// 				"animation",
// 				"animation-name",
// 				"animation-duration",
// 				"animation-play-state",
// 				"animation-timing-function",
// 				"animation-delay",
// 				"animation-iteration-count",
// 				"animation-direction",
// 				"animation-fill-mode",
// 			],
// 		},
// 		{
// 			groupName: "misc",
// 			emptyLineBefore: "always",
// 			noEmptyLineBetween: true,
// 			order: "strict",
// 			properties: [
// 				"appearance",
// 				"content",
// 				"clip",
// 				"clip-path",
// 				"counter-reset",
// 				"counter-increment",
// 				"resize",
// 				"user-select",
// 				"nav-index",
// 				"nav-up",
// 				"nav-right",
// 				"nav-down",
// 				"nav-left",
// 				"pointer-events",
// 				"quotes",
// 				"touch-action",
// 				"will-change",
// 				"zoom",
// 				"fill",
// 				"fill-rule",
// 				"clip-rule",
// 				"stroke",
// 			],
// 		},
// 	],
// };
