const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack-Demo",
      template: "./src/assets/index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(png|jpg|jpeg|svg|gif)/i,
        use: ["file-loader"],
      },
    ],
  },
};
