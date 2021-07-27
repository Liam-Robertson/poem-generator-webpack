const path = require('path');

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
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
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
