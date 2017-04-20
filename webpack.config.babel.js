const SmartBannerPlugin = require('smart-banner-webpack-plugin');
const path = require('path');

const src = path.join(__dirname, 'src');
const pkg = require('./package.json');

module.exports = {
  context: src,
  entry: {
    webslides: './js/full.js'
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'static/js'),
    publicPath: '/static/js/'
  },
  devServer: {
    contentBase: __dirname,
    host: '0.0.0.0'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'babel-loader',
          'eslint-loader',
        ],
        include: src
      }
    ]
  },
  plugins: [
    new SmartBannerPlugin({
      banner: `Name: WebSlides\nVersion: ${pkg.version}\nDate: ${new Date().toISOString().slice(0,10)}\nDescription: ${pkg.description}\nURL: ${pkg.homepage}\nCredits: @jlantunez, @LuisSacristan, @Belelros`,
      raw: false,
      entryOnly: true
    })
  ],
};
