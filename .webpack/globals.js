const path = require("path");

const src = {
	rel: path.resolve(__dirname, "../src"),
};

module.exports = {
	src,
	dist: {
		rel: path.resolve(__dirname, "../dist"),
		abs: "./dist",
	},
	template: {
		entry: path.join(src.rel, "index.html"),
	},
	scripts: {
		entry: path.join(src.rel, "scripts/main.js"),
	},
	server: {
		port: 9000,
	},
};
