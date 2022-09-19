const isDefault = (key) => {
	return key === "DEFAULT";
};

const ObjEntry = (entry) => {
	const key = entry[0];
	const value = entry[1];

	return {
		key,
		value,
	};
};

const pxToEm = (px, hasUnit = true) => {
	const result = px / 16;

	return hasUnit ? `${result}em` : result;
};

const pxToRem = (px, hasUnit = true) => {
	const result = px / 16;

	return hasUnit ? `${result}rem` : result;
};

const emToPx = (em, hasUnit = true) => {
	const result = em * 16;

	return hasUnit ? `${result}px` : result;
};

const removeUnit = (value) => parseFloat(value);

module.exports = {
	isDefault,
	ObjEntry,
	pxToEm,
	pxToRem,
	emToPx,
	removeUnit,
};
