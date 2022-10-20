const objEntry = require("./objEntry");
const isDefault = require("./isDefault");
const atBreakpoint = require("./atBreakpoint");

module.exports = (ctx, object, propsCb) => {
	return Object.entries(object).reduce((obj, item) => {
		const { key, value } = objEntry(item);
		const props = propsCb(value);
		const result = isDefault(key) ? props : atBreakpoint(ctx(`screens.${key}`), props);

		return {
			...obj,
			...result,
		};
	}, {});
};
