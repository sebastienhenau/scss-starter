module.exports = (min, max) => {
	return Array(max - min + 1)
		.fill(0)
		.map((_, i) => min + i);
};
