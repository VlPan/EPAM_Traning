const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const webpack = require('webpack'); //to access built-in plugins
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
  entry: path.join(__dirname, 'src', 'index'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
        options:{
         fix: true
        }
      },
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, 'dist')
        ],
        exclude: [
          path.resolve(__dirname, 'node_modules'),
        ],
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader" 
      },
      // Optionally extract less files
      // or any other compile-to-css language
      {
        test: /\.less$/,
        use: ["style-loader","css-loader", "less-loader"]
      },
    ],
  },
  plugins: [
    new UglifyJSPlugin({
      test: /\.js($|\?)/i,
      cache: true,
      sourceMap: true
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    
  ],
  resolve: {
    extensions: ['.json', '.js', '.jsx', '.css']
  },
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 9000,
    hotOnly: true
  }
};