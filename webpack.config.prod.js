const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const base = require("./webpack.config.base.js");

module.exports = {
  ...base,
  mode: "production",
  plugins: [
    ...base.plugins,
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].[contenthash].css",
      chunkFilename: "[id].[contenthash].css"
    })
  ],
  module: {
    rules: [
      ...base.module.rules,
      {
        test: /\.css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "../"
            }
          },
          "css-loader"
        ]
        // use: ["style-loader", "css-loader"]
        // 用css-loader处理文件，把文件的内容读到js里面，style-loader，把css-loader读到的东西变成style标签放到header里
      }
    ]
  }
};

// {
//   test: /\.css$/,
//   use: [
//     {
//       loader: MiniCssExtractPlugin.loader,
//       options: {
//         // you can specify a publicPath here
//         // by default it uses publicPath in webpackOptions.output
//         publicPath: '../',
//         hmr: process.env.NODE_ENV === 'development',
//       },
//     },
//     'css-loader',
//   ],
// },
