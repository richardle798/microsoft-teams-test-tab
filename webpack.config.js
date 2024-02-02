const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.ts',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Teams Test Tab'
    }),
    new HtmlWebpackPlugin({
      title: 'Auth Start Page',
      filename: 'auth_start.html',
      template: 'src/auth_start.ejs'
    }),
    new HtmlWebpackPlugin({
      title: 'Auth End Page',
      filename: 'auth_end.html',
      template: 'src/auth_end.ejs'
    }),
    new HtmlWebpackPlugin({
      title: 'Page 1',
      filename: 'page1.html',
      template: 'src/page1.ejs'
    }),
    new HtmlWebpackPlugin({
      title: 'Page 2',
      filename: 'page2.html',
      template: 'src/page2.ejs'
    })
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },

  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",

  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  output: {
    filename: 'app.[contenthash].js',
    path: path.resolve(__dirname, 'public')
  },
  optimization: {
    minimize: false
  }
};