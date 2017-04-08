var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

/**
 * Env
 * Get npm lifecycle event to identify the environment
 */
var ENV = process.env.npm_lifecycle_event;
var isTest = (ENV.indexOf('test') > -1); // lifecycle event contains 'test'
var isBuild = (ENV.indexOf('build') > -1); // lifecycle event contains 'build'
var publicPath = '/';

/** Set defaults for config **/
var config = {
  sourcemaps: !isBuild, // sourcemaps default to false when building, default to true o/w
  uglify: isBuild // uglify default to true when building, default to false o/w
};


function getSourcemapOption() {
  if (!config.sourcemaps) {
    return null
  } else if (isTest) {
    // As currently configured, Karma only understands sourcemaps if they're inline
    return 'cheap-inline-source-map';
  } else if (isBuild) {
    return 'source-map';
  } else {
    return 'cheap-source-map'
  }
};

function getPlugins() {
  if (isTest) {
    return [];
  };

  var plugins = [

    new webpack.optimize.CommonsChunkPlugin(
      /* chunkName= */'vendor',
      /* filename= */'vendor.bundle.js'
    ),

    new HtmlWebpackPlugin({
      title: 'Stack Overflow Test',
      template: "index.ejs",
      hash: true,
      publicPath: publicPath
    })

  ];

  if (config.uglify) {
    plugins.push(new webpack.optimize.UglifyJsPlugin({
      sourceMap: config.sourcemaps,
      compress: {warnings: false}
    }));
  };

  return plugins;
};

module.exports = {

  context: __dirname + '/app',

  module: {
    loaders: [
      {test: /\.js$/, loader: 'ng-annotate?add=true&single_quotes=true'},
      {test: /\.html$/, loader: 'ngtemplate?relativeTo=/app/!html'},
      {test: /\.css$/, loader: "style-loader!css-loader" },
      {test: /\.less/, loader: "style-loader!css-loader!less-loader" },
      {test: /\.png$/, loader: "url-loader?limit=100000" },
      {test: /\.jpg$/, loader: "file-loader" },
      {test: /\.woff(2)?(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff" },
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" }
    ]
  },

  devtool: getSourcemapOption(),

  entry: isTest ? {} : {
    app: ['./app.js'],
    vendor: [
      'angular',
      'angular-ui-router',
      'underscore',
      './app.less'
    ]
  },

  output: isTest ? {} : {
    path: __dirname + '/dist',
    filename: '[name].bundle.js',
    sourceMapFilename: '[name].map',
    publicPath: publicPath
  },

  plugins: getPlugins(),

  resolve: {
    root: [
      path.resolve('./app')
    ]
  },

  devServer: {
    contentBase: './dist',
    hot: false,
    historyApiFallback: true
  }
};
