var path = require('path')
var webpack = require('webpack')

process.env.NODE_ENV = 'development'
process.env.BABEL_ENV = 'development'

module.exports = {
  devtool: 'eval',
  cache: true,
  entry: ['webpack-hot-middleware/client', './src/index'],

  /*
  externals: {
  	'react':'VendorLib.React',
  	'react-dom': 'VendorLib.ReactDom',
  	'react-redux' : 'VendorLib.ReactRedux',
  	'react-router': 'VendorLib.ReactRouter',
  	'redux': 'VendorLib.Redux',
  	'redux-router': 'VendorLib.ReduxRouter',
  	'redux-thunk': 'VendorLib.ReduxThunk',
  	'history': 'VendorLib.History',
  	//'react-transform-hmr': 'VendorLib.ReactTransformHmr',
  	//'react-transform-catch-errors': 'VendorLib.ReactTransformCatchErrors',
  	'./sass/Site.scss' : 'VendorLib.Stylez'
  },
  */

  // externals: [/^[^.|/]/],
  output: {
    path: path.join(__dirname, 'wwwroot/js'),
    filename: 'app.js',
    publicPath: '/js/', // Don't change this dude - breaks hot-reloading
    pathinfo: true,
    library: 'app',
    libraryTarget: 'var'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
      }
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'src'),
        exclude: path.join(__dirname, 'node_modules')
      },
      { test: /\.scss$/, loader: 'style!css!sass' }
    ]
  }
}
