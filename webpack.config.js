const path = require('path');
const webpack =require('webpack');

// const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CleanWebpackPlugin = require('clean-webpack-plugin');

  module.exports = {
    entry: {
      index:'./src/index.js',
      nav:'./src/nav/nav.js',
      denglu:'./src/indexnav/denglu.js',
      zhuce:'./src/indexnav/zhuce.js',
      chanpin:'./src/chanpin/chanpin.js'
    },
    devtool: 'inline-source-map',
    plugins: [
      // new CleanWebpackPlugin(['public']),
      // new HtmlWebpackPlugin({
      //   title: '诸葛io',
      //   inject: false,
      //   template:require('html-webpack-template'),
      //   appMountId:'eg'
      // })
    ],
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, './public')
    },
      devServer: {
        contentBase:'./public'
      },
      module: {
      rules: [
        {
            test:/\.js$/,
            loader:"babel-loader",
            exclude:/(node_modules)/,
            query:{
              presets:['react','es2015']
            }
          },
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader'
          ]
        },
        {
          test: /\.(png|svg|jpg|gif)$/,
          use: [
            'file-loader'
          ]
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: [
            'file-loader'
          ]
        },
       {
         test: /\.(csv|tsv)$/,
         use: [
           'csv-loader'
         ]
       },
       {
         test: /\.xml$/,
         use: [
           'xml-loader'
         ]
       }
      ]
    },
      plugins:[
          new webpack.ProvidePlugin({
              $:"jquery",
              "jQuery":"jquery",
              "window.jQuery":"jquery"
          }),
          new webpack.IgnorePlugin(/\.\/jquery-last.js$/)
      ]
  };