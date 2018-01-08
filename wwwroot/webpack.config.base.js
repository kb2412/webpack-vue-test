var path = require('path');
var projectRoot = path.resolve(__dirname, '../');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname,'../src'),
  entry: {
    "app": "./scripts/pages/app",
    "vendor": [
      "script-loader!plugins/modernizr/modernizr",
      "normalize.css",
      "plugins/unsemantic/assets/stylesheets/unsemantic-grid-responsive-no-ie7.css",
      "fastclick",
      "moment",
      "swiper",
      "url",
      "vue",
      "vue-resource",
      "vue-router",
      "vuex",
      "script-loader!plugins/weixin-js-sdk/jweixin-1.2.0",
      'raven-js',
      'raven-js/plugins/vue',
      'md5',
      'pinyin/lib/web-pinyin',
      'script-loader!plugins/plupload-2.1.8/js/plupload.full.min.js',
      'script-loader!plugins/qiniu-js-sdk/src/qiniu.min.js'
    ]
  },
  module: {
    rules: [{
      test: /\.js/,
      loader: 'jshint-loader',
      enforce: 'pre',
      include: [path.resolve(__dirname,'../src/scripts'), path.resolve(__dirname, '../src/views')],
      exclude: [path.resolve(__dirname,'../src/scripts/utils/track.js')]
    },{
      test: /\.vue$/,
      loader: 'vue-loader',
      options: {
        loaders: {
          css: ExtractTextPlugin.extract({
            use: 'css-loader',
            fallback: 'vue-style-loader'
          }),
          sass: ExtractTextPlugin.extract({
            use: ['css-loader','sass-loader'],
            fallback: 'vue-style-loader'
          })
        }
      }
    },{
      test: /\.css$/,
      include: projectRoot,
      exclude: path.resolve(projectRoot, 'src/stylesheets'),
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: 'css-loader'
      })
    },{
      test: /\.css$/,
      include: path.resolve(projectRoot, 'src/stylesheets'),
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader','postcss-loader']
      })
    },{
      test: /(\.scss)|(\.sass)$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader','postcss-loader','sass-loader']
      })
    },{
      test: /\.(woff|ttf|eot|svg|png|jpg|jpeg|gif|webp)/,
      exclude: [path.resolve(projectRoot, 'src/plugins/icomoon'),path.resolve(projectRoot, 'src/images/svg-icons')],
      loader: 'file-loader'
    },{
      test: /\.js$/,
      include: [path.resolve(projectRoot,'src/scripts'),path.resolve(projectRoot, 'node_modules/pinyin')],
      loader: 'babel-loader'
    }],
  },

  resolve:{
    modules: [
      path.resolve(__dirname,'../src'),
      'node_modules',
      'bower_components'
    ],
    alias: {
      'vue$': 'vue/dist/vue.common.js',
      'stylesheets': path.resolve(__dirname,'../src/stylesheets'),
      'images': path.resolve(__dirname,'../src/images'),
      'plugins': path.resolve(__dirname,'../src/plugins'),
      'components': path.resolve(__dirname,'../src/components'),
      'scripts': path.resolve(__dirname,'../src/scripts')
    }
  }
}