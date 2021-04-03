var path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {

  mode: 'development',
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ['ts-loader'],
      },
    ],
  },

  plugins: [
    new CopyPlugin({
      patterns: [
        { from: './node_modules/@webcomponents/webcomponentsjs/webcomponents-loader.js', to: 'libs' },
        { from: 'src/css', to: 'css/' },
      ],
    }),
  ],
};