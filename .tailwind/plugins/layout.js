const { merge } = require("lodash");
const plugin = require("tailwindcss/plugin");
const { objEntry, isDefault, atBreakpoint, isEven, createArray, parseBreakpoints } = require("./../helpers");

module.exports = plugin.withOptions((options = {}) => {
	const containerWidth = options.containerWidth ?? "1440px";
	const burstWidth = options.burstWidth ?? null;
	const popWidth = options.popWidth ?? null;
	const bound = options.bound ?? {
		DEFAULT: 2,
	};
	const gutter = options.gutter ?? {
		DEFAULT: 2,
	};

	return ({ addUtilities, theme }) => {
		const generateBound = (names) =>
			parseBreakpoints(theme, bound, (value) => {
				return names.reduce((obj, name) => {
					return {
						...obj,
						[name]: theme(`spacing.${value}`),
					};
				}, {});
			});

		const generateGutter = (names) =>
			parseBreakpoints(theme, gutter, (value) => {
				return names.reduce((obj, name) => {
					return {
						...obj,
						[name]: theme(`spacing.${value}`),
					};
				}, {});
			});

		const generateContainers = () => {
			return [2, 4, 6].reduce((obj, cols, index) => {
				const remainingCols = 12 - cols;
				const className = `.container-${index}`;

				return {
					...obj,
					[`.layout${className}`]: {
						"--layout-container-width": `calc((${containerWidth} / 12) * ${remainingCols})`,
					},
				};
			}, {});
		};

		const generateGrids = () => {
			return createArray(2, 12)
				.reverse()
				.reduce((obj, cols) => {
					const gutter = `var(--layout-gutter-x, 0rem) + (var(--layout-gutter-x, 0rem) / ${cols})`;
					const gridCol = `
					[col-start]
					min(
						(var(--layout-container-width) / ${cols}) - ${gutter},
						(100% / ${cols}) - ((var(--layout-bound-l, 0rem) + var(--layout-bound-r, 0rem)) * (1 / ${cols})) - ${gutter}
					)
					[col-end]
				`;

					return {
						...obj,
						[`.layout.grid-${cols}`]: {
							"--layout-grid": `repeat(${cols - 1}, ${gridCol} var(--layout-gutter-x, 0rem)) ${gridCol}`,
						},
					};
				}, {});
		};

		const generateStretch = (items) => {
			return items.reduce((obj, item) => {
				const className = `.stretch-${item}`;

				return {
					...obj,
					[`.layout > ${className}`]: {
						"grid-column": item,
					},
				};
			}, {});
		};

		const generateStart = (items) => {
			return items.reduce((obj, item) => {
				const className = `.start-${item}`;

				return {
					...obj,
					[`.layout > ${className}`]: {
						"grid-column-start": item,
					},
				};
			}, {});
		};

		const generateEnd = (items) => {
			return items.reduce((obj, item) => {
				const className = `.end-${item}`;

				return {
					...obj,
					[`.layout > ${className}`]: {
						"grid-column-end": item,
					},
				};
			}, {});
		};

		const generateStretchSpanCols = () => {
			return createArray(2, 6).reduce((obj, item) => {
				const className = `.stretch-span-${item}`;

				return {
					...obj,
					[`.layout > ${className}`]: {
						"grid-column": `col-start ${item} / col-end -${item}`,
					},
				};
			}, {});
		};

		const generateStretchCols = () => {
			return createArray(1, 12).reduce((obj, item) => {
				const className = `.stretch-col-${item}`;

				return {
					...obj,
					[`.layout > ${className}`]: {
						"grid-column": `col-start ${item} / col-end ${item}`,
					},
				};
			}, {});
		};

		const generateStartCols = () => {
			return createArray(1, 12).reduce((obj, item) => {
				const className = `.start-col-${item}`;

				return {
					...obj,
					[`.layout > ${className}`]: {
						"grid-column-start": `col-start ${item}`,
					},
				};
			}, {});
		};

		const generateEndCols = () => {
			return createArray(1, 12).reduce((obj, item) => {
				const className = `.end-col-${item}`;

				return {
					...obj,
					[`.layout > ${className}`]: {
						"grid-column-end": `col-end ${item}`,
					},
				};
			}, {});
		};

		const generateGutterValues = () => {
			return Object.entries(theme("spacing")).reduce((obj, item) => {
				const { key, value } = objEntry(item);
				const className = `.gutter-x-${key}`;

				return {
					...obj,
					[`[class*="grid-"]${className}`]: {
						"--layout-gutter-x": value,
					},
				};
			}, {});
		};

		const colNames = ["bound-x", "fill", "burst", "pop", "container"];

		addUtilities({
			".layout": {
				"--layout-container-width": containerWidth,
				"--layout-burst": `minmax(0, ${burstWidth})`,
				"--layout-pop": `minmax(0, ${popWidth})`,
				"--layout-container": `min(var(--layout-container-width), 100% - var(--layout-bound-l, 0rem) - var(--layout-bound-r, 0rem))`,
				display: "grid",
				"row-gap": "var(--layout-gutter-y, 0rem)",
				"grid-template-columns": `
					[bound-x-start] var(--layout-bound-l, 0rem)
					[fill-start] minmax(0rem, 1fr)
					[burst-start] var(--layout-burst)
					[pop-start] var(--layout-pop)
					[container-start] var(--layout-container) [container-end]
					var(--layout-pop) [pop-end]
					var(--layout-burst) [burst-end]
					minmax(0rem, 1fr) [fill-end]
					var(--layout-bound-r, 0rem) [bound-x-end]
				`,
				"grid-template-rows": `
					[bound-y-start] var(--layout-bound-t, 0rem)
					[fill-start] minmax(0rem, 1fr) [fill-end]
					var(--layout-bound-b, 0rem) [bound-y-end]
				`,
			},
			".layout > *": {
				"grid-row": "fill",
				"grid-column": "container",
			},
			".layout.bound": {
				...generateBound(["--layout-bound-t", "--layout-bound-b", "--layout-bound-l", "--layout-bound-r"]),
			},
			".layout.bound-y": {
				...generateBound(["--layout-bound-t", "--layout-bound-b"]),
			},
			".layout.bound-x": {
				...generateBound(["--layout-bound-l", "--layout-bound-r"]),
			},
			".layout.bound-t": {
				...generateBound(["--layout-bound-t"]),
			},
			".layout.bound-b": {
				...generateBound(["--layout-bound-b"]),
			},
			".layout.bound-l": {
				...generateBound(["--layout-bound-l"]),
			},
			".layout.bound-r": {
				...generateBound(["--layout-bound-r"]),
			},
			...generateContainers(),
			...generateGrids(),
			'.layout[class*="grid-"]': {
				"--layout-container": `0 var(--layout-grid) 0`,
			},
			'[class*="grid-"].gutter': {
				...generateGutter(["--layout-gutter-x", "--layout-gutter-y"]),
			},
			'[class*="grid-"].gutter-x': {
				...generateGutter(["--layout-gutter-x"]),
			},
			...generateGutterValues(),
			'[class*="grid-"].gutter-y': {
				...generateGutter(["--layout-gutter-y"]),
			},
			...generateStretch(colNames),
			...generateStretchSpanCols(),
			...generateStretchCols(),
			...generateStart(colNames),
			...generateStartCols(),
			...generateEnd(colNames),
			...generateEndCols(),
		});
	};
});
