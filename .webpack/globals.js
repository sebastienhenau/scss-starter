const path = require("path");

const src = path.resolve(__dirname, "../src");

module.exports = {
	src,
	dist: path.resolve(__dirname, "../dist"),
	scripts: path.join(src, "scripts/main.js"),
	template: path.join(src, "index.html"),
	port: 9000,
};
