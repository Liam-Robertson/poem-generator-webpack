const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const cleanWebpackPlugin = require("clean-webpack-plugin");
 
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.[contentHash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new cleanWebpackPlugin(),
    new HtmlWebpackPlugin('./src/template.html')
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: "[name].[hash].[ext]",
              outputPath: "dist "
            }
          },
        ],
      },
    ],
  },
};
