var path = require('path');
var webpack = require('webpack');

process.env.NODE_ENV = 'production';
process.env.BABEL_ENV = 'production';

module.exports = {
	devtool: 'source-map',
	entry:
	[
	  './src/index'
	],
	output: {
		path: path.join(__dirname, 'wwwroot/js'),
		filename: 'app.js',
		publicPath: '/wwwroot/js/'
	},
	plugins: [
	  new webpack.optimize.OccurenceOrderPlugin(),
	  new webpack.DefinePlugin({
	  	'process.env': {
	  		'NODE_ENV': JSON.stringify('production')
	  	}
	  }),
	  new webpack.optimize.UglifyJsPlugin({
	  	compressor: {
	  		warnings: false
	  	}
	  })
	],
	module: {
		loaders: [{
			test: /\.jsx?$/,
			loaders: ['babel'],
			include: path.join(__dirname, 'src'),
			exclude: path.join(__dirname, 'node_modules')
		},
			  { test: /\.scss$/, loader: 'style!css!sass' }
		]
	}
};
