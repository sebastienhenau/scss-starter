const unit = require("./unit");
const number = require("./number");

const remToPx = (value) => {
	return value * 16;
};

const emToPx = (value) => {
	return value * 16;
};

module.exports = (value, hasUnit = true) => {
	if (unit(value) === "rem") {
		return hasUnit ? `${remToPx(number(value))}px` : remToPx(number(value));
	} else if (unit(value) === "em") {
		return hasUnit ? `${emToPx(number(value))}px` : emToPx(number(value));
	} else {
		return value;
	}
};
