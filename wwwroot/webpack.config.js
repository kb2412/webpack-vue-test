const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

let resolve = (dir) =>
  path.join(__dirname, '..', dir)

module.exports = {
  entry: {
    'app': './scripts/pages/app',
    //公共的库和框架的代码，公共的样式
    'vendor': [
      'plugins/jQuery/dist/jquery.min.js',
      'vue',
      'vue-router',
      'styles/common/default.css',
      'styles/common/scrmGlobal.css',
      'jquery',
      'slimscroll',
      'scripts/common/header.js'
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        include: path.resolve(__dirname, 'scripts'),
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: "latest"
            }
          },
          'eslint-loader'
        ]
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: (loader) => [
                  require('autoprefixer')({
                    browsers: ['last 5 versions']
                  })
                ]
              }
            }
          ]
        })
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                plugins: (loader) => [
                  require('autoprefixer')({
                    browsers: ['last 5 versions']
                  })
                ]
              }
            },
            'less-loader',
          ]
        })
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                plugins: (loader) => [
                  require('autoprefixer')({
                    browsers: ['last 5 versions']
                  })
                ]
              }
            },
            'sass-loader',
          ]
        })
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: 'images/[name][hash:7].[ext]'
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      'plugins': path.resolve(__dirname+'/plugins'),
      'scripts': path.resolve(__dirname+'/scripts'),
      'styles': path.resolve(__dirname+'/styles'),
      'views': path.resolve(__dirname+'/views'),
      'components': path.resolve(__dirname+'/components'),
      '@': __dirname,
      'jquery': __dirname+'/plugins/jQuery/dist/jquery.min.js',
      'slimscroll': __dirname+'/plugins/jquery-slimscroll/jquery.slimscroll.min.js'
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      filename: 'index.html',
      inject: true,
      favicon: path.resolve('favicon.ico'),
      minify: {
        removeComments: true,
        collapseWhitespace: true
      },
      chunksSortMode: 'dependency'
    }),
    new ExtractTextPlugin({
      filename: '[name].[contenthash].css'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ],
  devServer: {
    port: 1024,
    inline: true
  }
}
