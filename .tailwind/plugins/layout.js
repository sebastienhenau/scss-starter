const plugin = require("tailwindcss/plugin");
const { objEntry, isEven, createArray, parseBreakpoints } = require("./../helpers");

module.exports = plugin.withOptions((options = {}) => {
	const maxCols = options.maxCols ?? 12;
	const containerWidth = options.containerWidth ?? "1440px";
	const burstWidth = options.burstWidth ?? null;
	const popWidth = options.popWidth ?? null;
	const bounds = options.bound ?? {
		DEFAULT: 2,
	};
	const gutter = options.gutter ?? {
		DEFAULT: 2,
	};
	const grid = options.grid ?? {
		DEFAULT: 12,
	};

	return ({ addUtilities, theme }) => {
		const generateBound = (names) =>
			parseBreakpoints(theme, bounds, (value) => {
				return names.reduce((obj, name) => {
					return {
						...obj,
						[name]: theme(`spacing.${value}`),
					};
				}, {});
			});

		const generateGutter = (items) =>
			parseBreakpoints(theme, gutter, (value) => {
				return items.reduce((obj, item) => {
					return typeof item === "function"
						? {
								...obj,
								...item(value),
						  }
						: {
								[item]: theme(`spacing.${value}`),
						  };
				}, {});
			});

		const generateContainers = () => {
			return createArray(1, Math.floor(maxCols * 0.5) - 1).reduce((obj, item) => {
				const className = `.container-${item}`;
				const sides = item * 2;
				const remainingCols = maxCols - sides;

				return {
					...obj,
					[className]: {
						"--layout-container-width": `calc((${containerWidth} / ${maxCols}) * (${remainingCols}))`,
					},
				};
			}, {});
		};

		const generateNamedColStretch = (items) => {
			return items.reduce((obj, item) => {
				const className = `.stretch-${item}`;

				return {
					...obj,
					[className]: {
						"grid-column": item,
					},
				};
			}, {});
		};

		const generateColStretch = (items) => {
			return items.reduce((obj, item) => {
				const className = `.stretch-col-${item}`;

				return {
					...obj,
					[className]: {
						"grid-column": `col-start ${item} / col-end ${item}`,
					},
				};
			}, {});
		};

		const generateNamedColStart = (items) => {
			return items.reduce((obj, item) => {
				const className = `.start-${item}`;

				return {
					...obj,
					[className]: {
						"grid-column-start": item,
					},
				};
			}, {});
		};

		const generateColStart = (items) => {
			return items.reduce((obj, item) => {
				const className = `.start-col-${item}`;

				return {
					...obj,
					[className]: {
						"grid-column-start": `col-start ${item}`,
					},
				};
			}, {});
		};

		const generateNamedColEnd = (items) => {
			return items.reduce((obj, item) => {
				const className = `.end-${item}`;

				return {
					...obj,
					[className]: {
						"grid-column-end": item,
					},
				};
			}, {});
		};

		const generateColEnd = (items) => {
			return items.reduce((obj, item) => {
				const className = `.end-col-${item}`;

				return {
					...obj,
					[className]: {
						"grid-column-end": `col-end ${item}`,
					},
				};
			}, {});
		};

		const generateGrid = (cols) => {
			const length = cols - 1;
			const middle = length * 0.5;

			return {
				"--layout-grid-cols": `${cols}`,
				"--layout-container": createArray(0, length).reduce((string, item) => {
					if (item === 0) {
						return "[container-start col-start] var(--layout-col) [col-end] var(--layout-gutter-x, 0rem)";
					} else if (item === length) {
						return `${string} [col-start] var(--layout-col) [container-end col-end]`;
					}

					let startName = "";
					let endName = "";

					if (item === middle) {
						startName = "center-start";
						endName = "center-end";
					} else if (item < middle) {
						startName = `span-${item}-start`;
					} else if (item > middle) {
						endName = `span-${length - item}-end`;
					}

					return `${string} [col-start ${startName}] var(--layout-col) [col-end ${endName}] var(--layout-gutter-x, 0rem)`;
				}, ""),
			};
		};

		const generateGrids = () => {
			return createArray(2, maxCols)
				.reverse()
				.reduce((obj, cols) => {
					const grid = generateGrid(cols);
					const className = `.grid-${cols}`;

					return {
						...obj,
						[className]: grid,
					};
				}, {});
		};

		const generateDefaultGrid = () => {
			return parseBreakpoints(theme, grid, (value) => {
				return generateGrid(value);
			});
		};

		const generateGutterValues = () => {
			return Object.entries(theme("spacing")).reduce((obj, item) => {
				const { key, value } = objEntry(item);
				const className = `.gutter-x-${key}`;

				return {
					...obj,
					[className]: {
						"--layout-gutter-x": value,
					},
				};
			}, {});
		};

		const generateDivides = () => {
			return createArray(2, maxCols)
				.reverse()
				.reduce((obj, item) => {
					return {
						...obj,
						...createArray(0, item - 1).reduce((obj2, item2) => {
							const start = item - item2;
							const child = item2 === 0 ? `${item}n` : `${item}n-${item2}`;

							return {
								...obj2,
								[`.grid-${item}.divide > *:nth-child(${child})`]: {
									"--layout-grid-col-start": `${start}`,
								},
							};
						}, {}),
					};
				}, {});
		};

		const generateDefaultDivides = () => {
			return parseBreakpoints(theme, grid, (value) => {
				return {
					...createArray(0, value - 1).reduce((obj, item) => {
						return {
							...obj,
							[`.grid-default.divide > *:nth-child(${value}n-${item})`]: {
								"--layout-grid-col-start": `${value - item}`,
							},
						};
					}, {}),
				};
			});
		};

		const spanColNames = createArray(1, Math.floor(maxCols * 0.5) - 1).map((item) => `span-${item}`);
		const colNumbers = createArray(1, maxCols);
		const allColNames = ["bound", "fill", "burst", "pop", "container", "center", ...spanColNames];

		addUtilities({
			".layout": {
				"--layout-bound-l": "0rem",
				"--layout-bound-r": "0rem",
				"--layout-bound-x": "var(--layout-bound-l, 0rem) - var(--layout-bound-r, 0rem)",
				"--layout-container-width": containerWidth,
				"--layout-burst": `minmax(0, ${burstWidth})`,
				"--layout-pop": `minmax(0, ${popWidth})`,
				"--layout-container": `[container-start] min(var(--layout-container-width), 100% - var(--layout-bound-x)) [container-end]`,
				display: "grid",
				"grid-template-columns": `
					[bound-start] var(--layout-bound-l, 0rem)
					[fill-start] minmax(0rem, 1fr)
					[burst-start] var(--layout-burst)
					[pop-start] var(--layout-pop)
					var(--layout-container)
					var(--layout-pop) [pop-end]
					var(--layout-burst) [burst-end]
					minmax(0rem, 1fr) [fill-end]
					var(--layout-bound-r, 0rem) [bound-end]
				`,
			},
			".layout > *": {
				"grid-column": "container",
			},
			".bound": {
				...generateBound(["--layout-bound-t", "--layout-bound-b", "--layout-bound-l", "--layout-bound-r"]),
				"padding-top": "var(--layout-bound-t)",
				"padding-bottom": "var(--layout-bound-b)",
			},
			".bound:not(.layout)": {
				"padding-left": "var(--layout-bound-l)",
				"padding-right": "var(--layout-bound-r)",
			},
			".bound-y": {
				...generateBound(["--layout-bound-t", "--layout-bound-b"]),
				"padding-top": "var(--layout-bound-t)",
				"padding-bottom": "var(--layout-bound-b)",
			},
			".bound-x": {
				...generateBound(["--layout-bound-l", "--layout-bound-r"]),
			},
			".bound-x:not(.layout)": {
				"padding-left": "var(--layout-bound-l)",
				"padding-right": "var(--layout-bound-r)",
			},
			".bound-t": {
				...generateBound(["--layout-bound-t"]),
				"padding-top": "var(--layout-bound-t)",
			},
			".bound-b": {
				...generateBound(["--layout-bound-b"]),
				"padding-bottom": "var(--layout-bound-b)",
			},
			".bound-l": {
				...generateBound(["--layout-bound-l"]),
			},
			".bound-l:not(.layout)": {
				"padding-left": "var(--layout-bound-l)",
			},
			".bound-r": {
				...generateBound(["--layout-bound-l"]),
			},
			".bound-r:not(.layout)": {
				"padding-right": "var(--layout-bound-r)",
			},
			...generateContainers(),
			"[class*='grid-']": {
				"--layout-grid-offset": "calc((var(--layout-grid-cols) - 1) * var(--layout-gutter-x, 0rem))",
				"--layout-grid-width-max": "calc(var(--layout-container-width) - var(--layout-grid-offset))",
				"--layout-grid-width-min": "calc(100% - var(--layout-grid-offset) - var(--layout-bound-x))",
				"--layout-col":
					"min(var(--layout-grid-width-max) / var(--layout-grid-cols), var(--layout-grid-width-min) / var(--layout-grid-cols))",
			},
			...generateGrids(),
			".grid-default": generateDefaultGrid(),
			".gutter-x": {
				...generateGutter(["--layout-gutter-x"]),
			},
			...generateGutterValues(),
			".join > *": {
				"grid-row": "1 / 2",
			},
			".divide > *": {
				"grid-column-start": "col-start var(--layout-grid-col-start, 1)",
				"grid-column-end": "span 1",
			},
			...generateDefaultDivides(),
			...generateDivides(),
			...generateNamedColStretch(allColNames),
			...generateColStretch(colNumbers),
			...generateNamedColStart(allColNames),
			...generateColStart(colNumbers),
			...generateNamedColEnd(allColNames),
			...generateColEnd(colNumbers),
		});
	};
});
