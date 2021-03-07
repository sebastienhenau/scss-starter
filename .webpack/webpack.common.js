const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackBar = require("webpackbar");

const globals = require("./globals");

module.exports = {
	entry: globals.scripts.entry,
	output: {
		filename: "[name].[contenthash].js",
		path: globals.dist,
		assetModuleFilename: "assets/[hash][ext][query]",
	},
	resolve: {
		alias: {
			"@": globals.src,
		},
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: globals.template.entry,
			minify: true,
			inject: "body",
		}),
		new WebpackBar(),
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
				test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
				type: "asset/resource",
			},
			{
				test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
				type: "asset/inline",
			},
		],
	},
};
