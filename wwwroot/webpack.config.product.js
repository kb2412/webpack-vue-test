var webpack = require('webpack');
var path = require('path');
var webpackConfig = require('./webpack.config.base.js');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var FaviconsWebpackPlugin = require('favicons-webpack-plugin');
var ImageminPlugin = require('imagemin-webpack-plugin').default;
var entryPlugins = require('./entry-html')();
var apiConfig = require('./apiConfig')('prod');
var wechatApiConfig = require('./wechatApiConfig')('prod');
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');

webpackConfig.output = {
  filename: '[name].[chunkhash].js',
  path: path.resolve(__dirname,'../build'),
  publicPath: 'https://p.xiaoerzuche.com/mobile/'
};

webpackConfig.devtool = 'hidden-source-map';

webpackConfig.plugins = entryPlugins.concat([
  new webpack.optimize.ModuleConcatenationPlugin(),
  new ExtractTextPlugin({
    filename: '[name].[contenthash].css'
  }),
  new UglifyJSPlugin({
    mangle: false,
    sourceMap: 'hidden-source-map'
  }),
  new webpack.optimize.CommonsChunkPlugin({
    names: ['vendor','manifest']
  }),
  new webpack.DefinePlugin(Object.assign(apiConfig,wechatApiConfig,{
    'process.env': {
      NODE_ENV: '"production"'
    },
  })),
  new FaviconsWebpackPlugin({
    logo: path.resolve(__dirname,'../src/images/favicon.png'),
    background: '#fff',
    title: '小二租车',
    icons: {
      android: true,
      appleIcon: true,
      appleStartup: true,
      coast: false,
      favicons: true,
      firefox: true,
      opengraph: false,
      twitter: false,
      yandex: false,
      windows: true
    }
  }),
  new ImageminPlugin({
    disable: false,
    optipng: {
      optimizationLevel: 3
    },
    gifsicle: {
      optimizationLevel: 1
    },
    jpegtran: {
      progressive: true
    },
    svgo: {},
    pngquant: null,
    plugins: []
  })
]);

module.exports = webpackConfig;