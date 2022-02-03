const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: [path.resolve(__dirname, './index.js'), 'regenerator-runtime/runtime'],
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: 'main.js',
		publicPath: '/',
	},

	module: {
		rules: [
			{
				test: /\.js$|jsx/,
				exclude: /node_modules/,
				use: 'babel-loader',
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.scss$/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
		],
	},
	resolve: {
		extensions: ['.', '.js', '.jsx', '.css', '.scss'],
	},
	devtool: 'eval-source-map',
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, 'public/index.html'),
			inject: true,
		}),
	],
	devServer: {
		port: 9005,
		historyApiFallback: true,
		host: 'localhost',
	},
};
