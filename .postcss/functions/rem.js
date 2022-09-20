const unit = require("./unit");
const number = require("./number");

const pxToRem = (value) => {
	return value / 16;
};

module.exports = (value, hasUnit = true) => {
	if (unit(value) === "px") {
		return hasUnit ? `${pxToRem(number(value))}rem` : pxToRem(number(value));
	} else if (unit(value) === "em") {
		return hasUnit ? `${number(value)}rem` : number(value);
	} else {
		return value;
	}
};
