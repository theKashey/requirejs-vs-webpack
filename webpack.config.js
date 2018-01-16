/* eslint-disable */
const path = require('path')
const webpack = require('webpack')
//const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: ['./www/app/main.js'],
  output: {
    path: path.join(__dirname, 'www-packed'),
    filename: 'bundle.js',
  },
  resolve: {
    modules: [
      path.join(__dirname, 'www/lib'), // baseUrl
    ],
    alias: {
      app: path.join(__dirname, 'www/app'),
      generated: path.join(__dirname, 'www/generated'),
    }
  },
  //plugins: [new HtmlWebpackPlugin(), new webpack.NamedModulesPlugin()],
}
