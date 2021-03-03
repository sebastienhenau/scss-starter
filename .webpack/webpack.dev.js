const sass = require("sass");
const { merge } = require("webpack-merge");

const globals = require("./globals");
const common = require("./webpack.common");

module.exports = merge(common, {
	mode: "development",
	devtool: "inline-source-map",
	devServer: {
		port: globals.port,
		open: false,
		compress: true,
	},
	module: {
		rules: [
			{
				test: /\.s[ac]ss$/i,
				use: [
					"style-loader",
					"css-loader",
					{
						loader: "sass-loader",
						options: { implementation: sass },
					},
				],
			},
		],
	},
});
