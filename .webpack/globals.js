const path = require("path");

const src = path.resolve(__dirname, "../src");

module.exports = {
	src,
	dist: path.resolve(__dirname, "../dist"),
	template: {
		entry: path.join(src, "index.html"),
	},
	scripts: {
		entry: path.join(src, "scripts/main.js"),
	},
	server: {
		port: 9001,
	},
};
