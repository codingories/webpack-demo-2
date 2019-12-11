const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "index.[contenthash].js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "My App1",
      template: "src/assets/index.html"
    })
  ],
  module: {
    rules: []
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"]
      },
      {
        test: /\.styl$/,
        loader: ["style-loader", "css-loader", "stylus-loader"]
      },
      {
        test: /\.less$/,
        loader: ["style-loader", "css-loader", "less-loader"] // 将 Less 编译为 CSS
      },
      {
        test: /\.scss$/i,
        use: [
          "style-loader", // 把js字符串转成style标签
          "css-loader", // 把css转成js字符串
          {
            loader: "sass-loader", // 把sass转成css
            options: {
              implementation: require("dart-sass")
            }
          }
        ]
      }
    ]
  }
};
