const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const sass = require("sass");
const { merge } = require("webpack-merge");

const common = require("./webpack.common");

module.exports = merge(common, {
	mode: "production",
	devtool: "source-map",
	plugins: [new MiniCSSExtractPlugin(), new CleanWebpackPlugin()],
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					MiniCSSExtractPlugin.loader,
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
