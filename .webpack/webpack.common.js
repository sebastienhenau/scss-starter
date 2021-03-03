const HtmlWebpackPlugin = require("html-webpack-plugin");

const globals = require("./globals");

module.exports = {
	entry: globals.scripts,
	output: {
		filename: "[name].[contenthash].js",
		path: globals.dist,
		assetModuleFilename: "assets/[hash][ext][query]",
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: globals.template,
			minify: true,
		}),
	],
	module: {
		rules: [
			{
				test: /\.(html)$/,
				use: ["html-loader"],
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: ["babel-loader"],
			},
			{
				test: /\.(ttf|eot|woff|woff2)$/,
				type: "asset/resource",
			},
		],
	},
};
