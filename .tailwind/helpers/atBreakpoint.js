module.exports = (value, props) => {
	const media = `@media (min-width: ${value})`;

	return {
		[media]: props,
	};
};
