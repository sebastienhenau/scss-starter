module.exports = (entry) => {
	const key = entry[0];
	const value = entry[1];

	return {
		key,
		value,
	};
};
