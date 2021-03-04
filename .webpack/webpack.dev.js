const sass = require("sass");
const webpack = require("webpack");
const { merge } = require("webpack-merge");

const globals = require("./globals");
const common = require("./webpack.common");

module.exports = merge(common, {
	mode: "development",
	devtool: "inline-source-map",
	devServer: {
		host: "0.0.0.0",
		historyApiFallback: true,
		contentBase: globals.dist.abs,
		port: globals.server.port,
		open: true,
		compress: true,
		hot: true,
		useLocalIp: true,
		overlay: true,
	},
	plugins: [new webpack.HotModuleReplacementPlugin()],
	module: {
		rules: [
			{
				test: /\.s[ac]ss$/i,
				use: [
					"style-loader",
					"css-loader",
					"postcss-loader",
					{
						loader: "sass-loader",
						options: { implementation: sass },
					},
				],
			},
		],
	},
});
