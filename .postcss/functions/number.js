module.exports = (value) => {
	return parseFloat(value.replace(/\D/g, ""));
};
